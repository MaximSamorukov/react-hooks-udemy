import React from "react";
import './ContactItem.css';
import { useSelect, useContacts } from "./state-management/context";

function ContactItem({ item }) {
  const [, dispatch] = useSelect();
  const [, dispatchContacts] = useContacts();
  const url = `https://cataas.com/cat?${item.tel}`;

  return (
    <div
      className="item"
      style={{
        width: '40px',
        height: '40px',
        border: '1px solid black',
      }}
      >
        <button
          style={{
            border: 0,
            padding: 0,
          }}
          onClick={() => dispatch({type: 'SELECT', payload:{ id: item.id }})}
          onDoubleClick={() => dispatchContacts({ type: 'DELETE', payload: { id: item.id }})}
        >
          <img
            src={url}
            alt={item.name}
          />
        </button>
    </div>
  )
}

export {ContactItem};