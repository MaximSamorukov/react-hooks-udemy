import React from 'react';
import { style } from './style';

export function Address() {
  return (
    <div
      style={style}
    >
      <div
        style={{
          backgroundColor: 'grey',
          width: '50%',
          height: '100%'
        }}
      >Address</div>
      <div>url</div>
    </div>
  )
}