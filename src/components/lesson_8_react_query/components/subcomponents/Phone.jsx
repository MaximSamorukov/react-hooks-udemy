import React from 'react';
import { style, firstColumn } from './style';
import { useUserContext } from '../../context/context';
import { useGetUserReactQuery } from "../../hooks/hooks";

export function Phone() {
  const { userId } = useUserContext();
  const { dataReactQuery, error, loading } = useGetUserReactQuery(userId.id);

  return (
    <div
      style={style}
    >
      <div
        style={firstColumn}
      >Phone</div>
      {(!error && !loading) && (
        <div>{dataReactQuery?.data[0]?.phone}</div>
      )}
    </div>
  )
}

