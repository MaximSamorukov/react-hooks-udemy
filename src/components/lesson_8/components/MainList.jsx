import React, { useEffect } from "react";
import { useUserContext, useUsersListContext } from '../context/context';

export function UsersList() {
  const { id, getUser, setId } = useUserContext();
  const { setListId } = useUsersListContext();

  useEffect(() => {
    console.log('id: ', id);
  }, [id]);
  return (
    <div>
      <p>List</p>
      <button onClick={() => {
        setId((i) => i + 5);
        getUser();
      }}>Change User
      </button>
      <button onClick={() => {
        setListId((i) => i + 7);
      }}>Change List
      </button>
    </div>
  )
}
