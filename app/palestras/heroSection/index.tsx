import Styles from './HeroSection.module.scss';
import NavPalestras from './nav';
import Image from 'next/image';
import Onda from '../../../public/assets/sol.svg';

export default function HeroSectionPalestras() {
    return (
        <section className={Styles.heroSectionTop}>
            <div className={Styles.heroSectionTop__containerTop}>
                <Image
                    src={Onda}
                    alt="Hero Section Image"
                    width={100}
                    height={100}
                    className={Styles.heroSectionTop__containerTop__image}
                />
                <h1 className={Styles.heroSectionTop__containerTop__title}>Palestras que promovem desenvolvimento humano e organizacional.</h1>
            </div>

            <div className={Styles.heroSectionTop__containerMidle}>
                <NavPalestras />
            </div>
        </section>
    );
}