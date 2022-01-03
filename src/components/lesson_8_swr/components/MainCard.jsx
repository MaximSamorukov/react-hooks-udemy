import React from "react";
import { useUserContext } from '../context/context';
import { Address, Company, Email, Name, Phone, Website } from './subcomponents';

const Link = ({ id }) => {
  if (id.website) {
    return (
      <a href={`https://${id?.website}`}>{id?.website}</a>
    );
  };
  return 'no website';
}
export function UserCard() {
  const { userId } =useUserContext();
  return (
    <div
      style={{
        border: '3px dashed black',
        width: '100%',
        height: 'fit-content',
        padding: '3px',
        boxSizing: 'border-box',
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
      <Address />
      <Company />
    </div>
  )
}
