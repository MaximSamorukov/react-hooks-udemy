import React, { useCallback, useState, useEffect, useRef, memo } from "react";
import Wrapper from "./wrapper";
import { useHovered } from '../../hooks/hooks';

function Emoji({ key }) {
  const { ref, isHovered } = useHovered();

  return (
    <div ref={ref} key={key} style={{
      fontSize: 38,
    }}>
      {isHovered ? '\u{1F61C}' : '\u{1F609}'}
    </div>
  )
}

function Component633 () {
  const elements = Array.from({ length: 7});
  return (
    <Wrapper>
      <div>useHover</div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
        { elements.map((_, i) => (
          <Emoji key={i} />
        ))}
      </div>
    </Wrapper>
  );
}

export default Component633;