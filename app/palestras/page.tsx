import Styles from './Palestras.module.scss';

export default function PalestrasPage() {
  return (
    <main className={Styles.palestrasPage}>
      <h1 className={Styles.palestrasPage__title}>Palestras</h1>
      <p className={Styles.palestrasPage__text}>
        Esta é a página de Palestras, onde você pode encontrar informações sobre o projeto, sua missão e visão.
      </p>
      <p className={Styles.palestrasPage__text}>
        O projeto visa fornecer uma plataforma para compartilhar conhecimento e experiências, promovendo o desenvolvimento pessoal e profissional.
      </p>
    </main>
  );
}