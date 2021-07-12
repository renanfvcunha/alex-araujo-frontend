import { useRouter } from 'next/router';
import { IconButton, Tooltip } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import ICliente from '~/typescript/ICliente';

import getFileUrl from '~/utils/getFileUrl';

import useStyles from './styles';

type Props = {
  cliente: ICliente;
};

export default function SectionClientes({ cliente }: Props) {
  const classes = useStyles();
  const router = useRouter();

  const exit = () => {
    localStorage.removeItem('alexandreAraujo@Auth:token');
    router.push('/');
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.welcome}>
          <h1 className={classes.welcomeTxt}>Bem-Vindo(a), {cliente.nome}</h1>
          <Tooltip title="Sair" className={classes.exitBtn} onClick={exit}>
            <IconButton aria-label="sair">
              <ExitToApp />
            </IconButton>
          </Tooltip>
        </div>

        {cliente.logo && (
          <img
            src={cliente.logo.url}
            alt={cliente.logo.alternativeText}
            className={classes.logo}
          />
        )}

        <div className={classes.files}>
          <h2>Arquivos Disponíveis para Download</h2>

          <ul>
            {cliente.arquivos.map((arquivo) => (
              <li key={arquivo.id}>
                <span>{arquivo.tipos_de_arquivo.nome}:</span>
                <a href={getFileUrl(arquivo.arquivo.url)}>
                  {arquivo.arquivo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
