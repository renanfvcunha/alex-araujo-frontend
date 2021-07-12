/* eslint-disable import/no-duplicates */
import { Divider } from '@material-ui/core';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import INoticia from '~/typescript/INoticia';
import getFileUrl from '~/utils/getFileUrl';
import parseInnerHtml from '~/utils/parseInnerHtml';

import useStyles from './styles';

type Props = {
  noticia: INoticia;
};

export default function Noticia({ noticia }: Props) {
  const classes = useStyles();

  return (
    <article className={classes.article}>
      <div className={classes.container}>
        <h1 className={classes.title}>{noticia.titulo}</h1>
        <small>
          {format(
            new Date(noticia.published_at),
            "dd 'de' MMMM 'de' yyyy 'às' HH:mm",
            {
              locale: ptBR,
            }
          )}
        </small>

        <Divider />

        <img
          src={getFileUrl(noticia.capa.url)}
          alt={noticia.capa.alternativeText}
          className={classes.cover}
        />

        <div
          dangerouslySetInnerHTML={{
            __html: parseInnerHtml(noticia.conteudo),
          }}
          className={classes.content}
        />
      </div>
    </article>
  );
}
