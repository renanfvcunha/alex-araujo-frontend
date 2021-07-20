import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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

        <Carousel
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          autoPlay
          infiniteLoop
        >
          {clientes.map((cliente) => (
            <div key={cliente.id}>
              {cliente.logo && (
                <img
                  src={getFileUrl(cliente.logo.url)}
                  alt={cliente.logo.alternativeText}
                  className={classes.clientLogo}
                />
              )}
              <p className={classes.clientLogoText}>{cliente.nome}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
