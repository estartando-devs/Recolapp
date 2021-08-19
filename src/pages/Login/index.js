import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts";

import { Button } from "../../components/Button";

import * as S from "./styles";

import image from "../../assets/img/illustrations/login.svg";
import { getUser } from "../../services/users";
import { auth } from "../../services/users/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const [errorDisable, setErroDisable] = useState(true);

  const history = useHistory();
  const { setUser } = useContext(UserContext);

  const authLogin = () => {
    const response = auth(email, password);

    if (response.auth) {
      localStorage.setItem("user", JSON.stringify(response.user));
      setUser(getUser(response.user.id));
      history.push("/home");
    } else {
      setErroDisable(false);
    }
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  return (
    <S.Body>
      <S.BackButtonLogin pageTitle="Faça seu login" />
      <S.Container>
        <S.Img src={image} alt="loginScreen" />
        <S.InputEmail
          id="email"
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <S.InputPassword
          type="password"
          id="password"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <S.ErrorMessage disable={errorDisable}>
          O email ou senha está errado. Por favor, tente novamente
        </S.ErrorMessage>
        <Button disable={disable} onClick={() => authLogin()}>
          Entrar
        </Button>
      </S.Container>
    </S.Body>
  );
};

export default Login;
