import Link from 'next/link';
import Styles from './Footer.module.scss';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footer__container}>
                <p className={Styles.footer__container__text}>
                    © {new Date().getFullYear()} Marco Rodrigues. Todos os direitos reservados.
                </p>
                <div className={Styles.footer__container__lvtext}>
                    <Link href="/" className={Styles.lvLink}>
                        <Image
                            src="/assets/LVsimbol.svg"
                            alt="Leonardo Valdetaro Logo"
                            width={24}
                            height={24}
                            className={Styles.lvLink__logo}
                        />
                    </Link>
                    <p>Desenvolvido por Leonardo Valdetaro.</p>
                </div>
            </div>
        </footer>
    );
}