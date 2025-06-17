import Styles from './Contactos.module.scss';

export default function ContactosPage() {
  return (
    <main className={Styles.contactosPage}>
      <h1 className={Styles.contactosPage__title}>Contactos</h1>
      <p className={Styles.contactosPage__text}>
        Esta é a página de Contacto, onde você pode encontrar informações sobre o projeto, sua missão e visão.
      </p>
      <p className={Styles.contactosPage__text}>
        O projeto visa fornecer uma plataforma para compartilhar conhecimento e experiências, promovendo o desenvolvimento pessoal e profissional.
      </p>
    </main>
  );
}