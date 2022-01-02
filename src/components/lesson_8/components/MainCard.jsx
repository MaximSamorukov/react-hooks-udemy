import React from "react";
import { useUserContext } from '../context/context';

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
        height: '300px',
        padding: '3px',
        boxSizing: 'border-box',
      }}
    >
      <p>{`id: ${userId?.id || 'no id'}`}</p>
      <p>{`Name: ${userId?.name || 'no name'}`}</p>
      <p>{`Username: ${userId?.username || 'no username'}`}</p>
      <p>{`Email: ${userId?.email || 'no email'}`}</p>
      <p>{`Phone: ${userId?.phone || 'no phone'}`}</p>
      <p>Website: <Link id={userId} /></p>
      <p>{`City: ${userId?.address?.city || 'no address'}`}</p>
      <p>{`Company: ${userId?.company?.name || 'no company name'}`}</p>


    </div>
  )
}
