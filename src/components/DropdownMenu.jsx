import React from "react";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";

function Nav() {
  return (
    <div>
      <Dropdown title="Meny" trigger="hover">
        <Dropdown.Item>Home</Dropdown.Item>
        <Dropdown.Menu title="Kategorier">
          <Dropdown.Item>Sub 1</Dropdown.Item>
          <Dropdown.Item>Sub 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Nav;
