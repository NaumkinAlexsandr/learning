import React from "react";
import "./../menuComponent.scss";

interface IMenuReactProps {
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
  onClose: () => void;
}

function MenuReact({
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
  onClose,
}: IMenuReactProps) {
  return (
    <div className="menu-container">
      <a className="dropdown-item" href="#react_examples">
        {section1}
      </a>
      <a className="dropdown-item" href="#react_hooks">
        {section2}
      </a>
      <a className="dropdown-item" href="#react_install">
        {section3}
      </a>
      <a className="dropdown-item" href="#">
        {section4}
      </a>
      <a className="dropdown-item" href="#">
        {section5}
      </a>
      <a className="dropdown-item" href="#">
        {section6}
      </a>
      <a className="dropdown-item" href="#">
        {section7}
      </a>
      <a className="dropdown-item" href="#">
        {section8}
      </a>
      <a className="dropdown-item" href="#">
        {section9}
      </a>
      <a className="dropdown-item" href="#">
        {section10}
      </a>
      <a className="dropdown-item" href="#">
        {section11}
      </a>
      <a className="dropdown-item" href="#">
        {section12}
      </a>
      <a className="dropdown-item" href="#">
        {section13}
      </a>
      <a className="dropdown-item" href="#">
        {section14}
      </a>
      <a className="dropdown-item" href="#">
        {section15}
      </a>
      <a className="dropdown-item" href="#">
        {section16}
      </a>
      <a className="dropdown-item" href="#">
        {section17}
      </a>
      <a className="dropdown-item" href="#">
        {section18}
      </a>
      <a className="dropdown-item" href="#">
        {section19}
      </a>
      <a className="dropdown-item" href="#">
        {section20}
      </a>
    </div>
  );
}

export default MenuReact;
