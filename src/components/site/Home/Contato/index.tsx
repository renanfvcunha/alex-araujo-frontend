import useStyles from './styles';
import { Contato as IContato } from '~/typescript/ISitePrincipal';
import masks from '~/utils/masks';

type Contato = {
  contato: IContato;
};

export default function Contato({ contato }: Contato) {
  const classes = useStyles();

  return (
    <section id="contato" className={classes.section}>
      <div className={classes.container}>
        <div className={classes.justifyCenter}>
          <h1 className={classes.sectionTitle}>Fale Conosco</h1>

          <span className={classes.contactText}>
            Endereço: {contato.endereco}
          </span>

          <span className={classes.contactText}>
            Telefone: {masks.phoneMask(contato.telefone)}
          </span>

          <a href={`mailto:${contato.email}`} className={classes.email}>
            {contato.email}
          </a>
        </div>
      </div>
    </section>
  );
}
