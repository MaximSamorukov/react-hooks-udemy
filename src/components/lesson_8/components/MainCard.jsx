import React from "react";
import { useUserContext } from '../context/context';

export function UserCard() {
  const { id } = useUserContext();
  return (
    <div>
      <p>Card</p>
      <p>{`id: ${id || ''}`}</p>
    </div>
  )
}
