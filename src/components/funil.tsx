"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Componente de fluxo de perguntas (CTA) com animação de slide.
 * Salve como: /components/CTAQuestions.tsx
 */
export default function CTAQuestions() {
  const [step, setStep] = useState(0);

  // Armazena respostas — adicione mais campos aqui se quiser mais perguntas
  const [answers, setAnswers] = useState({
    tipo: "",
    chaves: "",
  });

  const slideAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.4 },
  };

  // Avança etapa e salva resposta
  const nextStep = (key: keyof typeof answers, value: string) => {
    setAnswers((s) => ({ ...s, [key]: value }));
    setStep((s) => s + 1);
  };

  // Mensagem formatada para WhatsApp incluindo as respostas
  const whatsappMessage = encodeURIComponent(
    `Olá! Quero criar um projeto de móveis planejados.\n\nMinhas respostas:\n` +
      `• Tipo da residência: ${answers.tipo}\n` +
      `• Já possui as chaves? ${answers.chaves}`
  );

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511934708733?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section className="w-full flex justify-center py-20 bg-gray-100">
      <div className="w-full max-w-2xl text-center p-6">
        <AnimatePresence mode="wait">

          {/* ETAPA 0 — CTA Inicial */}
          {step === 0 && (
            <motion.div key="step0" {...slideAnimation}>
              <h2 className="text-3xl font-bold mb-6">
                Crie seu projeto agora mesmo!
              </h2>

              <button
                onClick={() => setStep(1)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Criar um projeto
              </button>
            </motion.div>
          )}

          {/* ETAPA 1 — Pergunta 1 */}
          {step === 1 && (
            <motion.div key="step1" {...slideAnimation}>
              <h2 className="text-2xl font-bold mb-6">
                Você pretende fazer seus planejados para uma casa ou apartamento?
              </h2>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => nextStep("tipo", "Casa")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Casa
                </button>

                <button
                  onClick={() => nextStep("tipo", "Apartamento")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Apartamento
                </button>
              </div>
            </motion.div>
          )}

          {/* ETAPA 2 — Pergunta 2 */}
          {step === 2 && (
            <motion.div key="step2" {...slideAnimation}>
              <h2 className="text-2xl font-bold mb-6">Você já tem as chaves da residência?</h2>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => nextStep("chaves", "Sim")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Sim
                </button>

                <button
                  onClick={() => nextStep("chaves", "Não")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Não
                </button>
              </div>
            </motion.div>
          )}

          {/* ETAPA FINAL — CTA WhatsApp */}
          {step === 3 && (
            <motion.div key="step3" {...slideAnimation}>
              <h2 className="text-2xl font-bold mb-6">Pronto! Fale agora com um consultor.</h2>

              <button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Falar com um consultor pelo WhatsApp
              </button>

              <div className="text-left bg-white p-4 rounded-lg shadow mt-6">
                <h3 className="font-bold mb-2">Resumo das respostas:</h3>
                <ul className="text-gray-700">
                  <li>• Tipo da residência: <strong>{answers.tipo}</strong></li>
                  <li>• Já possui as chaves: <strong>{answers.chaves}</strong></li>
                </ul>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
