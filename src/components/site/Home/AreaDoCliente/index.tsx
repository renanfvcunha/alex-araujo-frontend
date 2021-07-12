import { useState, FormEvent } from 'react';
import { Button, TextField } from '@material-ui/core';

import useStyles from './styles';
import client from '~/services/graphql/client';
import { authentication } from '~/services/graphql/queries/cliente';
import swAlert from '~/utils/alert';

export default function AreaDoCliente() {
  const classes = useStyles();
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { auth } = await client.request(authentication, {
        cnpj,
        senha,
      });

      localStorage.setItem(
        'alexandreAraujo@Auth:client',
        JSON.stringify(auth.cliente)
      );
      localStorage.setItem('alexandreAraujo@Auth:token', auth.token);
    } catch (err) {
      switch (err.response.errors[0].message) {
        case 'fieldsMismatch':
          swAlert('error', 'Erro', 'Verifique se os campos estão preenchidos.');
          break;
        case 'userOrPassMismatch':
          swAlert('error', 'Erro', 'Usuário E/Ou Senha Incorreto(s).');
          break;
        default:
          swAlert('error', 'Erro', 'Erro Desconhecido ao Fazer Login.');
          break;
      }
    }
  };

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
                  onSubmit={handleSubmit}
                >
                  <TextField
                    label="CNPJ"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                  />
                  <TextField
                    label="Senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
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
