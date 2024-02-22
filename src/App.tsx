import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageUA from "./pages/HomePageUA.tsx";
import HomePageRU from "./pages/HomePageRU.tsx";
import HtmlPageRU from "./pages/HtmlPageRU.tsx";
import HtmlPageUA from "./pages/HtmlPageUA.tsx";
import HttpPageRU from "./pages/HttpPageRU.tsx";
import HttpPageUA from "./pages/HttpPageUA.tsx";
import CssPageRU from "./pages/CssPageRU.tsx";
import CssPageUA from "./pages/CssPageUA.tsx";
import ScssPageRU from "./pages/ScssPageRU.tsx";
import ScssPageUA from "./pages/ScssPageUA.tsx";
import DomPageRU from "./pages/DomPageRU.tsx";
import DomPageUA from "./pages/DomPageUA.tsx";
import BomPageRU from "./pages/BomPageRU.tsx";
import BomPageUA from "./pages/BomPageUA.tsx";
import JavaScriptPageRU from "./pages/JavaScriptPageRU.tsx";
import JavaScriptPageUA from "./pages/JavaScriptPageUA.tsx";
import TypeScriptPageRU from "./pages/TypeScriptPageRU.tsx";
import TypeScriptPageUA from "./pages/TypeScriptPageUA.tsx";
import ReactPageRU from "./pages/ReactPageRU.tsx";
import ReactPageUA from "./pages/ReactPageUA.tsx";
import ReduxPageRU from "./pages/ReduxPageRU.tsx";
import ReduxPageUA from "./pages/ReduxPageUA.tsx";
import NextPageRU from "./pages/NextPageRU.tsx";
import NextPageUA from "./pages/NextPageUA.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/learning" element={<HomePageUA />} />;
          <Route path="/learning/ru" element={<HomePageRU />} />
          <Route path="/html/ru" element={<HtmlPageRU />} />
          <Route path="/html/ua" element={<HtmlPageUA />} />
          <Route path="/http/ru" element={<HttpPageRU />} />
          <Route path="/http/ua" element={<HttpPageUA />} />
          <Route path="/css/ru" element={<CssPageRU />} />
          <Route path="/css/ua" element={<CssPageUA />} />
          <Route path="/scss/ru" element={<ScssPageRU />} />
          <Route path="/scss/ua" element={<ScssPageUA />} />
          <Route path="/dom/ru" element={<DomPageRU />} />
          <Route path="/dom/ua" element={<DomPageUA />} />
          <Route path="/bom/ru" element={<BomPageRU />} />
          <Route path="/bom/ua" element={<BomPageUA />} />
          <Route path="/js/ru" element={<JavaScriptPageRU />} />
          <Route path="/js/ua" element={<JavaScriptPageUA />} />
          <Route path="/ts/ru" element={<TypeScriptPageRU />} />
          <Route path="/ts/ua" element={<TypeScriptPageUA />} />
          <Route path="/react/ru" element={<ReactPageRU />} />
          <Route path="/react/ua" element={<ReactPageUA />} />
          <Route path="/redux/ru" element={<ReduxPageRU />} />
          <Route path="/redux/ua" element={<ReduxPageUA />} />
          <Route path="/next/ru" element={<NextPageRU />} />
          <Route path="/next/ua" element={<NextPageUA />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
