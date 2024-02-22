import React from "react";
import "./../menuComponent.scss";

interface IMenuTsProps {
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
  onClose: () => void;
}

function MenuTs({
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
  onClose,
}: IMenuTsProps) {
  return (
    <div className="menu-container">
      <a className="dropdown-item" href="#ts_components">
        {section1}
      </a>
      <a className="dropdown-item" href="#ts_type">
        {section2}
      </a>
      <a className="dropdown-item" href="#ts_classes">
        {section3}`x`
      </a>
      <a className="dropdown-item" href="#ts_access">
        {section4}
      </a>
      <a className="dropdown-item" href="#ts_operators">
        {section5}
      </a>
      <a className="dropdown-item" href="#ts_decorator">
        {section6}
      </a>
      <a className="dropdown-item" href="#ts_generics">
        {section7}
      </a>
      <a className="dropdown-item" href="#ts_typeAssertion">
        {section8}
      </a>
      <a className="dropdown-item" href="#ts_typeGuards">
        {section9}
      </a>
      <a className="dropdown-item" href="#ts_mapped">
        {section10}
      </a>
      <a className="dropdown-item" href="#ts_utilityTypes">
        {section11}
      </a>
      <a className="dropdown-item" href="#ts_solid">
        {section12}
      </a>
      // ---
      <a className="dropdown-item" href="#http_fetch">
        {section13}
      </a>
      <a className="dropdown-item" href="#http_response">
        {section14}
      </a>
      <a className="dropdown-item" href="#http_postFeach">
        {section15}
      </a>
      <a className="dropdown-item" href="#http_formData">
        {section16}
      </a>
    </div>
  );
}

export default MenuTs;
