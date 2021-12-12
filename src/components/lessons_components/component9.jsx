import React, { useRef, useState, forwardRef } from "react";
import Wrapper from "./wrapper";
import PinInput from './component8_pinInput';

function logRender(WrappedComponent) {
  return forwardRef(function(props, ref) {
    const name = WrappedComponent.name ?? WrappedComponent.render?.name;
    console.log(`render: ${name} component`);
    return <WrappedComponent ref={ref} {...props} />;
  });
}

function SimpleText({text}) {
  return <span>{text}</span>;
}

const LoggedSimpleText = logRender(SimpleText);
const LoggedPinInput = logRender(PinInput);

function Component9 () {
  const [digits, setDigits] = useState(Array(3).fill(''));
  const inputRef = useRef();

  const focus = () => inputRef.current.focus();

  return (
    <Wrapper>
      <div>Lesson 9 HOCs</div>
      <LoggedSimpleText text="Some text" />
      <LoggedPinInput ref={inputRef} digits={digits} onChange={setDigits} />
      <p>
        <button onClick={focus}>FOCUS</button>
      </p>
    </Wrapper>
  )
}

export default Component9;