import React from "react";
import "./MyAccount.css";
import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown);

export const MyAccount = () => {
  return (
    <Link to={"/favourites"}>
      <div className="align-items-center border main-button">
        <p className="main-button-p">
          <span className="main-button-text">My Account </span>
          <FontAwesomeIcon icon="angle-down" className="angle-down-style" />
        </p>
      </div>
    </Link>
  );
};
