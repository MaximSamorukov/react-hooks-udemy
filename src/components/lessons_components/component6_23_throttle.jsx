import React, { useCallback, useState, useEffect, useRef, memo } from "react";
import Wrapper from "./wrapper";
import { useThrottle, useEventListener } from "../../hooks/hooks";

const SIZE = 10;

const Point = memo(({ coords }) => {
  return (
    <div style={{
      position: 'absolute',
      width: SIZE,
      height: SIZE,
      top: coords.y,
      left: coords.x,
      backgroundColor: '#33888F',
    }} />
  )
})

function Component623useThrottle () {
  const [throttledValues, setThrottledValues] = useState([]);
  const [value, setValue] = useState({});
  const mouseMoveHandler = useCallback(({ clientX, clientY }) => {
    setValue({ x: clientX, y: clientY });
  }, []);
  const throttValue = useThrottle(value, 500);

  useEffect(() => {
    setThrottledValues((prev) => [...prev, throttValue])
  }, [throttValue]);
  //useEventListener('mousemove', mouseMoveHandler);

  return (
    <Wrapper>
      <div>useThrottle</div>
      {throttledValues.map((i) => (
        <Point coords={i} />
      ))}

    </Wrapper>
  );
}

export default Component623useThrottle;