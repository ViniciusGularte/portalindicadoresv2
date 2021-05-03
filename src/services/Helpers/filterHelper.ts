import { data } from "../../services/indicadores_data";
import { Indicador } from "../interfaces/indicador";
const getIndicadorById = (id: string) => {
  const indicadores: Array<Indicador> = data.filter(indicadores => {
    return indicadores.id === id;
  });
  return indicadores[0];
};

const getIndicadorByGrupo = (grupo: string) => {
  const indicadores: Array<Indicador> = data.filter(indicadores => {
    return indicadores.grupo === grupo;
  });
  return indicadores;
};

const getIndicadorBySearch = (search: string) => {
  const indicadores: Array<Indicador> = data.filter(indicadores => {
    return indicadores.nome.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  return indicadores;
};


export { getIndicadorById,getIndicadorByGrupo, getIndicadorBySearch };

