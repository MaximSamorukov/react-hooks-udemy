import React, { useCallback, useState, useEffect, useRef, memo } from "react";
import Wrapper from "./wrapper";
import { usePrevious } from '../../hooks/hooks';

function Item({ number, active, setActive, disabled }) {
  const borderWidth = active ? '4px' : '2px';
  const style = {
    width: active ? 27 : 25,
    height: active ? 27 : 25,
    marginTop: active ? -3 : 0,
    border: `${borderWidth} solid ${disabled ? 'red' : 'blue'}`,
    backgroundColor: active ? 'green' : 'yellow',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: active ? '23px' : '21px',
    transition: 'all linear 100ms',
    opacity: disabled ? 0.7 : 1,
  }

  return (
    <div
      onClick={() => {
        if(!disabled) {
          setActive(number)}}
        }
      style={style}
    >{number}
    </div>
  )
}

function Row ({ numbers, activeNumber, setActiveNumber, disabled = false }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    }}>
      {numbers.map((_, i) => (
        <Item number={i} active={i === activeNumber} setActive={setActiveNumber} disabled={disabled} />
      ))}
    </div>
  )
}

function Component627 () {
  const [activeNumber, setActiveNumber] = useState(null);
  const previous = usePrevious(activeNumber);
  const numbers = Array.from({ length: 10 });
  return (
    <Wrapper>
      <div>usePrevious</div>
      <Row numbers={numbers} activeNumber={activeNumber} setActiveNumber={setActiveNumber} />
      <Row numbers={numbers} activeNumber={previous} setActiveNumber={setActiveNumber} disabled />
    </Wrapper>
  );
}

export default Component627;