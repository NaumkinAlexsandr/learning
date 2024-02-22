import React from "react";
import "./../menuComponent.scss";

interface IMenuJSProps {
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

function MenuJs({
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
}: IMenuJSProps) {
  return (
    <div className="menu-container">
      <a className="dropdown-item" href="#js_visibility">
        {section1}
      </a>
      <a className="dropdown-item" href="#js_variables">
        {section2}
      </a>
      <a className="dropdown-item" href="#js_operators">
        {section3}
      </a>
      <a className="dropdown-item" href="#js_cycles">
        {section4}
      </a>
      <a className="dropdown-item" href="#js_number">
        {section5}
      </a>
      <a className="dropdown-item" href="#js_string">
        {section6}
      </a>
      <a className="dropdown-item" href="#js_object">
        {section7}
      </a>
      <a className="dropdown-item" href="#js_array">
        {section8}
      </a>
      <a className="dropdown-item" href="#js_function">
        {section9}
      </a>
      <a className="dropdown-item" href="#js_regularExpressions">
        {section10}
      </a>
      <a className="dropdown-item" href="#js_symbol">
        {section11}
      </a>
      <a className="dropdown-item" href="#js_descriptor">
        {section12}
      </a>
      <a className="dropdown-item" href="#js_proto">
        {section13}
      </a>
      <a className="dropdown-item" href="#js_class">
        {section14}
      </a>
      <a className="dropdown-item" href="#js_map">
        {section15}
      </a>
      <a className="dropdown-item" href="#js_set">
        {section16}
      </a>
      <a className="dropdown-item" href="#js_time">
        {section17}
      </a>
      <a className="dropdown-item" href="#js_promise">
        {section18}
      </a>
      <a className="dropdown-item" href="#js_await">
        {section19}
      </a>
      <a className="dropdown-item" href="#js_proxy">
        {section20}
      </a>
    </div>
  );
}

export default MenuJs;
