import Styles from './Cards.module.scss';
import Card from './card';
import CardInfo from './card/cardData.json';



export default function ChannelCards() {
    return (
        <article className={Styles.channelSection__cards}>
            <div className={Styles.channelSection__cards__content}>
                <h3 className={Styles.channelSection__cards__title}>Momentos para assistir e <span>refletir</span></h3>
                <p className={Styles.channelSection__cards__description}>
                    Descubra mais palestras e histórias inspiradoras que transformam vidas.
                </p>
            </div>
            <div className={Styles.channelSection__cards__list}>
                {CardInfo.map(item => (
                    <Card 
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </article>
    );
}