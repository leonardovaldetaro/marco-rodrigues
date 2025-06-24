import Styles from './Citacao.module.scss';

export default function CitacaoSection() {
    return (
        <section className={Styles.citacaoSection}>
            <article className={Styles.citacaoSection__container}>
                <h2 className={Styles.citacaoSection__container__title}>Despertar o <span>amor</span> à <span>verdade</span> e acreditar incondicionalmente no <span>ser-humano</span> para que assuma o seu brilho.</h2>
            </article>
        </section>
    );
}