import { IonTitle, IonToolbar, IonFooter, IonRouterLink } from "@ionic/react";
import React from "react";
const Footer = () => {
  return (
    <IonFooter>
      <IonToolbar className="ion-text-center">
        <IonTitle size="small">
          © 2022 -{" "}
          <IonRouterLink href="https://www.embrapa.br/pecuaria-sul">
            Embrapa pecuária sul
          </IonRouterLink>{" "}
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};
export default Footer;
