import BiografiaSection from './biografiaSection';
import CitacaoSection from './citacaoSection';
import AboutHero from './heroTop';
import Styles from './Sobre.module.scss';
import ValoresSection from './valoresSection';

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