import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '4ME Engenharia - Authentic Spaces',
  description: 'Criando espaços autênticos e inovadores com arquitetura de ponta e construção de alto padrão.',
  keywords: 'engenharia, arquitetura, construção, projetos complementares, laudos técnicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${montserrat.variable} font-body antialiased min-h-screen bg-background`}>
        {children}
      </body>
    </html>
  )
}