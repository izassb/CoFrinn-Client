/* eslint-disable */
import axios from "axios";
import LocalStorageService from "./LocalStorageSerivce";

export const USUARIO_LOGADO = "_usuario_logado";

const api = "http://localhost:8090/";

const AuthService = {
  async authenticate(data) {
    const endpoint = `${api}/api/usuarios/autenticar`;
    return axios.post(endpoint, data);
  },

  initSession(usuario) {
    LocalStorageService.addItem(USUARIO_LOGADO, usuario);
  },

  getById(id) {
    const endpoint = `${api}api/usuarios?${id}`;
    return axios.get(endpoint);
  },

  updateUsuario(user) {
    const endpoint = `${api}api/usuarios/${user.id}`;
    return axios.put(endpoint, user);
  },

  getUserAuth() {
    return LocalStorageService.getItem(USUARIO_LOGADO);
  },

  obterSaldoUsuario(id) {
    const endpoint = `${api}/api/usuarios/${id}/saldo`;
    return axios.get(endpoint);
  },

  obterReceitaUsuario(id) {
    const endpoint = `${api}/api/usuarios/${id}/receita`;
    return axios.get(endpoint);
  },

  obterDespesaUsuario(id) {
    const endpoint = `${api}/api/usuarios/${id}/despesa`;
    return axios.get(endpoint);
  },

  cadastrarUsuario(usuario) {
    const endpoint = `${api}/api/usuarios/`;
    return axios.post(endpoint, usuario);
  },

  getLoggedUser() {
    let data = localStorage.getItem("user");
    if (!data) return null;
    try {
      let parsedData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  cleanLoggedUser() {
    localStorage.clear();
    window.location.href = "/login";
  },
};

export default AuthService;
