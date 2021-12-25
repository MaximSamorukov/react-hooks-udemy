import React, { useCallback, useState, useEffect, useRef, memo } from "react";
import Wrapper from "./wrapper";
import { useElementSize } from '../../hooks/hooks';

function Row({ children }) {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    heigth: 24,
    marginBottom: 10,
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

function Item () {
  const ref = useRef();
  const { width, height } = useElementSize(ref)
  const brickStyle = {
    width: '',
    height: 24,
    margin: 0,
    padding: 0,
    marginRight: 10,
    backgroundColor: '#85E380',
    borderRadius: 5,
    flex: '2 1 auto',
    textAlign: 'center',
    lineHeight: '23px',
  };
  return (
    <div ref={ref} style={brickStyle}><span>{`${width} х ${height}`}</span></div>
  );
}
function Component629 () {

  return (
    <Wrapper>
      <div>useElementSize</div>
      <Row>
        <Item />
        <Item />
        <Item />
      </Row>
      <Row>
        <Item />
        <Item />
      </Row>
      <Row>
        <Item />
      </Row>
      <Row>
        <Item />
        <Item />
        <Item />
        <Item />
      </Row>
    </Wrapper>
  );
}

export default Component629;