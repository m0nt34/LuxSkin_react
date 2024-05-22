import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//****************************** pages ******************************
import Home from "./pages/Home/Index";
import Contact from "./pages/Contact/Index";
// const Contact = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./pages/Contact/Index")), 800);
//   });
// });
import Works from "./pages/Works/Index";
// const Works = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./pages/Works/Index")), 800);
//   });
// });
//const Contact = React.lazy(()=>import("./pages/Contact/Index"));
// import Works from "./pages/Works/Index";
//const Works = React.lazy(()=>import("./pages/Works/Index"));

import NotFound from "./pages/NotFound/Index";
//****************************** components ******************************
import NavBar from "./components/NavBar";
import './App.css'

function App() {
  const location = useLocation();



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
