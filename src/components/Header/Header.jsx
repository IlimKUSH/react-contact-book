import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/add">
        <button className="header__btn">Add contact</button>
      </Link>
      <Link to="/">
        <button className="header__btn">Contacts</button>
      </Link>
    </div>
  );
};

export default Header;
