import React from "react";
import { Link } from "react-router-dom";
import "./buttonLanguages.scss";

interface IButtonLanguageProps {
  titleLanguage: string;
  className: string;
  to: string;
}

export default function ButtonLanguages({
  titleLanguage,
  className,
  to,
}: IButtonLanguageProps) {
  return (
    <>
      <Link to={to} className={className}>
        {titleLanguage}
      </Link>
    </>
  );
}
