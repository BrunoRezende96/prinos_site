import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Sobre from './Sobre';
import CTAQuestions from './funil';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Maria Silva',
      rating: 5,
      comment: 'Excelente trabalho! A equipe da Prinos superou todas as minhas expectativas. Minha cozinha ficou perfeita!',
      date: '2 anos atrás'
    },
    {
      id: 2,
      name: 'João Santos',
      rating: 5,
      comment: 'Profissionais muito competentes e pontuais. O projeto do meu home office ficou incrível. Recomendo!',
      date: '1 mês atrás'
    },
    {
      id: 3,
      name: 'Ana Costa',
      rating: 5,
      comment: 'Qualidade excepcional e atendimento personalizado. Transformaram completamente nosso quarto. Muito satisfeita!',
      date: '2 semanas atrás'
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      rating: 5,
      comment: 'Empresa séria e confiável. Cumpriram todos os prazos e o resultado final foi além do esperado.',
      date: '10 anos atrás'
    },
    {
      id: 5,
      name: 'Fernanda Lima',
      rating: 5,
      comment: 'Adorei o projeto da sala de estar. Equipe muito profissional e materiais de primeira qualidade.',
      date: '7 meses atrás'
    },
    {
      id: 6,
      name: 'Roberto Mendes',
      rating: 5,
      comment: 'Excelente custo-benefício. A marcenaria ficou perfeita e o atendimento foi impecável do início ao fim.',
      date: '3 anos atrás'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
      />
    ));
  };

  return (

    <div>

      <Sobre />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que nossos <span className="text-red-600">clientes dizem</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista. Veja alguns depoimentos de quem confiou na Prinos Planejados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.comment}"
                </p>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">Cliente verificado</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-lg shadow-lg">
              <div className="flex mr-3">
                {renderStars(5)}
              </div>
              <span className="text-lg font-semibold text-gray-900">
                4.9/5 - Baseado em 150+ avaliações
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className='h-auto p-10'>
        <CTAQuestions />
      </div>

    </div>

  );
};

export default Reviews;
