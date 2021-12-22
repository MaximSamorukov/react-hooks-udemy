import React, { useCallback, useState, useEffect, useRef, memo } from "react";
import Wrapper from "./wrapper";
import { useDebounce, useEventListener } from '../../hooks/hooks';


function Component623useDebounce () {
  const [origin , setOrigin] = useState({ x: 0, y: 0 });
  const [value, setValue] = useState([]);
  const debValue = useDebounce(origin, 15);
  const keyPressHandler = useCallback((event) => {
    const { clientX, clientY } = event;
    setOrigin({ x: clientX, y: clientY });
  });

  useEffect(() => {
    setValue((prev) => [...prev, {
      x: debValue.x,
      y: debValue.y,
    }]);
  }, [debValue]);
  useEventListener('mousemove', keyPressHandler);
  const style = {
    width: 10,
    height: 10,
    position: 'absolute',
    borderRadius: '50%',
  };

  return (
    <Wrapper>
      <div>useDebounce</div>
      {value.map((i) => (
        <div style={{...style, backgroundColor: 'green', top: `${i.y}px`, left: `${i.x}px` }}></div>
      ))}

    </Wrapper>
  );
}

export default Component623useDebounce;