import React, { useState, useEffect, useRef, useMemo } from 'react';
import mapboxgl from 'mapbox-gl';
import { styleAddress } from './style';
import { useUserContext } from '../../context/context';
import { useGetUserReactQuery } from "../../hooks/hooks";
mapboxgl.accessToken = 'pk.eyJ1IjoibWFrc2ltc2Ftb3J1a292IiwiYSI6ImNreTBjM250djAwODQydXF0aDZmbjM1dXMifQ.Yav-_jmEwKRxWpfWpsDEGg';

export function Address() {
  const [latValue, setLat] = useState(0);
  const [lngValue, setLng] = useState(0);
  const [zoom] = useState(2);
  const { userId } = useUserContext();
  const { dataReactQuery, error, loading } = useGetUserReactQuery(userId.id);

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
      center: {lon: lngValue, lat: latValue},
      zoom: zoom,
    });
  });

  useEffect(() => {
    map.current.setCenter({lng: lngValue, lat:latValue});
    marker
      .setLngLat({lng: lngValue, lat:latValue})
      .addTo(map.current);
    return () => {
      marker.remove();
    };
  }, [latValue, lngValue, marker]);

  useEffect(() => {
    if (!error && !loading) {
      const values = dataReactQuery?.data[0]?.address?.geo;
      const { lat = 0, lng = 0 } = values || {};
      setLat(Number(lat) || 0);
      setLng(Number(lng) || 0);
    }
  }, [loading, error, dataReactQuery]);

  return (
    <div
      style={styleAddress}
    >
      <div
        ref={mapContainer}
        style={{
          width: '100%',
          maxWidth: '100%',
        }}
      />
    </div>
  )
}