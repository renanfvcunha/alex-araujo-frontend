/* eslint-disable import/no-duplicates */
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Paginate from 'react-paginate';

import useStyles from './styles';
import Noticia from '~/typescript/INoticia';
import getImageUrl from '~/utils/getImageUrl';

type Props = {
  noticias: Noticia[];
  initialPage: number;
  pageCount: number;
  perPage: number;
  totalCount: number;
};

export default function SectionNoticias({
  noticias,
  initialPage,
  pageCount,
  perPage,
  totalCount,
}: Props) {
  const classes = useStyles();
  const router = useRouter();

  const paginationHandler = (page: { selected: number }) => {
    const currentQuery = { ...router.query };
    currentQuery.page = (page.selected + 1).toString();

    router.push({
      pathname: router.pathname,
      query: currentQuery,
    });
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
              <a className={classes.notice}>
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
              </a>
            </Link>
          ))}

          {totalCount > perPage && (
            <Paginate
              previousLabel="Notícias Recentes"
              nextLabel="Notícias Anteriores"
              breakLabel="..."
              pageCount={pageCount}
              initialPage={initialPage > 1 ? initialPage - 1 : undefined}
              pageRangeDisplayed={1}
              marginPagesDisplayed={2}
              onPageChange={paginationHandler}
              containerClassName={classes.pagination}
              activeLinkClassName={classes.activeLink}
              pageLinkClassName={classes.pageLink}
              previousLinkClassName={classes.previousLink}
              nextLinkClassName={classes.nextLink}
            />
          )}
        </div>
      </section>
    </>
  );
}
