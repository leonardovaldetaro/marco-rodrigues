import Styles from './Book.module.scss';
import { FiChevronsRight } from "react-icons/fi";

import BookImages from 'next/image';
import BookCoverGuerreiro from '../../../public/assets/um_guerreiro_de_luz.webp';
import BookCoverVida from '../../../public/assets/a_vida_acontece_no_meio_do_amor.webp';
import Button from '../../_components/button';
import Link from 'next/link';

export default function BookSection() {
    return (
        <section className={Styles.bookSection}>
            <div className={Styles.containerBook}>
                <article className={Styles.bookSection__content}>
                    <h2 className={Styles.bookSection__title}>Palavras que <br /><span>Transformam</span> Vidas</h2>
                    <h3 className={Styles.bookSection__subtitle}>Histórias reais, coragem autêntica e reflexões transformadoras.</h3>
                    <p className={Styles.bookSection__description}>
                        Cada livro é um reflexo da jornada de quem ousa sentir, pensar e agir diferente. Aqui, a leitura não é apenas conteúdo, é convite à consciência, coragem e conexão com o que importa. Descubra ideias que tocam, provocam e despertam o essencial em você.
                    </p>
                    <Button
                        href="/livros"
                        variant='primary'
                    >
                        Leia as sinópses
                        <FiChevronsRight className={Styles.buttonIcon} />
                    </Button>
                </article>

                <div className={Styles.bookSection__images}>
                    <Link
                        href="https://www.atlanticbookshop.pt/bios/um-guerreiro-de-luz-os-unicos-limites-estao-na-tua-mente"
                        className={Styles.bookSection__imageLink}
                        target="_new"
                    >
                        <BookImages
                            src={BookCoverGuerreiro}
                            alt="Capa do livro 'Um Guerreiro de Luz'"
                            className={Styles.bookSection__image}
                        />
                    </Link>

                    <Link
                        href="https://www.atlanticbookshop.pt/nao-ficcao/a-vida-acontece-no-meio-do-amor"
                        className={Styles.bookSection__imageLink}
                        target="_new"
                    >
                        <BookImages
                            src={BookCoverVida}
                            alt="Capa do livro 'A Vida Acontece no Meio do Amor'"
                            width={246}
                            height={386}
                            className={Styles.bookSection__image}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}