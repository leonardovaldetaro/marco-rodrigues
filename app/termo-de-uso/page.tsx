import Styles from './Termo.module.scss';

export default function TermoDeUso() {
    return (
        <main className={Styles.termoDeUso}>
            <div className={Styles.header}>
                <h1 className={Styles.header__title}>
                    Termos de Uso,<br />
                    Licença de Uso,<br />
                    Direitos Autorais,<br />
                    Direito de Imagem,<br />
                    Política de Privacidade,<br /> 
                    Proteção de Dados<br />
                    e Política de Cookies.
                </h1>
            </div>

            <article className={Styles.termoDeUso__content}>
                <h2>Termos de Uso</h2>
                <p>
                    O site <b>marcorodriguescoaching.pt</b>, operado por Marco Rodrigues, é acessível em https://marcorodriguescoaching.pt. Ao utilizar este site, você concorda com os termos aqui estabelecidos, com todas as leis e regulamentos aplicáveis, e assume a responsabilidade por cumprir as leis locais relevantes. Caso não concorde com qualquer um destes termos, solicitamos que não utilize o site. Os conteúdos e materiais presentes neste site estão protegidos por leis de direitos autorais e de propriedade intelectual.
                </p>
            </article>

            <article className={Styles.termoDeUso__content}>
                <h2>Licença de Uso</h2>
                <p>
                    É concedida ao usuário uma licença limitada para visualizar e fazer download temporário de uma cópia dos materiais disponíveis neste site, exclusivamente para uso pessoal e não comercial. Esta é uma licença de uso, não uma transferência de propriedade. Sob esta licença, você não pode:
                </p>
                <ul>
                    <li>Modificar ou copiar o conteúdo;</li>
                    <li>Utilizar o conteúdo para fins comerciais ou de exibição pública;</li>
                    <li>Descompilar ou fazer engenharia reversa de qualquer software presente no site;</li>
                    <li>Remover avisos de direitos autorais ou de propriedade intelectual;</li>
                    <li>Transferir o conteúdo para outra pessoa ou “espelhar” o conteúdo em outro servidor.</li>
                </ul>
                <p>
                    Esta licença será automaticamente encerrada caso qualquer uma destas restrições seja violada. Ao encerrar a licença, você deve apagar qualquer material obtido deste site.
                </p>
            </article>
            <article className={Styles.termoDeUso__content}>
                <h2>Isenção de Responsabilidade</h2>
                <p>
                    Os materiais deste site são fornecidos “no estado em que se encontram”. Marco Rodrigues não oferece garantias, expressas ou implícitas, incluindo, entre outras, garantias de comercialização, adequação a um fim específico ou não violação de direitos de propriedade intelectual. Não garantimos a exatidão, confiabilidade ou disponibilidade dos materiais.
                </p>
            </article>
            <article className={Styles.termoDeUso__content}>
                <h2>Política de Privacidade</h2>
                <p>
                    O site Marco Rodrigues respeita a sua privacidade. Coletamos apenas as informações pessoais estritamente necessárias para finalidades específicas, como inscrição em newsletters, respostas a formulários ou análises estatísticas de uso do site.
                </p>
                <ul>
                    <li>Seus dados são armazenados de forma segura e não serão vendidos ou compartilhados sem seu consentimento.</li>
                    <li>Você pode solicitar, a qualquer momento, o acesso, atualização ou exclusão dos seus dados pessoais.</li>
                    <li>O endereço de e-mail fornecido para comunicação ou marketing será utilizado exclusivamente para os fins informados.</li>
                </ul>
            </article>
            <article className={Styles.termoDeUso__content}>
                <h2>Política de Cookies</h2>
                <p>
                    Este site utiliza cookies para melhorar a sua experiência, personalizar conteúdos e analisar o tráfego. Os cookies utilizados incluem:
                </p>
                <ul>
                    <li>Cookies necessários: Para o funcionamento básico do site.</li>
                    <li>Cookies analíticos: Para coleta de dados anônimos de uso.</li>
                    <li>Cookies de redes sociais: Para permitir o compartilhamento de conteúdo.</li>
                </ul>
                <p>
                    Você pode gerenciar as configurações de cookies no seu navegador. Se desejar desativar o rastreamento do Google Analytics, visite a página oficial de Google Analytics Opt-Out.
                </p>
            </article>
            <article className={Styles.termoDeUso__content}>
                <h2>Alterações nos Termos</h2>
                <p>
                    Marco Rodrigues reserva-se o direito de modificar estes termos e políticas a qualquer momento. As versões atualizadas serão publicadas neste site, e o uso contínuo da plataforma implica a aceitação dessas alterações.
                </p>
                <p>
                    Para mais informações, dúvidas ou solicitações, entre em contato:<br />
                    E-mail: [email do Marco]
                </p>
            </article>
        </main>
    );
}