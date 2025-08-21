import Styles from './Section.module.scss';
import Image from 'next/image';
import Selo from '../../../public/assets/selo.svg';
import Fundo from '../../../public/assets/marco-rodrigues-coach-business.webp';

export default function Secttion() {
    return (
        <section className={Styles.section}>

            <div className={Styles.section__bg} style={{backgroundColor: '#002259'}}>
                <Image
                    src={Fundo}
                    alt="" // decorativa
                    fill
                    quality={90}
                    loading="lazy"
                    sizes="100vw"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
            </div>
            
            <div className={Styles.section__container}>
                <div className={Styles.section__container__content}>
                    <Image
                        src={Selo}
                        alt="Logotipo Marco Rodrigues em formato selo com dizeres Liderança com propósito, Inclusão com coragem"
                        className={Styles.section__container__content__selo}
                    />
                    <h2 className={Styles.section__container__content__title}>Os únicos limites estão na tua mente.</h2>
                </div>
            </div>
        </section>
    );
}