import React, { useState, useCallback, memo, useMemo } from "react";
import Wrapper from "./wrapper";
import Component10Item from './component10_item';


function Component10 () {
  const [, setState] = useState();
  const arr = [
    {
      id: 1,
      name: 'Ketty',
    },
    {
      id: 2,
      name: 'Perry',
    },
    {
      id: 3,
      name: 'Terry',
    },
  ];
  const onClick = useCallback((id) => {
    console.log('clicked' + ' ' + id);
  }, []);
  console.log('Main Component render');
  const rerender = () => setState({});
  return (
    <Wrapper>
      <p>useCallback & React.memo</p>
      {arr.map((i, index) => <Component10Item key={i.id} name={i.name} id={i.id} onClick={onClick} />)}
      <button onClick={rerender}>Rerender</button>
    </Wrapper>
  )
}

export default Component10;