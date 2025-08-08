"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const navItems = [
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Reservas", href: "#reservas" },
  { name: "API", href: "#api" },
  { name: "Casos de Uso", href: "#casos-de-uso" },
  { name: "Perguntas", href: "#perguntas" },
];

export default function Header() {
  const baseDelay = 0.2; // Atraso inicial para a primeira animação

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg">
      <motion.nav
        className="container mx-auto px-8 py-4 flex justify-between items-center"
        // A nav em si pode ter um fade-in simples
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
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                {item.name}
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
            className="bg-green-500 text-black font-bold py-2 px-5 rounded-md hover:bg-green-400 transition-all duration-300 ease-in-out"
          >
            Começar
          </a>
        </motion.div>
      </motion.nav>
    </header>
  );
};