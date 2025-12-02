import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá, estou vindo do seu site e gostaria de um orçamento');
    window.open(`https://wa.me/5511934708733?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      info: '(11) 93470-8733',
      action: () => window.open('tel:+5511934708733')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localização',
      info: 'São Paulo - SP',
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horário de Atendimento',
      info: 'Seg - Sex: 8h às 18h | Sáb: 8h às 12h',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fale <span className="text-red-600">Conosco</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Pronto para transformar seus sonhos em realidade? Entre em contato conosco 
            e solicite seu orçamento personalizado. Nossa equipe está pronta para atendê-lo!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-gray-50 p-6 rounded-lg text-center ${
                item.action ? 'cursor-pointer hover:bg-gray-100' : ''
              } transition-colors duration-300`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={item.action || undefined}
              whileHover={item.action ? { scale: 1.05 } : {}}
            >
              <div className="text-red-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.info}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-red-600 text-white p-8 rounded-lg max-w-2xl mx-auto">
            <MessageCircle className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Solicite seu Orçamento Gratuito
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Clique no botão abaixo e fale diretamente conosco pelo WhatsApp. 
              Responderemos rapidamente com todas as informações que você precisa!
            </p>
            <motion.button
              onClick={handleWhatsAppClick}
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Falar no WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
