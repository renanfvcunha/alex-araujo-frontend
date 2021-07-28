import { gql } from 'graphql-request';

export const getClientes = gql`
  query GET_CLIENTES {
    clientes {
      nome
      logo {
        url
        alternativeText
      }
    }
  }
`;

export const authentication = gql`
  mutation AUTH($cnpj: String!, $senha: String!) {
    auth(input: { cnpj: $cnpj, senha: $senha }) {
      token
    }
  }
`;

export const getFiles = gql`
  query GET_ARQUIVOS {
    findByToken {
      nome
      cnpj
      logo {
        url
        alternativeText
        formats
      }
      arquivos(sort: "published_at:desc") {
        id
        arquivo {
          name
          url
        }
        tipos_de_arquivo {
          nome
        }
      }
    }
  }
`;
