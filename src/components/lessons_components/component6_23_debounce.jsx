import React, { useCallback, useState, useEffect, useRef, memo } from "react";
import Wrapper from "./wrapper";
import { useDebounce, useEventListener } from '../../hooks/hooks';

const Point = memo(({ style, point }) => {
  return (
    <div style={{...style, backgroundColor: 'green', top: `${point.y}px`, left: `${point.x}px` }}></div>
  )
});

function Component623useDebounce () {
  const [origin , setOrigin] = useState({ x: 0, y: 0 });
  const [path, setPath] = useState([]);
  const debValue = useDebounce(origin, 500);
  const keyPressHandler = useCallback((event) => {
    const { clientX, clientY } = event;
    setOrigin({ x: clientX, y: clientY });
  }, []);

  useEffect(() => {
    setPath((prev) => [...prev, {
      x: debValue.x,
      y: debValue.y,
    }]);
  }, [debValue]);
  //useEventListener('mousemove', keyPressHandler);
  const style = {
    width: 10,
    height: 10,
    position: 'absolute',
    borderRadius: '50%',
  };

  return (
    <Wrapper>
      <div>useDebounce</div>
      {path.map((i) => (
        <Point style={style} point={i} />
      ))}

    </Wrapper>
  );
}

export default Component623useDebounce;