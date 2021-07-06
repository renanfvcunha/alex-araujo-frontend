import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <h2>
          {new Date().getFullYear()} Alexandre Araújo - Consultoria e
          Contabilidade. Desenvolvido por B2B Desenvolvimentos.
        </h2>
      </div>
    </footer>
  );
}
