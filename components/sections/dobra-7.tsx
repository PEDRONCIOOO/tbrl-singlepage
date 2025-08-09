"use client";

import React, { useState, useId, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Interface para os FAQs que suporta conteúdo traduzido
interface FaqItem {
  qKey: string;
  aKey: string;
  aLinkKey?: string;
}

const Dobra7: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0); // abre o 1º por padrão
  const [mounted, setMounted] = useState(false);
  const uid = useId();
  const { t } = useLanguage();
  
  useEffect(() => setMounted(true), []);

  // Estrutura que mapeia as chaves de tradução para as perguntas do FAQ
  const faqs: FaqItem[] = [
    { 
      qKey: "faq.1.q", 
      aKey: "faq.1.a" 
    },
    { 
      qKey: "faq.2.q", 
      aKey: "faq.2.a" 
    },
    { 
      qKey: "faq.3.q", 
      aKey: "faq.3.a" 
    },
    { 
      qKey: "faq.4.q", 
      aKey: "faq.4.a" 
    },
    { 
      qKey: "faq.5.q", 
      aKey: "faq.5.a",
      aLinkKey: "faq.5.a.link" 
    },
    { 
      qKey: "faq.6.q", 
      aKey: "faq.6.a",
      aLinkKey: "faq.6.a.link" 
    },
    { 
      qKey: "faq.7.q", 
      aKey: "faq.7.a" 
    },
    { 
      qKey: "faq.8.q", 
      aKey: "faq.8.a",
      aLinkKey: "faq.8.a.link" 
    },
  ];

  const toggle = (i: number) => setOpen((p) => (p === i ? null : i));

  // Função que renderiza a resposta de um FAQ, possivelmente com um link
  const renderAnswer = (item: FaqItem) => {
    if (!item.aLinkKey) {
      return mounted && t(item.aKey);
    }
    
    // Para respostas que contêm links
    const answerText = mounted ? t(item.aKey) : "";
    const linkUrl = mounted ? t(item.aLinkKey) : "";
    
    // Verifica se o texto contém o URL (isso nos diz como formatar a resposta)
    if (answerText.includes(linkUrl)) {
      // Substitui a URL no texto pela tag de link
      const parts = answerText.split(linkUrl);
      return (
        <>
          {parts[0]}
          <a 
            href={linkUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-400 underline hover:text-green-300 transition-colors"
          >
            {linkUrl}
          </a>
          {parts[1] || ''}
        </>
      );
    } else {
      // Caso o texto e a URL sejam separados
      return (
        <>
          {answerText}{' '}
          <a 
            href={linkUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-400 underline hover:text-green-300 transition-colors"
          >
            {linkUrl}
          </a>
        </>
      );
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="faq">
      {/* BG base */}
      <div className="absolute inset-0 bg-black" />

      {/* Glows / macro */}
      <motion.div
        className="pointer-events-none absolute -top-24 -left-28 h-[36vw] w-[36vw] rounded-full bg-green-500/20 blur-[120px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-28 h-[28vw] w-[28vw] rounded-full bg-emerald-400/15 blur-[120px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.15 }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0)_42%,black_100%)] bg-black/70" />

      <div className="relative z-10 w-full max-w-5xl px-6 md:px-10 mx-auto py-16 md:py-24">
        {/* Header otimizado para SEO com hierarquia adequada de títulos */}
        <div className="relative">
          <h2 
            className="text-center text-4xl md:text-6xl font-raleway font-extrabold text-white tracking-tight"
          >
            <span data-i18n="faq.title.questions">
              {mounted && t("faq.title.questions")}
            </span>{" "}
            <span 
              className="text-green-400"
              data-i18n="faq.title.highlight"
            >
              {mounted && t("faq.title.highlight")}
            </span>
          </h2>
          <motion.div
            className="pointer-events-none absolute inset-x-0 -top-6 flex justify-center opacity-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-7xl md:text-8xl font-black text-green-500/10 select-none">FAQ</span>
          </motion.div>
        </div>

        {/* Subheader com palavras-chave relevantes */}
        <div className="mx-auto mt-4 mb-2 text-center">
          <p 
            className="text-lg text-gray-300"
            data-i18n="faq.subtitle"
          >
            {mounted && t("faq.subtitle")}
          </p>
        </div>
        
        <motion.div
          className="mx-auto mt-2 mb-10 w-fit rounded-full border border-green-500/25 bg-black/40 px-4 py-1.5 text-xs text-green-300 backdrop-blur"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          data-i18n="faq.badge"
        >
          {mounted && t("faq.badge")}
        </motion.div>

        {/* Lista de FAQs com estrutura schema.org */}
        <div itemScope itemType="https://schema.org/FAQPage" className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const contentId = `${uid}-faq-${i}`;
            return (
              <motion.div
                key={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className={`relative rounded-xl border bg-gradient-to-r from-emerald-900/20 to-black/30 backdrop-blur
                             ${isOpen ? "border-green-500/40" : "border-green-500/15"} overflow-hidden`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                {/* Glow lateral animado */}
                <motion.span
                  className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-green-400 to-emerald-500"
                  initial={{ scaleY: 0, originY: 0 }}
                  animate={{ scaleY: isOpen ? 1 : 0.4 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Botão/heading - Título da pergunta com marcação SEO */}
                <button
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(i)}
                  className="group w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-center gap-4 outline-none"
                >
                  {/* Ícone/chevron em chip */}
                  <motion.span
                    className="grid h-7 w-7 place-items-center rounded-md border border-green-500/30 bg-black/40 text-green-300"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M8.12 9.29L12 13.17l3.88-3.88L17.3 10.7 12 16l-5.3-5.3 1.42-1.41Z"
                      />
                    </svg>
                  </motion.span>

                  <h3 
                    itemProp="name" 
                    className="flex-1 text-[1.05rem] md:text-lg font-semibold text-white"
                    data-i18n={item.qKey}
                  >
                    {mounted && t(item.qKey)}
                  </h3>

                  {/* Micro indicador de foco/hover */}
                  <motion.span
                    className="h-2 w-2 rounded-full bg-green-400/70"
                    initial={{ scale: 0.8, opacity: 0.6 }}
                    animate={{ scale: isOpen ? 1 : 0.8, opacity: isOpen ? 1 : 0.6 }}
                    transition={{ duration: 0.25 }}
                  />
                </button>

                {/* Conteúdo com resposta e marcação schema.org */}
                <motion.div
                  id={contentId}
                  role="region"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="px-5 md:px-6"
                >
                  <div className="pb-5 md:pb-6">
                    <div 
                      itemProp="text" 
                      className="rounded-lg border border-green-500/10 bg-black/30 p-4 text-sm text-gray-200/90"
                      data-i18n={item.aKey}
                    >
                      {renderAnswer(item)}
                    </div>
                  </div>
                </motion.div>

                {/* Linha de separação com shimmer */}
                <motion.div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA/rodapé com links relevantes para SEO */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <a
            href="https://dev.tbrl.com.br/account/login" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-md border border-green-500/40 bg-green-500 text-black px-5 py-3 font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-400/40 transition-all"
            data-i18n="faq.cta"
          >
            {mounted && t("faq.cta")}
          </a>
        </motion.div>
        
        {/* Informações adicionais relevantes para SEO */}
        <div className="mt-16 text-center text-sm text-gray-400">
          <p 
            className="mb-2"
            data-i18n="faq.footer.line1"
          >
            {mounted && t("faq.footer.line1")}
          </p>
          <p data-i18n="faq.footer.line2">
            {mounted && t("faq.footer.line2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dobra7;
