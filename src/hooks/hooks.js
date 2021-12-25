import React, { useState, useLayoutEffect, useRef, useEffect, useCallback } from "react";

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

function useEventListener(eventName, eventHandler, target = window) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = eventHandler;
  }, [eventHandler]);

  useEffect(() => {
    const isSupported = target && target.addEventListener;
    if (!isSupported) {
      throw new Error('No method AddEventListener on target');
    }

    const eventListener = (event) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    }

    target.addEventListener(eventName, eventListener);

    return () => {
      target.removeEventListener(eventName, eventListener);
    }

  }, [target, eventName]);

}

function useWhatCauseRender(name, props) {
  const refProps = useRef({});
  useEffect(() => {
    const oldKeys = Object.keys(refProps.current);
    const newKeys = Object.keys(props);
    const keys = new Set([...oldKeys, ...newKeys]);
    const results = [];
    keys.forEach((key) => {
      results.push({
      key,
      from: refProps.current[key],
      to: props[key],
      });
    });
    console.log(`Component ${name} renders because of`);
    results.forEach((result) => {
      if (result.from !== result.to) {
        console.log(`${result.key}: from: ${result.from} to: ${result.to}`);
      }
    })
    refProps.current = props;
  });
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    }
  }, [value, delay]);
  return debouncedValue;
}

function useThrottle(value, period) {
  const [throttledValue, setThrottledValue] = useState(value);
  const valueRef = useRef(value);
  useEffect(() => {
    valueRef.current = value
  }, [value]);
  useEffect(() => {
    const interval = setInterval(() => {
      setThrottledValue(valueRef.current);
    }, period);
    return () => {
      clearInterval(interval);
    }
  }, []);
  return throttledValue;
}

function isFunction (item) {
  const result = typeof item === 'function';
  return result;
}

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
      const value = isFunction(initialValue) ? initialValue() : initialValue;
      window.localStorage.setItem(key, JSON.stringify(value));
      return value;
    }
    catch(error) {
      console.log(error.message);
      return initialValue;
    }
  });

  const setValue = (newValue) => {
    try {
      if (isFunction(newValue)) {
        window.localStorage.setItem(key, JSON.stringify(newValue(storedValue)));
        setStoredValue(newValue(storedValue));
        return;
      }
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
      return;
    } catch(error) {
      console.error(error.message);
    }
  }
  return [storedValue, setValue];
}

const INIT_WINDOW_SIZE = [0, 0];

function useWindowSize() {
  const [size, setSize] = useState(INIT_WINDOW_SIZE);
  useEffect(() => {
    const {innerWidth, innerHeight} = window;
    setSize([innerWidth, innerHeight]);
  }, []);
  useEventListener('resize', useCallback((event) => {
    const {innerWidth, innerHeight} = event.target;
    setSize([innerWidth, innerHeight]);
  }, []))
  return size;
}

export {
  useCounter,
  useMargedState,
  useCharacterPosition,
  useEventListener,
  useWhatCauseRender,
  useDebounce,
  useThrottle,
  useLocalStorage,
  useWindowSize,
};