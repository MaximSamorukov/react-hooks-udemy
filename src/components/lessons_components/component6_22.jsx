import React, { useCallback, useState, useEffect, useRef, memo } from "react";
import Wrapper from "./wrapper";
import { useWhatCauseRender } from "../../hooks/hooks";

const SubComponent = memo((props) => {
  const { text, checked } = props;

  useWhatCauseRender('SubComponent', props);

  return (
    <>
      <div style={{
        border: '2px solid green',
        margin: '5px',
        width: '100px',
        height: '20px',
      }}>
        {text}
      </div>
      <div style={{
        border: '2px solid green',
        margin: '5px',
        width: '40px',
        height: '20px',
      }}>
        {checked ? 'ON' : 'OFF'}
      </div>
    </>
  );
});

function Component622 () {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <Wrapper>
      <div>useWhatCausedRender</div>
      <input type='text' value={text} onChange={(value) => setText(value.target.value)} />
      <input type='checkbox' checked={checked} onChange={(value) => setChecked(value.target.checked)} />
      <button onClick={() => {
        setChecked(false);
        setText('');
      }}>CLEAR</button>
      <SubComponent text={text} checked={checked} />
    </Wrapper>
  )
}

export default Component622;