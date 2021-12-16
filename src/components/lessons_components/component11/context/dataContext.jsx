import { Context, createContext, useContext, useState, useMemo } from "react";

const green = {
  header: 'green header',
  footer: 'green footer',
  left: 'green left',
  main: 'green main',
  right: 'green right',
};

const red = {
  header: 'red header',
  footer: 'red footer',
  left: 'red left',
  main: 'red main',
  right: 'red right',
};

const blue = {
  header: 'blue header',
  footer: 'blue footer',
  left: 'blue left',
  main: 'blue main',
  right: 'blue right',
};

export const m = {
  green,
  blue,
  red,
}

const MenuContext = createContext();

export function useSetMenu() {
  const value = useContext(MenuContext);

  if (!value) {
    throw new Error('The component is not within Menu Provider');
  }
  return value;
};

export function MenuProvider(props) {
  const [menu, setMenu] = useState(m.green);

  const value = useMemo(() => [menu, setMenu], [menu]);

  return <MenuContext.Provider value={value} {...props} />
}