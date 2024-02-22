import React from "react";
import ButtonPage from "../core/ButtonPage.tsx";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";

export default function HomePageUA() {
  return (
    <>
      <Helmet>
        <title>Вивчення Front-End</title>
      </Helmet>
      <Container id="homePage">
        <ButtonPage href={"/html/ua"} titlePage={"HTML5"} />
        <ButtonPage href={"/css/ua"} titlePage={"CSS"} />
        <ButtonPage href={"/scss/ua"} titlePage={"SCSS"} />
        <ButtonPage href={"/js/ua"} titlePage={"JavaScript"} />
        <ButtonPage href={"/dom/ua"} titlePage={"DOM"} />
        <ButtonPage href={"/bom/ua"} titlePage={"BOM"} />
        <ButtonPage href={"/http/ua"} titlePage={"HTTP"} />
        <ButtonPage href={"/react/ua"} titlePage={"React"} />
        <ButtonPage href={"/redux/ua"} titlePage={"Redux"} />
        <ButtonPage href={"/ts/ua"} titlePage={"TypeScript"} />
        <ButtonPage href={"/next/ua"} titlePage={"NextJS"} />
      </Container>
    </>
  );
}
