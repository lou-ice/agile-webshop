import { useState } from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import "./DropdownMenu.css";

function DropdownMenu() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleSubMenuClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <>
      <Nav>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={handleSubMenuClick}>
            Action
          </NavDropdown.Item>
          {showSubMenu && (
            <div className="submenu">
              <div>
                <NavDropdown.Item>Submenu Item 1</NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item>Submenu Item 2</NavDropdown.Item>
              </div>
            </div>
          )}
        </NavDropdown>
      </Nav>
    </>
  );
}

export default DropdownMenu;
