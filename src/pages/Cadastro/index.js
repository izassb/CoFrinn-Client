/* eslint-disable */
import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import AuthService from "../../services/auth";
import { showSuccessMessage, showErrorMessage } from "../../components/toastr";

function Cadastro() {
  const handleRegister = (values) => {
    const data = {
      nome: values.nome,
      email: values.email,
      senha: values.senha,
      confirmation: values.confirmation,
    };

    try {
      let res = AuthService.cadastrarUsuario(data).then(
        (response) => {
          AuthService.initSession(response.data);
          showSuccessMessage("Usuario cadastrado com sucesso");
          window.location.href = "/home";
        },
        (error) => {
          showErrorMessage(error.response.data);
        }
      );
    } catch (error) {
      showErrorMessage("Erro ao cadastrar usuário");
    }
  };

  const validationsRegister = yup.object().shape({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    senha: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("senha"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });

  return (
    <div className="content">
      <div className="container">
        <div className="text">
          <h1 className="title">CoFrinn</h1>
          <h5 className="subtitle">
            A melhor forma de gerenciar suas despesas financeiras
          </h5>
        </div>
        <div className="description">
          <h1 className="text-description">Cadastre-se</h1>
        </div>
        <Formik
          initialValues={{
            nome: "",
            email: "",
            senha: "",
            confirmation: "",
          }}
          validationSchema={validationsRegister}
          onSubmit={handleRegister}
        >
          <Form>
            <div className="mb-3">
              <Field
                name="nome"
                type="text"
                className="form-field"
                placeholder="Digite seu nome"
              />

              <ErrorMessage
                component="span"
                name="nome"
                className="form-error"
              />
            </div>

            <div className="mb-3">
              <Field
                name="email"
                type="email"
                className="form-field"
                placeholder="Digite seu email"
              />

              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </div>

            <div className="mb-3">
              <Field
                name="senha"
                className="form-field"
                type="password"
                placeholder="Digite sua senha"
              />

              <ErrorMessage
                component="span"
                name="senha"
                className="form-error"
              />
            </div>

            <div className="mb-3">
              <Field
                name="confirmation"
                className="form-field"
                type="password"
                placeholder="Confirme sua senha"
              />

              <ErrorMessage
                component="span"
                name="confirmation"
                className="form-error"
              />
            </div>
            <div className="buttons">
              <Button variant="second" size="lg" type="submit">
                Cadastrar
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={() => (window.location.href = "/login")}
              >
                Cancelar
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Cadastro;
