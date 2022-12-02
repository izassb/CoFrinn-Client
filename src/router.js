/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import TelaPrincipal from "./pages/TelaPrincipal";


const Routers = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<TelaPrincipal />} />
      <Route path="/perfil" element={<Perfil/>}/>
    </Routes>
  </Router>
);

export default Routers;
