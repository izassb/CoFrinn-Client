import React from 'react';
import './style.css';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="content">
      <div className="container">
        <div className="text">
          <h1>CoFrinn</h1>
          <h5>A melhor forma de gerenciar suas despesas financeiras</h5>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Digite seu email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Digite sua senha" />
          </Form.Group>
          <div className="description">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Lembre-se de mim" />
            </Form.Group>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Esqueceu sua senha?</Nav.Link>
            </Nav.Item>
          </div>
        </Form>
        <div className="buttons">
          <ButtonGroup>
            <Button variant="second" size="lg"> Entrar </Button>
            <Button variant="primary" size="lg"> Entrar com Google </Button>
          </ButtonGroup>
        </div>
        <div className="description2">
          <h5>
            Ainda não tem uma conta? Clique aqui para cadastrar-se
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
