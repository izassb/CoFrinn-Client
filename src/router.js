/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import TelaPrincipal from "./Pages/TelaPrincipal";


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
