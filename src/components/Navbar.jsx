import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVault, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="Vault">
        <FontAwesomeIcon
          icon={faVault}
          size="lg"
          style={{ color: "#ffffff" }}
        />
        Vault
      </Link>
      <Link to="About">
      <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />
        About
      </Link>
    </nav>
  );
}

export default Navbar;
