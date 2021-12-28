import React, { createContext, useContext } from "react";
import { useUser, useUsersList } from "../hooks/hooks";

const UserContext = createContext();
const ListContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function useUsersListContext() {
  return useContext(ListContext);
}

export function UserContextProvider({ userId, children }) {
  const user = useUser(userId);
  const list = useUsersList();
  return (
    <ListContext.Provider value={list}>
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>
    </ListContext.Provider>
  )
}