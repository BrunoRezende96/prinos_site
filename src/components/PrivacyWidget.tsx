import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X, Check } from 'lucide-react';

const PrivacyWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('privacy-accepted');
    if (!accepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('privacy-accepted', 'true');
    setIsAccepted(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (isAccepted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-6 z-50 bg-white rounded-lg shadow-xl border max-w-sm w-80"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Header */}
          <div className="bg-gray-900 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <h3 className="font-semibold text-sm">Política de Privacidade</h3>
            </div>
            <button
              onClick={handleDecline}
              className="text-white/80 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. 
              Ao continuar navegando, você concorda com nossa política de privacidade.
            </p>
            
            <div className="flex space-x-2">
              <motion.button
                onClick={handleAccept}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded text-sm font-semibold transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Check className="w-4 h-4 mr-1" />
                Aceitar
              </motion.button>
              
              <motion.button
                onClick={handleDecline}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-3 rounded text-sm font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Recusar
              </motion.button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-2">
              <a href="#" className="underline hover:text-red-600">
                Saiba mais sobre nossa política
              </a>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyWidget;
