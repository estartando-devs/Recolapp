import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts";
import { getUserById } from "../../services/users.service";

import * as S from "./styles";

import myCollections from "../../assets/img/illustrations/meus_agendamentos.svg";

import {
  getCollectionsByUserID,
  getCollectionsByCollectorID,
} from "../../services/recycleCollection.service";

import { weekDaysMock } from "../../mock/weekDays";

import { SETTINGS } from "../../settings";

const Schedules = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);

  const getCollections =
    user?.typeUser === SETTINGS.TYPE_USER.EMTREPRENEUR
      ? getCollectionsByUserID
      : getCollectionsByCollectorID;

  const [collections, setCollections] = useState([]);

  const logged = user?.name;

  useEffect(() => {
    (async () => {
      const collectionsResponse = await getCollections(user?.id); // [ {...} ]

      const collectionsMapped = await Promise.all(
        collectionsResponse.map(async (collection) => {
          const userId =
            user?.typeUser === SETTINGS.TYPE_USER.EMTREPRENEUR
              ? collection.collector_id
              : collection.user_id;

          const userEnd = await getUserById(userId);

          return {
            ...collection,
            userEnd,
          };
        })
      );

      setCollections(collectionsMapped);
    })();
  }, []);

  return (
    <>
      {collections && (
        <>
          <S.HeaderDesktop logged={logged} />
          <S.CollectionsContainer>
            <S.CollectionsButton pageTitle="Meus agendamentos" />
            <S.DesktopAling>
              <S.DesktopContainer>
                <S.ContainerImg>
                  <S.CollectionsImg
                    src={myCollections}
                    marginDesktop={
                      collections.length ? "50px 0 50px 0" : "100px auto 0 auto"
                    }
                  />
                </S.ContainerImg>
                {collections.length ? (
                  collections.map(({ id, date, time, day, userEnd }) => (
                    <S.ViewSettings
                      key={id}
                      title={userEnd?.name}
                      date={`${weekDaysMock[day]}, ${date} - ${time}h`}
                      onClick={() => history.push(`schedules/${id}`)}
                    />
                  ))
                ) : (
                  <S.NoItemsMessage>
                    Ops...
                    <br />
                    ainda não tem agendamentos!
                  </S.NoItemsMessage>
                )}
              </S.DesktopContainer>
            </S.DesktopAling>
          </S.CollectionsContainer>
          <S.MobileTabBar />
        </>
      )}
    </>
  );
};

export default Schedules;
