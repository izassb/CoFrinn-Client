/* eslint-disable */
import React, { useState } from "react";
import AuthService from "../../services/auth";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ( { handleAdd, transactionsList, setTransactionsList }) => {

  const [descricao, setDesc] = useState("");
  const [valor, setAmount] = useState("");
  const [ tipo, setTipo] = useState("");

  const handleSave = () => {

    const user = AuthService.getUserAuth();

    if (!descricao || !valor) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (valor < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }
    const transaction = {
      descricao: descricao,
      valor: valor,
      tipo:tipo,
      usuario:user.id,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={descricao} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={valor}
            type="number"
            onChange={(e) => {setAmount(e.target.value)}}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            name="group1"
            value="RECEITA"
            onChange={(e) => setTipo(e.target.value)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            value="DESPESA"
            onChange={(e) => setTipo(e.target.value)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup> 
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
       <Grid itens={transactionsList} setItens={setTransactionsList}/> 
    </>
  );
};

export default Form;