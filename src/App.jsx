import { useState } from "react";

import Header from "./componenets/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./componenets/Home/Home";
import About from "./componenets/About/About";
import Contact from "./componenets/Contact/Contact";
import Footer from "./componenets/Footer/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
