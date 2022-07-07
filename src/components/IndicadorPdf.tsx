import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
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
    </Page>
  </Document>
);
export default IndicadorPdf;
