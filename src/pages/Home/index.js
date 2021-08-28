import React, { useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts";
import { signOut } from "../../services/auth.service";
import { SETTINGS } from "../../settings";

import ilustration from "../../assets/img/illustrations/empreendedor_ilu.svg";

import * as S from "./styles";

const Home = () => {
  const history = useHistory();

  const { user, setUser, setOrder, setOrderTimestamp } =
    useContext(UserContext);

  const requestCollectRoute =
    user?.typeUser === SETTINGS.TYPE_USER.EMTREPRENEUR
      ? "/request-collect"
      : "/search-collect";

  const requestCollectButtonName =
    user?.typeUser === SETTINGS.TYPE_USER.EMTREPRENEUR ? "Solicitar" : "Buscar";

  const islogged = user?.name;

  useEffect(() => {
    setOrder([]);
    setOrderTimestamp("");
  }, []);

  const fullName = user?.name;
  const firstName = fullName.split(" ");

  return (
    <>
      <S.HeaderDesktop logged={islogged} />
      <S.PageE>
        <S.BackButtonHE
          handleBack={() => signOut(history, setUser)}
          pageTitle="Sair"
        />
        <S.FirstText>{`Olá, ${firstName.find((item) => item)}!`}</S.FirstText>
        <S.mid>
          <S.image src={ilustration} alt="bussines man" />
          <S.ButtonRequest onClick={() => history.push(requestCollectRoute)}>
            {`${requestCollectButtonName} coleta`}
          </S.ButtonRequest>
          <S.ButtonSchedules onClick={() => history.push("/schedules")}>
            Agendamentos
          </S.ButtonSchedules>
        </S.mid>
      </S.PageE>
      <S.TabBarHomeEnterpreneur />
    </>
  );
};

export default Home;
