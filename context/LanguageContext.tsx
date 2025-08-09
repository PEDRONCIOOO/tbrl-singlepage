"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Importando os arquivos de tradução
import enTranslations from '@/public/i18n/en.json';
import ptBrTranslations from '@/public/i18n/pt-br.json';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  isChangingLanguage: boolean;
};

type TranslationsType = {
  [key: string]: string | string[];
};

const translations: Record<string, TranslationsType> = {
  'en': enTranslations,
  'pt-br': ptBrTranslations
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('pt-br');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  useEffect(() => {
    // Recuperar o idioma salvo no localStorage ou usar o idioma do navegador
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.toLowerCase();
    const detectedLanguage = savedLanguage || 
                             (browserLanguage.startsWith('pt') ? 'pt-br' : 'en');
    
    setLanguage(detectedLanguage);
    setIsLoaded(true);
    
    // Atualizar o atributo lang do HTML
    document.documentElement.lang = detectedLanguage === "pt-br" ? "pt-BR" : "en";
  }, []);

  const handleLanguageChange = (lang: string) => {
    // Ativar estado de transição
    setIsChangingLanguage(true);
    
    // Pequeno atraso para permitir que animações de saída sejam concluídas
    setTimeout(() => {
      setLanguage(lang);
      
      // Atualizar o atributo lang do HTML
      document.documentElement.lang = lang === "pt-br" ? "pt-BR" : "en";
      
      // Salvar a preferência do usuário
      localStorage.setItem('language', lang);
      
      // Resetar o estado de transição após uma pequena pausa para completar animações
      setTimeout(() => {
        setIsChangingLanguage(false);
      }, 300);
    }, 200);
  };

  // Função de tradução que retorna a string traduzida com base na chave
  const t = (key: string): string => {
    const currentTranslations = translations[language] || translations['pt-br'];
    const translation = currentTranslations[key];
    if (Array.isArray(translation)) {
      return translation.join(' ');
    }
    return translation || key;
  };

  // Não renderizar nada até que o idioma seja carregado para evitar flash de conteúdo
  if (!isLoaded) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleLanguageChange, 
      t,
      isChangingLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};