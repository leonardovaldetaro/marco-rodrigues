import RecentesSection from './_components/recentesSection';
import Styles from './Blog.module.scss';
import Image from "next/image";
import SunLogo from '../../public/assets/sol.svg';
import BlogImage from '../../public/assets/imageBlog.webp';
import { getAllPosts } from '../lib/posts'; // ajuste o caminho conforme teu alias ou relative

export default function BlogPage() {
  const posts = getAllPosts(); // executa no servidor, pode usar fs sem problema

  return (
    <section className={Styles.blogPage}>
      <div className={Styles.blogPage__spacer}>

        <Image
          src={BlogImage}
          alt="Ilustração de apoio a página do Blog de Marco Rodrigues, o Sol, o mar e a terra"
          width={1468}
          height={1044}
          className={Styles.blogPage__spacer__image}
        />
        <article className={Styles.blogPage__spacer__container}>
          <Image
            src={SunLogo}
            alt="Ilustração de apoio ao Logotipo Marco Rodrigues, o Sol"
            width={100}
            height={100}
            className={Styles.blogPage__spacer__container__icone}
          />
          <h1 className={Styles.blogPage__spacer__container__title}>Reflexões sobre sentimentos, desenvolvimento humano e a minha jornada como coach</h1>
          <p className={Styles.blogPage__spacer__container__text}>Este é o meu espaço de partilha, onde abro o coração e a mente para refletir sobre emoções, desenvolvimento pessoal e os desafios da vida. Aqui divido ideias, experiências e aprendizados que fazem parte da minha jornada como coach e como ser humano.</p>
        </article>
      </div>

      <div className={Styles.blogPage__listContainer}>
        <RecentesSection posts={posts} />
      </div>
    </section>
  );
}
