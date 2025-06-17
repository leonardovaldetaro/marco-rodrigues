import Styles from './Blog.module.scss';

export default function BlogPage() {
  return (
    <main className={Styles.blogPage}>
      <h1 className={Styles.blogPage__title}>Blog</h1>
      <p className={Styles.blogPage__text}>
        Esta é a página de blog, onde você pode encontrar informações sobre o projeto, sua missão e visão.
      </p>
      <p className={Styles.blogPage__text}>
        O projeto visa fornecer uma plataforma para compartilhar conhecimento e experiências, promovendo o desenvolvimento pessoal e profissional.
      </p>
    </main>
  );
}