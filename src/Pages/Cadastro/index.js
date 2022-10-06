import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cadastro() {
  return (
    <div className="content">
      <div className="container">
        <div className="text">
          <h1 className="title">CoFrinn</h1>
          <h5 className="subtitle">A melhor forma de gerenciar suas despesas financeiras</h5>
        </div>
        <div className="description">
          <h1 className="text-description">
            Cadastre-se
          </h1>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control type="text" placeholder="Digite seu nome" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Digite seu e-mail" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Digite sua senha" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirme sua senha" />
          </Form.Group>
        </Form>
        <div className="buttons">
            <Button variant="second" size="lg"> Cadastrar </Button>
            <Button variant="primary" size="lg"> Cancelar </Button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;