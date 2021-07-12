import { GetServerSideProps } from 'next';

import Header from '~/components/site/Header';
import Noticia from '~/components/site/Noticias/Noticia';
import Footer from '~/components/site/Footer';
import Seo from '~/components/site/Seo';

import { Header as IHeader } from '~/typescript/ISitePrincipal';
import INoticia from '~/typescript/INoticia';

import client from '~/services/graphql/client';
import { getHeader } from '~/services/graphql/queries/sitePrincipal';
import { getNoticia } from '~/services/graphql/queries/noticias';

import useStyles from '../../styles';
import getFileUrl from '~/utils/getFileUrl';

type Props = {
  header: IHeader;
  noticia: INoticia;
};

export default function Slug({ header, noticia }: Props) {
  const classes = useStyles();

  return (
    <>
      <Seo
        metaTitle={`${noticia.titulo} | Alexandre Araújo - Consultoria e Contabilidade`}
        metaDescription={noticia.resumo}
        shareImage={getFileUrl(noticia.capa.formats.thumbnail.url)}
        article
      />
      <main className={classes.main}>
        <Header header={header} />
        <Noticia noticia={noticia} />
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { sitePrincipal } = await client.request(getHeader);
  const { noticias } = await client.request(getNoticia, {
    slug: params?.slug,
  });

  if (!sitePrincipal) {
    return {
      notFound: true,
    };
  }

  return {
    props: { header: sitePrincipal.header, noticia: noticias[0] },
  };
};
