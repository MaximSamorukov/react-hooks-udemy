import React from 'react';
import { style, firstColumn } from './style';
import { useUserContext } from '../../context/context';
import { useGetUserReactQuery } from "../../hooks/hooks";

export function Email() {
  const { userId } = useUserContext();
  const { dataReactQuery, error, loading } = useGetUserReactQuery(userId.id);

  return (
    <div
      style={style}
    >
      <div
        style={firstColumn}
      >Email</div>
      {(!error && !loading) && (
        <div>{dataReactQuery?.data[0]?.email}</div>
      )}
    </div>
  )
}

