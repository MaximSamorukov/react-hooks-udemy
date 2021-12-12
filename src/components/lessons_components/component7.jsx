import React, { useRef, useState, useCallback } from "react";
import Wrapper from "./wrapper";

function useUpdateEffect(callback) {
  callback();
}

function Component7 () {
  const [count, setCount] = useState(0);
  const refContainer = useRef();

const makeFocus = useCallback(() => {
  refContainer.current.focus();
}, [refContainer]);

const callback = useCallback(() => {
  if (count === 5) {
    makeFocus();
  }
}, [count, makeFocus]);

useUpdateEffect(callback);

  return (
    <Wrapper>
      <div>Lesson 7 useRef</div>
      <div>Renders: {count}</div>
      <input ref={refContainer} value="20-th render" />
      <button onClick={() => setCount(count + 1)}>Render</button>
    </Wrapper>
  )
}

export default Component7;