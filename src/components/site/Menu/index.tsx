import Link from 'next/link';
import clsx from 'clsx';

import useStyles from './styles';

export default function Menu() {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <ul className={classes.menu}>
          <li className={classes.menuItem}>
            <Link href="#quemsomos">Quem Somos</Link>
          </li>
          <li className={classes.menuDivider} />
          <li className={classes.menuItem}>
            <Link href="#servicos">Serviços</Link>
          </li>
          <li className={classes.menuDivider} />
          <li className={classes.menuItem}>
            <Link href="#noticias">Notícias</Link>
          </li>
          <li className={classes.menuDivider} />
          <li className={classes.menuItem}>
            <Link href="#contato">Contato</Link>
          </li>
          <li className={classes.menuDivider} />
          <li className={clsx(classes.menuItem, classes.clientArea)}>
            <Link href="#area-cliente">Área do Cliente</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
