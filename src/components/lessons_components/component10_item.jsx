import React, { useCallback, memo } from "react";

const Component10Item = memo(({ name, id, onClick}) => {
  console.log(`rerendered component with id = ${id}`)
  return (
    <button onClick={() => onClick(id)}>{name}</button>
  );
});

export default Component10Item;