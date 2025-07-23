import Link from 'next/link';
import Styles from './Hero.module.scss';
import { FaSquareInstagram, FaLinkedin, FaSquareYoutube, FaSquareFacebook } from "react-icons/fa6";

import Image from 'next/image';
import HeroImage from '../../../public/assets/image-hero-top.webp'; 


export default function HeroSection() {
    return (
        <section className={Styles.heroSection}>

            <div className={Styles.heroSection__bg}>
                <Image
                    src={HeroImage}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                    style={{
                        objectFit: 'cover',
                        objectPosition: '65% center' // Ajuste a posição da imagem conforme necessário
                    }}
                />
            </div>

            <div className={Styles.containerHero}>
                <h1 className={Styles.heroSection__title}>Liderança com propósito.</h1>
                <h1 className={Styles.heroSection__title}>Inclusão com coragem.</h1>
                <p className={Styles.heroSection__text}>Desafiar limites é mais do que coragem, é um compromisso com a verdade que vive em cada um de nós.</p>
                <h2>A mudança começa em ti.</h2>

                <div className={Styles.heroSection__socialLinkContainer}>
                    <Link
                        href={"https://www.instagram.com/shormarco/"}
                        className={Styles.heroSection__button}
                        target='_new'
                        title='Visitar o Instagram de Marco Rodrigues'
                        rel="noopener noreferrer"
                        aria-label="Visitar o Instagram de Marco Rodrigues (abre em nova aba)"
                    >
                        <FaSquareInstagram
                            aria-hidden="true"
                            focusable="false"
                        />
                    </Link>

                    <Link
                        href={"https://www.linkedin.com/in/marco-a-m-rodrigues/"}
                        className={Styles.heroSection__button}
                        target='_new'
                        title='Conheça o perfil profissional de Marco Rodrigues'
                        rel="noopener noreferrer"
                        aria-label="Visitar o Linkedin de Marco Rodrigues (abre em nova aba)"
                    >
                        <FaLinkedin
                            aria-hidden="true"
                            focusable="false"
                        />
                    </Link>

                    <Link
                        href={"https://www.youtube.com/watch?v=NNudkkStifQ&ab_channel=RealityHacker"}
                        className={Styles.heroSection__button}
                        target='_new'
                        title='Assista o canal de Marco Rodrigues'
                        rel="noopener noreferrer"
                        aria-label="Visitar o Canal do Youtube de Marco Rodrigues (abre em nova aba)"
                    >
                        <FaSquareYoutube
                            aria-hidden="true"
                            focusable="false"
                        />
                    </Link>

                    <Link
                        href={"https://www.facebook.com/profile.php?id=100032041766193"}
                        className={Styles.heroSection__button}
                        target='_new'
                        title='Visitar o Facebook de Marco Rodrigues'
                        rel="noopener noreferrer"
                        aria-label="Visitar o Facebook de Marco Rodrigues (abre em nova aba)"
                    >
                        <FaSquareFacebook
                            aria-hidden="true"
                            focusable="false"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}