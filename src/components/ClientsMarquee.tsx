
const ClientsMarquee = () => {
  const clients = [
    {
      name: 'Digital Devas',
      logo: '/Digital_Devas.svg',
      alt: 'Digital Devas Logo'
    },
    {
      name: 'Hir Sports',
      logo: '/Hir_Sports.png',
      alt: 'Hir Sports Logo'
    },
    {
      name: 'Easy Go Overseas',
      logo: '/Easy-go-logo.jpg',
      alt: 'Easy Go Overseas Logo'
    },
    {
      name: 'Syla',
      logo: '/Syla.svg',
      alt: 'Syla Logo'
    },
    {
      name: 'Raaso',
      logo: '/Raaso_logo.jpeg',
      alt: 'Raaso Logo'
    },
    {
      name: 'Royals',
      logo: '/Royals_logo.png',
      alt: 'Royals Logo'
    },
    {
      name: 'HOI',
      logo: '/HOI.png',
      alt: 'HOI'
    },
    {
      name: 'QuikWink',
      logo: '/QuikWink.png',
      alt: 'QuikWink Logo'
    },
    {
      name: 'BuildrunKit',
      logo: '/brk-logo-light.webp',
      alt: 'BuildrunKit Logo'
    }
  ]

  return (
    <div className="w-full py-12 xs:py-16 sm:py-20 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="text-center mb-8 xs:mb-10 sm:mb-12 px-4">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.015em] mb-4 text-text-light dark:text-text-dark">
          Clients We Served
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Trusted by innovative businesses to deliver exceptional digital solutions.
        </p>
      </div>

      <div className="relative w-full overflow-hidden group flex">
        {/* First marquee set */}
        <div className="flex animate-marquee whitespace-nowrap gap-8 sm:gap-16 items-center shrink-0 min-w-full justify-around pr-8 sm:pr-16">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`marquee-1-${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-[150px] sm:w-[200px] h-[80px] sm:h-[100px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Second marquee set (identical copy) */}
        <div aria-hidden="true" className="flex animate-marquee whitespace-nowrap gap-8 sm:gap-16 items-center shrink-0 min-w-full justify-around pr-8 sm:pr-16">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`marquee-2-${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-[150px] sm:w-[200px] h-[80px] sm:h-[100px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Gradients for smooth fade effect at edges */}
        <div className="absolute top-0 left-0 w-20 sm:w-40 h-full bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 sm:w-40 h-full bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  )
}

export default ClientsMarquee
