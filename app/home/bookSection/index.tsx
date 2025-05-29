import Styles from './Book.module.scss';
import { FiChevronsRight } from "react-icons/fi";

import BookImages from 'next/image';
import BookCoverGuerreiro from '../../../public/assets/um_guerreiro_de_luz.jpg';
import BookCoverVida from '../../../public/assets/a_vida_acontece_no_meio_do_amor.jpeg';
import Button from '../../_components/button';

export default function BookSection() {
    return (
        <section className={Styles.bookSection}>
           <article className={Styles.bookSection__content}>
                <h2 className={Styles.bookSection__title}>Título principal</h2>
                <h3 className={Styles.bookSection__subtitle}>Subtítulo com um pouco mais de texto para explicar.</h3>
                <p className={Styles.bookSection__description}>
                     This section is dedicated to showcasing the book. It includes a title, description, and images related to the book.
                </p>
                <Button href="/outra-pagina">
                	Ir para outra página
                    <FiChevronsRight className={Styles.buttonIcon}/>
                </Button>
           </article>

           <div className={Styles.bookSection__images}>
                <BookImages 
                    src={BookCoverGuerreiro}
                        alt="Capa do livro 'Um Guerreiro de Luz'"
                        className={Styles.bookSection__image}
                />

                <BookImages 
                    src={BookCoverVida}
                        alt="Capa do livro 'A Vida Acontece no Meio do Amor'"
                        width={246}
                        height={386}
                        className={Styles.bookSection__image}
                />
           </div>
        </section>
    );
}