import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item, deleteContact }) => {
  return (
    <div className="card__container">
      <div className="card">
        <div className="card__content">
          <div className="card__info">{item.name}</div>
          <div className="card__info">{item.surname}</div>
          <div className="card__info">{item.number}</div>
          <div className="card__btns">
            <button
              className="card__btn-delete"
              onClick={() => {
                deleteContact(item.id);
              }}>
              Delete
            </button>
            <Link to={`/edit/${item.id}`}>
              <button className="card__btn-edit margin">Edit</button>
            </Link>
            <Link to={`/details/${item.id}`}>
              <button className="card__btn-details margin">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
