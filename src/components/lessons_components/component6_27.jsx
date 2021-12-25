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

function Component627 () {
  const [activeNumber, setActiveNumber] = useState(null);
  const previous = usePrevious(activeNumber);
  const numbers = Array.from({ length: 10 });
  return (
    <Wrapper>
      <div>usePrevious</div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
      }}>
        {numbers.map((_, i) => (
          <Item number={i} active={i === activeNumber} setActive={setActiveNumber} />
        ))}
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
      }}>
        {numbers.map((_, i) => (
          <Item number={i} active={i === previous} setActive={setActiveNumber} disabled />
        ))}
      </div>

    </Wrapper>
  );
}

export default Component627;