import React from "react";
import ButtonPage from "../core/ButtonPage.tsx";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";

export default function HomePageRU() {
  return (
    <>
      <Helmet>
        <title>Изучение Front-End</title>
      </Helmet>
      <Container id="homePage">
        <ButtonPage href={"/html/ru"} titlePage={"HTML5"} />
        <ButtonPage href={"/css/ru"} titlePage={"CSS"} />
        <ButtonPage href={"/scss/ru"} titlePage={"SCSS"} />
        <ButtonPage href={"/js/ru"} titlePage={"JavaScript"} />
        <ButtonPage href={"/dom/ru"} titlePage={"DOM"} />
        <ButtonPage href={"/bom/ru"} titlePage={"BOM"} />
        <ButtonPage href={"/http/ru"} titlePage={"HTTP"} />
        <ButtonPage href={"/react/ru"} titlePage={"React"} />
        <ButtonPage href={"/redux/ru"} titlePage={"Redux"} />
        <ButtonPage href={"/ts/ru"} titlePage={"TypeScript"} />
        <ButtonPage href={"/next/ru"} titlePage={"NextJS"} />
      </Container>
    </>
  );
}
