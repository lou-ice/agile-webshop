import React from "react";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import "../css/DropdownMenu.css";
import { Link } from "react-router-dom";

function Nav({ kategorier }) {
  return (
    <div>
      <Dropdown title="Meny" trigger="click">
        <Link to="/">
          <Dropdown.Item>Hem</Dropdown.Item>
        </Link>
        <Dropdown.Menu title="Kategorier" trigger="click">
          <Link to="productpage" state={{ kategori: "Se alla" }}>
            <Dropdown.Item key={"all"}>{"Se alla"}</Dropdown.Item>
          </Link>
          {kategorier.map((item) => (
            <Link to="productpage" state={{ kategori: item }}>
              <Dropdown.Item key={item}>{item}</Dropdown.Item>
            </Link>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Nav;
