import Link from 'next/link';
import Styles from './Card.module.scss';
import { BsArrowRight } from "react-icons/bs";

import CardInfo from './cardData.json';

type Props = typeof CardInfo[0];

export default function Card(props: Props) {
    const { number, description, link } = props;

    return (
        <Link 
            href={link} 
            className={Styles.cardLink} 
            target='_blank' 
            rel='noopener noreferrer' 
            aria-label={`Assista no Youtube o vídeo número ${number} - ${description}`}
            role="link"
            tabIndex={0}
        >
            <div className={Styles.card}>
                <div className={Styles.card__number}>{number}</div>
                <div className={Styles.card__description}>{description}</div>
                <div className={Styles.card__icon}><BsArrowRight className={Styles.card__icon__svg} /></div>
            </div>
        </Link>
    );
}