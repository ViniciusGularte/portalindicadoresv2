import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonCard,
  IonButtons,
  IonButton,
  IonToolbar,
  IonTitle,
  IonMenuButton,
  IonBackButton,
  IonLoading,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonSkeletonText,
} from "@ionic/react";
import { getIndicadorById } from "../../services/Helpers/filterHelper";
import { calculator, print } from "ionicons/icons";
import { pdf } from "@react-pdf/renderer";

import Footer from "../Footer";
import IndicadorPdf from "../../components/IndicadorPdf";
import { Indicador } from "../../services/interfaces/indicador";

const IndicadorInfo: React.FC<{ history: any; match: any }> = ({
  history,
  match,
}) => {
  const [showLoading, setShowLoading] = useState(true);
  const { id } = match.params;

  const indicador = getIndicadorById(id);
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
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Indicador {indicador.nome}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home/indicadores" />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              onClick={() => downloadPdfIndicador(indicador)}
              item-content
              fill="clear"
              slot="end"
              size="default"
              color="primary"
              data-toggle="tooltip"
              data-placement="top"
              title={`Relatorio ${indicador.nome}`}
            >
              <IonIcon size={"medium"} icon={print} />
            </IonButton>
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
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h4>Conceito:</h4>
                {showLoading ? (
                  <div className="ion-padding custom-skeleton">
                    <IonSkeletonText animated style={{ width: "60%" }} />
                    <IonSkeletonText animated />
                    <IonSkeletonText animated style={{ width: "88%" }} />
                    <IonSkeletonText animated style={{ width: "70%" }} />
                    <IonSkeletonText animated style={{ width: "60%" }} />
                  </div>
                ) : (
                  indicador.conceito
                )}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h4>Formula:</h4>
                {showLoading ? (
                  <div className="ion-padding custom-skeleton">
                    <IonSkeletonText animated style={{ width: "60%" }} />
                    <IonSkeletonText animated />
                    <IonSkeletonText animated style={{ width: "60%" }} />
                  </div>
                ) : (
                  indicador.formula
                )}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h4>Exemplo:</h4>
                {showLoading ? (
                  <div className="ion-padding custom-skeleton">
                    <IonSkeletonText animated style={{ width: "60%" }} />
                    <IonSkeletonText animated />
                    <IonSkeletonText animated style={{ width: "60%" }} />
                  </div>
                ) : (
                  indicador.exemplo
                )}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Carregando..."}
        duration={1000}
      />
      <Footer />
    </IonPage>
  );
};

export default IndicadorInfo;
