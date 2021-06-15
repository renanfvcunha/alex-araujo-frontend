import { Description } from '@material-ui/icons';
import useStyles from './styles';

export default function Servicos() {
  const classes = useStyles();

  return (
    <section id="servicos" className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.sectionTitle}>Nossos Serviços</h1>

        <ul className={classes.servicesContainer}>
          <li className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>Assessoria Contábil</span>
          </li>
          <li className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>Assessoria Fiscal</span>
          </li>
          <li className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>Assessoria Trabalhista</span>
          </li>
          <li className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>Abertura de Empresas</span>
          </li>
          <li className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>Certificado Digital</span>
          </li>
          <li className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>BPO Financeiro</span>
          </li>
          <li className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>RH Terceirizado</span>
          </li>
          <li className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>Consultoria de Negócios</span>
          </li>
          <li className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>
              Treinamentos - Cursos e Palestras
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
