import PartnersSection from '../home/partnersSection';
import HeroTop from './heroTop';
import Styles from './Palestras.module.scss';

export default function PalestrasPage() {
  return (
    <main className={Styles.palestrasPage}>
      <HeroTop />
      <PartnersSection />
    </main>
  );
}