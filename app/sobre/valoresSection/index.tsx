import Styles from './Valores.module.scss';
import Image from 'next/image';
import valoresImage from '../../../public/assets/valores-marco-rodrigues2.webp';

export default function ValoresSection() {
    return (
        <section className={Styles.valoresSection}>
            <div className={Styles.valoresSection__container}>
                <article className={Styles.valoresSection__container__content}>
                    <h2 className={Styles.valoresSection__container__content__title}>
                        Um <span>compromisso</span> profundo com a <span>verdade interior</span> e a transformação humana.
                    </h2>
                    <p className={Styles.valoresSection__container__content__text}>
                        Marco Rodrigues acredita que todo ser humano carrega dentro de si um potencial inato de luz, verdade e coragem — muitas vezes obscurecido pelas estruturas externas que nos condicionam. Ao longo da sua caminhada como coach e facilitador de desenvolvimento humano, Marco construiu um caminho baseado em quatro pilares que sustentam sua abordagem:
                    </p>
                    <h3 className={Styles.valoresSection__container__content__subtitle}>Valores que o guiam</h3>
                    <ol className={Styles.valoresSection__container__content__list}>
                        <li className={Styles.valoresSection__container__content__list__item}>
                            <h4>Amor à Verdade</h4>
                            <p>Marco acredita que o despertar genuíno começa quando temos a coragem de olhar para dentro, acolher nossas sombras e reconhecer o que há de mais verdadeiro em nós. A verdade liberta, direciona e conecta.</p>
                        </li>
                        <li className={Styles.valoresSection__container__content__list__item}>
                            <h4>Autenticidade com Propósito</h4>
                            <p>Inspirado pelo arquétipo do Rebelde com Causa, Marco desafia padrões limitantes e convida cada pessoa a viver a sua própria verdade, com autenticidade e sentido.</p>
                        </li>
                        <li className={Styles.valoresSection__container__content__list__item}>
                            <h4>Confiança no Potencial Humano</h4>
                            <p>Ele aposta incondicionalmente na capacidade de transformação de cada indivíduo. Acredita que todos somos capazes de assumir o nosso brilho quando somos vistos, escutados e respeitados no nosso tempo.</p>
                        </li>
                        <li className={Styles.valoresSection__container__content__list__item}>
                            <h4>Cuidado e Presença</h4>
                            <p>Com empatia e presença genuína, Marco acolhe o outro com escuta ativa, sensibilidade e respeito, criando espaços seguros para a transformação interior acontecer.</p>
                        </li>
                    </ol>
                </article>
                <figure className={Styles.valoresSection__container__image}>
                    <Image
                        src={valoresImage}
                        alt="Marco Rodrigues em momento de escuta descontraída, despertando autoconfiança na conversa."
                        className={Styles.valoresSection__container__image__img}
                        width={500}
                        height={500}
                    />
                    <figcaption className={Styles.valoresSection__container__image__caption}>
                        Marco Rodrigues Coach
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}