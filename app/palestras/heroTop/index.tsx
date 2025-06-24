import styles from './HeroTop.module.scss';
import Image from 'next/image';
import heroTopImage from '../../../public/assets/palestras-marco-rodrigues.webp';

export default function HeroTop() {
    return (
        <section className={styles.heroTop}>
            <div className={styles.heroTop__container}>
                <article className={styles.heroTop__container__content}>
                    <h1 className={styles.heroTop__container__content__title}>
                        Palestras que <span>transformam</span> vidas
                    </h1>
                    <p className={styles.heroTop__container__content__text}>
                        Marco Rodrigues é um coach e facilitador de desenvolvimento humano com mais de 20 anos de experiência, que já impactou a vida de milhares de pessoas. Suas palestras são uma jornada transformadora, onde ele compartilha sua visão única sobre o potencial humano, a autenticidade e a coragem de viver a própria verdade.
                    </p>
                </article>
                <figure className={styles.heroTop__container__image}>
                    <Image
                        src={heroTopImage}
                        alt="Marco Rodrigues em uma palestra, transmitindo energia e inspiração."
                        width={500}
                        height={500}
                    />
                </figure>
            </div>
        </section>
    );
}