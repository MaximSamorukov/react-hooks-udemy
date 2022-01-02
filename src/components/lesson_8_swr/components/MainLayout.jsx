import React from "react";
import { UserContextProvider } from "../context/context";
import { UsersList } from "./MainList";
import { UserCard } from "./MainCard";
import { Controlls } from './MainControlls';

const MainComponentSWR = ({ children }) => {
  return (
    <UserContextProvider>
      <UserCard />
      <Controlls />
      <UsersList />
    </UserContextProvider>
  );
}

export default MainComponentSWR;