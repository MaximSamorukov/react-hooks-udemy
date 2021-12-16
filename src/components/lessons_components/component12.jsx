import React, { useReducer } from "react";
import Wrapper from "./wrapper";
import { initialState } from "./component12/state";
import { reducer } from "./component12/reducer";


function Component12 () {
const [state, dispatch] = useReducer(reducer, initialState);

const mathAction = (type) => dispatch({ type });

  return (
    <Wrapper>
      <p>useReduser</p>
      <div style={{
        margin: 'auto',
        width: '200px',
        height: '30px',
        textAlign: 'center'
      }}>{state.count}</div>
      <div style={{
        margin: 'auto',
        marginTop: '20px',
        width: '280px',
        height: '30px',
      }}>
        <button onClick={() => mathAction('X2')}>X2</button>
        <button onClick={() => mathAction('X3')}>X3</button>
        <button onClick={() => mathAction('X4')}>X4</button>
        <button onClick={() => mathAction('X5')}>X5</button>
        <button onClick={() => mathAction('/2')}>/2</button>
        <button onClick={() => mathAction('/3')}>/3</button>
        <button onClick={() => mathAction('/4')}>/4</button>
        <button onClick={() => mathAction('/5')}>/5</button>
        <button onClick={() => mathAction('>1<')}>{">1<"}</button>
      </div>
    </Wrapper>
  )
}

export default Component12;