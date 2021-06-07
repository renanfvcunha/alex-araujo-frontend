import { Description } from '@material-ui/icons';
import useStyles from './styles';

export default function Servicos() {
  const classes = useStyles();

  return (
    <section id="servicos" className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.sectionTitle}>Nossos Serviços</h1>

        <div className={classes.servicesContainer}>
          <div className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>Assessoria Contábil</span>
          </div>
          <div className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>Assessoria Fiscal</span>
          </div>
          <div className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>Assessoria Trabalhista</span>
          </div>
          <div className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>Abertura de Empresas</span>
          </div>
          <div className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>Certificado Digital</span>
          </div>
          <div className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>BPO Financeiro</span>
          </div>
          <div className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>RH Terceirizado</span>
          </div>
          <div className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>Consultoria de Negócios</span>
          </div>
          <div className={classes.service}>
            <Description className={classes.icon} />
            <span className={classes.text}>
              Treinamentos - Cursos e Palestras
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
