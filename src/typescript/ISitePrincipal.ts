export interface Image {
  url: string;
  alternativeText: string;
}

export interface Header {
  titulo: string;
  subtitulo: string;
  logo: Image;
}

export interface QuemSomos {
  textos: {
    titulo: string;
    subtitulo: string;
    texto: string;
  };
  video: {
    titulo: string;
    link: string;
  };
}

export interface NossosServicos {
  servicos: {
    id: string;
    icone: Image | null;
    servico: string;
  }[];
}

export default interface ISitePrincipal {
  header: Header;
  quemSomos: QuemSomos;
  nossosServicos: NossosServicos;
}
