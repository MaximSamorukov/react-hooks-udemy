import React from "react";
import { useSelect } from "./state-management/context";
import { useContacts } from "./state-management/context";

function NameTel() {
  let name = 'n/a';
  let tel = 'n/a';
  const [contacts] = useContacts();
  const [selectedId] = useSelect()
  const selectedItem = contacts.filter((i) => i.id === selectedId.id);
  if (selectedItem.length) {
    name = selectedItem[0].name;
    tel = selectedItem[0].tel;
  }
  return (
    <div style={{
      marginTop: '5px',
      marginBottom: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%'
    }}>
      <div><span>Name: </span><span>{ name }</span></div>
      <div><span>Tel: </span><span>{ tel }</span></div>
    </div>
  )
}

export {NameTel};