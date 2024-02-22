import React from "react";
import "./../menuComponent.scss";

interface IMenuHtmlProps {
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
  onClose: () => void;
}

function MenuHtml({
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
  onClose,
}: IMenuHtmlProps) {
  return (
    <div className="menu-container">
      <a className="dropdown-item" href="#html_metaTag">
        {section1}
      </a>
      <a className="dropdown-item" href="#html_sectioning">
        {section2}
      </a>
      <a className="dropdown-item" href="#html_text">
        {section3}
      </a>
      <a className="dropdown-item" href="#html_textSemantics">
        {section4}
      </a>
      <a className="dropdown-item" href="#html_multimedia">
        {section5}
      </a>
      <a className="dropdown-item" href="#html_embeddedContent">
        {section6}
      </a>
      <a className="dropdown-item" href="#html_scripting">
        {section7}
      </a>
      <a className="dropdown-item" href="#html_edits">
        {section8}
      </a>
      <a className="dropdown-item" href="#html_table">
        {section9}
      </a>
      <a className="dropdown-item" href="#html_form">
        {section10}
      </a>
      <a className="dropdown-item" href="#html_interactive">
        {section11}
      </a>
    </div>
  );
}

export default MenuHtml;
