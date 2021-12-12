import React, { useRef, useState, useCallback } from "react";
import Wrapper from "./wrapper";

function useUpdateEffect(callback) {
  const count = useRef(0)
  if (count.current === 5) {
    callback();
  }
  count.current += 1;
}

function Component7 () {
  const [count, setCount] = useState(0);
  const refContainer = useRef();

  const makeFocus = useCallback(() => {
    refContainer.current.focus();
    console.log('here i"am!!!')
  }, [refContainer]);

  useUpdateEffect(makeFocus);

  return (
    <Wrapper>
      <div>Lesson 7 useRef</div>
      <div>Renders: {count}</div>
      <input ref={refContainer} defaultValue="20-th render" readOnly={true} />
      <button onClick={() => setCount(count + 1)}>Render</button>
    </Wrapper>
  )
}

export default Component7;