import React, { useEffect } from "react";
import Card from "../Card/Card";

const ContactsList = ({ getContacts, contacts, deleteContact }) => {
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div className="list">
      {contacts.map(item => (
        <Card key={item.id} item={item} deleteContact={deleteContact} />
      ))}
    </div>
  );
};

export default ContactsList;
