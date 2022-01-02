import React, { useEffect } from "react";
import { useUserContext, useUsersListContext } from '../context/context';
import { TodoItem } from "./TodoItem";

export function UsersList() {
  const { userId } = useUserContext();
  const { data, setId, loading } = useUsersListContext()

  useEffect(() => {
    if(userId) {
      setId(userId?.id)
    }
  }, [userId, setId])

  console.log(userId);
  console.log(data);

  return (
    <div
      style={{
        border: '3px dashed black',
        width: '100%',
        height: 'auto',
        minHeight: '200px',
        padding: '3px',
        boxSizing: 'border-box',
        marginTop: '3px',
      }}
    >
      {loading && <h3>Downloading...</h3>}
      {data?.length && data.map(({ id, title, completed }) => (
        <TodoItem id={id} title={title} completed={completed} />
      ))}
    </div>
  )
}
