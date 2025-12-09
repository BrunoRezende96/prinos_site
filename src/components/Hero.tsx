import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import Button from './button';

const Hero: React.FC = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // DESKTOP
  const slidesDesktop = [
    {
      id: 1,
      image: 'desktop1.png',
      title: 'Cozinhas Planejadas',
      subtitle: 'Transformamos sua cozinha em um ambiente funcional e elegante',
      button: <Button />
    },
    {
      id: 2,
      image: 'desktop2.png',
      title: 'Conheça nossos projetos',
      subtitle: 'Móveis planejados que maximizam o espaço e o conforto',
      button: <Button />
    }
  ];

  // MOBILE
  const slidesMobile = [
    {
      id: 1,
      image: 'mobile2.png',
      title: 'Cozinhas Planejadas',
      subtitle: 'Funcionalidade e elegância em qualquer espaço',
      button: <Button />
    },
    {
      id: 2,
      image: 'mobile1.png',
      title: '',
      subtitle: ''
    },
    {
      id: 3,
      image: 'mobile3.png',
      title: 'Conheça nossos projetos',
      subtitle: 'Conforto máximo em ambientes planejados',
      button: <Button />
    }
  ];

  const slides = isMobile ? slidesMobile : slidesDesktop;

  return (
    <section id="hero" className="relative h-screen object-cover">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">

              {/* IMAGEM */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40" />

              {/* CONTEÚDO */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">

                  {/* TÍTULO */}
                  <motion.h1
                    className="text-4xl font-bold mb-4 md:text-4xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slide.title}
                  </motion.h1>

                  {/* SUBTÍTULO */}
                  <motion.p
                    className="text-lg mb-8 md:text-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="mt-[-15px]">{slide.subtitle}</div>
                  </motion.p>

                  {/* BOTÃO — agora funcionando em todos os slides */}
                  {slide.button && (
                    <div className="pointer-events-none flex justify-center mt-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="pointer-events-auto"
                      >
                        {slide.button}
                      </motion.div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
