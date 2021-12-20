import React, { useCallback, useState } from "react";
import Wrapper from "./wrapper";
import { useEventListener } from "../../hooks/hooks";

function Component621 () {
  const [coords, setCoords] = useState([])

  const onMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    const newPoint = {
      x: clientX,
      y: clientY,
    };
    setCoords([...coords, newPoint]);
  }, [coords]);

  const onKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      setCoords([]);
    }
  }, []);
  useEventListener('mousemove', onMouseMove);
  useEventListener('keydown', onKeyDown);
  return (
    <Wrapper>
      <span>useEventListener</span>
      {coords.map((item, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: item.x,
            top: item.y,
            borderRadius: '50%',
            backgroundColor: 'red',
            width: 5,
            height: 5,
          }}
        />
      ))}
    </Wrapper>
  )
}

export default Component621;