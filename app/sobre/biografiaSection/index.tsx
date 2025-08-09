import Styles from './Biografia.module.scss';
import Image from 'next/image';
import BiografiaImage from '../../../public/assets/marco-rodrigues-coach-biografia.webp';

export default function BiografiaSection() {
    return (
        <section className={Styles.biografia}>
            <div className={Styles.biografia__container}>
                <article className={Styles.biografia__container__content}>
                    <h2 className={Styles.biografia__container__content__title}>Biografia</h2>
                    <p className={Styles.biografia__container__content__text}>
                        Nasceu antes do tempo: com apenas 6 meses e 3 semanas de gestação, o Marco chegou ao mundo a travar a sua primeira grande batalha. Complicações durante o tempo de incubadora resultaram numa Paralisia Cerebral. Durante anos, muitos imaginaram que o seu futuro estaria limitado a uma cadeira de rodas, dependente, sem grande autonomia. 
                    </p>
                    <p className={Styles.biografia__container__content__text}>
                        Mas o Marco nunca acreditou nesse destino.
                    </p>
                    <p className={Styles.biografia__container__content__text}>
                        Desafiou as expectativas e formou-se mestre em Engenharia e Gestão Industrial pelo Instituto Superior Técnico. Treina com regularidade no ginásio e construiu uma vida independente, activa e com propósito.
                    </p>
                    <p className={Styles.biografia__container__content__text}>
                        Hoje, dedica-se ao desenvolvimento humano, como coach, orador e mentor. Não fala apenas de superação, vive aquilo que transmite. Acredita que todas as pessoas têm a capacidade de transformar obstáculos em força, dor em direcção e limites em impulso.
                    </p>
                    <p className={Styles.biografia__container__content__text}>
                        Mais do que histórias, partilha vivências reais. Mais do que motivação, oferece presença, clareza e compromisso.
                    </p>
                    <p className={Styles.biografia__container__content__text}>
                        A sua missão é simples, mas profunda: ajudar cada pessoa a descobrir a sua luz interior e, com coragem, trazê-la ao mundo.
                    </p>
                </article>
                <figure className={Styles.biografia__container__image}>
                    <Image
                        src={BiografiaImage}
                        alt="Biografia de Marco Rodrigues Coach"
                        width={500}
                        height={500}
                        className={Styles.biografia__container__image__img}
                    />
                    <figcaption className={Styles.biografia__container__image__caption}>
                        Marco Rodrigues
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}