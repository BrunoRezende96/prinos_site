import { motion } from 'framer-motion';


export default function Sobre() {
    return (
        <div className="w-full flex justify-center" >
            <section id="about" className=" container flex flex-col">
                <motion.div
                    className="text-center mb-16 flex"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className='w-full px-10 flex flex-col'>
                        <h2 className="w-full text-center text-4xl md:text-5xl font-bold text-gray-900 mb-6
                        
                        #Ajuste texto em lg
                        lg:text-left
                        lg:text-4xl

                        #Ajuste texto em xl
                        xl:text-left
                        xl:text-5xl


                        #Ajuste texto em 2xl
                        2xl:text-left
                        2xl:text-6xl
                        2xl:w-[100%]



                        
                        ">
                            Sobre a <span className="text-red-600">Prinos Planejados </span>
                        </h2>

                        <div className="max-w-4xl text-center">
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed
                            
                            


                            #Ajuste de texto em lg
                            lg:text-left
                            lg:w-[50%]
                            
                            #Ajuste de texto em xl
                            xl:text-left
                            xl:text-xl
                            xl:w-[65%]
                            
                            #Ajuste de texto em 2xl
                            2xl:text-left
                            2xl:w-[80%]
                            2xl:text-2xl

                            ">
                                Com 16 anos de história no mercado de móveis planejados, a Prinos Planejados
                                se consolidou como referência em qualidade, inovação e atendimento personalizado.
                                Nossa missão é transformar sonhos em realidade, criando ambientes únicos que
                                refletem a personalidade e necessidades de cada cliente.
                            </p>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed
                            


                            #Ajuste de texto em lg
                            lg:text-left
                            lg:w-[50%]
                            
                            #Ajuste de texto em xl
                            xl:text-left
                            xl:w-[65%]
                            xl:text-xl

                            
                            #Ajuste de texto em 2xl
                            2xl:text-left                            
                            2xl:w-[80%]
                            2xl:text-2xl
                            
                            ">
                                Especializados em marcenaria sob medida, oferecemos soluções completas para
                                cozinhas, dormitórios, salas, home offices e todos os ambientes da sua casa.
                                Cada projeto é desenvolvido com atenção aos mínimos detalhes, utilizando
                                materiais de primeira qualidade e as mais modernas técnicas de fabricação.
                            </p>
                        </div>
                    </div>
                    {/* <div className='w-[80%] h-full flex flex-col justify-center items-center font-bold text-2xl bg-orange-100' >Uma imagem virá aqui</div> */}

                </motion.div>
            </section>
        </div>
    )
}