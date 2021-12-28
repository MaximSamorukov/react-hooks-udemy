import { useState } from "react";

export function useUser() {
  const [id, setId] = useState(0);
  const user = {
    id,
    getUser: () => console.log('get user'),
    setId,
  }
  return user;
}