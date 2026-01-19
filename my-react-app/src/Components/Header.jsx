import React from "react";
import { BsCardChecklist } from "react-icons/bs";

function Header() {
  return (
    <div id="headerContainer">
      <BsCardChecklist className="header-icon" />
      <h1>Keeper App</h1>
    </div>
  );
}

export default Header;
