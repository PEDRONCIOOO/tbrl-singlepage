"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const navItems = [
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Reservas", href: "#reservas" },
  { name: "API", href: "#api" },
  { name: "Casos de Uso", href: "#casos-de-uso" },
  { name: "Perguntas", href: "#perguntas" },
];

export default function Header() {
  const baseDelay = 0.2; // Atraso inicial para a primeira animação
  const [activeSection, setActiveSection] = useState("");
  
  // Função para rolagem suave
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Usando a API nativa de scroll suave
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Compensação para o header fixo
        behavior: 'smooth'
      });
      
      // Atualiza a URL sem recarregar a página
      window.history.pushState({}, '', href);
      
      // Atualiza seção ativa
      setActiveSection(href);
    }
  };

  // Detectar qual seção está visível durante a rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Compensação para melhorar a detecção
      
      // Encontra qual seção está visível
      const sections = navItems.map(item => ({
        id: item.href.replace('#', ''),
        href: item.href,
        element: document.getElementById(item.href.replace('#', ''))
      })).filter(section => section.element !== null);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          const height = section.element.offsetHeight;
          
          if (scrollPosition >= offsetTop - 150 && scrollPosition < offsetTop + height) {
            setActiveSection(section.href);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Verificar inicialmente qual seção está visível
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg">
      <motion.nav
        className="container mx-auto px-8 py-4 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Item 1: Logo */}
        <motion.div
          className="text-2xl font-bold text-green-400"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: baseDelay }}
        >
          <Image
            src="/tblr-logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </motion.div>

        {/* Item 2: Lista de Navegação */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              className="list-none"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                delay: baseDelay + (index + 1) * 0.1, // Delay escalonado
              }}
            >
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-2 py-1 text-gray-300 hover:text-green-400 transition-colors duration-300 
                ${activeSection === item.href ? 'text-green-400' : ''}`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-400" 
                    layoutId="activeSection"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Item 3: Botão */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: baseDelay + (navItems.length + 1) * 0.1, // Delay após o último item da lista
          }}
        >
          <a
            href="#comecar"
            onClick={(e) => scrollToSection(e, "#contato")}
            className="bg-green-500 text-black font-bold py-2 px-5 rounded-md hover:bg-green-400 transition-all duration-300 ease-in-out"
          >
            Começar
          </a>
        </motion.div>
      </motion.nav>
    </header>
  );
};