import React, { useState, useLayoutEffect } from "react";

function useCounter(initialValue = 0, delta = 1) {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount(prev => prev + delta);
  }
  const decrement = () => {
    setCount(prev => prev - delta);
  }
  return [
    count,
    increment,
    decrement,
  ];
}

function useMargedState(initialState) {
  const [state, setState] = useState(initialState);
  const updateState = (change) => {
    setState(prev => ({
      ...prev,
      ...change,
    }));
  }

  return [
    state,
    updateState
  ];
}

function useCharacterPosition(step, x, y) {
  const [top, setTop] = useState(x);
  const [left, setLeft] = useState(y);
  useLayoutEffect(() => {
    const keydownHandler = ({key}) => {
      const options = {
        ArrowUp: () => setTop((prev) => prev - step),
        ArrowDown: () => setTop((prev) => prev + step),
        ArrowRight: () => setLeft((prev) => prev + step),
        ArrowLeft: () => setLeft((prev) => prev - step),
      };
      if (Object.keys(options).includes(key)) {
        options[key]();
      }
    }
    document.addEventListener('keydown', keydownHandler);
    return (() => {
      document.removeEventListener('keydown', keydownHandler);
    });
  },[step, x, y]);
  return [ top, left ];
}

export { useCounter, useMargedState, useCharacterPosition };