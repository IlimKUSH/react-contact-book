import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = ({ getOneContact, oneContact }) => {
  const params = useParams();
  useEffect(() => {
    getOneContact(params.id);
  }, []);
  return (
    <div>
      <div>
        <h2 style={{ marginTop: "50px", color: "red" }}>{oneContact.name}</h2>
      </div>
      <div>
        <h2>{oneContact.surname}</h2>
      </div>
      <div>
        <h2>{oneContact.number}</h2>
      </div>
    </div>
  );
};

export default Details;
