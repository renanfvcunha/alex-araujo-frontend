import { Fragment } from 'react';

import useStyles from './styles';
import ICliente from '~/typescript/ICliente';
import getFileUrl from '~/utils/getFileUrl';

type Clientes = {
  clientes: ICliente[];
};

export default function Clientes({ clientes }: Clientes) {
  const classes = useStyles();

  return (
    <section id="clientes" className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.sectionTitle}>Nossos Clientes</h1>

        <div className={classes.clientsPanelArea}>
          <div className={classes.clientsPanel}>
            {clientes.map((cliente) => (
              <Fragment key={cliente.id}>
                {cliente.logo && (
                  <img
                    src={getFileUrl(cliente.logo.url)}
                    alt={cliente.logo.alternativeText}
                    className={classes.logo}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
