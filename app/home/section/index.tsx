import Styles from './Section.module.scss';

export default function Secttion() {
    return (
        <section className={Styles.section}>
            <div className={Styles.section__container}>
                <div className={Styles.section__content}>
                    <h2 className={Styles.section__title}>Section Title</h2>
                    <p className={Styles.section__description}>
                        This is a placeholder for the section content. You can add any text or components here.
                    </p>
                </div>
            </div>
        </section>
    );
}