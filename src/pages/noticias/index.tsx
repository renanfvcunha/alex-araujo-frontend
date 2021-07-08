import { useState, useMemo, useEffect } from 'react';
import { GetServerSideProps } from 'next';

import Header from '~/components/site/Header';
import SectionNoticias from '~/components/site/Noticias/SectionNoticias';
import Footer from '~/components/site/Footer';

import ISitePrincipal from '~/typescript/ISitePrincipal';
import Noticia, { NoticiasConnection } from '~/typescript/INoticia';

import client from '~/services/graphql/client';
import { getHeader, getNoticias } from '~/services/graphql/queries/noticias';

import useStyles from '../styles';

type Props = {
  sitePrincipal: ISitePrincipal;
  noticias: Noticia[];
  noticiasConnection: NoticiasConnection;
  page: string;
  perPage: number;
};

export default function Noticias({
  sitePrincipal,
  noticias,
  noticiasConnection,
  page,
  perPage,
}: Props) {
  const classes = useStyles();

  const [initialPage, setInitialPage] = useState<number>();
  const pageCount = useMemo(() => {
    return Math.ceil(noticiasConnection.aggregate.totalCount / perPage);
  }, [noticiasConnection.aggregate.totalCount, perPage]);

  useEffect(() => {
    setInitialPage(Number(page));
  }, [page]);

  return (
    <main className={classes.main}>
      <Header header={sitePrincipal.header} />
      {initialPage && (
        <SectionNoticias
          noticias={noticias}
          initialPage={initialPage || 0}
          pageCount={pageCount}
          perPage={perPage}
          totalCount={noticiasConnection.aggregate.totalCount}
        />
      )}
      <Footer />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page || '1';
  const perPage = 5;
  const { sitePrincipal } = await client.request(getHeader);
  const { noticias, noticiasConnection } = await client.request(getNoticias, {
    limit: perPage,
    start: (Number(page) - 1) * perPage,
  });

  if (!sitePrincipal || !noticias) {
    return {
      notFound: true,
    };
  }

  return {
    props: { sitePrincipal, noticias, noticiasConnection, page, perPage },
  };
};
