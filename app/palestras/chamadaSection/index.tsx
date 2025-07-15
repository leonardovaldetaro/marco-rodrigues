import Styles from './Chamada.module.scss';

export default function ChamadaSection() {
  return (
    <section className={Styles.chamadaSection}>
      <div className={Styles.container}>
        <h2 className={Styles.title}>Palestras que promovem <span>desenvolvimento humano</span> e organizacional.</h2>
        <p className={Styles.text}>Atuação em contextos <b>empresariais</b>, <b>educativos</b>, <b>sociais</b> e de <b>alta performance,</b> com foco em liderança, propósito e transformação.</p>
      </div>
    </section>
  );
}