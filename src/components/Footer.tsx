import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá, estou vindo do seu site e gostaria de um orçamento');
    window.open(`https://wa.me/5511934708733?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='w-full flex justify-center py-3'>
              <img
                src="logo_prinos_sf.png"
                alt="logo prinos"
                className='w-[30%] cursor-pointer hover:transform hover:scale-105 transition-all duration-300' />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed text-center ">
              Há 16 anos transformando sonhos em realidade através de móveis planejados
              de alta qualidade e design exclusivo.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Sitemap */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg text-center font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-center ">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contatos */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-center">Contatos</h4>
            <ul className="w-full space-y-3 flex flex-col  justify-center">

              <li className="flex justify-center">
                <Phone className="w-5 h-5 text-red-600 mr-3" />
                <span className="text-gray-300">(11) 93470-8733</span>
              </li>


              <li className="flex justify-center">
                <Mail className="w-5 h-5 text-red-600 mr-3" />
                <span className="text-gray-300">contato@prinosplanejados.com.br</span>
              </li>


              <li className="flex justify-center">
                <MapPin className="w-5 h-5 text-red-600 mr-3" />
                <span className="text-gray-300">São Paulo - SP</span>
              </li>


            </ul>
          </motion.div>

          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-center">Horários de Atendimento</h4>
            <div className="space-y-3 text-center w-full">
              <div className="flex flex-col justify-center w-full">

                <Clock className="w-full h-5 text-red-600 mr-3 mt-1" />

                <div className="text-gray-300">
                  <p>Segunda a Sexta</p>
                  <p className="text-sm">8h às 18h</p>
                  <p className="mt-2">Sábados</p>
                  <p className="text-sm">8h às 12h</p>
                </div>
              </div>
            </div>


            <div className='w-full flex justify-center' >
              <motion.button
                onClick={handleWhatsAppClick}
                className=" mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
              </motion.button>
            </div>



          </motion.div>

        </div>
      </div>

      {/* Subfooter */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-400 text-sm">
            <p>
              Orgulhosamente desenvolvido pela{' '}
              <span className="text-red-600 font-semibold">Winnext Company®</span>{' '}
              2025 – Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
