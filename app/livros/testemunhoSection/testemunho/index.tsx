import Styles from './Testemunho.module.scss';
import Image, { StaticImageData } from 'next/image';

type TestemunhoProps = {
  image: StaticImageData;
  alt: string;
  children: React.ReactNode;
};

export default function Testemunho({ image, alt, children }: TestemunhoProps) {
  return (
    <article className={Styles.testemunho}>
      <figure className={Styles.testemunho__imageContainer}>
        <Image
          src={image}
          alt={alt}
          width={500}
          height={300}
          className={Styles.testemunho__imageContainer__image}
        />
      </figure>
      <div className={Styles.testemunho__content}>
        <p>{children}</p>
      </div>
    </article>
  );
}