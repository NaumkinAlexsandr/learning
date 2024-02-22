import React from "react";
import AppBar from "../components/AppBar.tsx";
import HttpRU from "../components/HttpPageComponents/HttpRU.tsx";
import { Helmet } from "react-helmet";

export default function HttpPageRU() {
  return (
    <>
      <Helmet>
        <title>HTTP документация</title>
      </Helmet>
      <AppBar
        className1={"buttonLanguages"}
        href1={"/http/ua"}
        titleLanguage1={"UA"}
        className2={"buttonLanguages active"}
        href2={"/http/ru"}
        titleLanguage2={"RU"}
        home={"/learning/ru"}
        to1={"/learning/ru"}
        to2={"/html/ru"}
        to3={"/css/ru"}
        to4={"/scss/ru"}
        to5={"/js/ru"}
        to6={"/dom/ru"}
        to7={"/bom/ru"}
        to8={"/http/ru"}
        to9={"/react/ru"}
        to10={"/redux/ru"}
        to11={"/ts/ru"}
        to12={"/next/ru"}
        name1={"Главная страница"}
        name2={"HTML5"}
        name3={"CSS"}
        name4={"SCSS"}
        name5={"JavaScript"}
        name6={"DOM"}
        name7={"BOM"}
        name8={"HTTP"}
        name9={"React"}
        name10={"Redux"}
        name11={"TypeScript"}
        name12={"NextJS"}
      />
      <HttpRU />
    </>
  );
}
