import React from 'react';
import { style, firstColumn } from './style';
import { useUserContext } from '../../context/context';
import { useGetUserReactQuery } from "../../hooks/hooks";

export function Company() {
  const { userId } = useUserContext();
  const { dataSWR, error, loading } = useGetUserReactQuery(userId.id);

  return (
    <div
      style={{
        ...style,
        borderBottom: '1px dashed black',
      }}
    >
      <div
        style={firstColumn}
      >Company</div>
      {(!error && !loading) && (
        <div>{dataSWR?.data[0]?.company?.name}</div>
      )}
    </div>
  )
}