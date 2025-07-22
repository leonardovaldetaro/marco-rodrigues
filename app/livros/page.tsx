import VidaPage from './_a-vida-acontece-no-meio-do-amor';
import GuerreiroPage from './_guerreiro-de-luz';
import Styles from './Livros.module.scss';
import TestemunhosSection from './testemunhoSection';
import Testemunho from './testemunhoSection/testemunho';

// Importando o componente carrousel dinamicamente
import dynamic from 'next/dynamic';

// Importando imagens e ícones
import Image from 'next/image';
import Sol from '../../public/assets/sol.svg';
import TestemunhoLeo from '../../public/assets/leonardoValdetaroB.webp';
import TestemunhoFlavia from '../../public/assets/flavia.webp';

//importação do carrossel de livros
import 'keen-slider/keen-slider.min.css'

const Carrousel = dynamic(() => import('./slideCarrousel'), {
  ssr: false,
  loading: () => <p>Carregando carrossel...</p>,  
})



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
      <TestemunhosSection>
        <Testemunho image={TestemunhoLeo} alt={"Leonardo Valdetaro"}>
          "A vida acontece no meio do amor" é um livro que nos ensina a viver com amor e resiliência, mesmo diante dos desafios mais difíceis."
        </Testemunho>
        <hr />
        <Testemunho image={TestemunhoFlavia} alt={"Flavia Pinheiro"}>
          "Marco Rodrigues, com a sua escrita sensível e profunda, convida-nos a refletir sobre a vida e o amor de uma forma única e inspiradora."
        </Testemunho>
      </TestemunhosSection>
      <VidaPage />
      <Carrousel />
    </main>
  );
}