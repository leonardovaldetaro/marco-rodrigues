import Button from '../../_components/button';
import Styles from './Cta.module.scss';
import { FiChevronsRight } from "react-icons/fi";

export default function CtaSection() {
    return (
        <section className={Styles.ctaSection}>
            <div className={Styles.ctaSection__container}>
                <h2 className={Styles.ctaSection__title}>Contrate as palestras presenciais</h2>
                <p className={Styles.ctaSection__text}>Ética. Valores Humanos. Transparência. Sentido de Vida. Propósito. Equilíbrio emocional.</p>
                <p className={Styles.ctaSection__text}>Atuação nas áreas empresariais, sociais, escolas, atletas e artistas.</p>
                <Button
                        href='/palestras/formulario'
                        variant='secondary'
                    >
                        Contratar Palestras
                        <FiChevronsRight className={Styles.buttonIcon} />
                    </Button>
            </div>
        </section>
    );
}