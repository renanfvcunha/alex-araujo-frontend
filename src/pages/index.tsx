import Header from '../components/site/Header';
import Menu from '../components/site/Menu';
import QuemSomos from '../components/site/QuemSomos';
import Servicos from '../components/site/Servicos';

export default function Home() {
  return (
    <main>
      <Header />
      <Menu />
      <QuemSomos />
      <Servicos />
    </main>
  );
}
