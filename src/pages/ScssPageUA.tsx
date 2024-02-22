import React from "react";
import AppBar from "../components/AppBar.tsx";
import ScssUA from "../components/ScssPageComponents/ScssUA.tsx";
import { Helmet } from "react-helmet";

export default function ScssPageUA() {
  return (
    <>
      <Helmet>
        <title>SCSS документація</title>
      </Helmet>
      <AppBar
        className1={"buttonLanguages active"}
        href1={"/scss/ua"}
        titleLanguage1={"UA"}
        className2={"buttonLanguages "}
        href2={"/scss/ru"}
        titleLanguage2={"RU"}
        home={"/learning"}
        to1={"/learning"}
        to2={"/html/ua"}
        to3={"/css/ua"}
        to4={"/scss/ua"}
        to5={"/js/ua"}
        to6={"/dom/ua"}
        to7={"/bom/ua"}
        to8={"/http/ua"}
        to9={"/react/ua"}
        to10={"/redux/ua"}
        to11={"/ts/ua"}
        to12={"/next/ua"}
        name1={"Головна сторінка"}
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
      <ScssUA />
    </>
  );
}
