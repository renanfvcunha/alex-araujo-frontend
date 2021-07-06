import { Header as IHeader } from '~/typescript/ISitePrincipal';
import useStyles from './styles';
import getImageUrl from '~/utils/getImageUrl';

type Header = {
  header: IHeader;
};

export default function Header({ header }: Header) {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <img
          src={getImageUrl(header.logo.url)}
          width={95}
          height={95}
          alt={header.logo.alternativeText}
        />

        <div className={classes.texts}>
          <h1>{header.titulo}</h1>
          <h2>{header.subtitulo}</h2>
        </div>
      </div>
    </header>
  );
}
