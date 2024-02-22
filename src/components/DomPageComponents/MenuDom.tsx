import React from "react";
import "./../menuComponent.scss";

interface IMenuDomProps {
  section1: string;
  section2: string;
  section3: string;
  section4: string;
  section5: string;
  section6: string;
  section7: string;
  section8: string;
  section9: string;
  section10: string;
  section11: string;
  section12: string;
  section13: string;
  section14: string;
  section15: string;
  section16: string;
  section17: string;
  section18: string;
  section19: string;
  section20: string;
  section21: string;
  section22: string;
  section23: string;
  section24: string;
  onClose: () => void;
}

function MenuDom({
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10,
  section11,
  section12,
  section13,
  section14,
  section15,
  section16,
  section17,
  section18,
  section19,
  section20,
  section21,
  section22,
  section23,
  section24,
  onClose,
}: IMenuDomProps) {
  return (
    <div className="menu-container">
      <a className="dropdown-item" href="#dom_title">
        {section1}
      </a>
      <a className="dropdown-item" href="#dom_findElement">
        {section2}
      </a>
      <a className="dropdown-item" href="#dom_changeProperties">
        {section3}
      </a>
      <a className="dropdown-item" href="#dom_attribute">
        {section4}
      </a>
      <a className="dropdown-item" href="#dom_classes">
        {section5}
      </a>
      <a className="dropdown-item" href="#dom_createNodes">
        {section6}
      </a>
      <a className="dropdown-item" href="#dom_create">
        {section7}
      </a>
      <a className="dropdown-item" href="#dom_cloneNode">
        {section8}
      </a>
      <a className="dropdown-item" href="#dom_listener">
        {section9}
      </a>
      <a className="dropdown-item" href="#dom_delegation">
        {section10}
      </a>
      <a className="dropdown-item" href="#developments_mouseEvents">
        {section11}
      </a>
      <a className="dropdown-item" href="#developments_management">
        {section12}
      </a>
      <a className="dropdown-item" href="#developments_focus">
        {section13}
      </a>
      <a className="dropdown-item" href="#developments_keyboards">
        {section14}
      </a>
      <a className="dropdown-item" href="#developments_cssEvents">
        {section15}
      </a>
      <a className="dropdown-item" href="#developments_page">
        {section16}
      </a>
      <a className="dropdown-item" href="#developments_composition">
        {section17}
      </a>
      <a className="dropdown-item" href="#developments_print">
        {section18}
      </a>
      <a className="dropdown-item" href="#developments_resource">
        {section19}
      </a>
      <a className="dropdown-item" href="#developments_network">
        {section20}
      </a>
      <a className="dropdown-item" href="#developments_web">
        {section21}
      </a>
      <a className="dropdown-item" href="#developments_view">
        {section22}
      </a>
      <a className="dropdown-item" href="#developments_buffer">
        {section23}
      </a>
      <a className="dropdown-item" href="#developments_drag">
        {section24}
      </a>
    </div>
  );
}

export default MenuDom;
