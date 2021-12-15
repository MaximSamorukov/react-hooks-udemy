import { createContext, useContext, useMemo, useState } from "react";

const green = {
  fontFamily: "'Times New Roman', Times, serif",
  fontSize: '12px',
  color: 'green',
  fontWeight: 'normal',
};

const red = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: '14px',
  color: 'red',
  fontWeight: 'italic',
};

const blue = {
  fontFamily: "'Lucida Console', 'Courier New', monospace",
  fontSize: '16px',
  color: 'blue',
  fontWeight: 'bold',
};

export const Theme = {
  green,
  red,
  blue,
};


const ThemeContext = createContext();

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
}

export function ThemeProvider(props) {
  const [theme, setTheme] = useState(Theme.green);

  const value = useMemo(() => [theme, setTheme], [theme]);
  return <ThemeContext.Provider value={value} {...props} />
}