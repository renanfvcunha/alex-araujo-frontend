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
          formats
        }
      }
      menu {
        imagem {
          url
          alternativeText
        }
        whatsapp
      }
      quemSomos {
        textos {
          titulo
          subtitulo
          texto
        }
        video
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
      contato {
        endereco
        telefone
        email
      }
    }
  }
`;

export default getSiteContent;
