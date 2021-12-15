import React from "react";
import { useTheme } from './context/themeContext';
import { useSetMenu } from "./context/dataContext";
import { Theme } from "./context/themeContext";
import { m } from "./context/dataContext";

export function Controller() {
  const [, setTheme] = useTheme();
  const [, setMenu] = useSetMenu();

  return (
    <div style={{ height: '20px' }}>
        <button onClick={() => setTheme(Theme.green)}>Green</button>
        <button onClick={() => setTheme(Theme.red)}>Red</button>
        <button onClick={() => setTheme(Theme.blue)}>Blue</button>
        <button onClick={() => setMenu(m.green)}>Gr menu</button>
        <button onClick={() => setMenu(m.red)}>Rd menu</button>
        <button onClick={() => setMenu(m.blue)}>Bl menu</button>
    </div>
  );
}