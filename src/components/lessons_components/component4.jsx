import React, { useState } from "react";
import Wrapper from "./wrapper";
import { useMargedState } from '../../hooks/hooks';

const add = ({ valuea: a, valueb: b }) => a + b;
const subtract = ({ valuea: a, valueb: b }) => a - b;
const devide = ({ valuea: a, valueb: b }) => a / b;
const multiply = ({ valuea: a, valueb: b }) => a * b;


function Component4 () {
  const initialState = {
    valuea: 10,
    valueb: 20,
  };
  const [action, setAction] = useState(() => () => null);
  const [sign, setSign] = useState(null);
  const applyAction = (f, s) => () => {
    setSign(s);
    setAction(() => f);
  };
  const [state, updateState] = useMargedState(initialState);
  const onChange = (setter, key) => (value) => setter({ [key]: parseInt(value.target.value || 0)});

  return (
    <Wrapper>
      <div>Lesson with functions in state</div>

      <div style={{ display: 'flex', justifyContent: 'row' }}>
        <div style={{marginRight: '10px'}}>
          <button
            style={{background: sign === '+' && 'green'}}
            onClick={applyAction(add, '+')}>ADD</button>
        </div>
        <div style={{marginRight: '10px'}}>
          <button
            style={{background: sign === '-' && 'green'}}
            onClick={applyAction(subtract, '-')}>MINUS</button>
        </div>
        <div style={{marginRight: '10px'}}>
          <button
            style={{background: sign === '/' && 'green'}}
            onClick={applyAction(devide, '/')}
          >DEVIDE</button>
        </div>
        <div style={{marginRight: '10px'}}>
          <button
            style={{background: sign === '*' && 'green'}}
            onClick={applyAction(multiply, '*')}
          >MULTIPLY</button>
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <label htmlFor="value_a">Value a</label>
        <input
          name="valuea"
          value={state.valuea}
          type="number"
          onChange={onChange(updateState, 'valuea')}
        />
        <label htmlFor="value_b">Value b</label>
        <input
          name="valueb"
          value={state.valueb}
          type="number"
          onChange={onChange(updateState, 'valueb')}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <label htmlFor="result">Result</label>
        <input
          name="result"
          value={action(state) || 0}
          type="number"
        />
      </div>
    </Wrapper>
  )
}

export default Component4;