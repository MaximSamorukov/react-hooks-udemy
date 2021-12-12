import React, { useRef, useState } from "react";
import Wrapper from "./wrapper";
import PinInput from './component8_pinInput';


function Component8 () {
  const initialDigits = Array(5).fill('');
  const [digits, setDigits] = useState(initialDigits);
  const ref = useRef();
  return (
    <Wrapper>
      <div>Lesson 8 useImperativeHandle</div>
      <PinInput
        ref={ref}
        digits={digits}
        onChange={setDigits}
      />
      <button onClick={() => ref.current.focus()}>FOCUS</button>
      <button onClick={() => setDigits(initialDigits) }>CLEAR</button>
    </Wrapper>
  )
}

export default Component8;