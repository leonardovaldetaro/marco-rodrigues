import BiografiaSection from './biografiaSection';
import CitacaoSection from './citacaoSection';
import AboutHero from './heroTop';
import Styles from './Sobre.module.scss';
import ValoresSection from './valoresSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marco Rodrigues, Mentor em Desenvolvimento Pessoal e Profissional',
  description: 'Conheça Marco Rodrigues, palestrante internacional e mentor em desenvolvimento pessoal e profissional, com foco em propósito, evolução e resultados reais.',
}

export default function SobrePage() {
  return (
    <main className={Styles.sobrePage}>
      <AboutHero />
      <BiografiaSection />
      <CitacaoSection />
      <ValoresSection />
    </main>
  );
}