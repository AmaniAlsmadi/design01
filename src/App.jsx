import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import About from "./components/about"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

