import React from "react";
import { useContacts } from "./state-management/context";

function Controller({ addContacts }) {
  const [, dispatch] = useContacts();
  return (
    <div>
      <button style={{ marginTop: 5 }} onClick={addContacts}>ADD</button>
      <button onClick={() => dispatch({ type: 'RESTORE'})}>RESTORE</button>
    </div>
  )
}

export { Controller };