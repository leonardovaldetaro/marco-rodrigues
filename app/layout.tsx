import Footer from './_components/footer';
import Header from './_components/header';
import { Metadata } from 'next';
import './styles/global.css';
import Script from 'next/script';


export const metadata: Metadata = {
  title: 'Desenvolvimento Pessoal e Profissional com Marco Rodrigues',
  keywords: 'coaching, desenvolvimento pessoal, autoconhecimento, coaching de vida, coaching de carreira, coaching executivo, coaching de liderança, coaching de equipe, coaching de profissionais, performance,produtividade, coaching de espiritualidade, coaching de inteligência emocional, comunicação',
  description: 'Desenvolvimento pessoal e profissional com Marco Rodrigues, palestrante internacional e mentor em evolução pessoal, propósito e resultados.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-escuro.png', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-claro.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-pt">

      <head>
        <script src="https://cdn.userway.org/widget.js" data-account="U1AlpPUVlr"></script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9PEF5DMPG4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9PEF5DMPG4');
          `}
        </Script>

      </head>

      <body>
        <Header />
        <main className='mainContainer'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
