import React from 'react';
import './style.css';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div className="content">
      <div className="container">
        <div className="text">
          <h1>CoFrinn</h1>
          <h5>A melhor forma de gerenciar suas despesas financeiras</h5>
        </div>
        <Form id="input">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Digite seu email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Digite sua senha" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembre-se de mim" />
          </Form.Group>
        </Form>
        <ButtonGroup>
          <Button variant="primary" size="lg" background-color="blue"> Entrar </Button>
          <Button variant="primary" size="lg"> Entrar com Google </Button>
        </ButtonGroup>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Esqueceu sua senha?</Nav.Link>
        </Nav.Item>
        <h5>
          Ainda não tem uma conta?
          <Nav.Link eventKey="link-1">
            {' '}
            Clique aqui
            {' '}
          </Nav.Link>
          para cadastrar-se
        </h5>
      </div>
    </div>
  );
}

export default Login;
