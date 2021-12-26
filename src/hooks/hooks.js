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

function asyncFunction(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.random() * 100;
      if (number >= 50) {
        resolve(number);
      } else {
        reject('Try one more time...');
      }
    }, timeout);
  });
}

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error',
}

function useAsync(asyncFunc) {
  const [result, setResult] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const run = useCallback(() => {
    if (status === STATUS.PENDING) {
      console.error('Work in progress...');
      return;
    }
    setStatus(STATUS.PENDING);
    asyncFunc()
      .then((result) => {
        setStatus(STATUS.SUCCESS);
        setResult(result);
        setError(null);
      })
      .catch((error) => {
        setStatus(STATUS.ERROR);
        setResult('no result');
        setError(error);
      });
  }, [status, asyncFunc]);
  return { run, result, status, error };
};

function useAnimateText(text, delay) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((prev) => {
        if (prev === text.length - 1) {
          setNumber(0);
          return;
        }
        setNumber(prev + 1);
      });
    }, delay);
    return () => {
      clearInterval(intervalId);
    }
  }, [text, delay]);
  return text.substring(0, number);
}

function usePrevious(state) {
  const currentState = useRef(state);

  useEffect(() => {
    currentState.current = state;
  }, [state]);
  return currentState.current;
}

function useHistory(value) {
  const [values, setValues] = useState([]);

  const deleteLast = () => {
    setValues((prev) => {
      if(prev.length > 1) {
        const array = prev.slice(0 , -1);
        return array;
      }
      return prev;
    });

  }

  useEffect(() => {
    setValues((prev) => [...prev, value]);
  }, [value]);
  return { values, deleteLast };
}

const DEFAULT_SIZE = {
  width: 0,
  height: 0,
};

function useElementSize(element) {
  const [size, setSize] = useState(DEFAULT_SIZE);

  const updateElementSize = useCallback(() => {
    const node = element.current;
    if (node) {
      const { width, height } = node.getBoundingClientRect();
      setSize({
        width: Math.ceil(width),
        height: Math.ceil(height),
      });
    }
  }, [element]);

  useEffect(() => {
    updateElementSize();
  }, [updateElementSize]);

  useEventListener('resize', updateElementSize);


  return size;
}

function useInterval(callback, delay) {
  const callbackRef = useRef(callback);
  const [trigger, setTrigger] = useState({});
  const [status, setStatus] = useState('stop');
  const [intervalHandler, setIntervalHandler] = useState(null);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (callbackRef.current && status === 'in progress') {
        callbackRef.current();
      }
    }, delay);

    setIntervalHandler(interval);

    return () => {
      clearInterval(interval);
    }
  }, [callbackRef, delay, trigger, status]);

  const stop = () => {
    setStatus('stop');
    clearInterval(intervalHandler);
    setIntervalHandler(null);
  };
  const start = () => {
    setStatus('in progress');
    setTrigger({});
  };
  return { start, stop };
}

function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const [status, setStatus] = useState('idle');
  const [trigger, setTrigger] = useState({});
  const [intervalHandler, setIntervalHandler] = useState(null);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIntervalHandler(null);
      if (callbackRef.current && status === 'in process') {
        setStatus('idle');
        callbackRef.current();
      }
    }, delay);

    setIntervalHandler(interval);

    return () => {
      clearInterval(interval);
    }
  }, [delay, trigger]);

  const start = () => {
    setStatus('in process');
    setTrigger({});
  };

  return { status, start };
}

function useMountedRef() {
  const isMounted = useRef(true);
  useEffect(() => {
    const beforeUnmount = () => {
      isMounted.current = false;
    };
    return beforeUnmount;
  }, []);
  return isMounted;
}

function useHovered() {
  const ref = useRef();
  const [ isHovered, setIsHovered ] = useState(false);

  useEffect(() => {
    const node = ref.current;

    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    if (!node) {
      return;
    }
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
    }
    return () => {
      node.removeEventListener('mouseover', handleMouseOver);
      node.removeEventListener('mouseout', handleMouseOut);
    }
  }, [ref]);

  return {
    ref, isHovered,
  }
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
  asyncFunction,
  useAsync,
  useAnimateText,
  usePrevious,
  useHistory,
  useElementSize,
  useInterval,
  useTimeout,
  useMountedRef,
  useHovered,
};