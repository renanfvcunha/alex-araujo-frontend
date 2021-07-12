import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';

import Footer from '~/components/site/Footer';
import SectionClientes from '~/components/clientes/SectionClientes';
import Header from '~/components/site/Header';

import { Header as IHeader } from '~/typescript/ISitePrincipal';
import ICliente from '~/typescript/ICliente';

import client from '~/services/graphql/client';
import { getHeader } from '~/services/graphql/queries/sitePrincipal';
import { getFiles } from '~/services/graphql/queries/cliente';

import useStyles from '../../styles';
import swAlert from '~/utils/alert';

type Props = {
  header: IHeader;
};

export default function Clientes({ header }: Props) {
  const classes = useStyles();
  const [cliente, setCliente] = useState<ICliente>();

  useEffect(() => {
    const getArquivos = async () => {
      try {
        const { findByToken } = await client.request(getFiles, undefined, {
          'X-Access-Token':
            localStorage.getItem('alexandreAraujo@Auth:token') || '',
        });

        setCliente(findByToken);
      } catch (err) {
        switch (err.response.errors[0].message) {
          case 'notSentToken':
            swAlert('error', 'Erro', 'Token Não Enviado!');
            break;
          default:
            swAlert('error', 'Erro', 'Erro Desconhecido ao Fazer Login.');
            break;
        }
      }
    };

    getArquivos();
  }, []);

  return (
    <main className={classes.main}>
      <Header header={header} />
      {cliente && <SectionClientes cliente={cliente} />}
      <Footer />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { sitePrincipal } = await client.request(getHeader);

  if (!sitePrincipal) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      header: sitePrincipal.header,
    },
  };
};
