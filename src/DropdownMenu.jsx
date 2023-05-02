import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function DropdownMenu() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleSubMenuClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <DropdownButton title="Dropdown Menu">
      <Dropdown.Item onClick={handleSubMenuClick}>Show Submenu</Dropdown.Item>
      {showSubMenu && (
        <div className="submenu">
          <Dropdown.Item>Submenu Item 1</Dropdown.Item>
          <Dropdown.Item>Submenu Item 2</Dropdown.Item>
        </div>
      )}
    </DropdownButton>
  );
}

export default DropdownMenu;
