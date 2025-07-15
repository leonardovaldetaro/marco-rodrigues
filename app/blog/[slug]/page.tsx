// app/blog/[slug]/page.tsx
import Styles from './Slug.module.scss';
import { getPostBySlug, getAllPosts } from "../../lib/posts";
import { notFound } from "next/navigation";
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <section className={Styles.blogPostPage}>
      <Link href="/blog" className={Styles.blogPostPage__backLink}>
        Voltar ao blog
      </Link>
      <h1 className={Styles.blogPostPage__title}>{post.title}</h1>
      <p className={Styles.blogPostPage__date}>{post.date}</p>
      <article className={Styles.blogPostPage__contenContainer}>
        <p className={Styles.blogPostPage__contenContainer__content}>{post.content}</p>
      </article>
    </section>
  );
}
