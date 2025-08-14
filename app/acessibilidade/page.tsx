'use client';
import Styles from './Acessibilidade.module.scss';

export default function Acessibilidade() {
    return (
        <main className={Styles.termoDeAcessibilidade}>
            <div className={Styles.header}>
                <h1 className={Styles.header__title}>
                    Declaração de Acessibilidade.
                </h1>
            </div>

            <article className={Styles.termoDeAcessibilidade__content}>
                <h2>Geral</h2>
                <p>
                    O site marcorodriguescoaching.pt procura garantir que seus conteúdos e serviços sejam acessíveis a todas as pessoas, incluindo aquelas com deficiência. Investimos recursos e atenção para tornar o site mais fácil de usar e acessível, pois acreditamos que todos têm o direito de viver com dignidade, igualdade, conforto e independência.
                </p>
            </article>

            <article className={Styles.termoDeAcessibilidade__content}>
                <h2>Acessibilidade no marcorodriguescoaching.pt</h2>
                <p>
                    O marcorodriguescoaching.pt foi desenvolvido utilizando técnicas de código acessível que favorecem a navegação de pessoas com necessidades visuais diversas, incluindo perda de visão, baixa visão, daltonismo e outras condições relacionadas. O desenvolvimento seguiu práticas de acessibilidade recomendadas pelo WCAG 2.1, garantindo contraste adequado, estrutura semântica clara, suporte a leitores de tela e elementos navegáveis por teclado.
                </p>
                <p>
                    O site foi testado e aprovado em ferramentas de verificação de acessibilidade como Wave e Lighthouse, assegurando conformidade técnica e melhor experiência para todos os usuários.
                </p>
                <p>
                    Além disso, o marcorodriguescoaching.pt disponibiliza o UserWay Website Accessibility Widget, alimentado por um servidor de acessibilidade dedicado, que oferece recursos adicionais para personalização da experiência de navegação.
                </p>
            </article>
            <article className={Styles.termoDeAcessibilidade__content}>
                <h2>Como ativar o menu de acessibilidade</h2>
                <p>
                    O menu de acessibilidade pode ser ativado clicando no ícone que aparece no canto da página. Após acionar o menu, aguarde alguns segundos para que ele seja carregado por completo.
                </p>
            </article>
            <article className={Styles.termoDeAcessibilidade__content}>
                <h2>Aviso legal</h2>
                <p>
                    O marcorodriguescoaching.pt segue empenhado em melhorar continuamente a acessibilidade do site e de seus conteúdos, por acreditar que é nossa responsabilidade moral coletiva oferecer uma experiência inclusiva e sem barreiras para todas as pessoas.
                </p>
                <p>
                    Como parte desse compromisso, realizamos verificações regulares com o UserWay’s Accessibility Scanner para identificar e corrigir possíveis barreiras. Apesar dos esforços para tornar todo o conteúdo totalmente acessível, alguns elementos podem não estar ainda em total conformidade com os padrões mais rigorosos. Isso pode ocorrer quando não encontramos ou não aplicamos ainda a solução tecnológica mais adequada.
                </p>
            </article>
            <article className={Styles.termoDeAcessibilidade__content}>
                <h2>Estou aqui para ajudar</h2>
                <p>
                    Se você encontrar qualquer dificuldade para acessar o conteúdo no marcorodriguescoaching.pt ou precisar de assistência em qualquer parte do site, entre em contato durante o horário comercial. Será um prazer ajudar.
                </p>
            </article>
            <article className={Styles.termoDeAcessibilidade__content}>
                <h2>Contato</h2>
                <p>
                    Se quiser relatar um problema de acessibilidade, tiver dúvidas ou precisar de suporte, fale com a equipe do marcorodriguescoaching.pt:
                </p>
                <p>
                    E-mail: [mamrpm@gmail.com]
                </p>
            </article>
        </main>
    );
}