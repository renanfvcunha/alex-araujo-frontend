import { gql } from 'graphql-request';

export const getNoticias = gql`
  query GET_NOTICIAS($limit: Int, $start: Int) {
    noticias(sort: "created_at:desc", limit: $limit, start: $start) {
      id
      titulo
      slug
      resumo
      capa {
        url
        alternativeText
        formats
      }
      published_at
    }
    noticiasConnection {
      aggregate {
        totalCount
      }
    }
  }
`;

export const getNoticia = '';
