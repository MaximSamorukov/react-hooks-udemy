import React, { useReducer } from "react";
import Wrapper from "./wrapper";

function Component620 () {
  const [state, dispatch] = useReducer((state) => !state, false);
  const btnLabel = state ? 'ON' : 'OFF';
  return (
    <Wrapper>
      <span>useToggle 2.0</span>
      <button
        onClick={() => dispatch(state)}
      >
        {btnLabel}
      </button>
    </Wrapper>
  )
}

export default Component620;