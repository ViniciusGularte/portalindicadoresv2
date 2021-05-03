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
import { star, calculator, clipboard } from "ionicons/icons";
import { data } from "../../services/indicadores_data";
import Footer from "../Footer";
import { addData, createDB } from "../../services/indexDB";

const Indicadores: React.FC<{ history: any; match: any }> = ({ history }) => {
  const [listaIndicadores, setIndicadores] = useState(data);
  const [listaIndicadoresAlterados] = useState(data); //setIndicadoresAlterados
  const [searchText, setSearchText] = useState("");
  console.log(listaIndicadores);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <h4>Indicadores</h4>
          <IonButtons slot="end">
            <IonButton
              color="warning"
              onClick={() => {
                let favoritosAtual = JSON.parse(
                  localStorage.getItem("favoritos")
                );
                let favoritos = listaIndicadoresAlterados.filter(
                  (indicador) => {
                    return indicador.favorito === true;
                  }
                );
                if (favoritosAtual === "[]") {
                  addData(favoritos);
                  localStorage.setItem("favoritos", JSON.stringify(favoritos));
                  setIndicadores(favoritos);
                  console.log(favoritos);
                } else {
                  setIndicadores(favoritos);
                  let x = favoritos.filter((indicador) => {
                    addData(indicador.id);
                  });

                  //setIndicadores(favoritosAtual);
                }
              }}
            >
              <IonIcon size={"large"} icon={star} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              color="primary"
              onClick={() => {
                history.push(`/home/indicador/relatorio`);
              }}
            >
              <IonIcon size={"large"} icon={clipboard} />
            </IonButton>
          </IonButtons>
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
                  fill="outline"
                  expand="block"
                  color="primary"
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
                  fill="outline"
                  expand="block"
                  color="primary"
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
                  fill="outline"
                  expand="block"
                  color="primary"
                  onClick={() => {
                    const globais = getIndicadorByGrupo("2");
                    setIndicadores(globais);
                    console.log("globais");
                  }}
                >
                  Globais
                </IonButton>
              </IonCol>
              <IonCol size-sm="6" size-md="3">
                <IonButton
                  size="small"
                  fill="outline"
                  expand="block"
                  color="primary"
                  onClick={() => {
                    const zootecnicos = getIndicadorByGrupo("3");
                    setIndicadores(zootecnicos);
                    console.log("zootecnicos");
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
            {listaIndicadores.map((indicador) => (
              <IonItemSliding>
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
                  <IonButton
                    item-content
                    fill="clear"
                    slot="end"
                    size="default"
                    color="warning"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={"Favoritar"}
                    onClick={() => {
                      let favoritar = data.filter((data) => {
                        console.log(indicador.id);

                        if (data.favorito === false && indicador.id === data.id)
                          return (data.favorito = true);
                        else if (
                          data.favorito === true &&
                          indicador.id === data.id
                        )
                          return (data.favorito = false);
                        else return 0;
                      });
                    }}
                  >
                    <IonIcon size={"medium"} icon={star} />
                  </IonButton>
                  <IonButton
                    item-content
                    fill="clear"
                    slot="end"
                    size="default"
                    color="primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={"relatorio"}
                    onClick={() => {
                      let fazerrelatorio = data.filter((data) => {
                        console.log(indicador.id);

                        if (
                          data.relatorio === false &&
                          indicador.id === data.id
                        )
                          return (data.relatorio = true);
                        else if (
                          data.relatorio === true &&
                          indicador.id === data.id
                        )
                          return (data.relatorio = false);
                        else return 0;
                      });
                    }}
                  >
                    <IonIcon size={"medium"} icon={clipboard} />
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
