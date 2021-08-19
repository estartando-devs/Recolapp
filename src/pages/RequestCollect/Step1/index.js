import React, { useState, useEffect } from "react";

import { SelectMaterial } from "../../../components/SelectMaterial";
import { TabBar } from "../../../components/TabBar";
import { getDefaultMaterials } from "../../../services/defaultMaterials";

import * as S from "./styles";

const Step1 = ({ nextPage, order, setOrder }) => {
  const [material, setMaterial] = useState(order);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (!order?.length) {
      const materialsDefault = getDefaultMaterials();
      setMaterial(materialsDefault);
    }
  }, []);

  const orderFilter = material?.filter((item) => item.status);
  const materialsQuantity = orderFilter?.length;

  useEffect(() => {
    setOrder(material);
    setDisable(materialsQuantity <= 0);
  }, [material]);

  return (
    <>
      <S.body>
        <S.backb pageTitle="Informe os materiais que serão coletados" />
        <S.materialselect>
          <span>Escolha quantas opções desejar.</span>
          <SelectMaterial material={material} setMaterial={setMaterial} />
        </S.materialselect>
        <S.bottonpage>
          <S.itensselected>
            <S.indicator>Itens selecionados</S.indicator>
            <S.spannum>{materialsQuantity}</S.spannum>
          </S.itensselected>
          <S.button disable={disable} onClick={nextPage}>
            Confirme
          </S.button>
        </S.bottonpage>
      </S.body>
      <TabBar />
    </>
  );
};
export default Step1;
