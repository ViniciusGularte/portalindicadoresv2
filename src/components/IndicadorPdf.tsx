import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { Indicador } from "../services/interfaces/indicador";

const IndicadorPdf = ({ indicador }: { indicador: Indicador }) => (
  <Document>
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
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);
export default IndicadorPdf;
