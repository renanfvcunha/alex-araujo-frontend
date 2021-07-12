import IImage from './IImage';

export default interface ICliente {
  nome: string;
  cnpj: string;
  logo: IImage | null;
  arquivos: {
    id: string;
    arquivo: {
      name: string;
      url: string;
    };
    tipos_de_arquivo: {
      nome: string;
    };
  }[];
}
