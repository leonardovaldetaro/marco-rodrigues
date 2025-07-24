import Styles from './Partnners.module.scss';

import Image from "next/image";
import LogoRemax from '../../../public/assets/logo-remaxpt_pb.svg';
import LogoTedx from '../../../public/assets/tedxLisboa.svg';
import LogoEdp from '../../../public/assets/edp-energias-de-portugal.svg';
import LogoDelta from '../../../public/assets/delta-cafes.svg';
import LogoMonese from '../../../public/assets/monese-logo.svg';
import LogoNaeyc from '../../../public/assets/national-association-for-the-education-of-young-children.svg';

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
                        width={250}
                        height={54}
                        className={Styles.imageContainer__img}
                    />
                </div>
                <div className={Styles.imageContainer}>
                    <Image
                        src={LogoTedx}
                        alt="Logotipo da TEDx Lisboa"
                        width={250}
                        height={54}
                        className={Styles.imageContainer__img}
                    />
                </div>
                <div className={Styles.imageContainer}>
                    <Image
                        src={LogoEdp}
                        alt="Logotipo EDP - Energias de Portugal"
                        width={250}
                        height={54}
                        className={Styles.imageContainer__img}
                    />
                </div>
                <div className={Styles.imageContainer}>
                    <Image
                        src={LogoDelta}
                        alt="Logotipo da Delta Café de Portugal"
                        width={250}
                        height={54}
                        className={Styles.imageContainer__img}
                    />
                </div>
                <div className={Styles.imageContainer}>
                    <Image
                        src={LogoMonese}
                        alt="Logotipo da Monese Portugal"
                        className={Styles.imageContainer__img}
                    />
                </div>
                <div className={Styles.imageContainer}>
                    <Image
                        src={LogoNaeyc}
                        alt="Logotipo da National Association for the Education of Young Children"
                        className={Styles.imageContainer__img}
                    />
                </div>
            </div>
        </section>
    );
}