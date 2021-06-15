import Header from '../components/site/Header';
import Menu from '../components/site/Menu';
import QuemSomos from '../components/site/QuemSomos';
import Servicos from '../components/site/Servicos';
import Noticias from '../components/site/Noticias';
import AreaDoCliente from '../components/site/AreaDoCliente';

export default function Home() {
  return (
    <main>
      <Header />
      <Menu />
      <QuemSomos />
      <Servicos />
      <Noticias />
      <AreaDoCliente />
    </main>
  );
}
