import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';


// Abre o WhatsApp com uma mensagem predefinida
const About: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá, estou vindo do seu site e gostaria de um orçamento');
    window.open(`https://wa.me/5511934708733?text=${message}`, '_blank');
  };

  // Array de características para exibir na seção "Sobre Nós"
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '16 Anos de Experiência',
      description: 'Tradição e qualidade comprovadas'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excelência em Qualidade',
      description: 'Materiais premium e acabamento perfeito'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e experientes'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Sonhos Realizados',
      description: 'Transformamos ideias em realidade'
    }
  ];

  return (
    <section id="about" className="py-20 bg-transparent relative z-20">
      <div className="container mx-auto px-4">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a <span className="text-red-600">Prinos Planejados</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
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
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer relative z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-red-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTÃO */}
        <motion.div
          className="text-center relative z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleWhatsAppClick}
            className="relative z-[9999] bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conheça Nossos Projetos
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
