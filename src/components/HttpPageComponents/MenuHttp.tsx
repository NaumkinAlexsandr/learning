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
  section12: string;
  section13: string;
  section14: string;
  section15: string;
  section16: string;
  onClose: () => void;
}

function MenuHttp({
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
}: IMenuHtmlProps) {
  return (
    <div className="menu-container">
      <a className="dropdown-item" href="#http_description">
        {section1}
      </a>
      <a className="dropdown-item" href="#http_method">
        {section2}
      </a>
      <a className="dropdown-item" href="#http_code">
        {section3}
      </a>
      <a className="dropdown-item" href="#http_ok">
        {section4}
      </a>
      <a className="dropdown-item" href="#http_redirects">
        {section5}
      </a>
      <a className="dropdown-item" href="#http_clientErrors">
        {section6}
      </a>
      <a className="dropdown-item" href="#http_serverErrors">
        {section7}
      </a>
      <h4>XMLHttpRequest</h4>
      <a className="dropdown-item" href="#http_xml">
        {section8}
      </a>
      <a className="dropdown-item" href="#http_async">
        {section9}
      </a>
      <a className="dropdown-item" href="#http_headlines">
        {section10}
      </a>
      <a className="dropdown-item" href="#http_post">
        {section11}
      </a>
      <a className="dropdown-item" href="#http_progress">
        {section12}
      </a>
      <h4>Fetch</h4>
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

export default MenuHttp;
