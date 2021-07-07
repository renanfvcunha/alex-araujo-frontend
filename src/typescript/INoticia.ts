import Image from './IImage';

export default interface Noticia {
  id: string;
  titulo: string;
  slug: string;
  resumo: string;
  capa: Image;
  published_at: Date;
  conteudo: string;
}

export interface NoticiasConnection {
  aggregate: {
    totalCount: number;
  };
}
