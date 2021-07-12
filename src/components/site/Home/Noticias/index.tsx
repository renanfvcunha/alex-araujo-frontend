import Link from 'next/link';
import useStyles from './styles';

import INoticia from '~/typescript/INoticia';
import getFileUrl from '~/utils/getFileUrl';

type Props = {
  noticias: INoticia[];
};

export default function Noticias({ noticias }: Props) {
  const classes = useStyles();

  return (
    <section id="noticias" className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.sectionTitle}>Notícias</h1>

        <ul className={classes.noticesContainer}>
          {noticias.map((noticia) => (
            <Link key={noticia.id} href={`/noticias/${noticia.slug}`}>
              <a className={classes.textDecNone}>
                <li className={classes.notice}>
                  <img
                    src={getFileUrl(noticia.capa.formats.thumbnail.url)}
                    alt={noticia.capa.alternativeText}
                    className={classes.noticePicture}
                  />
                  <div className={classes.noticeTitle}>
                    <h1>{noticia.titulo}</h1>
                    <h2>{noticia.resumo}</h2>
                  </div>
                </li>
              </a>
            </Link>
          ))}
          <li style={{ alignSelf: 'center', minWidth: 100 }}>
            <Link href="/noticias">
              <a className={classes.more}>Ver Mais</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
