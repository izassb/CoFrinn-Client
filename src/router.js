/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import TelaPrincipal from "./pages/TelaPrincipal";
import EsqueciSenha from "./pages/EsqueciSenha"

const Routers = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<TelaPrincipal />} />
      <Route path="/esquecisenha" element={<EsqueciSenha />} />
    </Routes>
  </Router>
);

export default Routers;
