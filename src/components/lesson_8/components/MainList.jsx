import React, { useEffect } from "react";
import { useUserContext } from '../context/context';

export function UsersList() {
  const { id, getUser, setId } = useUserContext();
  useEffect(() => {
    console.log('id: ', id);
  }, [id]);
  return (
    <div>
      <p>List</p>
      <button onClick={() => {
        setId((i) => i + 5);
        getUser();
      }}>Change User</button>
    </div>
  )
}
