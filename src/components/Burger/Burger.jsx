import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Burger({ burgerCallback }) {
  return (
    <FontAwesomeIcon
      size="lg"
      className="is-clickable icon burger"
      icon={faBars}
       onClick={burgerCallback}
    />
  );
}

