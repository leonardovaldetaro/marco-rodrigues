import Styles from './Chamada.module.scss';

export default function ChamadaSection() {
  return (
    <section className={Styles.chamadaSection}>
      <div className={Styles.container}>
        <h2 className={Styles.title}>Palavras que <span>Transformam Vidas</span></h2>
        <p className={Styles.text}>Atuação em contextos <b>empresariais</b>, <b>educativos</b>, <b>sociais</b> e de <b>alta performance,</b> com foco em liderança, propósito e transformação.</p>
      </div>
    </section>
  );
}