import Styles from './Card.module.scss';
import cardInfo from '../data/cardsInfo.json';
import Link from 'next/link';

type Props = typeof cardInfo[0];

export default function Card (props: Props) {
    const  {title, description, capa, alt, amazonLink, autor}= props;

    return (
        <Link href={amazonLink} className={Styles.card__link} target='_blanc'>
            <article className={Styles.card}>

                <div className={Styles.card__imgContainer}>
                    <img src={capa} alt={alt} className={Styles.card__imgContainer__img} />
                </div>

                <div className={Styles.card__infoContainer}>
                    <h2 className={Styles.card__infoContainer__title}>{title}</h2>
                    <h3 className={Styles.card__infoContainer__subtitle}>{description}</h3>
                    <h4 className={Styles.card__infoContainer__autor}>{`Autor: ${autor}`}</h4>
                </div>

            </article>
        </Link>
    );
}