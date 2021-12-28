import React from "react";
import { useUserContext, useUsersListContext } from '../context/context';

export function UserCard() {
  const { id } = useUserContext();
  const { listId } = useUsersListContext();
  return (
    <div>
      <p>Card</p>
      <p>{`User id: ${id || ''}`}</p>
      <p>{`List id: ${listId || ''}`}</p>
    </div>
  )
}
