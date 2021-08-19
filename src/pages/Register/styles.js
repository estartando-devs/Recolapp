import styled from "styled-components";

import { Mask } from "../../components/InputMask";
import BackButton from "../../components/BackButton";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/CheckBox";
import { HeaderWeb } from "../../components/HeaderWeb";

export const HeaderWebPage = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;

export const Container = styled.div`
  background-color: var(--lightGray);
  color: var(--textColor);
  padding: 0px 30px;

  /* display: flex; */
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 808px;
    margin: auto;
  }
`;

export const BackButtonRegister = styled(BackButton)`
  margin-top: 33px;
  margin-left: 0;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const RegisterTitle = styled.h1`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    font-size: 24px;
    color: var(--textColor);
    margin: 98px 0 65px 0;
  }
`;

export const FormContainer = styled.form`
  height: 100%;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
`;

export const NameCert = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
  }
`;

export const InputRegister = styled(Input)`
  gap: 4px;
  padding-bottom: 16px;
  width: 100%;

  @media (min-width: 768px) {
    /* height: 59px; */
  }
`;

export const MaskCertification = styled(Mask)`
  padding-bottom: 16px;
`;

export const EmailPass = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
  }
`;

export const PassCel = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
  }
`;

export const MaksCellphone = styled(Mask)`
  padding-bottom: 16px;
`;

export const AdressCity = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
  }
`;

export const MaskCep = styled(Mask)`
  width: 50%;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  gap: 24px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 50%;
  }
`;

export const SelectStates = styled(Select)`
  width: 50%;
`;

export const SelectTypeUser = styled(Select)`
  width: 50%;
  margin-bottom: 16.5px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const CepStates = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
  }
`;

export const CheckButton = styled.div`
  @media (min-width: 768px) {
    width: 600px;
    margin: auto;
    margin-top: 100px;
  }
`;

export const CheckboxRegister = styled(Checkbox)`
  margin-top: 16.5px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ButtonRegister = styled(Button)`
  margin-bottom: 51px;

  @media (min-width: 768px) {
    border-radius: 18px;
    height: 60px;
    font-size: 26px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 15px;
  color: ${({ disable }) => (disable ? "#FF0000FF" : "#FFFFFFAA")};
  margin-top: 6px;
  margin-bottom: 8px;
`;
