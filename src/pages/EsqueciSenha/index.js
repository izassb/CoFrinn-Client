import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function EsqueciSenha() {
  return (
    <div className="content">
      <div className="container">
        <div className="text">
          <h1 className="title">Esqueceu a senha?</h1>
          <h5 className="subtitle">Digite seu e-mail cadastrado e siga o passo a passo que te enviaremos</h5>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup id="inputGroupPrepend">
              <Form.Control
                type="email"
                placeholder="Digite seu email cadastrado"
                aria-describedby="inputGroupPrepend"
              />
            </InputGroup>
          </Form.Group>
        </Form>
        <div className="buttons">
          <Button variant="second" size="lg" type="submit"> Enviar </Button>
          <Button variant="primary" size="lg"> Cancelar </Button>
        </div>
      </div>
    </div>
  );
}

export default EsqueciSenha;
