import React from "react";
import { ContactItem } from "./ContatctItem";
import { useContacts } from "./state-management/context";
function Contacts() {
  const [state, dispatch] = useContacts();
  const items = state.map((item) => <ContactItem item={item} />);

  return (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }}>
    {items}
  </div>
)}

export { Contacts };