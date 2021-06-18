import { GetServerSideProps } from 'next';

import Header from '~/components/site/Header';
import SectionNoticias from '~/components/site/Noticias/SectionNoticias';

import ISitePrincipal from '~/typescript/ISitePrincipal';

import client from '~/services/graphql/client';
import getSiteContent from '~/services/graphql/queries/sitePrincipal';

type SitePrincipal = {
  sitePrincipal: ISitePrincipal;
};

export default function Noticias({ sitePrincipal }: SitePrincipal) {
  return (
    <main>
      <Header header={sitePrincipal.header} />
      <SectionNoticias />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { sitePrincipal } = await client.request(getSiteContent);

  if (!sitePrincipal) {
    return {
      notFound: true,
    };
  }

  return {
    props: { sitePrincipal },
  };
};
