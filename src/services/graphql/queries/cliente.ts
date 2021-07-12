import { gql } from 'graphql-request';

export const authentication = gql`
  mutation AUTH($cnpj: String!, $senha: String!) {
    auth(input: { cnpj: $cnpj, senha: $senha }) {
      token
      cliente {
        id
        nome
        cnpj
      }
    }
  }
`;

export const getFiles = '';
