/* eslint-disable */
import axios from 'axios';
import ErrosValidacaoException from './errosValidacao';

const api = "http://localhost:8090/"

const LancamentoService = {

    saveLancamento(lancamento) {
        const endpoint = `${api}api/lancamentos/`
        return axios.post(endpoint, lancamento);
    },

    updateLancamento(lancamento){
        const endpoint = `${api}api/lancamentos/${lancamento.id}`
        return axios.put(endpoint, lancamento);
    },

    deleteById(id){
        const endpoint = `${api}api/lancamentos/${id}`
        return axios.delete(endpoint);
    },

    getById(id) {
        const endpoint = `${api}api/lancamentos/${id}`
        return axios.get(endpoint);
      },

      getLancamentos(id) {
        const endpoint = `${api}api/lancamentos?usuario=${id}`
        return axios.get(endpoint);
      },

    consultar(filtro) {

        let params = `${api}api/lancamentos?usuario=${filtro.usuario}`;
    
        if(filtro.tipoLancamento)
          params += `${api}api/lancamentos&tipo=${filtro.tipoLancamento}`;
    
        if(filtro.descricao)
          params += `${api}api/lancamentos&descricao=${filtro.descricao}`;
    
        return axios.get(params);
      },

    validateFields(lancamento){
        const erros = []

        if(!lancamento.descricao){
          erros.push('Informe a descrição')
        }
    
        if(!lancamento.valor){
          erros.push('Informe o valor');
        }
    
        if(!lancamento.tipo){
          erros.push('Informe o tipo de lancamento');
        }
    
        if(erros && erros.length > 0){
          throw new ErrosValidacaoException(erros)
        }
      }
  }
  
  export default LancamentoService;