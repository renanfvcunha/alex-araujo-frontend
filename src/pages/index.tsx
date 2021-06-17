import { GetServerSideProps } from 'next';

import Header from '../components/site/Header';
import Menu from '../components/site/Menu';
import QuemSomos from '../components/site/QuemSomos';
import Servicos from '../components/site/Servicos';
import Noticias from '../components/site/Noticias';
import AreaDoCliente from '../components/site/AreaDoCliente';
import ISitePrincipal from '../../typescript/ISitePrincipal';
import client from '../services/graphql/client';
import getSiteContent from '../services/graphql/queries/sitePrincipal';

export default function Home({
  sitePrincipal,
}: {
  sitePrincipal: ISitePrincipal;
}) {
  return (
    <main>
      <Header header={sitePrincipal.header} />
      <Menu />
      <QuemSomos quemSomos={sitePrincipal.quemSomos} />
      <Servicos nossosServicos={sitePrincipal.nossosServicos} />
      <Noticias />
      <AreaDoCliente />
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
