import React, { useEffect, useState } from "react";
import { useUsersContext, useUserContext } from '../context/context';
import { useGetUserSWR } from "../hooks/hooks";

export function Controlls() {
  const { userId, setUserId } = useUserContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { dataSWR } = useGetUserSWR(userId.id);
  const { data } = useUsersContext();
  console.log('SWR', dataSWR?.data[0]);
  useEffect(() => {
    if (data?.length) {
      const curntId = userId.id;
      const currIndex = data.findIndex((item) => item.id === curntId);
      setCurrentIndex(currIndex);
    }
  }, [userId, data])
  const length = data?.length;
  const setNext = () => {
    const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    setUserId(data[nextIndex]);
  }
  const setPrev = () => {
    const prevIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setUserId(data[prevIndex]);
  }
  return (
    <div
      style={{
        border: '3px dashed black',
        width: '100%',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '25px',
        paddingTop: '3px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          cursor: 'pointer',
        }}
        onClick={() => setPrev()}
      >PREV</div>
      <div
        style={{
          marginLeft: '40px',
          cursor: 'pointer',
        }}
        onClick={() => setNext()}
      >NEXT</div>
    </div>
  )
}
