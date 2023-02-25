import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
  IonRouterLink,
  IonImg,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPage } from "../declarations";

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
  <IonMenu contentId="main" type="overlay">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Portal Indicadores</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {appPages.map((appPage, index) => {
          return (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                onClick={appPage.onClick}
                routerLink={appPage.onClick ? "/home/indicadores" : appPage.url}
                routerDirection="none"
              >
                <IonIcon
                  slot="start"
                  ios={appPage.iosIcon}
                  md={appPage.mdIcon}
                />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
      </IonList>
    </IonContent>
    <IonFooter
      style={{
        marginBottom: 16,
      }}
    >
      <IonToolbar>
        <IonImg
          src="/images/embrapa.png"
          style={{
            width: 100,
            height: 100,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          alt="embrapa"
        />
        <IonRouterLink
          style={{
            marginBottom: 2,
            textAlign: "center",
          }}
          href="https://www.embrapa.br"
        >
          <IonTitle
            style={{
              fontSize: 16,
              textAlign: "center",
            }}
          >
            {" "}
            Empresa Brasileira de Pesquisa Agropecuária
          </IonTitle>
        </IonRouterLink>{" "}
        <IonRouterLink
          style={{
            textAlign: "center",
          }}
          href="https://www.embrapa.br"
        >
          <IonTitle
            style={{
              fontSize: 12,
              textAlign: "center",
            }}
          >
            Ministério da Agricultura, Pecuária e Abastecimento
          </IonTitle>
        </IonRouterLink>
      </IonToolbar>
    </IonFooter>
  </IonMenu>
);

export default withRouter(Menu);
