import Styles from './Blog.module.scss';
import { getAllPosts } from '../lib/posts';


export default function BlogPage() {
  const post = getAllPosts();

  return (
    <main className={Styles.blogPage}>
      <h1 className={Styles.blogPage__title}>Blog</h1>
      <ul className={Styles.blogPage__list}>
        {post.map((post) => (
          <li 
            key={post.slug}
            className={Styles.blogPage__list__item}
          >
            <h2 className={Styles.blogPage__list__item__title}>{post.title}</h2>
            <p className={Styles.blogPage__list__item__excerpt}>
              {post.excerpt}
            </p>
            <small className={Styles.blogPage__list__item__date}>{post.date}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}