/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import AuthService from "../../services/auth";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import * as messages from "../../components/toastr";

function Perfil() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [id, setId] = useState(null);
  const [values, setValues] = React.useState([
    {
      senha: "",
      showPassword: false,
    },
  ]);

  useEffect(() => {
    const user = AuthService.getUserAuth();
    setId(user.id);

    AuthService.getById(user.id).then((response) => {
      setEmail(response.data[0].email);
      setNome(response.data[0].nome);
      setValues([
        { senha: response.data[0].senha, showPassword: !values.showPassword },
      ]);
    });
  }, []);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues([{ ...values, [prop]: event.target.value }]);
  };

  const handleSubmit = async () => {
    let data = {
      email: email,
      senha: values[0].senha,
      nome: nome,
      id: id,
    };

    try {
      let res = await AuthService.updateUsuario(data).then((response) => {
        AuthService.initSession(response.data);
        messages.showSuccessMessage("Usuario atualizado com sucesso");
      });
    } catch (error) {
      messages.showErrorMessage(error.response.data);
    }
  };

  return (
    <div className="content">
      <div className="container">
        <div className="text">
          <h1 className="title">Perfil</h1>
          <h5 className="subtitle">Edite suas informações</h5>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup id="inputGroupPrepend" validated>
              <Form.Control
                type="text"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup id="inputGroupPrepend" validated>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <InputGroup id="inputGroupPrepend" validated>
              <Form.Control
                type={values.showPassword ? "text" : "password"}
                value={values[0].senha}
                onChange={handlePasswordChange("senha")}
                aria-describedby="inputGroupPrepend"
              />
              <Button
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </InputGroup>
          </Form.Group>

          <div className="buttons">
            <Button variant="second" size="lg" onClick={handleSubmit}>
              {" "}
              Salvar{" "}
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                window.location.href = "/home";
              }}
            >
              {" "}
              Cancelar{" "}
            </Button>
          </div>
        </Form>
        <div className="logout">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              AuthService.cleanLoggedUser();
            }}
          >
            {" "}
            Sair da conta{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
