import PartnersSection from '../home/partnersSection';
import ChamadaSection from './chamadaSection';
import CtaSection from './cta';
import EmpresarialSection from './empresarialSection';
import HeroSectionPalestras from './heroSection';
import HeroTop from './heroTop';
import Styles from './Palestras.module.scss';
import SocialSection from './socialSection';

export default function PalestrasPage() {
  return (
    <main className={Styles.palestrasPage}>
      <HeroSectionPalestras />
      <ChamadaSection />
      <PartnersSection />
      <EmpresarialSection />
      <SocialSection />
      <CtaSection />
    </main>
  );
}