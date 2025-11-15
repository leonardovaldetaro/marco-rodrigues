"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Styles from "./nav.module.scss";
import Link from "next/link";
import LogoHeader from "next/image";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";

export default function Nav() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const [isActive, setActive] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname(); // Captura o path atual

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const closeMenu = () => {
        setOpen(false);
        setActive(false);
    };

    const menuItems = [
        { label: "Inicio", to: "/" },
        { label: "Sobre", to: "/sobre" },
        { label: "Palestras", to: "/palestras" },
        { label: "Livros", to: "/livros" },
        { label: "Blog", to: "/blog" },
        { label: "Contactos", to: "/contactos" },
    ];
    return (
        <>
            <nav className={Styles.navbar}>
                <ul className={Styles.menu}>
                    {menuItems.map((rota, index) => {
                        const isCurrent = pathname === rota.to; // Verifica se é a rota ativa
                        return (
                            <li className={Styles.menu__item} key={index}>
                                <Link
                                    href={rota.to}
                                    className={`${Styles.link} ${hoveredItem === rota.label || isCurrent
                                            ? Styles.active
                                            : ""
                                        }`}
                                    onMouseEnter={() => setHoveredItem(rota.label)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {rota.label}
                                </Link>
                            </li>
                        );
                    })}
                    <li className={Styles.mobileMenuToggle}>
                        <button
                            className={Styles.mobileMenuToggle__button}
                            onClick={toggleMenu} // Alterna o estado do menu ao clicar no botão
                            aria-haspopup="true"
                            aria-expanded={isOpen}
                            aria-label="Abrir menu de navegação"
                        >
                            <span className={Styles.menuOpenArrow}>
                                Menu
                                <MdKeyboardArrowDown
                                    className={Styles.menuOpenArrow__icon}
                                />
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>

            <div className={classNames({
                [Styles.overlay]: true,
                [Styles.overlayActive]: isOpen
            })}
                onClick={closeMenu} // Fecha o menu ao clicar no overlay
            ></div>

            {/* Mobile Nav Menu */}
            <nav
                aria-label="Menu principal"
                className={classNames({
                    [Styles.mobileNavMenu]: true,
                    [Styles.visible]: isOpen, // Exibe o menu quando isOpen é true
                })}
            >
                <div className={Styles.mobileNavMenu__close}>
                    <button
                        className={Styles.mobileNavMenu__close__button}
                        onClick={closeMenu} // Fecha o menu ao clicar no botão de fechar
                        aria-label="Fechar o menu para telemóvel"
                    >
                        <MdClose className={Styles.mobileNavMenu__close__icon} />
                    </button>
                </div>
                <Link
                    href="/"
                    aria-label="Logotipo do header Marco Rodrigues com um símbolo abstrato das letras MR. Este é o link para a página inicial."
                    className={Styles.logoLink}
                    onClick={closeMenu}
                >
                    <LogoHeader
                        src="/assets/mrLogo.svg"
                        alt=""
                        width={250}
                        height={54}
                        className={Styles.navLogoImage}
                    />
                </Link>
                <ul className={Styles.mobileNavMenu__list}>
                    {menuItems.map((rota, index) => (
                        <li className={Styles.mobileNavMenu__list__item} key={index}>
                            <Link
                                href={rota.to}
                                className={Styles.link}
                                onClick={closeMenu}
                            >
                                {rota.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}