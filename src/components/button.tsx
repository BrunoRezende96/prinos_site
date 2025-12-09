import { motion } from 'framer-motion';


  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá, estou vindo do seu site e gostaria de um orçamento');
    window.open(`https://wa.me/5511934708733?text=${message}`, '_blank');
  };


export default function Button() {
    return (
        <motion.button
            onClick={handleWhatsAppClick}
            onTouchStart={handleWhatsAppClick}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg
                      md:px-6 md:py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            Solicitar Orçamento
        </motion.button>
    )
}