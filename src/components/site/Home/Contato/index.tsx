import useStyles from './styles';

export default function Contato() {
  const classes = useStyles();

  return (
    <section id="contato" className={classes.section}>
      <div className={classes.container}>
        <div className={classes.justifyCenter}>
          <h1 className={classes.sectionTitle}>Fale Conosco</h1>

          <span className={classes.contactText}>
            Endereço: avenida avenida avenida
          </span>

          <span className={classes.contactText}>
            Telefone: 0000 0000 0000 000
          </span>

          <a href="mailto:contato@mail.com" className={classes.email}>
            contato@mail.com
          </a>
        </div>
      </div>
    </section>
  );
}
