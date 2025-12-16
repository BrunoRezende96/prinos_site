"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CTAQuestions() {
  const [step, setStep] = useState(0);

  // Armazena todas as respostas
  const [answers, setAnswers] = useState({
    nome: "",
    tipo: "",
    chaves: "",
    planta: "",
    localizacao: "",
    primeiroOrcamento: "",
  });

  const slideAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.4 },
  };

  // Avança etapa
  const nextStep = (key: keyof typeof answers, value: string) => {
    setAnswers((s) => ({ ...s, [key]: value }));
    setStep((s) => s + 1);
  };

  // Mensagem final para WhatsApp
  const whatsappMessage = encodeURIComponent(
    `Olá! Quero criar um projeto de móveis planejados.\n\nMinhas respostas:\n` +
    `• Nome completo: ${answers.nome}\n` +
    `• Tipo da residência: ${answers.tipo}\n` +
    `• Já possui as chaves? ${answers.chaves}\n` +
    `• Já possui a planta? ${answers.planta}\n` +
    `• Localização da residência: ${answers.localizacao}\n` +
    `• É o primeiro orçamento? ${answers.primeiroOrcamento}`
  );

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511934708733?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section  id="contact" className="w-full flex justify-center py-20 bg-slate-100 rounded-xl">
      <div className="w-full max-w-2xl text-center p-6">
        <AnimatePresence mode="wait">

          {/* --- STEP 0 — CTA Inicial --- */}
          {step === 0 && (
            <motion.div key="step0" {...slideAnimation}>
              <h2 className="text-3xl font-bold mb-6">Crie seu projeto agora mesmo!</h2>

              <button
                onClick={() => setStep(1)}
                className="bg-red-600 inline-block transform scale-105 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Criar um projeto
              </button>
            </motion.div>
          )}

          {/* --- STEP 1 — Nome Completo --- */}
          {step === 1 && (
            <motion.div key="step1" {...slideAnimation}>
              <h2 className="text-2xl font-bold mb-6">Qual é o seu nome completo?</h2>

              <input
                type="text"
                placeholder="Digite seu nome completo"
                value={answers.nome}
                onChange={(e) => setAnswers((s) => ({ ...s, nome: e.target.value }))}
                className="border mr-3 border-gray-300 px-4 py-3 rounded-lg w-full max-w-md mx-auto mb-4"
              />

              <button
                disabled={answers.nome.trim().length < 3}
                onClick={() => setStep(2)}
                className={`px-6 py-3 rounded-lg text-white font-semibold ${answers.nome.trim().length < 3
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
                  }`}
              >
                Continuar
              </button>
            </motion.div>
          )}

          {/* --- STEP 2 — Tipo da residência --- */}
          {step === 2 && (
            <motion.div key="step2" {...slideAnimation}>
              <h2 className="text-2xl font-bold mb-6">
                Você pretende fazer seus planejados para uma casa ou apartamento?
              </h2>

              <div className="flex justify-center gap-4">
                <button onClick={() => nextStep("tipo", "Casa")} className="rounded-lg bg-red-600 flex-1 hover:bg-red-700 text-white px-6 py-3">
                  Casa
                </button>

                <button onClick={() => nextStep("tipo", "Apartamento")} className="rounded-lg bg-red-600 flex-1 hover:bg-red-700 text-white px-6 py-3">
                  Apartamento
                </button>
              </div>
            </motion.div>
          )}

          {/* --- STEP 3 — Chaves --- */}
          {step === 3 && (
            <motion.div key="step3" {...slideAnimation}>
              <h2 className="text-2xl font-bold mb-6">Você já tem as chaves da residência?</h2>

              <div className="flex gap-4 justify-center">
                <button onClick={() => nextStep("chaves", "Sim")} className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">Sim</button>
                <button onClick={() => nextStep("chaves", "Não")} className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">Não</button>
              </div>
            </motion.div>
          )}

          {/* --- STEP 4 — Planta --- */}
          {step === 4 && (
            <motion.div key="step4" {...slideAnimation}>
              <h2 className="text-2xl font-bold mb-6">Você já possui a planta da residência?</h2>

              <div className="flex gap-4 justify-center">
                <button onClick={() => nextStep("planta", "Sim")} className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">Sim</button>
                <button onClick={() => nextStep("planta", "Não")} className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">Não</button>
              </div>
            </motion.div>
          )}

          {/* --- STEP 5 — Localização --- */}
          {step === 5 && (
            <motion.div key="step5" {...slideAnimation}>
              <h2 className="text-2xl font-bold mb-6">
                Em qual bairro ou região é ou será a localização da sua residência?
              </h2>

              <input
                type="text"
                placeholder="Ex.: Jardim Paulista, Copacabana, Centro, etc."
                value={answers.localizacao}
                onChange={(e) =>
                  setAnswers((s) => ({ ...s, localizacao: e.target.value }))
                }
                className=" mr-3 border border-gray-300 px-4 py-3 rounded-lg w-full max-w-md mx-auto mb-4"
              />

              <button
                disabled={answers.localizacao.trim().length < 3}
                onClick={() => setStep(6)}
                className={`px-6 py-3 rounded-lg text-white font-semibold ${answers.localizacao.trim().length < 3
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
                  }`}
              >
                Continuar
              </button>
            </motion.div>
          )}


          {/* --- STEP 6 — Primeiro orçamento --- */}
          {step === 6 && (
            <motion.div key="step6" {...slideAnimation}>
              <h2 className="text-2xl font-bold mb-6">É seu primeiro orçamento de móveis planejados?</h2>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => nextStep("primeiroOrcamento", "Sim")}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
                >
                  Sim
                </button>

                <button
                  onClick={() => nextStep("primeiroOrcamento", "Não")}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
                >
                  Não
                </button>
              </div>
            </motion.div>
          )}

          {/* --- STEP 7 — Final --- */}
          {step === 7 && (
            <motion.div key="step7" {...slideAnimation}>
              <div className="h-auto py-3">
                <h2 className="text-2xl font-bold">
                  <p className="text-red-600 text-4xl font-bold" >Falta pouco!</p>
                </h2>
                <p>Fale agora com um dos nossos consultores para finalizar seu projeto!</p>
              </div>

              <button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Falar com um consultor pelo WhatsApp
              </button>

              <div className="text-left bg-white p-4 rounded-lg shadow mt-6">
                <h3 className="font-bold mb-2">Resumo das respostas:</h3>
                <ul className="text-gray-700">
                  <li>• Nome: <strong>{answers.nome}</strong></li>
                  <li>• Tipo: <strong>{answers.tipo}</strong></li>
                  <li>• Chaves: <strong>{answers.chaves}</strong></li>
                  <li>• Planta: <strong>{answers.planta}</strong></li>
                  <li>• Localização: <strong>{answers.localizacao}</strong></li>
                  <li>• Primeiro orçamento: <strong>{answers.primeiroOrcamento}</strong></li>
                </ul>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
