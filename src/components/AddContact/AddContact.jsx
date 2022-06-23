import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContact }) => {
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [number, setNumber] = useState("");

  function handleSave() {
    if (!name || !surname || !number) {
      alert("Type in!");
    } else {
      let newContact = {
        name,
        surname,
        number,
      };
      addContact(newContact);
      navigate("/");
    }
  }

  return (
    <div>
      <div className="info">
        {/* <h1>Contact Book</h1> */}
        <div className="info__content">
          <input
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="name"
          />
          <input
            onChange={e => setSurname(e.target.value)}
            type="text"
            placeholder="surname"
          />
          <input
            onChange={e => setNumber(e.target.value)}
            type="number"
            placeholder="phone number"
          />
          <button onClick={handleSave}>Add Contact</button>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
