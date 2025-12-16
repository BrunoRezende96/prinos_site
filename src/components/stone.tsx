import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StoneSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const stoneProjects = [
    {
      id: 1,
      src: "1.png",
      alt: "Bancada de mármore branco em cozinha moderna"
    },
    {
      id: 2,
      src: "2.png",
      alt: "Ilha de granito preto com veios dourados"
    },
    {
      id: 3,
      src: "3.png",
      alt: "Ilha de quartzo Zeus com acabamento polido"
    },
    {
      id: 4,
      src: "4.png",
      alt: "Mármore Carrara em banheiro de luxo"
    },
    {
      id: 5,
      src: "5.png",
      alt: "Granito verde ubatuba em área gourmet"
    },
    {
      id: 6,
      src: "6.png",
      alt: "Pedra São Gabriel em lavatório"
    },
    {
      id: 7,
      src: "7.png",
      alt: "Mármore Travertino em sala de estar"
    },
    {
      id: 8,
      src: "8.png",
      alt: "Granito Absoluto Black em cozinha gourmet"
    }
  ];


    const whatsappMessage = encodeURIComponent("Olá, gostaria de solicitar um orçamento para pedras naturais e industriais.");
    const openWhatsApp = () => {
    window.open(`https://wa.me/5511934708733?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section className="relative min-h-screen bg-neutral-200 text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(marmorebg.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/05 to-black/02 " />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center">
        {/* Cabeçalho */}
        <div className="text-center mb-16 w-[90%]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-red-600
            
            md:text-5xl
            
            
            "
          >
            Trabalhamos com Pedras Naturais e Industriais
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mt-4 text-zinc-400"
          >
            Conheça alguns projetos executados pela nossa equipe especializada
          </motion.p>
        </div>

        {/* Galeria */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {stoneProjects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-sm text-white text-shadow-lg">{project.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-xl transition-all"
            onClick={openWhatsApp}
          >
            Solicite seu Orçamento
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-5xl text-white hover:text-red-500 transition-all"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>

              <img
                src={stoneProjects[selectedImage].src}
                alt={stoneProjects[selectedImage].alt}
                className="rounded-xl w-full max-h-[80vh] object-contain shadow-2xl"
              />

              <p className="text-center mt-6 text-lg text-neutral-300">
                {stoneProjects[selectedImage].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StoneSection;