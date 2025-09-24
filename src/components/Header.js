export default function Header() {
  return `
    <header class="sticky top-0 z-50 w-full text-white transition-all duration-300 bg-transparent">
      <div class="container flex h-20 items-center justify-between">
        <a class="flex items-center" href="/">
          <img alt="4ME Engenharia Logo" width="180" height="50" decoding="async" 
               src="/images/image.png" style="color:transparent">
        </a>
        <nav class="hidden items-center gap-6 md:flex">
          <a class="font-headline text-sm font-medium text-white/80 transition-colors hover:text-white" href="#about">Sobre Nós</a>
          <a class="font-headline text-sm font-medium text-white/80 transition-colors hover:text-white" href="#services">Serviços</a>
          <a class="font-headline text-sm font-medium text-white/80 transition-colors hover:text-white" href="#projects">Projetos</a>
          <a class="font-headline text-sm font-medium text-white/80 transition-colors hover:text-white" href="#contact">Contato</a>
        </nav>
        <div class="md:hidden">
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-card h-10 w-10 shrink-0 border-white/50 text-white hover:bg-white/10 hover:text-white" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-5 w-5">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <span class="sr-only">Toggle navigation menu</span>
          </button>
        </div>
      </div>
    </header>
  `;
}