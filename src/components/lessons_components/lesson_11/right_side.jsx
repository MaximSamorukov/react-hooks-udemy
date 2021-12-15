import React from "react";
import { useTheme } from './context/themeContext';
import { useSetMenu } from "./context/dataContext";

export function RightSide() {
  const [theme] = useTheme();
  const [menu] = useSetMenu();

  return (
    <div style={{ height: '20px' }}>
      <p style={theme}>{menu.right}</p>
    </div>
  );
}