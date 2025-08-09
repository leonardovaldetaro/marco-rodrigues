import Styles from './Empresarial.module.scss';
import Image from 'next/image';

import ImagemPalestra_01 from '../../../public/assets/palestra-empresarial-01.webp';
import ImagemPalestra_02 from '../../../public/assets/palestra-empresarial-02.webp';
import ImagemPalestra_03 from '../../../public/assets/palestra-empresarial-03.webp';

const empresarialContent = [
    {
        title: 'Liderança com o coração',
        text: 'Promover uma liderança autêntica, empática e centrada nas pessoas, capaz de inspirar e unir equipas com propósito.',
    },
    {
        title: 'Performance máxima de cada colaborador',
        text: 'Desenvolver o potencial individual alinhado aos objetivos da organização, criando ambientes de alta performance sustentada.',
    },
    {
        title: 'Ver a essência de cada um',
        text: 'Reconhecer talentos e motivações únicas, valorizando a diversidade como força estratégica nas equipas.',
    },
    {
        title: 'Alinhamento com missão, visão, valores',
        text: 'Fortalecer a cultura organizacional através do alinhamento interno com o propósito da empresa.',
    },
    {
        title: 'Resiliência',
        text: 'Capacitar líderes e equipas a enfrentar desafios com flexibilidade, foco e perseverança.',
    },
    {
        title: 'O Ser traz felicidade, o ter vem depois',
        text: 'Incentivar uma cultura onde o bem-estar e a realização interior precedem os resultados materiais.',
    },
]

export default function EmpresarialSection() {
    return (
        <section className={Styles.empresarialSection} id='empresarial'>    
            <h2 className={Styles.empresarialSection__heading}>Palestras para empresas que querem mais do que resultados.</h2>
            <article className={Styles.empresarialSection__container}>
                <div className={Styles.empresarialSection__container__contentWrapper}>
                    {empresarialContent.map((item, index) => (
                        <div key={index} className={Styles.empresarialSection__container__contentWrapper__card}>
                            <h3 className={Styles.empresarialSection__container__contentWrapper__card__title}>{item.title}</h3>
                            <p className={Styles.empresarialSection__container__contentWrapper__card__text}>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className={Styles.empresarialSection__container__imagesWrapper}>
                    <Image
                        src={ImagemPalestra_01}
                        alt="Imagem 1"
                        width={400}
                        height={250}
                        className={Styles.empresarialSection__container__imagesWrapper__image}
                    />
                    <Image
                        src={ImagemPalestra_02}
                        alt="Imagem 2"
                        width={400}
                        height={250}
                        className={Styles.empresarialSection__container__imagesWrapper__image}
                    />
                    <Image
                        src={ImagemPalestra_03}
                        alt="Imagem 3"
                        width={400}
                        height={250}
                        className={Styles.empresarialSection__container__imagesWrapper__image}
                    />
                </div>
            </article>
        </section>
    );
}