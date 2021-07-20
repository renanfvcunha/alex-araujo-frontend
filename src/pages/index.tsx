import { GetStaticProps } from 'next';

import Header from '~/components/site/Header';
import Menu from '~/components/site/Home/Menu';
import QuemSomos from '~/components/site/Home/QuemSomos';
import Servicos from '~/components/site/Home/Servicos';
import Noticias from '~/components/site/Home/Noticias';
import AreaDoCliente from '~/components/site/Home/AreaDoCliente';
import Clientes from '~/components/site/Home/Clientes';
import Contato from '~/components/site/Home/Contato';
import Footer from '~/components/site/Footer';
import Seo from '~/components/site/Seo';

import client from '~/services/graphql/client';
import getSiteContent from '~/services/graphql/queries/sitePrincipal';
import { getNoticias } from '~/services/graphql/queries/noticias';
import { getClientes } from '~/services/graphql/queries/cliente';

import ISitePrincipal from '~/typescript/ISitePrincipal';
import Noticia from '~/typescript/INoticia';
import ICliente from '~/typescript/ICliente';

import getFileUrl from '~/utils/getFileUrl';

type Props = {
  sitePrincipal: ISitePrincipal;
  noticias: Noticia[];
  clientes: ICliente[];
};

export default function Home({ sitePrincipal, noticias, clientes }: Props) {
  return (
    <>
      <Seo
        shareImage={getFileUrl(sitePrincipal.header.logo.formats.thumbnail.url)}
      />
      <main>
        <Header header={sitePrincipal.header} />
        <Menu menu={sitePrincipal.menu} />
        <QuemSomos quemSomos={sitePrincipal.quemSomos} />
        <Servicos nossosServicos={sitePrincipal.nossosServicos} />
        <Noticias noticias={noticias} />
        <AreaDoCliente />
        {clientes.length > 0 && <Clientes clientes={clientes} />}
        <Contato contato={sitePrincipal.contato} />
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { sitePrincipal } = await client.request(getSiteContent);
  const { noticias } = await client.request(getNoticias, {
    limit: 5,
    start: 0,
  });
  const { clientes } = await client.request(getClientes);

  if (!sitePrincipal) {
    return {
      notFound: true,
    };
  }

  return {
    props: { sitePrincipal, noticias, clientes },
    revalidate: 1 * 60 * 60,
  };
};
