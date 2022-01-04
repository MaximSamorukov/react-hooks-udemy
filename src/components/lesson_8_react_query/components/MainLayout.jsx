import React from "react";
import { UserContextProvider } from "../context/context";
import { UsersList } from "./MainList";
import { UserCard } from "./MainCard";
import { Controlls } from 'components/lesson_8_react_query/components/MainControlls';

const MainComponentQuery = ({ children }) => {
  return (
    <UserContextProvider>
      <UserCard />
      <Controlls />
      {/* <UsersList /> */}
    </UserContextProvider>
  );
}

export default MainComponentQuery;