import Styles from './Biografia.module.scss';
import Image from 'next/image';
import BiografiaImage from '../../../public/assets/marco-rodrigues-coach-biografia.webp';

export default function BiografiaSection() {
    return (
        <section className={Styles.biografia}>
            <div className={Styles.biografia__container}>
                <article className={Styles.biografia__container__content}>
                    <h2 className={Styles.biografia__container__content__title}>Biografia</h2>
                    <p className={Styles.biografia__container__content__text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet orci ac ex placerat fringilla. Fusce iaculis odio leo, et ullamcorper massa vehicula in. Aenean mattis leo sit amet neque consectetur commodo. Duis tempor tellus vel risus venenatis, ac molestie diam lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dapibus ante in urna pulvinar, quis interdum velit imperdiet. Etiam sagittis sollicitudin egestas. Suspendisse imperdiet placerat arcu, id vulputate nisi venenatis nec. Mauris ut metus ut arcu maximus porttitor. Donec dignissim est sed cursus vestibulum. 
                    </p>
                    <p className={Styles.biografia__container__content__text}>
                        Etiam id quam eget nisl sollicitudin fringilla vel in odio. Etiam dolor erat, efficitur vitae consequat vel, rhoncus vel eros. Vestibulum neque magna, fringilla laoreet neque vitae, maximus tincidunt metus. Nulla ante risus, vulputate vitae consectetur sed, cursus vel lacus. Donec auctor semper tellus, et luctus odio vulputate vitae. Proin rutrum dapibus leo. Cras non sem aliquet, pretium quam id, auctor tellus. Fusce est felis, lacinia eu nunc ac, porttitor finibus nisl.
                    </p>
                </article>
                <figure className={Styles.biografia__container__image}>
                    <Image
                        src={BiografiaImage}
                        alt="Biografia de Marco Rodrigues Coach"
                        width={500}
                        height={500}
                        className={Styles.biografia__container__image__img}
                    />
                    <figcaption className={Styles.biografia__container__image__caption}>
                        Marco Rodrigues Coach
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}