import Styles from './HeroSection.module.scss';
import NavPalestras from './nav';

export default function HeroSectionPalestras() {
    return (
        <section className={Styles.heroSectionTop}>
            <div className={Styles.heroSectionTop__containerTop}>
                <h1 className={Styles.heroSectionTop__containerTop__title}>Palestras que Transformam Vidas</h1>
            </div>

            <div className={Styles.heroSectionTop__containerMidle}>
                <NavPalestras />
            </div>

            <div className={Styles.heroSectionTop__containerBottom}>
                <h3 className={Styles.heroSectionTop__containerBottom__title}>Participe de eventos ao vivo</h3>
                <p className={Styles.heroSectionTop__containerBottom__description}>
                    Junte-se a nós em eventos ao vivo, interaja com palestrantes e faça parte de uma comunidade apaixonada por aprendizado.
                </p>
            </div>
        </section>
    );
}