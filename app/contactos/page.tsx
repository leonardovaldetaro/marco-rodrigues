import Styles from './Contact.module.scss';
import ContactForm from './form';
import Image from 'next/image';
import Onda from '../../public/assets/ondaBranca.svg';

export default function Contact() {

    return (
        <section className={Styles.formContent}>
            <Image 
                src={Onda}
                alt="Imagem de contacto"
                className={Styles.formContent__image}
            />
            <article className={Styles.formContent__header}>
                <h1 className={Styles.formContent__header__title}>Vamos conversar sobre o que realmente importa?</h1>
                <p>Se chegou até aqui, é porque algo ressoou em ti. Seja para propor uma palestra, iniciar um projeto, partilhar uma ideia ou simplesmente trocar uma visão sobre o mundo, este é o espaço certo.</p>
                <p>Estou aqui para ouvir, aprender e, quem sabe, criar algo incrível juntos. Não importa a distância ou o tema, o importante é a vontade de conectar.</p>
            </article>
            <div className={Styles.formContent__formWrapper}>
                <ContactForm />
            </div>
        </section>
    );
}