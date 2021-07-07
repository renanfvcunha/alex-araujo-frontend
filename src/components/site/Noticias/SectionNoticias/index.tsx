/* eslint-disable import/no-duplicates */
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import Head from 'next/head';
import Paginate from 'react-paginate';

import useStyles from './styles';
import Noticia, { NoticiasConnection } from '~/typescript/INoticia';
import getImageUrl from '~/utils/getImageUrl';

type Props = {
  noticias: Noticia[];
  noticiasConnection: NoticiasConnection;
};

export default function SectionNoticias({
  noticias,
  noticiasConnection,
}: Props) {
  const classes = useStyles();

  const paginationHandler = () => {
    alert('clicou');
  };

  return (
    <>
      <Head>
        <title>Notícias - Alexandre Araújo | Consultoria e Contabilidade</title>
      </Head>
      <section className={classes.section}>
        <div className={classes.container}>
          <h1 className={classes.sectionTitle}>Notícias</h1>

          {noticias.map((noticia) => (
            <Link key={noticia.id} href={`/noticias/${noticia.slug}`}>
              <div className={classes.notice}>
                <img
                  src={getImageUrl(noticia.capa.formats.thumbnail.url)}
                  alt={noticia.capa.alternativeText}
                  className={classes.thumb}
                />

                <div className={classes.texts}>
                  <h1>{noticia.titulo}</h1>
                  <span>{noticia.resumo}</span>
                  <small>
                    Publicado há&nbsp;
                    {formatDistanceToNow(new Date(noticia.published_at), {
                      locale: ptBR,
                    })}
                  </small>
                </div>
              </div>
            </Link>
          ))}

          <Paginate
            previousLabel="Notícias Recentes"
            nextLabel="Notícias Anteriores"
            breakLabel="..."
            pageCount={2}
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}
            onPageChange={paginationHandler}
            containerClassName={classes.pagination}
            activeLinkClassName={classes.activeLink}
            pageLinkClassName={classes.pageLink}
            previousLinkClassName={classes.previousLink}
            nextLinkClassName={classes.nextLink}
          />
        </div>
      </section>
    </>
  );
}
