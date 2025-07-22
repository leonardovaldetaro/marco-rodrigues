import Styles from './Guerreiro.module.scss';
import Image from 'next/image';
import GuerreiroBook from '../../../public/assets/livro-um-guerreiro-de-luz.webp';
import Button from '../../_components/button';
import { FiChevronsRight } from "react-icons/fi";

export default function GuerreiroPage() {
    return (
        <div className={Styles.guerreiroPage}>
            <figure className={Styles.guerreiroPage__imageContainer}>
                <Image
                    src={GuerreiroBook}
                    alt="Capa do livro 'Um Guerreiro de Luz'"
                    className={Styles.guerreiroPage__imageContainer__image}
                />
            </figure>

            <article className={Styles.guerreiroPage__content}>
                <h1 className={Styles.guerreiroPage__content__title}>Um Guerreiro de Luz</h1>
                <p className={Styles.guerreiroPage__content__text}>
                    Que estratégias adoptar quando a vida nos põe à prova, logo desde o nascimento?
                    Marco e Fábio VS Vírus. Diagnóstico: Paralisia Cerebral.
                    Bem-vindo à aventura que é a vida!
                    “(…) Podia vir a ficar imobilizado. As articulações não estavam a aguentar. Era preciso ir buscar forças onde elas já pareciam não existir (…)”
                    Acompanha-me nesta viagem rumo às conquistas do dia-a-dia, onde vou partilhar contigo que, para cada desafio que a vida te traz, há uma solução que vem do reencontrar do teu poder, da tua essência.
                    Permite-te embarcar; Chorar, rir, mergulhar profundamente em cada página… E, no decorrer desta experiência, partilha a luz que tens com este Mundo, ele merece. Sê bem-vindo, Guerreiro de Luz.
                </p>
                <Button
                    href="https://www.atlanticbookshop.pt/bios/um-guerreiro-de-luz-os-unicos-limites-estao-na-tua-mente"
                    variant='primary'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Compre o livro
                    <FiChevronsRight className={Styles.buttonIcon} />
                </Button>
            </article>
        </div>
    );
}