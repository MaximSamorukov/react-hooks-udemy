import React, { createContext, useReducer, useContext } from "react";
import { users, initialSelectedState } from "./users";
import { reducer, reducerOnSelect } from "./reducer";

const ContactsContext = createContext();
const SelectedContext = createContext();

export function ContactsProvider(props) {
  const [state, dispatch] = useReducer(reducer, users);
  return <ContactsContext.Provider value={[state, dispatch]} { ...props} />;
}

export function useContacts() {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error(
      'Contacts can be accessed only under ContactsProvider'
    );
  }
  return context;
}

export function SelectedProvider(props) {
  const [state, dispatch] = useReducer(reducerOnSelect, initialSelectedState);
  return <SelectedContext.Provider value={[state, dispatch]} { ...props} />;
}

export function useSelect() {
  const context = useContext(SelectedContext);
  if (!context) {
    throw new Error(
      'Selected context can be accessed only under SelectedContext Provider'
    );
  }
  return context;
}