import React from "react";
import "./../menuComponent.scss";

interface IMenuDomProps {
  section1: string;
  section2: string;
  section3: string;
  onClose: () => void;
}

function MenuBom({ section1, section2, section3, onClose }: IMenuDomProps) {
  return (
    <div className="menu-container">
      <a className="dropdown-item" href="#bom_properties">
        {section1}
      </a>
      <a className="dropdown-item" href="#bom_console">
        {section2}
      </a>
      <a className="dropdown-item" href="#bom_method">
        {section3}
      </a>
    </div>
  );
}

export default MenuBom;
