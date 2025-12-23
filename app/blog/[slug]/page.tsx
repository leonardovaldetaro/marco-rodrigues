// app/blog/[slug]/page.tsx
import Styles from './Slug.module.scss'
import { getPostBySlug, getAllPosts } from '../../lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Marco Rodrigues Coach`,
    description: post.excerpt,
    keywords: post.tags,
  }
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <section className={Styles.blogPostPage}>
      <div className={Styles.blogPostPage__topContainer}>
        <div className={Styles.blogPostPage__topContainer__header}>
          <Link href="/blog" className={Styles.blogPostPage__topContainer__header__backLink}>
            <FaLongArrowAltLeft className={Styles.blogPostPage__topContainer__header__backLink__backArrow} /> Voltar ao blog
          </Link>

          {/* pílulas: usar apenas post.tags */}
          <div className={Styles.blogPostPage__topContainer__header__tags}>
            {(post.tags || []).map((tag: string) => (
              <span key={tag} className={Styles.blogPostPage__topContainer__header__tags__tag}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className={Styles.blogPostPage__topContainer__header__title}>{post.title}</h1>
          <p className={Styles.blogPostPage__topContainer__header__excerpt}>{post.excerpt}</p>
          <div className={Styles.blogPostPage__topContainer__header__authorAndDate}>
            <span className={Styles.blogPostPage__topContainer__header__authorAndDate__authorName}>Por <cite>{post.author.name}</cite></span>
            <BsDot />
            <span className={Styles.blogPostPage__topContainer__header__authorAndDate__date}>{post.date}</span>
          </div>
        </div>

        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={post.title}
            width={536}
            height={400}
            className={Styles.blogPostPage__topContainer__coverImage}
            priority
          />
        )}
      </div>

      <div className={Styles.contentCentralizado}>
        <article className={Styles.blogPostPage__contenContainer}>
          <p
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>

    </section>
  )
}
