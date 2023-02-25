import React from "react";

import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonHeader,
  IonText,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AppPage } from "./declarations";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Indicadores from "./pages/Indicadores/Indicadores";
import IndicadorInfo from "./pages/Indicadores/IndicadorInfo";
import IndicadorCalculadora from "./pages/Indicadores/IndicadorCalculadora";
import IndicadorRelatorio from "./pages/Indicadores/IndicadorRelatorio";
import { pdf, Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { data } from "./services/indicadores_data";

import {
  homeOutline,
  homeSharp,
  listOutline,
  listSharp,
  add,
  print,
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [listaIndicadores, setIndicadores] = React.useState(data);
  const appPages: AppPage[] = [
    {
      title: "Home",
      url: "/home",
      iosIcon: homeOutline,
      mdIcon: homeSharp,
    },
    {
      title: "Indicadores",
      url: "/home/indicadores",
      iosIcon: listOutline,
      mdIcon: listSharp,
    },
    {
      title: "Sugerir Indicadores Completo",
      url: "/sugerir",
      iosIcon: add,
      mdIcon: add,
      onClick: () => {
        let elementHref = document.createElement("a");
        elementHref.target = "_blank";
        elementHref.href = "https://forms.gle/AkdvuHvBgd79GLPV9";
        elementHref.click();
      },
    },
    {
      title: "Sugerir Indicadores Simplificado",
      url: "/sugerirsimples",
      iosIcon: add,
      mdIcon: add,
      onClick: () => {
        let elementHref = document.createElement("a");
        elementHref.target = "_blank";
        elementHref.href = "https://forms.gle/BusAxTrcFPEZRNNi6";
        elementHref.click();
      },
    },
    {
      title: "Gerar relatório completo",
      url: "/gerar-relatorio-completo",
      iosIcon: print,
      mdIcon: print,
      onClick: () => {
        const downloadFile = (blob, fileName) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = fileName;
          document.body.append(link);
          link.click();
          link.remove();
          setTimeout(() => URL.revokeObjectURL(link.href), 7000);
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

                <Image
                  src={"/images/embrapa.png"}
                  style={{
                    width: 100,
                    height: 100,
                    bottom: 60,
                    position: "absolute",
                    left: "40%",
                    textAlign: "center",
                  }}
                  fixed
                />
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 12,
                    bottom: 10,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    color: "grey",
                  }}
                  fixed
                >
                  Embrapa pecuária sul - 2023
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 12,
                    bottom: 30,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    color: "grey",
                  }}
                  render={({ pageNumber, totalPages }) =>
                    `${pageNumber} / ${totalPages}`
                  }
                  fixed
                />
              </Page>
            );
          });
          const blob = await pdf(<Document>{pages}</Document>).toBlob();
          downloadFile(blob, "Relatorio Embrapa Indicadores");
        };
        gerarRelatorioCompleto();
      },
    },
  ];

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonHeader>
            <h1>Embrapa Indicadores</h1>
          </IonHeader>
        </IonSplitPane>
        <IonSplitPane contentId="main">
          <Menu appPages={appPages} />
          <IonRouterOutlet id="main">
            <Route
              exact
              path="/index.html"
              render={() => <Redirect to="/home" />}
            />
            <Route path="/home" component={Home} exact />
            <Route
              path="/home/indicadores"
              component={(props) => (
                <Indicadores
                  {...props}
                  listaIndicadores={listaIndicadores}
                  setIndicadores={setIndicadores}
                />
              )}
              exact
            />
            <Route
              path="/home/indicador/relatorio"
              component={IndicadorRelatorio}
              exact
            />
            <Route path="/home/indicador/:id" component={IndicadorInfo} exact />
            <Route
              path="/home/indicador/calcular/:id"
              component={IndicadorCalculadora}
              exact
            />

            <Route path="/" render={() => <Redirect to="/home" />} exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
