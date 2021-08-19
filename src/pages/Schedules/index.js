import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts";

import * as S from "./styles";

import myCollections from "../../assets/img/illustrations/meus_agendamentos.svg";

import { getCollectionsByUserID } from "../../services/collections";

const Schedules = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);

  const collections = getCollectionsByUserID(user.id);

  const logged = user?.name;

  return (
    <>
      {collections && (
        <>
          <S.HeaderDesktop logged={logged} />
          <S.CollectionsContainer>
            <S.CollectionsButton pageTitle="Meus agendamentos" />
            <S.CollectionsImg src={myCollections} />
            {collections.map(({ collection_id, title }) => (
              <S.ViewSettings
                key={collection_id}
                title={title}
                onClick={() => history.push(`schedules/${collection_id}`)}
              />
            ))}
          </S.CollectionsContainer>
          <S.MobileTabBar />
        </>
      )}
    </>
  );
};

export default Schedules;
