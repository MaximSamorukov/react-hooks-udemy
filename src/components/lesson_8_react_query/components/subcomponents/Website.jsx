import React from 'react';
import { style, firstColumn } from './style';
import { useUserContext } from '../../context/context';
import { useGetUserSWR } from "../../hooks/hooks";

export function Website() {
  const { userId } = useUserContext();
  const { dataSWR, error, loading } = useGetUserSWR(userId.id);

  return (
    <div
      style={style}
    >
      <div
        style={firstColumn}
      >Website</div>
      {(!error && !loading) && (
        <div>{dataSWR?.data[0]?.website}</div>
      )}
    </div>
  )
}

