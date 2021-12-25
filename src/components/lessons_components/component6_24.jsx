import React, { useCallback, useState, useEffect, useRef, memo } from "react";
import Wrapper from "./wrapper";
import { useLocalStorage } from '../../hooks/hooks';

function Component624 () {
const [key1, setKey1] = useLocalStorage('key1', 1);
const [key2, setKey2] = useLocalStorage('key2', 2);
const [key3, setKey3] = useLocalStorage('key3', 4);


  return (
    <Wrapper>
      <div>useLocalStorage</div>
      <div>{`Key1 value: ${key1}`}</div>
      <div>{`Key2 value: ${key2}`}</div>
      <div>{`Key3 value: ${key3}`}</div>
      <button onClick={() => setKey1(Number(key1) + 2)}>Sey value + 2</button>
      <button onClick={() => setKey2(Number(key2) + 4)}>Sey value + 4</button>
      <button onClick={() => setKey3(Number(key3) + 8)}>Sey value + 8</button>
      <button onClick={() => {
        setKey1(1);
        setKey2(2);
        setKey3(4);
      }}>Clear</button>

    </Wrapper>
  );
}

export default Component624;