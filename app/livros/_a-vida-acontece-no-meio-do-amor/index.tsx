import Styles from './Vida.module.scss';
import Image from 'next/image';
import VidaBook from '../../../public/assets/livro-a-vida-acontece-no-meio-do-amor.webp';
import Button from '../../_components/button';
import { FiChevronsRight } from "react-icons/fi";

export default function VidaPage() {
    return (
        <div className={Styles.vidaPage}>
            <div className={Styles.container}>
                <figure className={Styles.vidaPage__imageContainer}>
                    <Image
                        src={VidaBook}
                        alt="Capa do livro 'Um vida de Luz'"
                        className={Styles.vidaPage__imageContainer__image}
                    />
                </figure>

                <article className={Styles.vidaPage__content}>
                    <h1 className={Styles.vidaPage__content__title}>A Vida Acontece no Meio do Amor</h1>
                    <p className={Styles.vidaPage__content__text}>
                        Quantas vezes te preguntas se há algo mais? Um propósito? Uma razão para cá estares?<br />
                        No meio do dia-a-dia, parece haver algo que chama por ti. Uma busca pela alegria, pela paz, por uma satisfação que parece não estar à vista.
                        A vida é mágica, a vida é mística, a vida é alegria, é tristeza, é dualidade. A vida é, também, sobretudo, mais do que a vista alcança.
                        Quem somos? Somos centro, somos potencial infinito, somos Unidade.
                        Que viagem fazemos? Viaja pelos caminhos da vida, mergulha no teu mundo interno e deixa cada texto servir de guia para o teu Eu mais profundo.
                        Acima de tudo, desfruta, confia e atreve-te a descobrir que tu és o milagre. A onda, um dia, descobriu que era oceano. Depois de se relembrar, decidiu trazer a boa notícia a todas as outras ondas. Com amor. A Vida acontece no meio do Amor.
                    </p>
                    <Button
                        href="https://www.atlanticbookshop.pt/nao-ficcao/a-vida-acontece-no-meio-do-amor"
                        variant='primary'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Compre o livro
                        <FiChevronsRight className={Styles.buttonIcon} />
                    </Button>
                </article>
            </div>
        </div>
    );
}