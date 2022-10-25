import React, { useState } from 'react';
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
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="content">
      <div className="container">
        <div className="text">
          <h1 className="title">CoFrinn</h1>
          <h5 className="subtitle">A melhor forma de gerenciar suas despesas financeiras</h5>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup id="inputGroupPrepend" hasValidation>
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
            <InputGroup id="inputGroupPrepend" hasValidation>
              <Form.Control type="password" placeholder="Digite sua senha" aria-describedby="inputGroupPrepend" required />
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
          <a href="google.com"> Clique aqui </a>
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
