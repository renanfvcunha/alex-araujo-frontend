import { Button, TextField } from '@material-ui/core';

import useStyles from './styles';

export default function AreaDoCliente() {
  const classes = useStyles();

  return (
    <section id="area-cliente" className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.sectionTitle}>Área do Cliente</h1>

        <div className={classes.divider}>
          <div className={classes.services}>
            <ul className={classes.servicesList}>
              <li>
                <span>Seu Pacote</span>
                <hr className={classes.hr} />
              </li>
              <li>
                <span>Documentos Societários</span>
                <hr className={classes.hr} />
              </li>
              <li>
                <span>Certidões</span>
                <hr className={classes.hr} />
              </li>
              <li>
                <span>Certificado Digital</span>
                <hr className={classes.hr} />
              </li>
              <li>
                <span>Rotina</span>
                <hr className={classes.hr} />
              </li>
              <li>
                <span>Extratos Bancários</span>
                <hr className={classes.hr} />
              </li>
              <li>
                <span>Solicitações</span>
                <hr className={classes.hr} />
              </li>
              <li>
                <span>Mensagem ao Gestor</span>
                <hr className={classes.hr} />
              </li>
            </ul>
          </div>
          <div className={classes.auth}>
            <div className={classes.authBox}>
              <div className={classes.authArea}>
                <form
                  noValidate
                  autoComplete="off"
                  className={classes.authForm}
                >
                  <TextField label="CNPJ" />
                  <TextField label="Senha" type="password" />
                  <Button type="submit" variant="contained" color="primary">
                    Acessar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
