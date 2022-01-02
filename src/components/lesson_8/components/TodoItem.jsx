import React from "react";

export function TodoItem({ id, title, completed }) {
  return (
    <div
      style={{
        border: '3px dashed grey',
        width: '100%',
        padding: '3px',
        boxSizing: 'border-box',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '3px',
      }}
    >
      <p>{`id: ${id || 'no id'}`}</p>
      <p>{`title: ${title || 'no title'}`}</p>
      <p>{`completed: ${completed ? 'true' : 'false'}`}</p>
    </div>
  )
}
