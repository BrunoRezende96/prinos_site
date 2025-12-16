import { motion } from 'framer-motion';

export default function Sobre() {
  return (
    <div className="w-full flex justify-center">
      <section
        id="about"
        className="container mx-auto px-4 flex flex-col"
      >
        <motion.div
          className="mb-16 flex flex-col lg:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* TEXTO */}
          <div className="w-full flex flex-col">
            <h2 className="
              w-full
              text-center
              text-4xl
              font-bold
              text-gray-900
              mb-6

              lg:text-left
              lg:text-4xl

              xl:text-left
              xl:text-5xl

              2xl:text-left
              2xl:text-6xl
            ">
              Sobre a <span className="text-red-600">Prinos Planejados</span>
            </h2>

            <div className="max-w-4xl">
              <p className="
                text-lg
                text-gray-700
                mb-8
                leading-relaxed
                text-center
                w-full

                lg:text-left


                xl:text-left
                xl:text-xl


                2xl:text-left
                2xl:text-2xl

              ">
                Com 16 anos de história no mercado de móveis planejados, a Prinos
                Planejados se consolidou como referência em qualidade, inovação
                e atendimento personalizado. Nossa missão é transformar sonhos
                em realidade, criando ambientes únicos que refletem a
                personalidade e necessidades de cada cliente.
              </p>

              <p className="
                text-lg
                text-gray-700
                mb-8
                leading-relaxed
                text-center
                w-full

                lg:text-left


                xl:text-left
                xl:text-xl


                2xl:text-left
                2xl:text-2xl

              ">
                Especializados em marcenaria sob medida, oferecemos soluções
                completas para cozinhas, dormitórios, salas, home offices e
                todos os ambientes da sua casa. Cada projeto é desenvolvido
                com atenção aos mínimos detalhes, utilizando materiais de
                primeira qualidade e as mais modernas técnicas de fabricação.
              </p>
            </div>
          </div>

          {/* VÍDEO */}
          <div className="w-full lg:w-[80%] flex justify-center items-center">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/VSnSdUbXEH4?start=30"
                title="Vídeo institucional Prinos Planejados"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
