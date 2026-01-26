import { Colaborador } from './colaborador.model';

export interface Workshop {
  id: number;
  nome: string;
  dataRealizacao: string;
  descricao: string;
  colaboradores: Colaborador[];
}
