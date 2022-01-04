import React from "react";
import { Address, Company, Email, Name, Phone, Website } from './subcomponents';

export function UserCard() {
  return (
    <div
      style={{
        border: '3px dashed black',
        width: '100%',
        height: 'fit-content',
        padding: '3px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <Name />
        <Email />
        <Phone />
        <Website />
        <Company />
      </div>
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '2px',
          height: '100%',
          minHeight: '100%',

        }}
      >
        <Address />
      </div>
    </div>
  )
}
