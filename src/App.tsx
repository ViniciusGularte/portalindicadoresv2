import React from "react";


import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AppPage } from "./declarations";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Indicadores from "./pages/Indicadores/Indicadores";
import IndicadorInfo from "./pages/Indicadores/IndicadorInfo";
import IndicadorCalculadora from "./pages/Indicadores/IndicadorCalculadora";
import IndicadorRelatorio from "./pages/Indicadores/IndicadorRelatorio";

import { homeOutline, homeSharp, listOutline, listSharp, add } from "ionicons/icons";

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

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: "Indicadores",
    url: "/home/indicadores",
    iosIcon: listOutline,
    mdIcon: listSharp
  },
  {
    title: "Sugerir Indicadores Completo",
    url: "/sugerir",
    iosIcon: add,
    mdIcon: add
  },
  {
    title: "Sugerir Indicadores Simplificado",
    url: "/sugerirsimples",
    iosIcon: add,
    mdIcon: add
  }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route exact path="/index.html" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} exact />
          <Route path="/home/indicadores" component={Indicadores} exact />
          <Route path="/home/indicador/relatorio" component={IndicadorRelatorio} exact />
          <Route path="/home/indicador/:id" component={IndicadorInfo} exact />
          <Route
            path="/home/indicador/calcular/:id"
            component={IndicadorCalculadora}
            exact
          />

          <Route
            path="/sugerir"
            component={() => {
              window.location.href = "https://forms.gle/AkdvuHvBgd79GLPV9";
              
              return null;
            }}
            exact
          />
          <Route
            path="/sugerirsimples"
            component={() => {
              window.location.href = "https://forms.gle/BusAxTrcFPEZRNNi6";
              
              return null;
            }}
            exact
          />
          <Route path="/" render={() => <Redirect to="/home" />} exact/>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
