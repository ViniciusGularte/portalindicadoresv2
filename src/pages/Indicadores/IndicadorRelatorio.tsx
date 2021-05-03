import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonCard,
  IonButtons,
  IonButton,
  IonToolbar,
  IonMenuButton,
  IonBackButton,
  IonList,
  IonLoading,
  IonRow,
  IonCol,
  IonIcon,
  IonItem,
  IonSkeletonText
} from "@ionic/react";

import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
//import { format } from "date-fns";
import { download, options } from "ionicons/icons";
import { data } from "../../services/indicadores_data";
let relatorio = null;
const IndicadorRelatorio: React.FC<{ history: any; match: any }> = ({
  history,
}) => {
  const [showLoading, setShowLoading] = useState(true);
  const [listaIndicadores, setIndicadores] = useState(data);

relatorio = listaIndicadores.filter( indicador => {
    return indicador.relatorio === true;
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <h4>Relatório</h4>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home/indicadores" />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              item-content
              fill="clear"
              slot="end"
              size="large"
              color="primary"
              data-toggle="tooltip"
              data-placement="top"
              title={"Aplicar filtro"}
              onClick={ () => {
                let relatoriosAtual = JSON.parse(localStorage.getItem('relatorios'));
                if(listaIndicadores === data){
                  relatorio = listaIndicadores.filter( indicador => {
                    return indicador.relatorio === true;
                  });
                  if(relatoriosAtual == null  ||  relatorio !== relatoriosAtual){
                  localStorage.setItem("relatorios", JSON.stringify(relatorio));
                  setIndicadores(relatorio);
                  }
                }else{
                setIndicadores(data);
              }}}>
              <IonIcon size={"large"} icon={options} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              item-content
              fill="clear"
              slot="end"
              size="large"
              color="primary"
              data-toggle="tooltip"
              data-placement="top"
              title={"Download em PDF"}
               onClick={() => {
                 // Example From https://parall.ax/products/jspdf
                 let doc = new jsPDF('p', 'pt', 'a4');
                  let data = new Date();

                  doc.setFont('Courier')
                  // Titulo
                  doc.setFontSize(20)
                  doc.text('Relatorio - Portal de Indicadores', 100, 60)
                  doc.line(40, 80, 550, 80)
                  if(!data){
                      doc.setFontSize(12)
                      doc.text('Preview', 290, 75)
                      doc.setFontSize(20)
                  }
                  // define the columns we want and their titles
                //  const tableColumn = ["Id", "Nome", "Conceito", "Formula", "Exemplo"];
                    // define an empty array of rows
                //  let tableRows = null;
                    // for each ticket pass all its data into an array
                  //  listaIndicadores.forEach(indicador => {
                  //  const IndicadorData = [
                   //   indicador.id,
                  ////    indicador.nome,
                  //    indicador.conceito,
                 //     indicador.formula,
                  //    indicador.exemplo,
                      // called date-fns to format the date on the ticket
                     // format(new Date(indicador.updated_at), "yyyy-MM-dd")
                 //   ];
                  //  // push each indicator's info into a row
                 //   tableRows.push(IndicadorData);
                //  });


                  // startY is basically margin-top
                  autoTable(doc, { html: 'my-table'});
                  const date = Date().split(" ");
                  // we use a date string to generate our filename.
                  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
                  // ticket title. and margin-top + margin-left
                  // we define the name of our PDF file.
                  doc.save(`report_${dateStr}.pdf`);

                  // Logo
                  //doc.addImage(image, 30, 30)
                  //listaIndicadores.map(indicador => (
                  // Informação Cabeçalho
                  
                  //doc.text(indicador.nome, 50, 120)));
                  
                 // doc.setFontSize(10)
                 // doc.text('Conceito:', 50, 150);
                  //listaIndicadores.map(indicador => (
                 // doc.text(indicador.conceito, 50, 160)));

               //   doc.text('Formula:', 50, 200)
             //     listaIndicadores.map(indicador => (
           //       doc.text(indicador.formula, 50, 210)));
         //         
       //           doc.text('Exemplo:', 50, 240)
     //             listaIndicadores.map(indicador => (
   //               doc.text(indicador.exemplo, 50, 280)));

 //</IonButtons>                 doc.save('relatorio-portal_'+ data.getDate()+'/'+data.getMonth()+'/'+data.getFullYear())
              }}>
              <IonIcon size={"large"} icon={download} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {listaIndicadores.map(indicador  => ( 
        <IonList>
          <IonItem>            
                  <h4> {indicador.nome} </h4>
          </IonItem>
            
          <IonItem>
            <IonCard>              
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
            </IonCard>
          </IonItem>

          <IonItem>
            <IonCard>                
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
            </IonCard>
          </IonItem>
              
          <IonItem>
            <IonCard>                
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
            </IonCard>
          </IonItem>          
        </IonList>
      ))}
      </IonContent>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Carregando..."}
        duration={1000}
      />
    </IonPage>
  );
}
export interface IClassHasMetaImplements {
  prototype?: any;
}

export class UserPermissionModel implements IClassHasMetaImplements {
  public test() {}
  prototype?: any;
}
export default IndicadorRelatorio;