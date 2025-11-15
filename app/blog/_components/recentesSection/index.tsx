"use client";

import { useState } from 'react';
import Styles from './RecentesSection.module.scss';
import Link from 'next/link';
import Image from 'next/image'
import Button from '../../../_components/button';

//Função para limitar 150 caracteres no excerpt
function truncateExerpt(excerpt: string, maxChars = 100): string {
    if (!excerpt) return '';
    return excerpt.length > maxChars
        ? excerpt.slice(0, maxChars).trim() + '…'
        : excerpt;
}

//Força o javaScript a interpretar a data no formato pt-BR (dd/mm/yyyy)
function parsePtDate(dateString: string) {
    const [day, month, year] = dateString.split('/');
    return new Date(Number(year), Number(month) - 1, Number(day));
}

export default function RecentesSection({ posts }) {
    const [visibleCount, setvisibleCount] = useState(6);

    // Ordena os posts pela data em ordem descrescente
    const sortedPosts = [...posts].sort((a, b) => {
        return parsePtDate(b.date).getTime() - parsePtDate(a.date).getTime();
    });

    const handleLoadMore = () => {
        setvisibleCount(prev => prev + 6);
    };

    return (
        <section className={Styles.recentesSection}>
            <h2 className={Styles.recentesSection__listContainer__title}>Assuntos recentes:</h2>
            <ul className={Styles.recentesSection__listContainer__list}>
                {sortedPosts.slice(0, visibleCount).map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className={Styles.recentesSection__listContainer__list__link}>
                        <li className={Styles.recentesSection__listContainer__list__item}>
                            <Image
                                src={post.thumbImage}
                                alt={post.title}
                                width={362}
                                height={177}
                                className={Styles.recentesSection__listContainer__list__item__image}
                            />
                            <h2 className={Styles.recentesSection__listContainer__list__item__title}>{post.title}</h2>
                            <p className={Styles.recentesSection__listContainer__list__item__excerpt}>
                                {truncateExerpt(post.excerpt, 100)}
                            </p>
                            <small className={Styles.recentesSection__listContainer__list__item__date}>{post.date}</small>
                        </li>
                    </Link>
                ))}
            </ul>

            {visibleCount < posts.length && (
                <div className={Styles.loadMoreWrapper}>
                    <Button onClick={handleLoadMore} variant="primary">
                        Carregar mais posts
                    </Button>
                </div>
            )}
        </section>
    );
}