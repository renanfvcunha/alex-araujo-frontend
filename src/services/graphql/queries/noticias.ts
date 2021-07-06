import { gql } from 'graphql-request';

export const getNoticias = gql`
  query GET_NOTICIAS {
    noticias(sort: "created_at:desc") {
      titulo
      slug
      resumo
      capa {
        alternativeText
        formats
      }
      published_at
    }
  }
`;

export const getNoticia = '';
