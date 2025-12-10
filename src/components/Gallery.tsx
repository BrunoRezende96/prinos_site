import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: 'desktop1.png',
      title: 'Cozinha Moderna',
      category: 'Cozinha'
    },
    {
      id: 2,
      image: 'desktop2.png',
      title: 'Dormitório Casal',
      category: 'Dormitório'
    },
    {
      id: 3,
      image: 'desktop3.png',
      title: 'Sala de Estar',
      category: 'Sala'
    },
    {
      id: 4,
      image: 'desktop4.png',
      title: 'Painel Ripado',
      category: 'Sala'
    },
    {
      id: 5,
      image: 'mobile1.png',
      title: 'Cozinha com Ilha',
      category: 'Cozinha com ilha em mármore'
    },
    {
      id: 6,
      image: 'mobile2.png',
      title: 'Painel de TV',
      category: 'Sala'
    },
    {
      id: 7,
      image: 'mobile3.png',
      title: 'Closet Planejado',
      category: 'Para suites'
    },
    {
      id: 8,
      image: 'desktop5.png',
      title: 'Cozinha Contemporânea',
      category: 'Modernidade e harmonia'
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? projects.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossa <span className="text-red-600">Galeria</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos realizados e inspire-se para criar o ambiente dos seus sonhos.
          </p>
        </motion.div> */}

        <div className="mt-[300px] px-10 pb-10 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
        
        #ajuste margin top em xs
          xs:mt-[500px]

        #ajuste margin top em md
          md:mt-[30px]

        #ajuste margin top em lg
          lg:mt-[180px]

        #ajustes em xl
          xl:mt-[250px]
          xl:gap-x-4
          xl:gap-y-4

        #ajustes em 2xl
          2xl:mt-[300px]
          2xl:gap-x-6
          2xl:gap-y-6
          


        ">
          <div className='absolute w-full h-[95%] rounded-[10px] bottom-0 bg-red-600    
          
          #ajuste altura do background em md
          md:h-[95%]
          md:flex

          #ajuste altura do background em lg
          lg:h-[90%]
          lg:flex

          #ajuste altura do background em xl
          xl:h-[85%]
          xl:flex
          



          
          ' >



            
          </div>
          
          
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative object-cover group cursor-pointer overflow-hidden rounded-lg shadow-lg 
              
              #Ajuste de tamanho dos cards em md
              md:h-[250px]
              md:w-[300px]

              #Ajuste de tamanho dos cards em lg
              lg:h-[250px]
              lg:w-[280px]

              #Ajuste de tamanho dos cards em xl
              xl:h-[250px]
              xl:w-[280px]

              #Ajuste de tamanho dos cards em 2xl
              2xl:h-[250px]
              2xl:w-[350px]
              
              "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm opacity-90">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[90vh] mx-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={projects[selectedImage].image}
                  alt={projects[selectedImage].title}
                  className="w-full h-full object-contain rounded-lg"
                />
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image info */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{projects[selectedImage].title}</h3>
                  <p className="text-sm opacity-90">{projects[selectedImage].category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
