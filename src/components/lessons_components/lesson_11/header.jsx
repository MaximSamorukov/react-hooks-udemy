import React from "react";
import { useTheme } from './context/themeContext';
import { useSetMenu } from "./context/dataContext";

export function Header() {
  const [theme] = useTheme();
  const [menu] = useSetMenu();
  return (
    <div style={{ height: '10px' }}>
      <p style={{ ...theme, textAlign: 'center' }}>{menu.header}</p>
    </div>
  );
}