import React from 'react';
import { style, firstColumn } from './style';
import { useUserContext } from '../../context/context';
import { useGetUserSWR } from "../../hooks/hooks";

export function Name() {
  const { userId } = useUserContext();
  const { dataSWR, error, loading } = useGetUserSWR(userId.id);

  return (
    <div
      style={style}
    >
      <div
        style={firstColumn}
      >Name</div>
      {(!error && !loading) && (
        <div>{dataSWR?.data[0]?.name}</div>
      )}
    </div>
  )
}

