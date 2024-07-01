import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//****************************** pages ******************************
import Home from "./pages/Home/Index";
import Contact from "./pages/Contact/Index";

import Works from "./pages/Works/Index";

import NotFound from "./pages/NotFound/Index";
//****************************** components ******************************
import NavBar from "./components/NavBar";
import './assets/styles/App.css'

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>

      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />

          <Route
            path="/contact"
            element={ <Contact />}
          />
          <Route
            path="/works"
            element={ <Works />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
