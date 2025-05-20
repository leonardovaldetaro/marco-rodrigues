"use client";

import { useState, useEffect } from "react";
import LogoHeader from "next/image";
import Styles from "./header.module.scss";
import Link from "next/link";
import Nav from "./_nav";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Rolagem para baixo e passou 100px
                setIsVisible(false);
            } else {
                // Rolagem para cima
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll); // Corrigido para "scroll"

        return () => {
            window.removeEventListener("scroll", handleScroll); // Corrigido para "scroll"
        };
    }, [lastScrollY]); // Mantém a dependência para atualizar corretamente

    return (
        <header
            className={`${Styles.header} ${
                isVisible ? Styles.headerVisible : Styles.headerHidden
            }`}
        >
            <div className={Styles.logoContainer}>
                <Link href="/" className={Styles.logoContainer__link} aria-label="Logotipo do header Marco Rodrigues com um símbolo abstrato das letras MR. Este é o link para a página inicial.">
                    <LogoHeader
                        src="/assets/mrLogo.svg"
                        alt=""
                        width={250}
                        height={54}
                        className={Styles.logoContainer__img}
                    />
                </Link>
            </div>
            <Nav />
        </header>
    );
}
