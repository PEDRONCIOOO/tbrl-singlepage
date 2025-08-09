"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => setMounted(true), []);

  // Dados dos links principais
  const links = [
    {
      key: "footer.links.whitepaper",
      href: "https://axia-tokeniza-us-east-2-s3-bucket.s3.us-east-2.amazonaws.com/tBRL+Whitepaper+PT.pdf",
    },
    {
      key: "footer.links.reserves",
      href: "https://fact.finance/reserves/tokeniza",
    },
    {
      key: "footer.links.api",
      href: "https://dev.tbrl.com.br/account/login",
    },
    {
      key: "footer.links.terms",
      href: "https://tokeniza.com.br/wp-content/uploads/2025/07/Termos-de-Uso-Plataforma-18.07.2025.pdf",
    },
    {
      key: "footer.links.aml",
      href: "https://tokeniza.com.br/codigo-de-conduta-da-tokeniza/",
    },
  ];

  // Dados das redes sociais
  const socialLinks = [
    {
      name: "Telegram",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-gray-300">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2Zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1 .22-1.59c.15-.15 2.71-2.48 2.76-2.69c.01-.03 0-.07-.03-.1c-.03-.03-.08-.02-.11-.01c-.05 0-1.64 1.04-4.77 3.13c-.45.31-.86.46-1.23.45c-.4-.01-1.17-.23-1.75-.42c-.7-.23-1.26-.35-1.22-.74c.02-.2.3-.41.8-.62c3.14-1.35 5.22-2.25 6.27-2.7c3-.13 3.62-1.16 3.68-1.18Z"
          />
        </svg>
      ),
      href: "https://t.me/tbrlofficial",
    },
    {
      name: "X",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-gray-300">
          <path
            fill="currentColor"
            d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
          />
        </svg>
      ),
      href: "https://x.com/tbrl",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-gray-300">
          <path
            fill="currentColor"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
          />
        </svg>
      ),
      href: "https://linkedin.com/company/tbrl",
    },
  ];

  return (
    <footer className="relative py-16 md:py-20 overflow-hidden bg-black">
      {/* Glows */}
      <motion.div
        className="pointer-events-none absolute -top-48 left-1/4 h-[30vw] w-[30vw] rounded-full bg-green-500/10 blur-[100px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 right-1/4 h-[20vw] w-[20vw] rounded-full bg-emerald-400/10 blur-[100px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.15 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10">
          {/* Logo e descrição */}
          <div className="col-span-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Image
                src="/tblr-logo.png"
                alt="tBRL Logo"
                width={100}
                height={30}
                className="object-contain"
              />
              <p 
                className="text-gray-400 text-sm max-w-xs"
                data-i18n="footer.description"
              >
                {mounted && t("footer.description")}
              </p>
            </motion.div>
          </div>

          {/* Links principais */}
          <div className="col-span-1 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 
                className="text-white font-medium text-lg mb-4"
                data-i18n="footer.resources"
              >
                {mounted && t("footer.resources")}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {links.map((link) => (
                  <li key={link.key}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm inline-flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-i18n={link.key}
                    >
                      <span className="text-green-500">→</span>
                      {mounted && t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Redes sociais e contato */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 
                className="text-white font-medium text-lg mb-4"
                data-i18n="footer.connect"
              >
                {mounted && t("footer.connect")}
              </h3>
              
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full border border-emerald-400/25 bg-black/40 hover:bg-green-500/10 hover:border-green-400/50 transition-colors"
                    whileHover={{ y: -2 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              <a 
                href="mailto:contato@tbrl.com.br"
                className="text-gray-300 hover:text-green-400 transition-colors text-sm inline-flex items-center gap-2"
              >
                <span className="grid h-5 w-5 place-items-center rounded-md bg-green-500/10">
                  <svg width="14" height="14" viewBox="0 0 24 24" className="text-green-400">
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                    />
                  </svg>
                </span>
                contato@tbrl.com.br
              </a>
            </motion.div>
          </div>
        </div>

        {/* Divisor */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent my-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Copyright e informações legais */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-xs">
            © 2025 tBRL LTDA | CNPJ 45.842.576/0001-34
          </p>
          
          <div className="flex items-center gap-1">
            <span 
              className="text-gray-500 text-xs"
              data-i18n="footer.secured"
            >
              {mounted && t("footer.secured")}
            </span>
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-green-500"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;