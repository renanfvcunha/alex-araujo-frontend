import { Description } from '@material-ui/icons';

import { NossosServicos as INossosServicos } from '~/typescript/ISitePrincipal';
import useStyles from './styles';

type NossosServicos = {
  nossosServicos: INossosServicos;
};

export default function Servicos({ nossosServicos }: NossosServicos) {
  const classes = useStyles();

  return (
    <section id="servicos" className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.sectionTitle}>Nossos Serviços</h1>

        <ul className={classes.servicesContainer}>
          {nossosServicos.servicos.map((servico) => (
            <li key={servico.id} className={classes.service}>
              {servico.icone ? (
                <img
                  src={process.env.NEXT_PUBLIC_API_URL + servico.icone.url}
                  alt={servico.icone.alternativeText}
                  className={classes.icon}
                />
              ) : (
                <Description className={classes.icon} />
              )}
              <span className={classes.text}>{servico.servico}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
