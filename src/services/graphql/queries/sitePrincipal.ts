import { gql } from 'graphql-request';

const getSiteContent = gql`
  query GET_SITE_CONTENT {
    sitePrincipal {
      header {
        titulo
        subtitulo
        logo {
          url
          alternativeText
        }
      }
      quemSomos {
        textos {
          titulo
          subtitulo
          texto
        }
        video {
          titulo
          link
        }
      }
      nossosServicos {
        servicos {
          id
          icone {
            url
            alternativeText
          }
          servico
        }
      }
    }
  }
`;

export default getSiteContent;
