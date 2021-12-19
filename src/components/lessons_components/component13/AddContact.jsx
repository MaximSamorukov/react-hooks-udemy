import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useContacts } from "./state-management/context";

function AddContact() {
  const [state, setState] = useState({
    name: '',
    tel: '',
  });
  const [, dispatch] = useContacts();
  return (
    <div style={{
      marginTop: '2px',
    }}>
      <div>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" value={state.name} onChange={(name) => setState({ ...state, name: name.target.value })} />
      </div>
      <div>
        <label htmlFor="tel">Tel</label>
        <input name="tel" type="text" value={state.tel} onChange={(tel) => setState({ ...state, tel: tel.target.value })} />
        <button onClick={() => {
          setState({ name: '', tel: ''});
          dispatch({type: 'ADD', payload: { ...state, id: uuidv4()}})}}>ADD</button>
      </div>
    </div>
  )
}

export { AddContact };