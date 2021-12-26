import React, { useCallback, useState, useEffect, useRef, memo, useMemo } from "react";
import Wrapper from "./wrapper";
import { useElementSize, useInterval } from '../../hooks/hooks';
import uid from 'uniqid';

const Item = memo(({ style }) => {
  return (
    <div style={style}></div>
  )
});

function Component630 () {
  const containerRefID = useRef();
  const [collection , setCollection] = useState([]);
  const { width, height } = useElementSize(containerRefID);

  const MAX_SIZE = 16;
  const MIN_SIZE = MAX_SIZE / 4;
  const COLORS = useMemo(() => ['red', 'blue', 'orange', 'green', 'cyan']);
  const addItem = useCallback(() => {
    const style = {
      id:  uid(),
      position: 'absolute',
      top: Math.ceil(Math.random() * (height - MAX_SIZE) - MIN_SIZE / 2),
      left: Math.ceil(Math.random() * (width - MAX_SIZE) - MIN_SIZE / 2),
      width: Math.ceil(Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE),
      height: Math.ceil(Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE),
      backgroundColor: COLORS[Math.ceil(Math.random() * Math.ceil(COLORS.length - 1))],
      animation: `spin ${Math.ceil(Math.random() * 20)}s linear infinite`,
    };
    setCollection((prev) => [...prev, style]);
  }, [COLORS, MAX_SIZE, MIN_SIZE, height, width]);

  const { start, stop } = useInterval(addItem, 400);

  return (
    <Wrapper>
      <div>
        <span>
        useInterval
        </span>
        <span>
          <button onClick={() => start()}>START</button>
        </span>
        <span>
          <button onClick={() => stop()}>STOP</button>
        </span>
        <span>
          <button onClick={() => setCollection([])}>CLEAN</button>
        </span>
      </div>
      <div ref={containerRefID} style={{
        width: 'fit-container',
        height: '83%',
        margin: 'auto',
        border: '2px dashed grey',
        position: 'relative',
      }}>

      {collection.map((item, index) => {
        return (
          <Item key={item?.id} style={item} />
        )
      })}
      </div>
    </Wrapper>
  );
}

export default Component630;