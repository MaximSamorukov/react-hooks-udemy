import React, { useEffect } from "react";
import Wrapper from "./wrapper";
import { useCounter } from '../../hooks/hooks';

function updateClicksCount(clicksCount) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        clicksCount,
      })
    }, 1000)
  })
}

function Component5 () {
  const [count, increment, decrement ] = useCounter(0, 2);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    const update = async() => {
      const response = await updateClicksCount(count);
      //console.log(response);
    }
    update();
  }, [count]);
  return (
    <Wrapper>
      <div>Lesson 5 useEffect</div>
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

export default Component5;