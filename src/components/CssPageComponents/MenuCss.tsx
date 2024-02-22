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
  section15: string;
  section16: string;
  section17: string;
  section18: string;
  section19: string;
  section20: string;
  section21: string;
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
  section15,
  section16,
  section17,
  section18,
  section19,
  section20,
  section21,
  onClose,
}: IMenuCssProps) {
  return (
    <div className="menu-container">
      <a className="dropdown-item" href="#css_background">
        {section1}
      </a>
      <a className="dropdown-item" href="#css_font">
        {section2}
      </a>
      <a className="dropdown-item" href="#css_text">
        {section3}
      </a>
      <a className="dropdown-item" href="#css_otherText">
        {section4}
      </a>
      <a className="dropdown-item" href="#css_list">
        {section5}
      </a>
      <a className="dropdown-item" href="#css_size">
        {section6}
      </a>
      <a className="dropdown-item" href="#css_position">
        {section7}
      </a>
      <a className="dropdown-item" href="#css_display">
        {section8}
      </a>
      <a className="dropdown-item" href="#css_flex">
        {section9}
      </a>
      <a className="dropdown-item" href="#css_grid">
        {section10}
      </a>
      <a className="dropdown-item" href="#css_otherElement">
        {section11}
      </a>
      <a className="dropdown-item" href="#css_margin">
        {section12}
      </a>
      <a className="dropdown-item" href="#css_padding">
        {section13}
      </a>
      <a className="dropdown-item" href="#css_border">
        {section14}
      </a>
      <a className="dropdown-item" href="#css_animation">
        {section15}
      </a>
      <a className="dropdown-item" href="#css_transform">
        {section16}
      </a>
      <a className="dropdown-item" href="#css_transition">
        {section17}
      </a>
      <a className="dropdown-item" href="#css_img">
        {section18}
      </a>
      <a className="dropdown-item" href="#css_table">
        {section19}
      </a>
      <a className="dropdown-item" href="#css_pseudoElements">
        {section20}
      </a>
      <a className="dropdown-item" href="#css_pseudoClasses">
        {section21}
      </a>
    </div>
  );
}

export default MenuCss;
