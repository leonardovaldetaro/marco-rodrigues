import Styles from './Slug.module.scss';
import { getPostBySlug } from "../../lib/posts";
import { notFound } from "next/navigation";
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug)
    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);

    if (!post) return notFound();

    return (
        <section className={Styles.blogPostPage}>
            <Link
                href="/blog"
                className={Styles.blogPostPage__backLink}
            >
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