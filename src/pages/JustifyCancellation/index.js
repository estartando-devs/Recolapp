import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import * as S from "./styles";

import { Button } from "../../components/Button";
import { TabBar } from "../../components/TabBar";
import { SelectMessage } from "../../components/SelectMessage";

const JustifyCancelled = () => {
  const history = useHistory();
  const options = [
    "Infelizmente tive um imprevisto e não poderei recebê-lo.",
    "Vou precisar agendar em outro horário.",
  ];

  const [selectedMessage, setSelectedMessage] = useState("");
  const [otherMessage, setOtherMessage] = useState("");

  const disable = selectedMessage.length === 0 && otherMessage.length === 0;

  const handleOtherMessage = (event) => {
    const newMessage = event.target.value;
    setOtherMessage(newMessage);
    setSelectedMessage("");
  };

  const handleSelectedMessage = (text) => {
    setSelectedMessage(text);
    setOtherMessage("");
  };

  return (
    <>
      <S.ContainerCancelled>
        <S.Title>Sua coleta foi CANCELADA.</S.Title>
        <S.SubTitle>
          Para deixar uma mensagem para o Coletor, basta clicar em alguma das
          opções abaixo:
        </S.SubTitle>
        <S.ContainerOptions>
          <SelectMessage
            messages={options}
            selectedMessage={selectedMessage}
            onClick={handleSelectedMessage}
          />
          <S.InputCancelled
            label="Outro:"
            labelColor="#000000"
            value={otherMessage}
            bgColor={otherMessage.length > 0 ? "#F28E36" : "#FDE5D7"}
            onChange={handleOtherMessage}
            placeholder="Deixe uma outra mensagem para o coletor"
          />
        </S.ContainerOptions>
        <Button
          disable={disable}
          onClick={() => history.push("/collect-cancelled")}
        >
          Confirmar mensagem
        </Button>
      </S.ContainerCancelled>
      <TabBar />
    </>
  );
};

export default JustifyCancelled;
