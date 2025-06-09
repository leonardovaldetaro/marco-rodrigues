import ChannelCards from './cards';
import Styles from './Channel.module.scss';
import { BsDashLg } from "react-icons/bs";

export default function ChannelSection() {
    return (
        <section className={Styles.channelSection}>
            <article className={Styles.channelSection__content}>

                <span className={Styles.channelSection__content__tag}>
                        <BsDashLg className={Styles.channelSection__content__tag__icon}/>
                        TedxU Lisboa
                    </span>

                <h2 className={Styles.channelSection__title}>O <span>Amor </span>
                pode<br /> mudar uma vida</h2>

                <p className={Styles.channelSection__description}>
                    Acreditar no ser humano é o primeiro passo para transformar a realidade. Nesta palestra, Marco Rodrigues partilha uma história de superação, conexão e descoberta interior que inspira a buscar novas direções com coragem e autenticidade.
                </p>

                <div className={Styles.channelSection__content__video}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XxH_pmNN_50?si=I0ipZZZrBIhqMTa-&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <h3>Descubra o poder da escuta<br />e do encontro verdadeiro.</h3>
            </article>

            <article className={Styles.channelSection__cards}>
                <ChannelCards />
            </article>
        </section>
    );
}