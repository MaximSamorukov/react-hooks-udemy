import React, { useState } from "react";
import Wrapper from "./wrapper";
import { useMargedState } from '../../hooks/hooks';

function Component3 () {
  const initialState = {
    rightValue: 10,
    leftValue: 20,
  };
  const [state, updateState] = useMargedState(initialState);

  return (
    <Wrapper>
      <div>Lesson with MergedState Hook</div>
      <div style={{ display: 'flex', justifyContent: 'row' }}>
        <div style={{marginRight: '10px'}}>
          <div>Left value: {state.leftValue}</div>
          <div>
            <button onClick={() => updateState({leftValue: state.leftValue + 1 })}>Up</button>
          </div>
          <div>
            <button onClick={() => updateState({leftValue: state.leftValue - 1 })}>Down</button>
          </div>
        </div>
        <div>
          <div>Right value: {state.rightValue}</div>
          <div>
            <button onClick={() => updateState({rightValue: state.rightValue + 1 })}>Up</button>
          </div>
          <div>
            <button onClick={() => updateState({rightValue: state.rightValue - 1 })}>Down</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Component3;