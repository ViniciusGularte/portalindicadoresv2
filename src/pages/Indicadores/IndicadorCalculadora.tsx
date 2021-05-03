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
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonLabel,
  IonItem,
  IonBackButton,
  IonAlert
} from "@ionic/react";
import { helpCircle } from "ionicons/icons";
import { getIndicadorById } from "../../services/Helpers/filterHelper";
import { Indicador } from "../../services/interfaces/indicador";
import { Parser } from "expr-eval";

import Footer from "../Footer";

const IndicadorCalculadora: React.FC<{ history: any; match: any }> = ({
  history,
  match
}) => {
  const [showAlert1, setShowAlert1] = useState(false);
  const { id } = match.params;
  const [indicador, setIndicador] = useState<Indicador>(getIndicadorById(id));
  const [r, setR] = useState(0);
  const changeInput = (e: any) => {
    const novoIndicador = Object.assign({}, indicador);
    novoIndicador.formula_equacao.forEach(equacao => {
      if (equacao.name === e.target.name) {
        equacao.value = e.target.value;
      }
    });
    console.log(novoIndicador);
    setIndicador(novoIndicador);
  };
  const calcular = () => {
    let formula1 = indicador.formula1;
    indicador.formula_equacao.forEach(equacao => {
      formula1 = formula1.replace(equacao.name, equacao.value);
    });

    setR(Parser.evaluate(formula1)); // 42
    //return resultado = Parser.evaluate(formula); // 42
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
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonGrid>
            <IonRow>
                <h2>  Calculadora</h2>
            </IonRow>
            <IonRow>
                <h4>  {indicador.formula}</h4>
              <IonCol>{}</IonCol>
            </IonRow>
            {indicador.formula_equacao.map((equacao, index) => (
              <IonRow key={index}>
                <IonCol>
                  <IonItem>
                    <IonLabel position="stacked">
                      <IonRow>
                        <IonCol> {equacao.label} </IonCol>
                        <IonCol>
                          {" "}
                          <IonButton
                            fill="clear"
                            color="primary"
                            data-toggle="tooltip"
                            data-placement="top"
                            title={equacao.descricao}
                          >
                            <IonIcon
                              slot="icon-only"
                              icon={helpCircle}
                              size="large"
                            />
                          </IonButton>{" "}
                        </IonCol>
                      </IonRow>
                    </IonLabel>
                    <IonInput
                      onIonInput={changeInput}
                      name={equacao.name}
                      value={equacao.value}
                      type="number"
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
            ))}
            <IonCol size-sm="12" size-md="3">
              <IonButton
                onClick={() => {
                  calcular();
                  setShowAlert1(true)
                }}
                color="primary"
              >
                Calcular
              </IonButton>
              <IonAlert
                isOpen={showAlert1}
                onDidDismiss={() => setShowAlert1(false)}
                header={'Resultado'}
                subHeader={''}
                message={`O resultado é ${r}.`}
                buttons={['OK']}
              />
            </IonCol>
          </IonGrid>
        </IonCard>
      </IonContent>

      <Footer />
    </IonPage>
  );
};

export default IndicadorCalculadora;
