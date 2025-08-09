import Styles from './Social.module.scss';
import Image from 'next/image';

import ImagemPalestraSocial_01 from '../../../public/assets/palestra-social.webp';
import ImagemPalestraSocial_02 from '../../../public/assets/palestra-social-01.webp';

const socialContent = [
    {
        title: 'A Luz que habita cada um',
        text: 'Nos contextos mais difíceis, sempre existe uma centelha de dignidade, coragem e transformação em cada pessoa.',
    },
    {
        title: 'Criando as nossas oportunidades',
        text: 'Mesmo com poucas condições externas, podemos gerar mudanças reais a partir da força interior e da iniciativa própria.',
    },
    {
        title: 'O Poder da comunidade',
        text: 'É na união, no apoio mútuo e na confiança coletiva que se constrói um caminho de inclusão e progresso.',
    },
    {
        title: 'Somos todos um Farol, uns para os outros',
        text: 'Todos temos a capacidade de inspirar, perdoar, transformar e ser farol na vida de quem nos rodeia.',
    }
]

export default function SocialSection() {
    return (
        <section className={Styles.socialSection} id='social'>
            <h2 className={Styles.socialSection__heading}>Palestras Sociais. Onde a luz insiste em nascer, mesmo na escuridão</h2>
            <article className={Styles.socialSection__container}>
                <div className={Styles.socialSection__container__contentWrapper}>
                    {socialContent.map((item, index) => (
                        <div key={index} className={Styles.socialSection__container__contentWrapper__card}>
                            <h3 className={Styles.socialSection__container__contentWrapper__card__title}>{item.title}</h3>
                            <p className={Styles.socialSection__container__contentWrapper__card__text}>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className={Styles.socialSection__container__imagesWrapper}>
                    <Image
                        src={ImagemPalestraSocial_01}
                        alt="Imagem 1"
                        width={400}
                        height={250}
                        className={Styles.socialSection__container__imagesWrapper__image}
                    />
                    <Image
                        src={ImagemPalestraSocial_02}
                        alt="Imagem 2"
                        width={400}
                        height={250}
                        className={Styles.socialSection__container__imagesWrapper__image}
                    />
                </div>
            </article>
        </section>
    );
}