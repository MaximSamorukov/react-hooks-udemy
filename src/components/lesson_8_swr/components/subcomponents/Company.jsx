import React from 'react';
import { style } from './style';

export function Company() {
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
      >Company</div>
      <div>name</div>
    </div>
  )
}