import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {

  // Estado para detectar se é mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IMAGENS DESKTOP – 1920x1080
  const slidesDesktop = [
    {
      id: 1,
      image: 'desktop1.png',
      title: 'Cozinhas Planejadas',
      subtitle: 'Transformamos sua cozinha em um ambiente funcional e elegante'
    },
    {
      id: 2,
      image: 'desktop2.png',
      title: 'Conheça nossos projetos',
      subtitle: 'Móveis planejados que maximizam o espaço e o conforto'
    },

    // {
    //   id: 3,
    //   image: 'desktop3.png',
    //   title: 'Salas de Estar',
    //   subtitle: 'Ambientes aconchegantes para momentos especiais'
    // },
    // {
    //   id: 4,
    //   image: 'desktop4.png',
    //   title: 'Home Office',
    //   subtitle: 'Espaços funcionais para sua produtividade'
    // }
  ];

  // IMAGENS MOBILE – 1080x1920 (verticais)
  const slidesMobile = [
    {
      id: 1,
      image: 'teste.jpg',
      title: 'Cozinhas Planejadas',
      subtitle: 'Funcionalidade e elegância em qualquer espaço'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=720&q=80',
      title: 'Dormitórios Sob Medida',
      subtitle: 'Conforto máximo em ambientes planejados'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=720&q=80',
      title: 'Salas de Estar',
      subtitle: 'Ambientes acolhedores para todos os momentos'
    }
  ];

  const slides = isMobile ? slidesMobile : slidesDesktop;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá, estou vindo do seu site e gostaria de um orçamento');
    window.open(`https://wa.me/5511934708733?text=${message}`, '_blank');
  };

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

                  <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    className="text-lg md:text-2xl mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className='mt-[-15px]' >{slide.subtitle}</div>
                  </motion.p>

                  <motion.button
                    onClick={handleWhatsAppClick}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Solicitar Orçamento
                  </motion.button>

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
