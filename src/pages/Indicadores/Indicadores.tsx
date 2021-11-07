/* eslint no-use-before-define: 0 */ // --> OFF
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { pdf, Document, Page, Text, View } from "@react-pdf/renderer";

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
import { Indicador } from "../../services/interfaces/indicador";

import { calculator, clipboard } from "ionicons/icons";
import { data } from "../../services/indicadores_data";
import Footer from "../Footer";

const Indicadores: React.FC<{ history: any; match: any }> = ({ history }) => {
  const [listaIndicadores, setIndicadores] = useState(data);

  const [searchText, setSearchText] = useState("");
  

  const IndicadorPdf = ({ indicador }: { indicador: Indicador }) => (
    <Document>
      <Page>
        <View style={{ textAlign: "center", margin: 30 }}>
          <Text>{indicador.nome}</Text>
        </View>
        <View style={{ margin: 30 }}>
          <Text>Conceito: {indicador.conceito}</Text>
        </View>
        <View style={{ margin: 30 }}>
          <Text>Formula: {indicador.formula}</Text>
        </View>
        <View style={{ margin: 30 }}>
          <Text>Exemplo: {indicador.exemplo}</Text>
        </View>
      </Page>
    </Document>
  );
  const downloadFile = (blob, fileName) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 7000);
  };
  const downloadPdfIndicador = async (indicador: Indicador) => {
    const blob = await pdf(<IndicadorPdf indicador={indicador} />).toBlob();
    downloadFile(blob, indicador.nome);
  };
  const gerarRelatorioCompleto = async () => {
    let pages = [];
    listaIndicadores.forEach((indicador, key) => {
      pages.push(
        <Page>
          <View style={{ textAlign: "center", margin: 30 }}>
            <Text>{indicador.nome}</Text>
          </View>
          <View style={{ margin: 30 }}>
            <Text>Conceito: {indicador.conceito}</Text>
          </View>
          <View style={{ margin: 30 }}>
            <Text>Formula: {indicador.formula}</Text>
          </View>
          <View style={{ margin: 30 }}>
            <Text>Exemplo: {indicador.exemplo}</Text>
          </View>
        </Page>
      );
    });
    const blob = await pdf(<Document>{pages}</Document>).toBlob();
    downloadFile(blob, "Relatorio Embrapa Indicadores");
  };

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
              color="primary"
              onClick={() => {
                gerarRelatorioCompleto();
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

                  <IonButton
                    onClick={() => downloadPdfIndicador(indicador)}
                    item-content
                    fill="clear"
                    slot="end"
                    size="default"
                    color="primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={"Relatorio"}
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
