import PartnersSection from '../home/partnersSection';
import ChamadaSection from './chamadaSection';
import CtaSection from './cta';
import EmpresarialSection from './empresarialSection';
import HeroSectionPalestras from './heroSection';
import Styles from './Palestras.module.scss';
import SocialSection from './socialSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Palestras de Desenvolvimento Pessoal e Profissional com Marco Rodrigues',
  description: 'Palestras de desenvolvimento pessoal e profissional com Marco Rodrigues, inspirando pessoas e equipas com propósito, clareza e ação.',
}

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