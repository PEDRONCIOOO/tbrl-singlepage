"use client";

import React, { useState, useId } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

type FaqItem = { q: string; a: React.ReactNode };

const faqs: FaqItem[] = [
  { 
    q: "O tBRL é regulado pelo Bacen?", 
    a: "O token opera sob o modelo de dinheiro eletrônico lastreado; seguimos a Resolução CVM 88 e as diretrizes do Bacen e seremos pioneiros no cumprimento de quaisquer novas normas."
  },
  { 
    q: "Qual é o SLA de resgate?", 
    a: "Pix 24×7 com latência média de 3 segundos." 
  },
  { 
    q: "Existe um limite de cunhagem?", 
    a: "Não — desde que haja 100% de BRL mantidos na conta de reserva."
  },
  { 
    q: "Posso integrar sem KYC?", 
    a: "Para volumes < R$ 5 k/dia usamos KYC simplificado; acima disso aplicamos KYC/KYB completo."
  },
  { 
    q: "Onde está o contrato?", 
    a: <>Moonbeam Explorer: <a href="https://moonscan.io/token/0x513E5739AE60B29ac2B33Bfcf0E07F0D079DbDBB" target="_blank" rel="noopener noreferrer" className="text-green-400 underline hover:text-green-300 transition-colors">0x513E5739AE60B29ac2B33Bfcf0E07F0D079DbDBB</a></>
  },
  { 
    q: "Onde posso ver a prova de reservas?", 
    a: <>No site da Fact Finance, nosso parceiro de auditoria de saldos: <a href="https://fact.finance/reserves/tokeniza" target="_blank" rel="noopener noreferrer" className="text-green-400 underline hover:text-green-300 transition-colors">fact.finance/reserves/tokeniza</a></>
  },
  { 
    q: "Como funciona o KYC?", 
    a: "Verificação automatizada de identidade, selfie e liveness — também acessível via API."
  },
  { 
    q: "Como acesso os serviços?", 
    a: <>Integração de API simples. Veja a documentação em <a href="https://dev.tbrl.com.br/" target="_blank" rel="noopener noreferrer" className="text-green-400 underline hover:text-green-300 transition-colors">dev.tbrl.com.br</a></>
  },
];

const Dobra7: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0); // abre o 1º por padrão
  const uid = useId();

  const toggle = (i: number) => setOpen((p) => (p === i ? null : i));

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
            Perguntas <span className="text-green-400">Frequentes</span>
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
          <p className="text-lg text-gray-300">
            Tire suas dúvidas sobre a stablecoin brasileira 100% lastreada que conecta Pix à Web3
          </p>
        </div>
        
        <motion.div
          className="mx-auto mt-2 mb-10 w-fit rounded-full border border-green-500/25 bg-black/40 px-4 py-1.5 text-xs text-green-300 backdrop-blur"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          Transparência • Dev‑first • On‑chain
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

                  <h3 itemProp="name" className="flex-1 text-[1.05rem] md:text-lg font-semibold text-white">
                    {item.q}
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
                    <div itemProp="text" className="rounded-lg border border-green-500/10 bg-black/30 p-4 text-sm text-gray-200/90">
                      {item.a}
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
            href="https://dev.tbrl.com.br/account/login" target="_blank" rel="noopener noreferrer"
            className="rounded-md border border-green-500/40 bg-green-500 text-black px-5 py-3 font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-400/40 transition-all"
          >
            Ver documentação técnica
          </a>
        </motion.div>
        
        {/* Informações adicionais relevantes para SEO */}
        <div className="mt-16 text-center text-sm text-gray-400">
          <p className="mb-2">
            tBRL - A stablecoin brasileira que conecta o Pix ao ecossistema blockchain
          </p>
          <p>
            Moonbeam, Polygon, Ethereum, Tron | Operando sob a Resolução CVM 88
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dobra7;
