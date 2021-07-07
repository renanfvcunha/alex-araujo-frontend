import { GetServerSideProps } from 'next';

import Header from '~/components/site/Header';
import SectionNoticias from '~/components/site/Noticias/SectionNoticias';
import Footer from '~/components/site/Footer';

import ISitePrincipal from '~/typescript/ISitePrincipal';
import Noticia, { NoticiasConnection } from '~/typescript/INoticia';

import client from '~/services/graphql/client';
import getSiteContent from '~/services/graphql/queries/sitePrincipal';
import { getNoticias } from '~/services/graphql/queries/noticias';

import useStyles from '../styles';

type Props = {
  sitePrincipal: ISitePrincipal;
  noticias: Noticia[];
  noticiasConnection: NoticiasConnection;
};

export default function Noticias({
  sitePrincipal,
  noticias,
  noticiasConnection,
}: Props) {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Header header={sitePrincipal.header} />
      <SectionNoticias
        noticias={noticias}
        noticiasConnection={noticiasConnection}
      />
      <Footer />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { sitePrincipal } = await client.request(getSiteContent);
  const { noticias, noticiasConnection } = await client.request(getNoticias, {
    limit: 5,
    start: 0,
  });

  if (!sitePrincipal || !noticias) {
    return {
      notFound: true,
    };
  }

  return {
    props: { sitePrincipal, noticias, noticiasConnection },
  };
};
