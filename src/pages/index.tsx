import { GetStaticProps } from 'next';

import Header from '~/components/site/Header';
import Menu from '~/components/site/Home/Menu';
import QuemSomos from '~/components/site/Home/QuemSomos';
import Servicos from '~/components/site/Home/Servicos';
import Noticias from '~/components/site/Home/Noticias';
import AreaDoCliente from '~/components/site/Home/AreaDoCliente';

import ISitePrincipal from '~/typescript/ISitePrincipal';

import client from '~/services/graphql/client';
import getSiteContent from '~/services/graphql/queries/sitePrincipal';

export default function Home({
  sitePrincipal,
}: {
  sitePrincipal: ISitePrincipal;
}) {
  return (
    <main>
      <Header header={sitePrincipal.header} />
      <Menu menu={sitePrincipal.menu} />
      <QuemSomos quemSomos={sitePrincipal.quemSomos} />
      <Servicos nossosServicos={sitePrincipal.nossosServicos} />
      <Noticias />
      <AreaDoCliente />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { sitePrincipal } = await client.request(getSiteContent);

  if (!sitePrincipal) {
    return {
      notFound: true,
      revalidate: 1 * 60 * 60,
    };
  }

  return {
    props: { sitePrincipal },
  };
};
