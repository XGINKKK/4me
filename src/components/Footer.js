export default function Footer() {
  return `
    <footer class="border-t border-white/10 bg-transparent text-white mt-16">
      <div class="container py-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="flex flex-col items-start gap-4">
            <a class="flex items-center" href="/">
              <img alt="4ME Engenharia Logo" width="180" height="50" decoding="async" src="/images/image.png" style="color:transparent">
            </a>
            <p class="text-sm text-white/70">O Arquétipo do Criador.</p>
          </div>
          <div class="grid gap-4 md:text-center">
            <h3 class="font-headline text-lg font-semibold">Localização</h3>
            <div class="space-y-1 text-sm text-white/70">
              <p>Rua Miguel Matte, N 687, Sala 1804, Bairro Pioneiros, Balneário Camboriú</p>
              <p>Atendemos: Grande Florianópolis, Itajaí, Blumenau, Joinville</p>
              <p>contato@4meengenharia.com</p>
            </div>
          </div>
          <div class="grid gap-4 md:text-right">
            <h3 class="font-headline text-lg font-semibold">Siga-nos</h3>
            <div class="flex justify-start gap-4 md:justify-end">
              <a href="https://www.instagram.com/4meengenharia" aria-label="Instagram" class="text-white/70 transition-colors hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram h-6 w-6">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 flex flex-col items-center justify-between border-t border-white/10 pt-4 sm:flex-row">
          <p class="text-sm text-white/70">© 2025 4ME Engenharia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `;
}