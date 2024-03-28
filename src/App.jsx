import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Espacec from "./pages/espacec/espacec";
import Home from "./pages/home/Home";
import Enreprise from "./pages/offre/entreprise/Enreprise";
import Espacep from "./pages/espacep/Espacep";
import Offre from "./pages/offre/Offre";
import Offres from "./pages/offre/offres";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Cp from "./pages/cp/Cp";
import Ce from "./pages/ce/Ce";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/espacec" element={<Espacec />} />
        <Route path="/cp" element={<Cp />} />
        <Route path="/Ce" element={<Ce />} />
        <Route path="/espacep" element={<Espacep />} />
        <Route path="/offre" element={<Offres />} />
        <Route path="/offre/:id" element={<Offre />} />
    </Routes>
    </BrowserRouter>
  );
}


export default App;
