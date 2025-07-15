import Styles from './NavPalestras.module.scss';
import Link from 'next/link';

export default function NavPalestras() {
    return (
        <nav className={Styles.navPalestras}>
            <ul className={Styles.navPalestras__list}>
                <li className={Styles.navPalestras__item}>
                    <a href="#empresarial" className={Styles.navPalestras__link}>Empresarial</a>
                </li>
                <li className={Styles.navPalestras__item}>
                    <a href="#social" className={Styles.navPalestras__link}>Social</a>
                </li>
                <li className={Styles.navPalestras__item}>
                    <a href="#escolas" className={Styles.navPalestras__link}>Escolas</a>
                </li>
                <li className={Styles.navPalestras__item}>
                    <a href="#desporto" className={Styles.navPalestras__link}>Desportistas e Artistas de Elite</a>
                </li>
            </ul>
        </nav>
    );
}