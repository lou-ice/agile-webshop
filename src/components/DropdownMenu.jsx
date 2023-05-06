import React from "react";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import "../css/DropdownMenu.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Dropdown title="Meny" trigger="click">
        <Dropdown.Item>
          <Link to="/">Home</Link>
        </Dropdown.Item>
        <Dropdown.Menu title="Kategorier" trigger="click">
          <Dropdown.Item>Sub 1</Dropdown.Item>
          <Dropdown.Item>Sub 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Nav;
