import {
  IonTitle,
  IonToolbar,
  IonFooter,
  IonRouterLink,
  IonImg,
} from "@ionic/react";
import React from "react";
const Footer = () => {
  return (
    <IonFooter>
      <IonToolbar className="ion-text-center">
        <IonTitle
          style={{
            marginBottom: 12,
          }}
          size="small"
        >
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
          © 2023 -{" "}
          <IonRouterLink href="https://www.embrapa.br/pecuaria-sul">
            Embrapa pecuária sul
          </IonRouterLink>{" "}
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};
export default Footer;
