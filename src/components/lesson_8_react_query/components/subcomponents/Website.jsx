import React from 'react';
import { style, firstColumn } from './style';
import { useUserContext } from '../../context/context';
import { useGetUserReactQuery } from "../../hooks/hooks";

export function Website() {
  const { userId } = useUserContext();
  const { dataReactQuery, error, loading } = useGetUserReactQuery(userId.id);

  return (
    <div
      style={style}
    >
      <div
        style={firstColumn}
      >Website</div>
      {(!error && !loading) && (
        <div>{dataReactQuery?.data[0]?.website}</div>
      )}
    </div>
  )
}

