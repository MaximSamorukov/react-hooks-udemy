import React, { useCallback, useState, useEffect, useRef, memo } from "react";
import Wrapper from "./wrapper";
import { useWindowSize } from '../../hooks/hooks';

function Component625 () {
const [width, height] = useWindowSize();
const WIDTH = 125;
  return (
    <Wrapper>
      <div>useWindowSize</div>
      <div style={{
        position: 'relative',
        width: WIDTH,
        height: (WIDTH * height) / width,
        border: '2px dashed black',
      }}>
        <div style={{
          position: 'absolute',
          top: -20 + ((WIDTH * height) / width) / 2,
          right: -20,
          textAlign: 'center',
          writingMode: 'vertical-lr',
          transform: 'rotate(180deg)'
        }}>{`${height}px`}</div>
        <div style={{
          position: 'absolute',
          top: (WIDTH * height) / width,
          left: WIDTH / 2 - 30,
        }}>{`${width}px`}</div>
      </div>
    </Wrapper>
  );
}

export default Component625;