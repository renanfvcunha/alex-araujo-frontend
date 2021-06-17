import useStyles from './styles';
import { QuemSomos as IQuemSomos } from '../../../../typescript/ISitePrincipal';

type QuemSomos = {
  quemSomos: IQuemSomos;
};

export default function QuemSomos({ quemSomos }: QuemSomos) {
  const classes = useStyles();

  return (
    <section id="quem-somos" className={classes.section}>
      <div className={classes.container}>
        <div className={classes.divider}>
          <div className={classes.texts}>
            <div className={classes.headings}>
              <h1>{quemSomos.textos.titulo}</h1>
              <h2>{quemSomos.textos.subtitulo}</h2>
            </div>
            <div
              className={classes.content}
              dangerouslySetInnerHTML={{ __html: quemSomos.textos.texto }}
            />
          </div>
          <div className={classes.video}>
            <iframe
              src="https://www.youtube.com/embed/6stlCkUDG_s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
