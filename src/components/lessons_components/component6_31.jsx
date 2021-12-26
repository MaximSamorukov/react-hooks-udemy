import React, { useCallback, useState, useEffect, useRef, memo, useMemo } from "react";
import Wrapper from "./wrapper";
import { useElementSize, useTimeout, useEventListener } from '../../hooks/hooks';
import uid from 'uniqid';

const Item = memo(({ hited, style, handler }) => {
  return (
    <div
      onMouseEnter={handler(style.id)}
      style={{
        ...style,
        backgroundColor: hited ? 'green' : 'red',
      }}
    ></div>
  )
});

function Component631 () {
  const containerRefID = useRef();
  const [targetedItems, setTargetedItems] = useState([]);
  const [collection , setCollection] = useState([]);
  const { width, height } = useElementSize(containerRefID);

  const MAX_SIZE = 20;
  const MIN_SIZE = MAX_SIZE;
  const style = () => ({
    id:  uid(),
    position: 'absolute',
    top: Math.ceil(Math.random() * (height - MAX_SIZE) - MIN_SIZE / 2),
    left: Math.ceil(Math.random() * (width - MAX_SIZE) - MIN_SIZE / 2),
    width: Math.ceil(Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE),
    height: Math.ceil(Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE),
    backgroundColor: 'red',
  });

  const onMouseEnterHandler = (id) => () => {
    setTargetedItems((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id];
      } else {
        return prev;
      }
    })
  }


  const stopGame = useCallback(() => {
    alert(`You've hitted ${targetedItems.length} items`);
    setTargetedItems([]);
    setCollection([]);
  }, [targetedItems]);
  const { start } = useTimeout(stopGame, 4000);

  const startGame = useCallback(() => {
    setCollection([]);
    const items = Array.from({ length: 20 }).map((i) => style());
    setCollection(items);
    start();
  }, [start]);

  return (
    <Wrapper>
      <div>
        <span>
        useTimeout
        </span>
        <span>
          <button onClick={() => startGame()}>START</button>
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
          <Item key={item?.id} hited={targetedItems?.includes(item?.id)} style={item} handler={onMouseEnterHandler} />
        )
      })}
      </div>
    </Wrapper>
  );
}

export default Component631;