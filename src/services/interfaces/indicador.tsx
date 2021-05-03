export interface Indicador {
  id: string;
  favorito: boolean;
  relatorio: boolean;
  nome: string;
  grupo: string;
  is_indicador: boolean;
  conceito: string;
  formula1: string;
  formula: string;
  exemplo: string;
  formula_equacao: Array<IndicadorFormula>;
}

export interface tableRows {
  id: string;
  nome: string;
  conceito: string;
  formula: string;
  exemplo: string;
}

export interface IndicadorFormula {
  label: string;
  name: string;
  descricao: string;
  value: string;
}

export interface Favorito {
  id: string;
  favorito: boolean;
  relatorio: boolean;
  nome: string;
  grupo: string;
  is_indicador: boolean;
  conceito: string;
  formula1: string;
  formula: string;
  exemplo: string;
  formula_equacao: Array<IndicadorFormula>;
}