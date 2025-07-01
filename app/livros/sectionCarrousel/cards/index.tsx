import Styles from './Cards.module.scss';
import Card from './card';
import CardsInfo from '../data/cardsInfo.json';

export default function Cards () {
    return (
        <section className={Styles.cards}>
            {CardsInfo.map(item => (
                <Card
                    key={item.id}
                    {...item}
                />
            ))}
        </section>
    );
}