import React from "react";
import "./../menuComponent.scss";

interface IMenuCssProps {
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
  onClose: () => void;
}

function MenuCss({
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
  onClose,
}: IMenuCssProps) {
  return (
    <div className="menu-container">
      <a className="dropdown-item" href="#scss_import">
        {section1}
      </a>
      <a className="dropdown-item" href="#scss_media">
        {section2}
      </a>
      <a className="dropdown-item" href="#scss_extend">
        {section3}
      </a>
      <a className="dropdown-item" href="#scss_at-root">
        {section4}
      </a>
      <a className="dropdown-item" href="#scss_debug">
        {section5}
      </a>
      <a className="dropdown-item" href="#scss_warn">
        {section6}
      </a>
      <a className="dropdown-item" href="#scss_error">
        {section7}
      </a>
      <a className="dropdown-item" href="#scss_if">
        {section8}
      </a>
      <a className="dropdown-item" href="#scss_for">
        {section9}
      </a>
      <a className="dropdown-item" href="#scss_each">
        {section10}
      </a>
      <a className="dropdown-item" href="#scss_while">
        {section11}
      </a>
      <a className="dropdown-item" href="#scss_mixin">
        {section12}
      </a>
      <a className="dropdown-item" href="#scss_argument">
        {section13}
      </a>
      <a className="dropdown-item" href="#scss_content">
        {section14}
      </a>
    </div>
  );
}

export default MenuCss;
