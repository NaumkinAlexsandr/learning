import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import ButtonLanguages from "../core/ButtonLanguages.tsx";
import "./menuComponent.scss";

interface IMenuComponentProps {
  className1: string;
  href1: string;
  titleLanguage1: string;
  className2: string;
  href2: string;
  titleLanguage2: string;
  to1: string;
  to2: string;
  to3: string;
  to4: string;
  to5: string;
  to6: string;
  to7: string;
  to8: string;
  to9: string;
  to10: string;
  to11: string;
  to12: string;
  name1: string;
  name2: string;
  name3: string;
  name4: string;
  name5: string;
  name6: string;
  name7: string;
  name8: string;
  name9: string;
  name10: string;
  name11: string;
  name12: string;

  onClose: () => void;
}

function MenuComponent({
  className1,
  href1,
  titleLanguage1,
  className2,
  href2,
  titleLanguage2,
  to1,
  to2,
  to3,
  to4,
  to5,
  to6,
  to7,
  to8,
  to9,
  to10,
  to11,
  to12,
  name1,
  name2,
  name3,
  name4,
  name5,
  name6,
  name7,
  name8,
  name9,
  name10,
  name11,
  name12,

  onClose,
}: IMenuComponentProps) {
  return (
    <Container style={{ width: "100%", maxWidth: "none" }}>
      <div className="menu-container">
        <div>
          <ButtonLanguages
            className={className1}
            to={href1}
            titleLanguage={titleLanguage1}
          />
          <ButtonLanguages
            className={className2}
            to={href2}
            titleLanguage={titleLanguage2}
          />
        </div>

        <Link className="link-page" to={to1}>
          {name1}
        </Link>
        <Link className="link-page" to={to2}>
          {name2}
        </Link>
        <Link className="link-page" to={to3}>
          {name3}
        </Link>
        <Link className="link-page" to={to4}>
          {name4}
        </Link>
        <Link className="link-page" to={to5}>
          {name5}
        </Link>
        <Link className="link-page" to={to6}>
          {name6}
        </Link>
        <Link className="link-page" to={to7}>
          {name7}
        </Link>
        <Link className="link-page" to={to8}>
          {name8}
        </Link>
        <Link className="link-page" to={to9}>
          {name9}
        </Link>
        <Link className="link-page" to={to10}>
          {name10}
        </Link>
        <Link className="link-page" to={to11}>
          {name11}
        </Link>
        <Link className="link-page" to={to12}>
          {name12}
        </Link>
      </div>
    </Container>
  );
}

export default MenuComponent;
