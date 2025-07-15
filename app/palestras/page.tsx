import PartnersSection from '../home/partnersSection';
import ChamadaSection from './chamadaSection';
import EmpresarialSection from './empresarialSection';
import HeroSectionPalestras from './heroSection';
import HeroTop from './heroTop';
import Styles from './Palestras.module.scss';

export default function PalestrasPage() {
  return (
    <main className={Styles.palestrasPage}>
      {/* <HeroTop /> */}
      <HeroSectionPalestras />
      <PartnersSection />
      <ChamadaSection />
      <EmpresarialSection />
    </main>
  );
}