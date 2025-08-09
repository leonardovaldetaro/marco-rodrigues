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
                        Ajudo pessoas a alcançarem os seus objetivos e a reconhecerem e libertarem a melhor e mais luminosa versão de si mesmas. Com anos de experiência e vivência individual profunda em coaching e desenvolvimento pessoal, estou aqui para guiá-lo na sua jornada de autodescoberta e crescimento.
                    </p>
                </article>
            </div>
        </section>
    );
}