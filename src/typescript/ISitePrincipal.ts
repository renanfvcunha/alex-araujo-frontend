export interface Image {
  url: string;
  alternativeText: string;
}

export interface Header {
  titulo: string;
  subtitulo: string;
  logo: Image;
}

export interface Menu {
  imagem: Image;
  whatsapp: string | null;
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

export interface Contato {
  endereco: string;
  telefone: string;
  email: string;
}

export default interface ISitePrincipal {
  header: Header;
  menu: Menu;
  quemSomos: QuemSomos;
  nossosServicos: NossosServicos;
  contato: Contato;
}
