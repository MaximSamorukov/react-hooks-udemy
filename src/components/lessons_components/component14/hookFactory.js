import { useCallback, useState } from "react";

function createMappedState(mapper) {
  return function (initialValue) {
    const [value, setValue] = useState(mapper(initialValue));
    const setMappedValue = useCallback((newValue) => {
      setValue(mapper(newValue));
    }, []);
    return [value, setMappedValue];
  };
}

const useLowercaseState = createMappedState((value) => value.toLowerCase());
const useUppercaseState = createMappedState((value) => value.toUpperCase());
const useTrimmedState = createMappedState((value) => value.trim());

export {
  useLowercaseState,
  useUppercaseState,
  useTrimmedState,
}
