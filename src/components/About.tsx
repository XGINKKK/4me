import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-transparent text-foreground">
      <div className="container">
        <div className="rounded-lg border p-8 md:p-12 bg-black/80 backdrop-blur-xl border-white/10 shadow-lg text-white">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl text-white">Nossa Missão</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Revolucionar a engenharia por meio de soluções técnicas inovadoras, impulsionando a transição para práticas mais autênticas e precisas. Inspirar mudanças impactantes no setor da construção civil através de projetos complementares, assessorias e laudos de excelência.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6">
                <div>
                  <h3 className="font-headline text-xl font-semibold text-primary text-white">Nossa Visão</h3>
                  <p className="mt-2 text-muted-foreground">
                    Ser referência em projetos complementares, assessoria técnica e laudos especializados, nacional e regionalmente. Desafiar os limites da engenharia tradicional, alcançando um futuro onde a precisão técnica e a inovação se entrelaçam, redefinindo o conceito de excelência em engenharia.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  alt="Modelos arquitetônicos em uma mesa de trabalho"
                  className="object-cover"
                  src="/images/image.jpg"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}