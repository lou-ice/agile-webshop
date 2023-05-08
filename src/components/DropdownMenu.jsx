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
          <Dropdown.Item>
            <Link to="productpage" state={{kategori: "Tröja"}}>Tröjor</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="productpage" state={{kategori: "Byxa"}}>Byxor</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="productpage" state={{kategori: "Klänning"}}>Klänningar</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="productpage" state={{kategori: "Skor"}}>Skor</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Nav;
