/* eslint-disable */
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';


function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(false);
    window.location.href = "/home";
  };

  return (
    <div className="content">
      <div className="container">
        <div className="text">
          <h1 className="title">CoFrinn</h1>
          <h5 className="subtitle">A melhor forma de gerenciar suas despesas financeiras</h5>
        </div>
        <Form validated={validated} onSubmit={handleSubmit} novalidate>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup id="inputGroupPrepend" validated>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Email inválido.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <InputGroup id="inputGroupPrepend" validated>
              <Form.Control type="password" placeholder="Digite sua senha" aria-describedby="inputGroupPrepend"/>
              <Form.Control.Feedback type="invalid">
                Senha inválida.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <div className="description">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Lembre-se de mim" />
            </Form.Group>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Esqueceu sua senha?</Nav.Link>
            </Nav.Item>
          </div>
          <div className="buttons">
            <Button variant="second" size="lg" type="submit"> Entrar </Button>
            <Button variant="primary" size="lg"> Entrar com Google </Button>
          </div>
        </Form>
        <div className="description2">
          <h5 className="text-description2">
            Ainda não tem uma conta?
          </h5>
          &nbsp;
          <Link to="/cadastro"> Clique aqui </Link>
          &nbsp;
          <h5 className="text-description2">
            para cadastrar-se
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
