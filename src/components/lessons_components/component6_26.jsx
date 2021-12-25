import React, { useCallback, useState, useEffect, useRef, memo } from "react";
import Wrapper from "./wrapper";
import { useAsync, asyncFunction, useAnimateText } from '../../hooks/hooks';

function Component626 () {
  const { run, result, status } = useAsync(() => asyncFunction(5000));
  const string = useAnimateText('we are waiting...', 100);
  return (
    <Wrapper>
      <div>useAsync</div>
      <div>{`Result: ${result}`}</div>
        <div style={{
          color: status === 'error' ? 'red' : status === 'success' ? 'green' : 'black',
          fontWeight: 'bold',
        }}>{`Status: ${status}`}</div>
      <div>
        <button onClick={() => run()}>TEST</button>
      </div>
      {status === 'pending' && (
        <div>{string}</div>
      )}

    </Wrapper>
  );
}

export default Component626;