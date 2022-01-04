import React from 'react';
import { style, firstColumn } from './style';
import { useUserContext } from '../../context/context';
import { useGetUserSWR } from "../../hooks/hooks";

export function Phone() {
  const { userId } = useUserContext();
  const { dataSWR, error, loading } = useGetUserSWR(userId.id);

  return (
    <div
      style={style}
    >
      <div
        style={firstColumn}
      >Phone</div>
      {(!error && !loading) && (
        <div>{dataSWR?.data[0]?.phone}</div>
      )}
    </div>
  )
}

