import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { book, browsers } from "ionicons/icons";
import React from "react";
import "./Home.css";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/images/icons/Portal-de-Indicadores2.png" alt=""  width="100%" height="100%" />
          <IonCardHeader>
            <IonCardTitle>Bem vindo ao portal de indicadores! </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Sistema de interface web do tipo glossário de indicadores zootécnicos, econômicos e globais utilizados na pecuária de corte.</p>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Recursos</IonLabel>
          </IonListHeader>
          <IonItem href="https://www.embrapa.br/" target="_blank">
            <IonIcon slot="start" color="primary" icon={browsers} />
            <IonLabel>Site da embrapa</IonLabel>
          </IonItem>
          <IonItem
            href="https://ionicframework.com/docs/building/scaffolding"
            target="_blank"
          >
            <IonIcon slot="start" color="primary" icon={book} />
            <IonLabel> Mais informações...</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
