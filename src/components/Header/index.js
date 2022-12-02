/* eslint-disable */
import React from "react";
import AuthService from "../../services/auth";
import * as C from "./styles";

const Header = () => {
  const users = AuthService.getUserAuth();

  const redirect = () => {
    window.location.href = "/perfil";
  };

  return (
    <C.Container>
      <C.Header>
        <C.Title>CoFrinn</C.Title>
        <C.SubTitle onClick={redirect}>{users.nome}</C.SubTitle>
      </C.Header>
    </C.Container>
  );
};
export default Header;
