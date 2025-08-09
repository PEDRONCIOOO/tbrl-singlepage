"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, isChangingLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleLanguage = () => {
    if (isChangingLanguage) return; // Evitar múltiplas trocas rápidas
    const newLanguage = language === "pt-br" ? "en" : "pt-br";
    setLanguage(newLanguage);
  };

  return (
    <motion.div
      className="fixed right-5 bottom-5 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={toggleLanguage}
        disabled={isChangingLanguage}
        className={`flex items-center gap-2 px-3 py-2 rounded-full border border-green-400/30 bg-black/50 backdrop-blur-md text-white shadow-lg hover:bg-green-400/10 transition-all group ${isChangingLanguage ? 'opacity-80 cursor-wait' : ''}`}
        aria-label="Alternar idioma"
      >
        <span className="w-5 h-5 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-green-400 ${isChangingLanguage ? 'animate-pulse' : ''}`}>
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
            <path d="M2 12h20"></path>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </span>
        
        <div className="relative overflow-hidden w-12 h-6">
          <AnimatePresence mode="wait">
            {language === "pt-br" ? (
              <motion.span
                key="pt"
                className="absolute inset-0 flex items-center justify-center font-medium"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                PT-BR
              </motion.span>
            ) : (
              <motion.span
                key="en"
                className="absolute inset-0 flex items-center justify-center font-medium"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                EN
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        
        <motion.div
          className={`h-4 w-4 flex items-center justify-center text-green-400 group-hover:rotate-180 ${isChangingLanguage ? 'animate-spin' : ''}`}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </motion.div>
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;