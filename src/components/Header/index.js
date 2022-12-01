/* eslint-disable */
import React, { useEffect, useState } from "react";
import AuthService from '../../services/auth';
import * as C from './styles'

const Header = () => {
  const users = AuthService.getUserAuth();

  const redirect = () =>{
    window.location.href='/perfil'
  }

  return (
    <C.Container>
        <C.Header>
            <C.Title>CoFrinn</C.Title>
            <C.Buttonn onClick={redirect}><C.Title >{users.nome}</C.Title></C.Buttonn>
            {/* <C.Button onClick={() => AuthService.cleanLoggedUser()}>Sair</C.Button> */}
        </C.Header>
    </C.Container>
  )
};
export default Header;
