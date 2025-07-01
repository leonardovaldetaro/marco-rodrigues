"use client"

import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import CardsInfo from './data/cardsInfo.json';
import Card from './card';
import Styles from './Slide.module.scss';

export default function SlideCarrousel() {
    const [sliderRef] = useKeenSlider({
        slides: { perView: 3, spacing: 40 },
        loop: true,

        breakpoints: {
            '(max-width: 1152px)': {
                slides: { perView: 2, spacing: 16 },
            },
        },
    })

    return (
        <div className={Styles.slideContainer}>
            <h2 className={Styles.slideContainer__title}>Livros que Recomendo</h2>
            <p className={Styles.slideContainer__text}>Cada livro nesta seleção marcou momentos importantes da minha jornada. São obras que despertam reflexões, desafiam certezas e ajudam a construir pontes entre o que somos e o que podemos ser. Que estas leituras também iluminem o teu caminho.</p>
            <section ref={sliderRef} className={Styles.keenSlider}>
                {CardsInfo.map(card => (
                    <div className='keen-slider__slide' key={card.id}>
                        <Card
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            capa={card.capa}
                            alt={card.alt}
                            amazonLink={card.amazonLink}
                            autor={card.autor}
                        />
                    </div>
                ))}
            </section>
        </div>
    )
}