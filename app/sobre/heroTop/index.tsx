import Styles from './AboutHero.module.scss';

export default function AboutHero() {
    return (
        <section className={Styles.aboutHero}>
            <div className={Styles.aboutHero__container}>
                <article className={Styles.aboutHero__container__content}>
                    <h1 className={Styles.aboutHero__container__content__title}>
                        marco <br />
                        <span>rodrigues</span>
                    </h1>
                    <h2 className={Styles.aboutHero__container__content__subtitle}>Coaching e Desenvolvimento Pessoal</h2>
                    <p className={Styles.aboutHero__container__content__text}>
                        Ajudo pessoas a alcançarem seus objetivos e a se tornarem a melhor versão de si mesmas. Com anos de experiência em coaching e desenvolvimento pessoal, estou aqui para guiá-lo em sua jornada de autodescoberta e crescimento.
                    </p>
                </article>
            </div>
        </section>
    );
}