import React, { useMemo } from "react";
import Wrapper from "./wrapper";
import { useCharacterPosition } from '../../hooks/hooks';

function Component6 () {
  const [top, left] = useCharacterPosition(10, 0, 0);
  const style = useMemo(() => {
    const object = {
      position: 'relative',
      width: '80px',
      height: '20px',
      top: `${top}px`,
      left: `${left}px`,
      border: '1px solid black',
      backgroundColor: 'red',
    };
    return object;
  }, [top, left]);
  return (
    <Wrapper>
      <div>Lesson 6 useLayoutEffect</div>
      <div style={style}>
        [{top}-{left}]
      </div>
    </Wrapper>
  )
}

export default Component6;