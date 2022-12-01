/* eslint-disable */
import React, { useState,useEffect } from "react";
import Header from "../../components/Header";
import Resume from "../../components/Resume";
import GlobalStyle from '../../styles/global';
import Form from "../../components/Form";
import AuthService from "../../services/auth";
import LancamentoService from "../../services/Lancamento";
import * as messages from '../../components/toastr';

function TelaPrincipal() {
  const user =  AuthService.getUserAuth();
  const [lancamento, setLancamento] = useState([]);

  useEffect(() => {
    const filtro = {
      usuario: user.id,
      tipo: lancamento.tipoLancamento,
      descricao: lancamento.descricao,
      valor: lancamento.valor,
    }

    try{
    LancamentoService.consultar(filtro).then(response =>{
      setLancamento({ lancamentos: response.data})
    }).catch(err => {
      messages.showErrorMessage(err.response.data);
    });
    } catch(error) {
      messages.showErrorMessage("Erro ao consultar lançamentos.")
    };
  }, [lancamento]);

  const handleAdd = (transaction) => {
    try {
      LancamentoService.validateFields(transaction);
    } catch (error) {
      messages.showErrorMessage(error.mensagens);
    }
    LancamentoService.saveLancamento(transaction).then(response => {
      messages.showSuccessMessage('Lançamento cadastrado com sucesso.')
    }).catch(error => {
      messages.showErrorMessage(error.response.data);
    });
  };
  
  return (
    <>
     <Header/>
    <Resume />
    <Form
        handleAdd={handleAdd}
        transactionsList={lancamento}
        setTransactionsList={setLancamento}
      />
    <GlobalStyle/>
    </>
  );
};
export default TelaPrincipal;