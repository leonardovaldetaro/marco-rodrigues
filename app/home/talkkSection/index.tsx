import Button from '../../_components/button';
import Styles from './Talk.module.scss';
import { FiChevronsRight } from "react-icons/fi";

export default function TalkSection() {
    return (
        <section className={Styles.talkSection}>
            <div className={Styles.containerTalk}>
                <article className={Styles.talkSection__content}>
                    <h2 className={Styles.talkSection__content__title}>Palestras e Workshops</h2>
                    <p className={Styles.talkSection__content__text}>
                        Marco Rodrigues oferece palestras e workshops inspiradores, abordando temas como superação, resiliência e desenvolvimento pessoal.
                        Com uma abordagem prática e motivadora, ele compartilha sua jornada de vida e as lições aprendidas ao longo do caminho.
                    </p>
                    <p className={Styles.talkSection__content__text}>
                        Se você está procurando uma experiência transformadora para o seu evento, entre em contato para saber mais sobre como Marco pode contribuir.
                    </p>
                    <Button
                        href='/palestras'
                        variant='secondary'
                    >
                        Conheça as minha palestras
                        <FiChevronsRight className={Styles.buttonIcon} />
                    </Button>
                </article>
            </div>
        </section>
    );
}