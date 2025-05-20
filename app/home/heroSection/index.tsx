import Styles from './Hero.module.scss';

export default function HeroSection() {
    return (
        <section className={Styles.heroSection}>
            <h1 className={Styles.heroSection__title}>Liderança com própósito.</h1>
            <h1 className={Styles.heroSection__title}>Inclusão com coragem.</h1>
            <p className={Styles.heroSection__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero leo, egestas pharetra tellus id, consectetur tempor elit. Nulla quis convallis sapien.</p>
        </section>
    );
}