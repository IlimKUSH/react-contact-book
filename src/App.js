import axios from "axios";
import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";

const App = () => {
  const API = "http://localhost:8000/contacts";

  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState("");

  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }

  // ! Read - Get
  async function getContacts() {
    let res = await axios(API);
    setContacts(res.data);
  }

  // ! Delete - DELETE запрос
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  // ! Edit - GET API/id
  async function getOneContact(id) {
    let res = await axios(`${API}/${id}`);
    setOneContact(res.data);
  }

  // ! Update - PATCH, PUT
  async function updateContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add" element={<AddContact addContact={addContact} />} />
        <Route
          path="/"
          element={
            <ContactsList
              contacts={contacts}
              getContacts={getContacts}
              deleteContact={deleteContact}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <Details oneContact={oneContact} getOneContact={getOneContact} />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Edit
              oneContact={oneContact}
              getOneContact={getOneContact}
              updateContact={updateContact}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
