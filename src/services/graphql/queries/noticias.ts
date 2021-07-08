import { gql } from 'graphql-request';

export const getHeader = gql`
  query GET_HEADER {
    sitePrincipal {
      header {
        titulo
        subtitulo
        logo {
          url
          alternativeText
        }
      }
    }
  }
`;

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

export const getNoticia = gql`
  query GET_NOTICIA($slug: String!) {
    noticias(where: { slug: $slug }) {
      id
      titulo
      capa {
        url
        alternativeText
      }
      conteudo
      published_at
    }
  }
`;
