import { IonTitle, IonToolbar, IonFooter } from "@ionic/react";
import React from "react";
const Footer = () => {
  return (
    <IonFooter>
      <IonToolbar className="ion-text-center">
        <IonTitle size="small">© 2020 - Embrapa pecuária sul </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};
export default Footer;
