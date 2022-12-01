/* eslint-disable */
import React, { useState } from "react";
import LancamentoService from "../../services/Lancamento";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import * as C from "./styles";
import * as messages from '../../components/toastr';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
  FaPen,
} from "react-icons/fa";

const Grid = ({ itens, setItens }) => {
  const [descricao, setDesc] = useState("");
  const [valor, setAmount] = useState(0);
  const [tipo, setTipo] = useState("");
  const [id, setId] = useState(null);
  const [usuario, setUsuario] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (up) => {
    setShow(true);
    setDesc(up.descricao);
    setAmount(up.valor);
    setTipo(up.tipo);
    setId(up.id);
    setUsuario(up.usuario.id);
  };

  const handleUpdate = () => {
    const lancamento = { descricao:descricao, valor:Number(valor), tipo:tipo, id:id, usuario:usuario};

    LancamentoService.updateLancamento(lancamento).then(response => {
      messages.showSuccessMessage("lancamento atualizado com sucesso");
      setShow(false);
    }).catch(err => {
      messages.showErrorMessage(err.response.data);
    })
 };

  const deletar = (id) => {

    LancamentoService.deleteById(id).then( (response) => {              
      messages.showSuccessMessage("Deletado com sucesso!");
        setItens({data: lancamentos});      
    }).catch(err => {
      messages.showErrorMessage(err.response.data);
    })
  }

  const rows = itens?.lancamentos?.map((item, index) => {
    return (
      <>
      <C.Tr key={index}>
         <C.Td>{item.descricao}</C.Td>
        <C.Td>{item.valor}</C.Td>
        <C.Td alignCenter>
          {item.tipo === "DESPESA" ? (
            <FaRegArrowAltCircleDown color="red" />
          ) : (
            <FaRegArrowAltCircleUp color="green" />
          )}
        </C.Td>
        <C.Td alignCenter>
            <FaPen onClick={()=>handleShow(item)}/>
        </C.Td>
        <C.Td alignCenter>
          <FaTrash onClick={() => deletar(item.id)} />
        </C.Td> 
      </C.Tr>
     </>
    );
  })

  return (
    <>
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
      {rows}
      </C.Tbody> 
    </C.Table>
      <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Laçamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <C.InputContent>
        <C.Label>Descrição</C.Label>
        <C.Input value={descricao} onChange={(e) => setDesc(e.target.value)} />
      </C.InputContent>
      <C.InputContent>
        <C.Label>Valor</C.Label>
        <C.Input
          value={valor}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </C.InputContent>
      <C.InputContent>
        <C.Label htmlFor="rIncome">Tipo</C.Label>
        <C.Input
          type="text"
          id="rExpenses"
          name="group1"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          // disabled={isDisabled}
        />
      </C.InputContent>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Save Changes
        </Button>
      </Modal.Footer>
      </Modal>
         </>
  );
  
};

export default Grid;