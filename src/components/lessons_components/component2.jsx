import React, { useState } from "react";
import Wrapper from "./wrapper";
import { useCounter } from '../../hooks/hooks';

function Component2 () {
  const [count, increment, decrement ] = useCounter(0, 2);
  return (
    <Wrapper>
      <div>Lesson 2</div>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => increment()}>Up</button>
      </div>
      <div>
        <button onClick={() => decrement()}>Down</button>
      </div>
    </Wrapper>
  )
}

export default Component2;