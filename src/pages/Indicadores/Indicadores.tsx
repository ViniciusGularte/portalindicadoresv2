/* eslint no-use-before-define: 0 */ // --> OFF
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

import {
  IonPage,
  IonHeader,
  IonContent,
  IonCard,
  IonButtons,
  IonToolbar,
  IonMenuButton,
  IonList,
  IonItem,
  IonIcon,
  IonSearchbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItemSliding,
  IonRouterLink,
} from "@ionic/react";
import {
  getIndicadorByGrupo,
  getIndicadorBySearch,
} from "../../services/Helpers/filterHelper";

import { calculator } from "ionicons/icons";
import { data } from "../../services/indicadores_data";
import Footer from "../Footer";
const Indicadores: React.FC<{
  history: any;
  match: any;
  listaIndicadores: any;
  setIndicadores: any;
}> = ({ history, listaIndicadores, setIndicadores }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <h4>Indicadores</h4>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonSearchbar
            type="text"
            animated
            placeholder="Pesquise Indicadores Aqui"
            value={searchText}
            onIonChange={(e) => {
              setSearchText(e.detail.value!);
              let search = getIndicadorBySearch(e.detail.value!);
              setIndicadores(search);
            }}
          ></IonSearchbar>
          <IonGrid>
            <IonRow>
              <IonCol size-sm="6" size-md="3">
                <IonButton
                  size="small"
                  fill="solid"
                  expand="block"
                  color="success"
                  onClick={() => {
                    setIndicadores(data);
                  }}
                >
                  Todos
                </IonButton>
              </IonCol>
              <IonCol size-sm="6" size-md="3">
                <IonButton
                  size="small"
                  fill="solid"
                  expand="block"
                  color="success"
                  onClick={() => {
                    const economicos = getIndicadorByGrupo("1");
                    setIndicadores(economicos);
                  }}
                >
                  Economicos
                </IonButton>
              </IonCol>
              <IonCol size-sm="6" size-md="3">
                <IonButton
                  size="small"
                  fill="solid"
                  expand="block"
                  color="success"
                  onClick={() => {
                    const globais = getIndicadorByGrupo("2");
                    setIndicadores(globais);
                  }}
                >
                  Globais
                </IonButton>
              </IonCol>
              <IonCol size-sm="6" size-md="3">
                <IonButton
                  size="small"
                  fill="solid"
                  expand="block"
                  color="success"
                  onClick={() => {
                    const zootecnicos = getIndicadorByGrupo("3");
                    setIndicadores(zootecnicos);
                  }}
                >
                  Zootecnicos
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>

        <IonCard>
          <IonList>
            {listaIndicadores.map((indicador, key) => (
              <IonItemSliding key={key}>
                <IonItem>
                  <IonRouterLink href={`/home/indicador/${indicador.id}`}>
                    {indicador.nome}
                  </IonRouterLink>
                  <IonButton
                    item-content
                    fill="clear"
                    slot="end"
                    size="large"
                    color="primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={"Calcular Indicador"}
                    onClick={() => {
                      history.push(`/home/indicador/calcular/${indicador.id}`);
                    }}
                  >
                    <IonIcon size={"large"} icon={calculator} />
                  </IonButton>
                </IonItem>
              </IonItemSliding>
            ))}
          </IonList>
        </IonCard>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Indicadores;
