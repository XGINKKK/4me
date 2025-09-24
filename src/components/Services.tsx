export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-transparent text-foreground">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl text-white">Nossos Serviços</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Oferecemos soluções completas em engenharia, do conceito à entrega.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border flex flex-col text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-black/80 backdrop-blur-xl border-white/10 text-white">
            <div className="flex p-6 flex-row items-start gap-4 space-y-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-blocks h-6 w-6">
                  <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                  <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
                </svg>
              </div>
              <div>
                <div className="font-semibold tracking-tight font-headline text-xl text-white">Projetos Complementares</div>
                <div className="text-sm text-muted-foreground">Desenvolvimento de projetos técnicos especializados que complementam o projeto arquitetônico principal.</div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Projeto Estrutural</li>
                <li>Projeto Hidrossanitário</li>
                <li>Projeto Elétrico</li>
                <li>Projeto de Prevenção Contra Incêndio</li>
                <li>Projeto de Climatização</li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg border flex flex-col text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-black/80 backdrop-blur-xl border-white/10 text-white">
            <div className="flex p-6 flex-row items-start gap-4 space-y-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench h-6 w-6">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <div>
                <div className="font-semibold tracking-tight font-headline text-xl text-white">Assessoria Técnica</div>
                <div className="text-sm text-muted-foreground">Consultoria especializada para garantir a excelência técnica e conformidade normativa dos seus projetos.</div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Consultoria em Normas Técnicas</li>
                <li>Acompanhamento de Obra</li>
                <li>Gerenciamento de Projetos</li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg border flex flex-col text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-black/80 backdrop-blur-xl border-white/10 text-white">
            <div className="flex p-6 flex-row items-start gap-4 space-y-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check h-6 w-6">
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
              </div>
              <div>
                <div className="font-semibold tracking-tight font-headline text-xl text-white">Laudos Técnicos</div>
                <div className="text-sm text-muted-foreground">Elaboração de laudos especializados com rigor técnico e precisão para suas necessidades específicas.</div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Laudo de Vistoria Técnica</li>
                <li>Laudo Estrutural</li>
                <li>Laudo de Conformidade</li>
                <li>Avaliação Técnica de Imóveis</li>
                <li>Perícia Técnica</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}