import Image from './IImage';

export default interface Noticia {
  titulo: string;
  slug: string;
  resumo: string;
  capa: Image;
  published_at: Date;
  conteudo: string;
}
