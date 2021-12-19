import React, { useState } from "react";
import Wrapper from "./wrapper";
import { Controller } from "./component13/Controller";
import { AddContact } from "./component13/AddContact";
import { Contacts } from "./component13/Contacts";
import { NameTel } from "./component13/NameTel";
import { ContactsProvider } from "./component13/state-management/context";
import { SelectedProvider } from "./component13/state-management/context";

function Component13 () {
  const [ showAddContact, setShowAddContact] = useState(false);
  return (
    <Wrapper>
      <SelectedProvider>
        <ContactsProvider>
          <NameTel />
          <Contacts />
          <Controller addContacts={() => setShowAddContact(!showAddContact)} />
          {showAddContact && <AddContact />}
        </ContactsProvider>
      </SelectedProvider>
    </Wrapper>
  )
}

export default Component13;