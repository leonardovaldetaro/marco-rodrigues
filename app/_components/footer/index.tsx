import Link from 'next/link';
import Styles from './Footer.module.scss';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footer__container}>
                <div className={Styles.footer__container__termo}>
                    <p className={Styles.footer__container__termo__text}>
                        © {new Date().getFullYear()} Marco Rodrigues. Todos os direitos reservados. As imagens e conteúdos deste site são de uso exclusivo e protegidos por direitos autorais e de imagem. É proibida qualquer reprodução sem autorização.
                    </p>
                    <Link href="/termoDeUso" className={Styles.footer__container__termo__link}>
                        Termos de Uso e Política de Privacidade
                    </Link>
                </div>
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