import VidaPage from './_a-vida-acontece-no-meio-do-amor';
import GuerreiroPage from './_guerreiro-de-luz';
import TestemunhosPage from './_testemunhos';
import Styles from './Livros.module.scss';
import Image from 'next/image';
import Sol from '../../public/assets/sol.svg';


export default function LivrosPage() {
  return (
    <main className={Styles.livrosPage}>
      <div className={Styles.livrosPage__top}>
        <Image
          src={Sol}
          alt="Símbolo do Sol, um elemento de apoio visual para a página de livros"
          className={Styles.livrosPage__top__image}
          width={100}
          height={100}
        />
        <h1 className={Styles.livrosPage__top__title}>Livros de Marco Rodrigues</h1>
        <p className={Styles.livrosPage__top__text}>
          Descobre os livros que escrevi, onde partilho as minhas experiências e aprendizagens.
          Cada livro é uma viagem única, repleta de desafios e superações.
        </p>
      </div>
      <GuerreiroPage />
      <TestemunhosPage />
      <VidaPage />
    </main>
  );
}