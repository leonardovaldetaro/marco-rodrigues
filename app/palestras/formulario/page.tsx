import Styles from './Formulario.module.scss';
import Image from 'next/image';
import Estrela from '../../../public/assets/estrelaBranca.svg';
import ContatoPalestras from './form';

export default function FormularioPage() {
  return (
    <section className={Styles.formContent}>
            <Image 
                src={Estrela}
                alt="Imagem da estrela que o guia Marco Rodrigues"
                className={Styles.formContent__image}
            />
            <article className={Styles.formContent__header}>
                <h1 className={Styles.formContent__header__title}>Convide Marco Rodrigues para Inspirar e Transformar</h1>
                <p>Se deseja levar à sua equipa, organização ou evento uma palestra com impacto verdadeiro, preencha o formulário abaixo. Inspirado em sua história de vida, Marco Rodrigues atua como palestrante, despertando o potencial humano com base na verdade, coragem e propósito.</p>
                <p>Cada palestra é adaptada ao público e contexto, combinando profundidade com proximidade, provocação com acolhiment. Envie seu pedido e retornarei em breve com mais informações sobre disponibilidade, valores e formatos possíveis</p>
            </article>
            <div className={Styles.formContent__formWrapper}>
                <ContatoPalestras />
            </div>
        </section>
  )
}