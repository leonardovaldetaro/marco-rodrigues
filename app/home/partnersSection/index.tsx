import Styles from './Partnners.module.scss';

import Image from "next/image";
import LogoRemax from '../../../public/assets/logo-remaxpt_pb.svg';
import LogoTedx from '../../../public/assets/tedxULisboa.svg';
import LogoEdp from '../../../public/assets/edpCFactory.webp';
import LogoBni from '../../../public/assets/BNI-logo.svg';
import LogoMaleo from '../../../public/assets/maleo.svg';
import LogoNaeyc from '../../../public/assets/logoPeople.png';

import classNames from 'classnames';

export default function PartnersSection() {
    return (
        <section className={Styles.partnersSection}>
            <h2 className={Styles.partnersSection__title}>
                Marco foi palestrante convidado em:
            </h2>

            <div className={Styles.logosContainer}>
                <div className={Styles.imageContainer}>
                    <Image
                        src={LogoRemax}
                        alt="Logotipo da Remax Portugal"
                        className={Styles.imageContainer__img}
                    />
                </div>
                <div className={Styles.imageContainer}>
                    <Image
                        src={LogoTedx}
                        alt="Logotipo da TEDx U Lisboa"
                        className={classNames({
                            [Styles.imageContainer__img]: true,
                            [Styles.imageContainer__img__logoTedx]: true, // Adiciona uma classe específica para o logo tedx
                        })}
                    />
                </div>
                <div className={Styles.imageContainer}>
                    <Image
                        src={LogoEdp}
                        alt="Logotipo EDP - Energias de Portugal"
                        className={classNames({
                            [Styles.imageContainer__img]: true,
                            [Styles.imageContainer__img__logoEdp]: true, // Adiciona uma classe específica para o logo EDP
                        })}
                    />
                </div>
                <div className={Styles.imageContainer}>
                    <Image
                        src={LogoBni}
                        alt="Logotipo da BNI de Portugal"
                        className={classNames({
                            [Styles.imageContainer__img]: true,
                            [Styles.imageContainer__img__logoBni]: true, // Adiciona uma classe específica para o logo BNI
                        })}
                    />
                </div>
                <div className={Styles.imageContainer}>
                    <Image
                        src={LogoMaleo}
                        alt="Logotipo da Maleo Portugal"
                        className={Styles.imageContainer__img}
                    />
                </div>
                <div className={Styles.imageContainer}>
                    <Image
                        src={LogoNaeyc}
                        alt="Logotipo da People - NAEYC"
                        className={classNames({
                            [Styles.imageContainer__img]: true,
                            [Styles.imageContainer__img__logoPeople]: true, // Adiciona uma classe específica para o logo BNI
                        })}
                    />
                </div>
            </div>
        </section>
    );
}