import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent text-white mt-16">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <a className="flex items-center" href="/">
              <Image 
                alt="4ME Engenharia Logo" 
                width={180} 
                height={50} 
                src="/images/image.png" 
                style={{ color: 'transparent' }}
              />
            </a>
            <p className="text-sm text-white/70">O Arquétipo do Criador.</p>
          </div>
          <div className="grid gap-4 md:text-center">
            <h3 className="font-headline text-lg font-semibold">Localização</h3>
            <div className="space-y-1 text-sm text-white/70">
              <p>Rua Miguel Matte, N 687, Sala 1804, Bairro Pioneiros, Balneário Camboriú</p>
              <p>Atendemos: Grande Florianópolis, Itajaí, Blumenau, Joinville</p>
              <p>contato@4meengenharia.com</p>
            </div>
          </div>
          <div className="grid gap-4 md:text-right">
            <h3 className="font-headline text-lg font-semibold">Siga-nos</h3>
            <div className="flex justify-start gap-4 md:justify-end">
              <a href="https://www.instagram.com/4meengenharia" aria-label="Instagram" className="text-white/70 transition-colors hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram h-6 w-6">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t border-white/10 pt-4 sm:flex-row">
          <p className="text-sm text-white/70">© 2025 4ME Engenharia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}