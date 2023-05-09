import React from "react";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import "../css/DropdownMenu.css";
import { Link } from "react-router-dom";

function Nav({kategorier}) {
  return (
    <div>
      <Dropdown title="Meny" trigger="click">
        <Dropdown.Item>
          <Link to="/">Home</Link>
        </Dropdown.Item>
        <Dropdown.Menu title="Kategorier" trigger="click">
        <Dropdown.Item key={"all"}>
            <Link to="productpage" state={{kategori: "Se Alla"}}>{"Se alla"}</Link>
          </Dropdown.Item>
          {kategorier.map((item)=>(

            <Dropdown.Item key={item}>
            <Link to="productpage" state={{kategori: item}}>{item}</Link>
          </Dropdown.Item>
            ))}
     
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Nav;
