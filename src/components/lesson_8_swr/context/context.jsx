import React, { useEffect, createContext, useContext } from "react";
import { useUsers, useUsersList, useUser } from "../hooks/hooks";

const UsersContext = createContext();
const ListContext = createContext();
const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function useUsersContext() {
  return useContext(UsersContext);
}

export function useUsersListContext() {
  return useContext(ListContext);
}

export function UserContextProvider({ children }) {
  const users = useUsers();
  const list = useUsersList();
  const [ userId, setUserId ] = useUser();

  useEffect(() => {
    if (users.data) {
      setUserId(users.data[0]);
    }
  }, [users.data, setUserId])

  return (
    <ListContext.Provider value={list}>
      <UsersContext.Provider value={users}>
        <UserContext.Provider value={{ userId, setUserId }}>
          {children}
        </UserContext.Provider>
      </UsersContext.Provider>
    </ListContext.Provider>
  )
}