import Styles from './Citacao.module.scss';

export default function CitacaoSection() {
    return (
        <section className={Styles.citacaoSection}>
            <article className={Styles.citacaoSection__container}>
                <h2 className={Styles.citacaoSection__container__title}>Despertar o amor à verdade e acreditar incondicionalmente no ser-humano para que assuma o seu brilho.</h2>
            </article>
        </section>
    );
}