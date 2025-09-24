export default function Contact() {
  return `
    <section id="contact" class="py-16 sm:py-24 bg-transparent text-foreground">
      <div class="container">
        <div class="text-center">
          <h2 class="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl text-white">Entre em Contato</h2>
          <p class="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Tem uma ideia ou um projeto em mente? Adoraríamos ouvir sobre ele.</p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div class="border rounded-lg p-8 shadow-lg bg-black/80 backdrop-blur-xl border-white/10 text-white">
            <form class="space-y-6">
              <div class="space-y-2">
                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-headline text-white" for="name">Nome</label>
                <input class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background/50 border-white/20" placeholder="Seu nome completo" id="name" name="name">
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-headline text-white" for="email">Email</label>
                <input type="email" class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background/50 border-white/20" placeholder="seu.email@exemplo.com" id="email" name="email">
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-headline text-white" for="message">Mensagem</label>
                <textarea class="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background/50 border-white/20" placeholder="Conte-nos sobre seu projeto..." name="message" id="message"></textarea>
              </div>
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full font-headline bg-white text-black hover:bg-white/90" type="submit">Enviar Mensagem</button>
            </form>
          </div>
          <div class="flex flex-col justify-center space-y-8">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 pt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-6 w-6 text-accent">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 class="font-headline text-xl font-semibold text-primary text-white">Endereço</h3>
                <p class="text-muted-foreground">Balneário Camboriú, SC</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 pt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-6 w-6 text-accent">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-headline text-xl font-semibold text-primary text-white">Telefone</h3>
                <p class="text-muted-foreground">+55 (47) 99795-7480</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 pt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-6 w-6 text-accent">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-headline text-xl font-semibold text-primary text-white">Email</h3>
                <p class="text-muted-foreground">contato@4meengenharia.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}