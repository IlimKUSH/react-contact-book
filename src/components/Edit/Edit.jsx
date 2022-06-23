import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = ({ getOneContact, oneContact, updateContact }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  function handleSave() {
    let editedContact = {
      name,
      surname,
      number,
    };
    updateContact(params.id, editedContact);
    navigate("/");
    // console.log(editedContact);
  }
  useEffect(() => {
    getOneContact(params.id);
  }, []);
  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setSurname(oneContact.surname);
      setNumber(oneContact.number);
    }
  }, [oneContact]);

  return (
    <div>
      <div className="edit">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          value={surname}
          onChange={e => setSurname(e.target.value)}
        />
        <input
          type="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <button onClick={() => handleSave()}>Save</button>
      </div>
    </div>
  );
};

export default Edit;
