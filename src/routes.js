import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

//import Exemple from "./composant/Exemple";
//import Footer from "./composant/Footer";
//import Navbar from "./composant/Navbar";
//import App from "./App";
import { Oval } from "react-loader-spinner";

const Exemple = lazy(() => import("./composant/Exemple"));
const Footer = lazy(() => import("./composant/Footer"));
const Navbar = lazy(() => import("./composant/Navbar"));
const App = lazy(() => import("./App"));
const Home = lazy(() => import("./composant/Home"));

export default function routes() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <Oval width="20" height="20" color="#4fa94d"/>
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="Navbar" element={<Navbar />} />
          <Route path="Footer" element={<Footer />} />
          <Route path="Exemple" element={<Exemple />} />
          <Route path="App" element={<App />} />
          <Route path="Home" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}