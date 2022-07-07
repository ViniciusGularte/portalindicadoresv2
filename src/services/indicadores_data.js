export let data = [
  {
    id: "1", // Zootecnicos
    favorito: false,
    relatorio: false,
    nome: "Índice de Natalidade", // pág 225
    grupo: "3",
    is_indicador: true,
    exemplo:
      "Foram cobertas 100 fêmeas durante a estação de monta. Dessas, apenas 57 geraram produtos. Logo, o índice de natalidade foi de 57%.",
    conceito:
      "ÍNDICE DE FECUNDIDADE OU NATALIDADE – é a forma de medir o resultado das fêmeas que foram submetidas à cobertura, emprenharam e quantas levaram a gestação a termo.",
    formula1: "(bezerrosnascidos*100)/femeascobertura",
    formula:
      "Índice de natalidade = nº de bezerros nascidos x 100 / nº fêmeas em cobertura",
    formula_equacao: [
      {
        label: "Bezerros Nascidos",
        name: "bezerrosnascidos",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Fêmeas Cobertura",
        name: "femeascobertura",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "2",
    favorito: false,
    relatorio: false,
    nome: "Índice de Fertílidade", // pág 225
    grupo: "3", // Zootecnicos
    is_indicador: true,
    exemplo:
      "Foram cobertas 100 fêmeas na estação de monta. Após diagnóstico de gestação, constatou-se que 76 delas estavam prenhes. Logo, o índice de fertilidade é de 76%.",
    conceito:
      "ÍNDICE DE FERTÍLIDADE – é a relação do número de fêmeas que foram cobertas e o número de fẽmeas que ficaram prenhes, após determinado período.",
    formula1: "(femeasprenhes*100)/femeascobertas",
    formula:
      "Índice de natalidade = nº de fêmeas prenhes x 100 / nº fêmeas em cobertas",
    formula_equacao: [
      {
        label: "Fêmeas Prenhes",
        name: "femeasprenhes",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Fêmeas Cobertas",
        name: "femeascobertas",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },
  {
    id: "3",
    favorito: false,
    relatorio: false,
    nome: "Índice de Desmame", // pág 228
    grupo: "3", // Zootecnicos
    is_indicador: true,
    exemplo:
      "Em uma propriedade rural nasceram 57 bezerros, 120 dias depois, somente 56 bezerros foram desmamados. Logo, o índice de desmame foi de 98%.",
    conceito:
      "ÍNDICE de DESMAME – é a relação entre a quantidade de bezerros desmamados e a quantidade de bezerros nascidos vivos.",
    formula1: "(bezerrosdesmamados*100)/bezerrosnascidosvivos",
    formula:
      "Índice de Desmame = nº de bezerros desmamados x 100 / nº bezerros nascidos vivos",
    formula_equacao: [
      {
        label: "Bezerros desmamados",
        name: "bezerrosdesmamados",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Bezerros nascidos",
        name: "bezerrosnascidosvivos",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "4",
    favorito: false,
    relatorio: false,
    nome: "Índice de Mortalidade", // pág 226
    grupo: "3", // Zootecnicos
    is_indicador: true,
    exemplo:
      "Levando-se em conta que os animais que morreram em determinado período perfazem um total de 5 U.A. e o rebanho possui um total de 268.5 U.A., o índice de mortalidade é de 1.8%.",
    conceito:
      "ÍNDICE DE MORTALIDADE – é a relação entre os animais mortos por acidentes e doenças em relação ao total do rebanho.",
    formula1: "(animaismortos*100)/rebanhototal",
    formula:
      "Índice de Mortalidade = nº de animais mortos por acidentes x 100 / nº rebanho total",
    formula_equacao: [
      {
        label: "Animais mortos",
        name: "animaismortos",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Rebanho total",
        name: "rebanhototal",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },
  // {
  //   id: "5",
  //   favorito: false,
  //   relatorio: false,
  //   nome: "Índice de Mortalidade Intra-Uterina", // pág 227
  //   grupo: "3", //Zootecnico
  //   is_indicador: true,
  //   exemplo: "No diagnóstico de gestação foram detectadas 76 fêmeas. Ao final da estação reprodutiva, houve o nascimento de 57 produtos. Logo, o índice de mortalidade intra-uterina foi de 25%.",
  //   conceito:
  //     "ÍNDICE DE MORTALIDADE INTRA-UTERINA – representa as perdas de animais que foram abortados, reabsorvidos ou natimortos.",
  //   formula1: "femeasprenhes*100/femeasprenhes",
  //   formula:
  //     "Taca M.I.U = (nº de animais concebidos - nº de fêmeas prenhes) x 100 / nº de fêmeas prenhes",
  //   formula_equacao: [
  //     {
  //       label: "Animais concebidos",
  //       name: "animaisconcebidos",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     },
  //     {
  //       label: "Fêmeas prenhes",
  //       name: "femeasprenhes",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     }
  //   ]
  // },

  {
    id: "6",
    favorito: false,
    relatorio: false,
    nome: "Índice de Descarte", // pág 229
    grupo: "3", // Zootecnicos
    is_indicador: true,
    exemplo:
      "Sobre o total do rebanho foram descartados animais que equivalem a 6.1 U.A.. Como o rebanho total é de 268.5 .U.A., o índice de descarte foi de 2.27%.",
    conceito:
      "ÍNDICE DE DESCARTE – representa o percentual de animais descartados por doençãs, acidentes ou defeitos congênitos graves.",
    formula1: "(animaisdescartados*100)/rebanhototal",
    formula:
      "Índice de Descarte = nº de animais descartados x 100 / nº rebanho total",
    formula_equacao: [
      {
        label: "Animais descartados",
        name: "animaisdescartados",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Rebanho total",
        name: "rebanhototal",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  // {
  //   id: "7",
  //   favorito: false,
  //   relatorio: false,
  //   nome: "Intervalo entre Partos", // pág 234
  //   grupo: "3", // Zootecnicos
  //   is_indicador: true,
  //   exemplo: "Uma matriz deu cria no dia 01/10/04. Sua segunda cria foi no dia 25/9/05. Logo, o intervalo entre partos foi de 359 dias.",
  //   conceito:
  //     "INTERVALO ENTRE PARTOS – mede o número de dias transcorridos entre cada parto das matrizes avaliadas.",
  //   formula1: "(animaismortos*100)/rebanhototal",
  //   formula:
  //     "Índice de Mortalidade = nº de animais mortos por acidentes x 100 / nº rebanho total",
  //   formula_equacao: [
  //     {
  //       label: "Animais mortos",
  //       name: "animaismortos",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     },
  //     {
  //       label: "Rebanho total",
  //       name: "rebanhototal",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     }
  //   ]
  // },

  {
    id: "8",
    favorito: false,
    relatorio: false,
    nome: "Índice de Rendimento de Carcaça", // pág 229
    grupo: "3", // Zootecnicos
    is_indicador: true,
    exemplo:
      "Um determinado animal, após abatido, gerou uma carcaça de 235kg. Seu peso vivo era de 460kg. Logo, seu rendimento de carcaça foi de 51%.",
    conceito:
      "ÍNDICE DE RENDIMENTO DE CARCAÇA – é a relação entre o peso vivo do animal e o seu peso de carcaça.",
    formula1: "(pesocarcaca*100)/pesovivo",
    formula:
      "Índice de Rendimento = nº de peso da carcaça x 100 / nº peso vivo no abate",
    formula_equacao: [
      {
        label: "Peso da carcaça",
        name: "pesocarcaca",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Peso vivo no abate",
        name: "pesovivo",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "9",
    favorito: false,
    relatorio: false,
    nome: "Taxa de Desfrute (eficiência de estoque)", // pág 230
    grupo: "1", //Economicos
    is_indicador: true,
    exemplo:
      "Em um determinado rebanho de corte foram abatido animais equivalentes a 80 U.A.. O rebanho total, antes dos abates, era de 268.5 U.A., ou seja, houve um desfrute de 29.8%.  ",
    conceito:
      "TAXA DE DESFRUTE – apresenta a capacidade de rebanho em gerar excedentes para venda.",
    formula1: "(totalabatido*100)/rebanhototal",
    formula: "Taxa de Desfrute = nº total de abatidos x 100 / nº rebanho total",
    formula_equacao: [
      {
        label: "Total abatido",
        name: "totalabatido",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Rebanho total",
        name: "rebanhototal",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "10",
    favorito: false,
    relatorio: false,
    nome: "Densidade (Carga animal)", // pág 234
    grupo: "2", //Globais
    is_indicador: true,
    exemplo:
      "Uma determinada atividade produtiva possui animais equivalentes a 275.34 U.A.. Essa atividade é realizada em uma área de 450ha. Logo, a carga animal nessa atividade é de 0.61 U.A./ha.",
    conceito:
      "ÍNDICE DE DENSIDADE – é a relação entre quantidade existente de animais em uma determinada atividade produtiva e a área ocupada pela a mesma.",
    formula1: "(cabecanopasto*100)/areaocupada",
    formula: "Densidade = nº de cabeças no pasto x 100 / área ocupada",
    formula_equacao: [
      {
        label: "Cabeças no pasto",
        name: "cabecanopasto",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Área ocupada",
        name: "areaocupada",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "11",
    favorito: false,
    relatorio: false,
    nome: "Taxa de Crescimento do Rebanho", // pág 232
    grupo: "3", //Zootecnico
    is_indicador: true,
    exemplo:
      "Uma determinado propriedade rural iniciou o ciclo produtivo com 194 U.A. no campo. Ao final desse ciclo, existem animais equivalente a 212.34 U.A., caracterizando uma taxa de crescimento do rebanho de 8.19%.",
    conceito:
      "TAXA DE CRESCIMENTO DO REBANHO – índice de aumento (geralmente) anual do rebanho.",
    formula1: "((cabecasfinal*100)-100)/cabecasinicio",
    formula:
      "Tx. Cre. Reb = (nº de cabeças no final do ano x 100) - 100 / nº de cabeças no inicio do ano",
    formula_equacao: [
      {
        label: "Cabeças no inicio do ano",
        name: "cabecasfinal",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Cabecas no final do ano",
        name: "cabecasinicio",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "12",
    favorito: false,
    relatorio: false,
    nome: "Ganho Médio Diário (G.M.D)", // pág 235
    grupo: "3", //Economicos
    is_indicador: true,
    exemplo:
      "Um determinado lote de animais antes de ser colocado em uma pastagem apresentou um peso médio de 320kg. Essa pesagem foi feita por amostragem onde dois animais em cada 10 foram pesados. Ao final de 90 dias, novamente foram pesados os animais da primeira amostragem e verificado que o peso médio do lote havia subido para 385kg por cabeça. Logo, o ganho médio diário dos animais desse desse lote foi de 0,722kg/dia.",
    conceito:
      "GANHO MÉDIO DIÁRIO (G.M.D) – determina o ganho médio diário em quilos ou em arrobas dos animais, que estão sendo.",
    formula1: "(pesofinal-pesoinicial)/diasdaavaliacao",
    formula: "G.M.D = (Peso final - Peso Inicial) / nº de dias da avaliação",
    formula_equacao: [
      {
        label: "Peso final",
        name: "pesofinal",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Peso inicial",
        name: "pesoinicial",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Dias da avaliação",
        name: "diasdaavaliacao",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "13",
    favorito: false,
    relatorio: false,
    nome: "Relação Touro/Vaca", // pág 233
    grupo: "3", // Zootecnicos
    is_indicador: true,
    exemplo:
      "Em uma determinada propriedade rural existem 100 matrizes em reprodução e 12 touros para realizarem a cobertura das mesmas. Logo, a relação touro/vaca é de 8.33.",
    conceito:
      "RELAÇÃO TOURO/VACA – é a relação entre quantidade de vacas em reprodução para cada touro disponível.",
    formula1: "matrizes/touros",
    formula: "Relação Touro/Vaca = nº de matrizes / nº de touros",
    formula_equacao: [
      {
        label: "Nº de matrizes",
        name: "matrizes",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Nº de touros",
        name: "touros",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "14",
    favorito: false,
    relatorio: false,
    nome: "Produção de Carne pela Área Ocupada ", // pág 236
    grupo: "2", //Globais
    is_indicador: true,
    exemplo:
      "Uma determinada atividade produtiva comercializou 80 cabeças de bois para abate com um peso médio de 460kg cada. A área total ocupada foi de 450ha. Logo, houve a produção de 81,77kg/ha de carne.",
    conceito:
      "PRODUÇAO DE CARNE PELA ÁREA OCUPADA – é a relação entre quantidade de carne vendida em quilos e a área ocupada em hectares para esta produção acontecer.",
    formula1: "quantidadecarnevendida/areautilizada",
    formula:
      "Prod. Carne / Área = Quantidade de carne vendida / área utilizada",
    formula_equacao: [
      {
        label: "Quantidade de carne vendida",
        name: "quantidadecarnevendida",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Área utilizada",
        name: "areautilizada",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "15",
    favorito: false,
    relatorio: false,
    nome: "Custos Fixos Médio", // pág 199
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "A soma de todos os custos fixos relacionados a uma determinada lavoura de soja é de R$ 212.000,00 enquanto a produção foi de 9.000 sacos. Logo, para cada saco de soja produzido, o custo fixo médio foi de R$ 23,55.",
    conceito:
      "CUSTOS FIXOS MÉDIO - é a soma total dos custos fixos em relação à quantidade total produzida. ",
    formula1: "custofixototal/quantidadeproduzida",
    formula: "Custos Fixos Médio = Custo Fixo Total / Quantidade Produzida",
    formula_equacao: [
      {
        label: "Custo Fixo Total",
        name: "custofixototal",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Quantidade Produzida",
        name: "quantidadeproduzida",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "16",
    favorito: false,
    relatorio: false,
    nome: "Custo Variável Médio ", // pág 199
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "A soma de todos os custos váriáveis relacionados a uma determinada lavoura de soja foi de R$ 195.000,00 e a respectiva produção foi de 9.000 sacos. Logo, para cada saco de soja produzido, o custo variável médio foi de R$ 21,66.",
    conceito:
      " CUSTO VARIÁVEL MÉDIO - é a soma total dos custos variáveis em relação à quantidade total produzida.",
    formula1: "custovariaveltotal/quantidadeproduzida",
    formula:
      "Custo Variável Médio = Custo Variavel Total / Quantidade Produzida",
    formula_equacao: [
      {
        label: "Custo Variavel Total",
        name: "custovariaveltotal",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Quantidade Produzida",
        name: "quantidadeproduzida",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  // {
  //   id: "17",
  //   favorito: false,
  //   relatorio: false,
  //   nome: "Custo Total Médio", // pág 200
  //   grupo: "1", // Economicos
  //   is_indicador: true,
  //   exemplo: "A soma de todos os custos fixos e dos custos variáveis relacionados a uma determinada lavoura de soja é de R$ 407.000,00 e a respectiva produção foi de 9.000 sacos. Logo, para cada saco de soja produzido, o custo total médio foi de R$ 44,22.",
  //   conceito:
  //     "CUSTO TOTAL MÉDIO - é a soma total dos custos fixos e custos variáveis em relação à quantidade total produzida. ",
  //     formula1: "(custofixototal+custovariaveltotal)/quantidadeproduzida",
  //     formula:
  //       "Custo Total Médio = (Custo Variavel Total + Custo Variavel Total) / Quantidade Produzida",
  //     formula_equacao: [
  //       {
  //         label: "Custo Variavel Total",
  //         name: "custovariaveltotal",
  //         descricao: "lorem ipsum dolor atmetsu",
  //         value: ""
  //       },
  //       {
  //         label: "Custo Variavel Total",
  //         name: "custovariaveltotal",
  //         descricao: "lorem ipsum dolor atmetsu",
  //         value: ""
  //       },
  //       {
  //         label: "Quantidade Produzida",
  //         name: "quantidadeproduzida",
  //         descricao: "lorem ipsum dolor atmetsu",
  //         value: ""
  //       }
  //     ]
  // },

  {
    id: "18",
    favorito: false,
    relatorio: false,
    nome: "Margem Bruta", // pág 201
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "Com a venda dos 5.000 sacos de milho, produzido na safra de 04/05, foram captados R$ 90.500,00. Para todo o desenvolvimento da lavouro em questão foram desembolsados R$ 57.500,00. Logo, a margem bruta dessa atividade produtiva será de R$ 33.000,00.",
    conceito:
      "MARGEM BRUTA -  é determinada pela a diferença entre a receita gerada em determinada atividade produtiva (ou na r=empresa rural como um todo) e  o total de desembolsos realizados para o desenvolvimento da atividade.",
    formula1: "receitabruta-totaldedesembolsos",
    formula: "Margem Bruta = Receita Bruta - Total de Desembolsos",
    formula_equacao: [
      {
        label: "Receita Bruta",
        name: "receitabruta",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Total de Desembolsos",
        name: "totaldedesembolsos",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "19",
    favorito: false,
    relatorio: false,
    nome: "Margem Bruta Percentual", // pág 202
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "No exemplo da lavoura de milho citado no item anterior (margem bruta), a margem bruta percentual será de 63,53% (57.500,00 de desembolsos divididos por 90.500,00 de receitas totais multiplicado por 100). Isso quer dizer que 63,53% da renda gerada pela a venda de cada unidade de produto será destinada a cobrir os desembolsos de produção. ",
    conceito:
      "MARGEM BRUTA PERCENTUAL -  é determinada pela a diferença entre a receita gerada em determinada atividade produtiva (ou na r=empresa rural como um todo) e  o total de desembolsos realizados para o desenvolvimento da atividade.",
    formula1: "totaldedesembolsos*100/valortotaldaproducao",
    formula:
      "Margem Bruta Percentual = Total de Desembolsos * 100 / Valor Total da Producao",
    formula_equacao: [
      {
        label: "Total de Desembolsos",
        name: "totaldedesembolsos",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Valor Total da Producao",
        name: "valortotaldaproducao",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "20",
    favorito: false,
    relatorio: false,
    nome: "Rentabilidade", // pág 202
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "Um confinamento de gado bovino, para ser implantado e desenvolvido, exigiu investimentos na ordem de R$ 400.000,00 (novos investimentos e capital já existente e imobilizado na atividade). Após entrar em funcionamento, esse confinamento apresentou o resultado líquido (após pagamento de todas despesas diretas e custos de depreciação) de R$ 100.000,00 por ano. A recuperação do capital investido foi estabelecida em seis parcelas anuais de R$ 81.350,00 (retorno do capital mais remuneração de seis porcento de juros ao ano). Logo, a rentabilidade dessa atividade produtiva, nos primeiros seis anos, foi de 18,65% sobre o capital total investido (R$ 18.650,00 de lucro ao ano).",
    conceito:
      "RENTABILIDADE - é uma das formas de avaliar o lucro obtido em uma atividade produtiva em relação ao capital investido para o desenvolvimento dessa atividade.",
    formula1: "lucro/capitalinvestido",
    formula: "Rentabilidade = Lucro / Capital Investido",
    formula_equacao: [
      {
        label: "Lucro",
        name: "lucro",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Capital Investido",
        name: "capitalinvestido",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  // {
  //   id: "21",
  //   favorito: false,
  //   relatorio: false,
  //   nome: "Lucratividade", // pág 204
  //   grupo: "1", // Economicos
  //   is_indicador: true,
  //   exemplo: "Em um índice que representa, em percentual, qual foi o lucro obtido em determinada atividade ou na Empresa Rural com a venda dos produtos desenvolvidos, ou seja, o quanto cada produto deixa de resultado, após ser descontado o valor dos custos para sua elaboração.",
  //   conceito:
  //     "LUCRATIVIDADE - é um indice que representa, em percentual, qual foi o lucro obtido em determinada atividade ou na Empresa Rural com a venda dos produtos desenvolvidos, ou seja, o quanto cada produto deixa de resultado, após ser descontado o valor dos custos para sua elaboração.",
  //   formula1: "((totalreceita-custototal)*100)/totaldereceitas",
  //   formula:
  //     "Lucratividade = ((Total Receita - Custo Total) * 100) / Total de Receitas",
  //   formula_equacao: [
  //     {
  //       label: "Total Receita",
  //       name: "totalreceita ",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     },
  //     {
  //       label: "Custo Total",
  //       name: "custototal",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     },
  //     {
  //       label: "Total de Receitas",
  //       name: "totaldereceitas",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     }
  //   ]
  // },

  // {
  //   id: "22",
  //   favorito: false,
  //   relatorio: false,
  //   nome: "Lucratividade Sobre o Capital Imobilizado", // pág 205
  //   grupo: "1", // Economicos
  //   is_indicador: true,
  //   exemplo: "Em uma fazenda de 1.000 hectares onde a única atividade produtiva é uma lavoura de soja em 300 hectares, deveremos considerar os seguintes dados: valor do hectare é R$ 1.500,00; o valor total imobilizado em máquinas, equipamentos e construções é de R$ 250.000,00; o custo de oportunidade sobre o capital investido na terra e bens do inventário é de R$ 52.000,00; o lucro da atividade foi de R$ 73.500,00; então, a lucratividade em relação ao capital imobilizado é de 40%. ",
  //   conceito:
  //     "LUCRATIVIDADE SOBRE O CAPITAL IMOBILIZADO -  é a relação entre o lucro líquido (total de receita - costos totais) e os custos de oportunidade sobre o capital total imobilizado na atividade na atividade produtiva avaliada (parques de máquinas, construções terra própria, etc.) O valor é representado em porcentagem.",
  //   formula1: "((lucroliquido*100)-100)/custoOportSCapital",
  //   formula:
  //     "Lucrat. C.I = ( Lucro Liquido * 100) - 100 / Custo Oportunidade Sem Capital total Imobilizado",
  //   formula_equacao: [
  //     {
  //       label: "Lucro Liquido",
  //       name: "lucroliquido",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     },
  //     {
  //       label: "Custo Oportunidade Sem Capital total Imobilizado",
  //       name: "custoOportSCapital",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     }
  //   ]
  // },

  {
    id: "23",
    favorito: false,
    relatorio: false,
    nome: "Ponto de Equilíbrio (P.E.)", // pág 206
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo: "Não encontrado.",
    conceito:
      " PONTO DE EQUILÍBRIO - significa o volume de produção que a empresa necessita para que as receitas totais igualem-se aos custos totais. ",
    formula1: "custofixototal/(valorunitvenda-valorunitdecustosvariaveis)",
    formula:
      "Ponto de Equilíbrio (P.E.) = Custo Fixo Total / ( Valor Unit Venda - Valor Unit de Custos Variaveis)",
    formula_equacao: [
      {
        label: "Custo Fixo Total",
        name: "custofixototal",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Valor Unit Venda",
        name: "valorunitvenda",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Valor Unit de Custos Variaveis",
        name: "valorunitdecustosvariaveis",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "24",
    favorito: false,
    relatorio: false,
    nome: "Capacidade de Investimento", // pág 208
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "Uma determinada atividade produtiva rendeu R$ 100.000,00 e teve de custos totais R$ 80.000,00 (nesse montante não foram computados os custos de oportunidade do capital próprio nem de terra própria). Nesse caso, a capacidade de investimento é de R$ 20.000, ou seja, o proprietário tem esse valor à sua disposição para a aquisição de novas máquinas, implementação de novas tecnologias, etc.",
    conceito:
      " CAPACIDADE DE INVESTIMENTO - é a sobra de capital que se obtém, após o pagamento de todos os custos para desenvolvê-la, com exceção dos custos de oportunidade sobre terra própria e capital próprio. ",
    formula1: "receita-custostotais",
    formula: "Capacidade de Investimento = Receita - Custos Totais",
    formula_equacao: [
      {
        label: "Receita",
        name: "receita",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Custos Totais",
        name: "custostotais",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "25",
    favorito: false,
    relatorio: false,
    nome: "Margem de Contribuição (MC)", // pág 209
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "Para usufluir desse índice é necessário usar o valor de saida desse indicador e colocar no indicador de índice de MC(%).",
    conceito:
      "MARGEM DE CONTRIBUIÇÃO - é a representação das margens (valores) que cada produto ou unidade de produto vendido pode contribuir para cobrir o total de custos fixos despendidos para a sa produção. ",
    formula1: "receitabruta-custosvariaveis",
    formula: "Margem de Contribuição = Receita Bruta - Custos Variaveis",
    formula_equacao: [
      {
        label: "Receita Bruta",
        name: "receitabruta",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Custos Variáveis",
        name: "custosvariaveis",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "26",
    favorito: false,
    relatorio: false,
    nome: "Índice de MC", // pág 209
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "Receita bruta R$ 10.000,00; Custos variáveis de R$ 6.500,00; Margem de contribuição será de R$ 6.500,00.   Isso significa que cada R$ 10.000,00 provenientes da venda do produto resulta em uma margem que irá contribuir com R$ 3.500,00 para cobrir o total dos custos fixos da atividade produtiva. O índice de margem de contribuição será de 35%, ou seja, 35% do total vendido em valores poderá ser utilizado para cobrir os custos fixos da atividade produtiva. ",
    conceito:
      "ÍNDICE DE MC (%) - é a relação da margem de contribuição pelo o valor total de vendas.",
    formula1: "margemdecontribuicao/valortotaldevenda",
    formula: "Índice de MC (%) = Margem de Contribuição / Valor Total de Venda",
    formula_equacao: [
      {
        label: "Margem de Contribuição",
        name: "margemdecontribuicao",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Valor Total de Venda",
        name: "valortotaldevenda",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  // {
  //   id: "27",
  //   favorito: false,
  //   relatorio: false,
  //   nome: "Margem de Comercialização dos Produtos", // pág 210
  //   grupo: "1", // Economicos
  //   is_indicador: true,
  //   exemplo: "Em uma determinada empresa rural, onde o custo total do saco de soja foi de R$ 35,00 e o preço de venda de uma parte do total produzido foi de R$ 41,50 por saco, a margem de comercialização do produto foi de 15,66%. O restante foi comercializado posteriormente, quando houve uma queda dos valores do mercado, a R$ 38,80 por saco. A margem de comercialização ficou então em 9,15%.",
  //   conceito:
  //     "MARGEM DE COMERCIALIZAÇÃO DOS PRODUTOS - é a diferença de preço do produto em diferentes níveis de mercado, expressa em porcentagem.",
  //   formula1: "(precodevenda-custodoproduto)*100/precodevenda",
  //   formula:
  //     "MCP = (Preço de Venda - Custo do Produto) * 100 / Preço de Venda",
  //   formula_equacao: [
  //     {
  //       label: "Preço de Venda",
  //       name: "precodevenda",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     },
  //     {
  //       label: "Custo do Produto",
  //       name: "custodoproduto",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     }
  //   ]
  // },

  // {
  //   id: "28",
  //   favorito: false,
  //   relatorio: false,
  //   nome: "Mark-Up", // pág 211
  //   grupo: "1", // Economicos
  //   is_indicador: true,
  //   exemplo: "Sabendo que se quer obter um retorno de 25% de lucro líquido sobre um determinado produto, que teve como custo de produção o valor total de R$ 8,00 por unidade, aplicando-se as fórmulas apresentadas, chega-se a um preço final de venda igual ou superior a R$ 10,00.",
  //   conceito:
  //     "MARK-UP - é a margem absoluta colocada sobre os custos totais de produção dos produtos.",
  //   formula1: "(precodevenda-custodoproduto)*100/custodoproduto",
  //   formula:
  //     "MK = (Preco de Venda - Custo do Produto) * 100 / Custo do Produto",
  //   formula_equacao: [
  //     {
  //       label: "Preco de Venda",
  //       name: "precodevenda",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     },
  //     {
  //       label: "Custo do Produto",
  //       name: "custodoproduto",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     }
  //   ]
  // },

  {
    id: "29",
    favorito: false,
    relatorio: false,
    nome: "Balanço de Imobilizado", // pág 212
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "A soma do imobilizado em terra, máquinas, equipamentos e animais levantado no ínicio de uma determinada atividade produtiva é de R$ 200.000,00. Ao final de um ciclo de produção, esse ativo imobilizado foi avaliado em R$ 210.000,00. Portanto, houve uma variação de R$ 10.000,00 no ativo imobilizado total dedicado à atividade produtiva.",
    conceito:
      "BALANÇO DE IMOBILIZADO - representa a variação, em um determinado período de tempo, do total de capital imobilizado em uma propriedade ou atividade produtiva.",
    formula1: "imobilizadofinal-imobilizadoinicial",
    formula: "Balanço de Imobilizado = Imobilizado Final - Imobilizado Inicial",
    formula_equacao: [
      {
        label: "Imobilizado Final",
        name: "imobilizadofinal",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Imobilizado Inicial",
        name: "imobilizadoinicial",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "30",
    favorito: false,
    relatorio: false,
    nome: "Taxa de Retorno Sobre Investimento Operacional", // pág 213
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "Em uma determinada atividade onde o lucro obtido foi de R$ 9.000,00 e o total de investimento realizado nessa atividade foi de R$ 35.000,00, a taxa de retorno sobre o investimento realizado é de 25%.",
    conceito:
      "TAXA DE RETORNO SOBRE INVESTIMENTO OPERACIONAL - é a percentagem do lucro obtido em determinado período sobre o capital investido.",
    formula1: "lucrooperacional*100/investimentorealizado",
    formula: "RIO(%) = Lucro Operacional * 100 / Investimento Realizado",
    formula_equacao: [
      {
        label: "Lucro Operacional",
        name: "lucrooperacional",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Investimento Realizado",
        name: "investimentorealizado",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "31",
    favorito: false,
    relatorio: false,
    nome: "Giro de Investimento", // pág 214
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "Um determinado produtor rural investiu R$ 10.500,00 para toda a manutenção e desenvolvimento de um lote de frangos de corte. Essa atividade produtiva teve um ciclo de desenvolvimento de quatro meses e a receita bruta foi de 12.550,00. Logo, o giro do investimento, no período avaliado, foi de 1.19 vezes. ",
    conceito:
      "GIRO DE INVESTIMENTO - é a representação, em valores, de quantas vezes o valor gerados pelas vendas cobre o valor investido na atividade.",
    formula1: "valortotaldevendas/investimento",
    formula: "GI = Valor Total de Vendas / Investimento",
    formula_equacao: [
      {
        label: "Valor Total de Vendas",
        name: "valortotaldevendas",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Investimento",
        name: "investimento",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  {
    id: "32",
    favorito: false,
    relatorio: false,
    nome: "Total Imobilizado (% sobre valor das atividades)", // pág 215
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "Em uma determinada atividade produtiva o valor total do imobilizado utilizado é de R$ 20.000,00. Os custos totais da atividade em questão somam R$ 60.000,00. Logo, o custo de imobilizado representa 33% de toda atividade que está sendo avaliada. ",
    conceito:
      "TOTAL IMOBILIZADO - é um índice que mostra o quanto o valor total que está imobilizado na empresa representa em relação ao total geral da atividade. ",
    formula1: "valordoimobilizado*100/valortotaldaatividade",
    formula:
      "Total Imobilizado = Valor do Imobilizado * 100 / Valor Total da Atividade",
    formula_equacao: [
      {
        label: "Valor do Imobilizado",
        name: "valordoimobilizado",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Valor Total da Atividade",
        name: "valortotaldaatividade",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },
  {
    id: "33",
    favorito: false,
    relatorio: false,
    nome: "Cálculo de Eficiência de Mão-de-Obra", // pág 217
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "Dois trabalhadores rurais são pagos para trabalharem 48 horas semanais, mas trabalham efetivamente apenas 36 horas, porque gastam duas horas por dia com deslocamento até a lavoura. Nesse índice, a eficiência de trabalho da mão-de-obra é de 75%. ",
    conceito:
      "CÁLCULO DE EFICIÊNCIA DE MÃO-DE-OBRA - representa a capacidade dos trabalhadores na realização das práticas rurais, avaliando a possibilidade de obtenção de bons resultados. ",
    formula1: "horastrabalhadas*100/horaspagas",
    formula: "EMO(%) = Horas Trabalhadas * 100 / Horas Pagas",
    formula_equacao: [
      {
        label: "Horas Trabalhadas",
        name: "horastrabalhadas",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Horas Pagas",
        name: "horaspagas",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },
  {
    id: "34",
    favorito: false,
    relatorio: false,
    nome: "Eficiência da Operação de Máquinas", // pág 217
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "Entre a preparação da terra e a última pulverização realizada em uma lavoura de soja, os três tratores utilizados para essas atividades estiveram disponíveis por 900 horas cada um. O trator A foi utilizado 100 horas, o trator B foi utilizado por 210 horas e o trator A foi de 11%, a do trator B foi de 23% e a do trator C foi de 52%.",
    conceito:
      "EFICIÊNCIA DA OPERAÇÃO DE MÁQUINAS - é utilizado para medir o nível de eficiência efetiva de utilização das máquinas disponíveis em relação à sua utilização nas atividade produtivas.",
    formula1: "horastrabalhadas*100/horasdisponiveis",
    formula: "EOM(%) = Horas Trabalhadas * 100 / Horas Disponíveis",
    formula_equacao: [
      {
        label: "Horas Trabalhadas",
        name: "horastrabalhadas",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Horas Disponíveis",
        name: "horasdisponiveis",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },
  {
    id: "35",
    favorito: false,
    relatorio: false,
    nome: "Relação Custo/Benefício", // pág 220
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "Uma determinada atividade produtiva precisou de um montante de capital de R$ 30.000,00 para ser executada. O valor total dos produtos gerados foi de R$ 35.000,00. Logo, a relação custo/benefício dessa atividade foi de 1,16.",
    conceito:
      "RELAÇÃO CUSTO/BENEFÍCIO - representa a relação entre o valor monetário dos fatores necessários para a realização da atividade produtiva e o valor monetário do produto gerado por essa.",
    formula1: "capitalgerado/capitalinvestido",
    formula:
      "Relação Custo/Benefício = Capital Gerado (benefício) / Capital Investido (custo)",
    formula_equacao: [
      {
        label: "Capital Gerado (benefício)",
        name: "capitalgerado",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Capital Investido (custo)",
        name: "capitalinvestido",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },

  // {
  //   id: "36",
  //   favorito: false,
  //   relatorio: false,
  //   nome: "Índice de Liquidez", // pág 221
  //   grupo: "1", // Economicos
  //   is_indicador: true,
  //   exemplo: "Uma determinada empresa rural possui ativos correntes no valor de R$ 40.000,00 e seu passivo corrente é de R$ 30.000,00. Logo, seu índice de liquidez no curto prazo é de 1,33. Índice de liquidez acima de um indicam boa saúde financeira a curto prazo. ",
  //   conceito:
  //     "ÍNDICE DE LIQUIDEZ  - o conceito puro de liquidez significa a capacidade de um negócio em satisfazer as exigências de caixa, quando ocorrem.",
  //   formula1: "ativocorrente/passivocorrente",
  //   formula:
  //     "Índice de Liquidez = Ativo Corrente / Passivo Corrente",
  //   formula_equacao: [
  //     {
  //       label: "Ativo Corrente",
  //       name: "margemdecontribuicao",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     },
  //     {
  //       label: "Passivo Corrente",
  //       name: "valortotaldevenda",
  //       descricao: "lorem ipsum dolor atmetsu",
  //       value: ""
  //     }
  //   ]
  // },

  {
    id: "37",
    favorito: false,
    relatorio: false,
    nome: "Patrimônio Liquido", // pág 222
    grupo: "1", // Economicos
    is_indicador: true,
    exemplo:
      "Se todo o imobilizado da empresa rural é R$ 1.500.000,00 e existem R$ 120.000,00 em dívidas, o patrimônio líquido da enpresa rural é de R$ 1.380.000,00.",
    conceito:
      "ÍNDICE DE LIQUIDEZ  - é dado pelo valor total, atual e real da Empresa Rural, descontadas todas as obrigações e dividas existentes.",
    formula1: "patrimoniobruto-dividasexistentes",
    formula: "Patrimônio Liquido = Patrimônio Bruto - Dívidas Existentes",
    formula_equacao: [
      {
        label: "Patrimônio Bruto",
        name: "patrimoniobruto",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
      {
        label: "Dívidas Existentes",
        name: "dividasexistentes",
        descricao: "lorem ipsum dolor atmetsu",
        value: "",
      },
    ],
  },
];
