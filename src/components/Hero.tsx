import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative h-[150vh] w-full">
      <div className="h-screen w-full top-0 left-0" style={{ opacity: 1, position: 'fixed', transform: 'none' }}>
        <Image
          alt="Fachada de uma casa moderna com design arrojado"
          className="object-cover"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: 'transparent'
          }}
          src="/images/image_1.jpg"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-20 text-center text-white">
          <div className="container">
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <Image
                  alt="4ME Engenharia Logo Icon"
                  className="object-contain"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: 'transparent'
                  }}
                  src="/images/image_1.png"
                  fill
                />
              </div>
              <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Projetos complementares com precisão
              </h1>
            </div>
            <p className="mx-auto mt-6 max-w-3xl font-body text-lg md:text-xl text-white/80">
              Estrutural e fundações, hidrossanitário, elétrico, PPCI, laudos técnicos e assessoria prazos confiáveis e documentação completa.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 font-headline bg-white text-black hover:bg-white/90" href="#contact">
                Fale Conosco
              </a>
              <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 font-headline bg-black/50 text-white border border-white/20 hover:bg-white/10" href="#projects">
                Nossos Projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}