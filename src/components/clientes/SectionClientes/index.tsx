import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import { IconButton, Tooltip } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import ICliente from '~/typescript/ICliente';

import getFileUrl from '~/utils/getFileUrl';

import useStyles from './styles';

type Props = {
  cliente: ICliente;
};

type GroupFiles = {
  type: string;
  files: {
    id: string;
    arquivo: {
      name: string;
      url: string;
    };
  }[];
};

export default function SectionClientes({ cliente }: Props) {
  const classes = useStyles();
  const router = useRouter();
  const [files, setFiles] = useState<GroupFiles[]>();

  const exit = () => {
    localStorage.removeItem('alexandreAraujo@Auth:token');
    router.push('/');
  };

  useEffect(() => {
    // Função para agrupar arquivos pelo tipo
    const groupFiles = () => {
      // Criando estrutura do array
      const filesType: GroupFiles[] = cliente.arquivos.map((file) => ({
        type: file.tipos_de_arquivo.nome,
        files: [],
      }));

      // Filtrando tipos de arquivo duplicados
      const filesTypeFiltered = filesType.filter(
        (fileType, index, self) =>
          index === self.findIndex((t) => t.type === fileType.type)
      );

      // Adicionando arquivos aos elementos
      cliente.arquivos.forEach((file) => {
        filesTypeFiltered.forEach((fileTypeFiltered) => {
          if (file.tipos_de_arquivo.nome === fileTypeFiltered.type) {
            fileTypeFiltered.files.push({ id: file.id, arquivo: file.arquivo });
          }
        });
      });

      setFiles(filesTypeFiltered);
    };

    groupFiles();
  }, [cliente]);

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
            src={getFileUrl(cliente.logo.url)}
            alt={cliente.logo.alternativeText}
            className={classes.logo}
          />
        )}

        <div className={classes.files}>
          <h2>Arquivos Disponíveis para Download</h2>

          {files &&
            files.map((file) => (
              <Fragment key={file.type}>
                <span className={classes.fileType}>{file.type}</span>
                <ul>
                  {file.files.map((fl) => (
                    <li key={fl.id}>
                      <a
                        href={getFileUrl(fl.arquivo.url)}
                        className={classes.file}
                      >
                        {fl.arquivo.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Fragment>
            ))}
        </div>
      </div>
    </section>
  );
}
