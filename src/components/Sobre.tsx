import { motion } from 'framer-motion';


export default function Sobre() {
    return (
        <div className="w-full flex justify-center" >
            <section id="about" className=" container flex flex-col">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className='w-[50%] p-10 flex flex-col'>
                        <h2 className="w-full text-left text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Sobre a <span className="text-red-600">Prinos Planejados </span>
                        </h2>

                        <div className="max-w-4xl text-left">
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Com 16 anos de história no mercado de móveis planejados, a Prinos Planejados
                                se consolidou como referência em qualidade, inovação e atendimento personalizado.
                                Nossa missão é transformar sonhos em realidade, criando ambientes únicos que
                                refletem a personalidade e necessidades de cada cliente.
                            </p>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Especializados em marcenaria sob medida, oferecemos soluções completas para
                                cozinhas, dormitórios, salas, home offices e todos os ambientes da sua casa.
                                Cada projeto é desenvolvido com atenção aos mínimos detalhes, utilizando
                                materiais de primeira qualidade e as mais modernas técnicas de fabricação.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}