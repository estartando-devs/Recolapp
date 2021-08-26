import styled from "styled-components";
import BackButton from "../../components/BackButton";
import { Button } from "../../components/Button";
import { HeaderWeb } from "../../components/HeaderWeb";
import { TabBar } from "../../components/TabBar";

export const HeaderWebSelCollection = styled(HeaderWeb)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--lightGray);
  min-height: calc(100vh - var(--tabBarHeight));
  overflow: auto;
  align-items: center;
  margin-bottom: 0;
  padding: 0 25px;
  /* width: 100%; */

  @media (min-width: 768px) {
    min-height: calc(100vh - var(--headerWebHeight));
    padding: 0px;
  }
`;

export const BackButtonSC = styled(BackButton)`
  margin-bottom: 48px;
  margin-top: 24px;
`;

export const ContainerSC = styled.div`
  width: 100%;
  min-height: 80%;
`;

export const ContainerTitle = styled.div`
  margin: 0 10px 18px 0;
`;

export const ContainerNumRes = styled.span`
  margin-right: 10px;
  font-size: 18px;
  font-weight: 700;
  color: var(--textColor);
  padding-left: 10px;
`;

export const ResultsName = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: var(--textColor);
`;

export const ResultSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: 300px;
`;

export const ContainerResults = styled.div`
  background-color: ${({ selected }) => (selected ? "red" : "#FDE5D7")};
  border-radius: 8px;

  width: 100%;
`;

export const Company = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: var(--textColor);
  padding-left: 15px;
`;

export const Address = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--textColor);
  padding-left: 15px;
`;

// export const ButtonContainer = styled.div``;

export const ButtonSC = styled(Button)`
  margin: 24px 0;
`;

export const TabBarSelCollection = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
