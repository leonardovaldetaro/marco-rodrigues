import Styles from './Livros.module.scss';

export default function LivrosPage() {
  return (
    <main className={Styles.livrosPage}>
      <h1 className={Styles.livrosPage__title}>Livros</h1>
      <p className={Styles.livrosPage__text}>
        Esta é a página de Livros, onde você pode encontrar informações sobre o projeto, sua missão e visão.
      </p>
      <p className={Styles.livrosPage__text}>
        O projeto visa fornecer uma plataforma para compartilhar conhecimento e experiências, promovendo o desenvolvimento pessoal e profissional.
      </p>
    </main>
  );
}