import Image from 'next/image';

import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Image
          src="/logo.png"
          width={95}
          height={95}
          alt="Logo Alexandre Araújo"
        />
        <div className={classes.texts}>
          <h1>Alexandre Araújo</h1>
          <h2>Consultoria e Contabilidade</h2>
        </div>
      </div>
    </header>
  );
}
