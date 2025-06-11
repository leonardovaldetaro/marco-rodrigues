import Styles from './About.module.scss';
import Image from "next/image";
import SunLogo from '../../../public/assets/sol.svg';
import AboutImage from '../../../public/assets/marco-rodrigues-coach.webp'

import { FiChevronsRight } from "react-icons/fi";
import { BsDashLg } from "react-icons/bs";
import Button from '../../_components/button';


export default function AboutSection() {
    return (
        <section className={Styles.aboutSection}>
            <article className={Styles.aboutSection__content}>
                <Image
                    src={SunLogo}
                    alt="Ilustração de apoio ao Logotipo Marco Rodrigues, o Sol"
                    width={100}
                    height={100}
                    className={Styles.aboutSection__content__icone}
                />
                <span className={Styles.aboutSection__content__tag}>
                    <BsDashLg className={Styles.aboutSection__content__tag__icon} />
                    A Jornada de Marco Rodrigues
                </span>
                <h2 className={Styles.aboutSection__content__title}>Da imobilidade à<br /> <span>liberdade</span> interior</h2>
                <p className={Styles.aboutSection__content__text}>Nascido prematuro, com apenas 6 meses e 3 semanas, Marco enfrentou desde o início o maior desafio da sua vida: uma Paralisia Cerebral causada por complicações durante o período de incubadora.</p>
                <p className={Styles.aboutSection__content__text}>Muitos o imaginaram preso a uma cadeira de rodas, limitado em movimento e autonomia. Mas Marco escolheu outro caminho.</p>
                <p className={Styles.aboutSection__content__text}>Tornou-se mestre em Engenharia e Gestão Industrial pelo Instituto Superior Técnico, treina regularmente no ginásio e vive com independência e determinação.</p>
                <p className={Styles.aboutSection__content__text}>Hoje, dedica-se ao coaching e ao desenvolvimento humano, com a convicção de que uma vida com sentido nasce de um espírito forte, capaz de transformar limites em possibilidades..</p>
                <p className={Styles.aboutSection__content__text}>Como missão, carrega a certeza de que “toda a gente consegue, independentemente das suas circunstâncias, encontrar a sua própria luz e trazê-la ao mundo.”</p>

                <Button
                    href="/sobre-mim"
                    variant='primary'
                >
                    Conheça a minha história
                    <FiChevronsRight className={Styles.buttonIcon}/>
                </Button>

            </article>

            <Image
                src={AboutImage}
                alt="Marco Rodrigues coach, sorrindo e olhando para a câmera"
                className={Styles.aboutSection__image}
            />
        </section>
    );
}