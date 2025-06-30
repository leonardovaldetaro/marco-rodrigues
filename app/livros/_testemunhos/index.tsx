import Styles from './Testemunhos.module.scss';
import Image from 'next/image';
import TestemunhoLeo from '../../../public/assets/leonardoValdetaroB.jpg';

export default function TestemunhosPage() {
    return (
        <section className={Styles.testemunhosSection}>
            <div className={Styles.testemunhosSection__container}>
                <article className={Styles.testemunhosSection__container__content}>
                    <figure className={Styles.testemunhosSection__container__imageContainer}>
                        <Image
                            src={TestemunhoLeo}
                            alt="Imagem Leonardo Valdetaro"
                            width={500}
                            height={300}
                            className={Styles.testemunhosSection__container__imageContainer__image}
                        />
                    </figure>
                    <p className={Styles.testemunhosSection__container__content__text}>
                        "A vida acontece no meio do amor" é um livro que nos ensina a viver com amor e resiliência, mesmo diante dos desafios mais difíceis."
                    </p>
                </article>
                <hr />
                 <article className={Styles.testemunhosSection__container__content}>
                    <figure className={Styles.testemunhosSection__container__imageContainer}>
                        <Image
                            src={TestemunhoLeo}
                            alt="Imagem Leonardo Valdetaro"
                            width={500}
                            height={300}
                            className={Styles.testemunhosSection__container__imageContainer__image}
                        />
                    </figure>
                    <p className={Styles.testemunhosSection__container__content__text}>
                        "A vida acontece no meio do amor" é um livro que nos ensina a viver com amor e resiliência, mesmo diante dos desafios mais difíceis."
                    </p>
                </article>
            </div>
        </section>
    );
}