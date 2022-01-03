import React from 'react';
import { style } from './style';

export function Website() {
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
      >Website</div>
      <div>url</div>
    </div>
  )
}

