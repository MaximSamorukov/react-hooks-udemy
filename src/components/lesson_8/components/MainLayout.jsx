import React from "react";
import { UserContextProvider } from "../context/context";
import { UsersList } from "./MainList";
import { UserCard } from "./MainCard";

const MainComponent = ({ children }) => {
  return (
    <UserContextProvider>
      <UsersList />
      <UserCard />
    </UserContextProvider>
  );
}

export default MainComponent;