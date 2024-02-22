import React from "react";
import { Link } from "react-router-dom";
import "./buttonPage.scss";

interface IButtonPageProps {
  titlePage: string;
  href: string;
}

export default function ButtonPage({ titlePage, href }: IButtonPageProps) {
  return (
    <>
      <Link to={href} className="buttonPage">
        <span className="button__line button__line--top"></span>
        <span className="button__line button__line--right"></span>
        <span className="button__line button__line--bottom"></span>
        <span className="button__line button__line--left"></span>
        {titlePage}
      </Link>
    </>
  );
}
