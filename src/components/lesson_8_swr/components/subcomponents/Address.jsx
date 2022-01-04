import React, { useState, useEffect, useRef, useMemo } from 'react';
import mapboxgl from 'mapbox-gl';
import { styleAddress } from './style';
import { useUserContext } from '../../context/context';
import { useGetUserSWR } from "../../hooks/hooks";
mapboxgl.accessToken = 'pk.eyJ1IjoibWFrc2ltc2Ftb3J1a292IiwiYSI6ImNreTBjM250djAwODQydXF0aDZmbjM1dXMifQ.Yav-_jmEwKRxWpfWpsDEGg';

const normalizeLng = (value) => {
  if ((value) < -90 || (value) > 90) {
    return value % 90;
  }
  return value;
}
const normalizeLat = (value) => {
  if ((value) < -90 || (value) > 90) {
    return value % 90;
  }
  return value;
}

export function Address() {
  const [latValue, setLat] = useState(0);
  const [lngValue, setLng] = useState(0);
  const [zoom] = useState(2);
  const { userId } = useUserContext();
  const { dataSWR, error, loading } = useGetUserSWR(userId.id);

  const marker = useMemo(() => new mapboxgl.Marker({
    color: "#B8B8B8",
    draggable: false,
    }));

  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: {lng: normalizeLng(lngValue), lat:normalizeLat(latValue)},
      zoom: zoom,
    });
  });

  useEffect(() => {
    map.current.setCenter({lng: normalizeLng(lngValue), lat:normalizeLat(latValue)});
    marker
      .setLngLat({lng: normalizeLng(lngValue), lat:normalizeLat(latValue)})
      .addTo(map.current);
    return () => {
      marker.remove();
    };
  }, [latValue, lngValue, marker]);

  useEffect(() => {
    if (!error && !loading) {
      const values = dataSWR?.data[0]?.address?.geo;
      const { lat = 0, lng = 0 } = values || {};
      setLat(Number(lat) || 0);
      setLng(Number(lng) || 0);
    }
  }, [loading, error, dataSWR]);

  return (
    <div
      style={styleAddress}
    >
      <div
        ref={mapContainer}
        style={{
          width: '100%',
        }}
      />
    </div>
  )
}