"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FilloutStandardEmbed } from "@fillout/react";

const Dobra5: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  // Função para abrir o formulário modal
  const handleOpenForm = () => {
    // Open Fillout form in a new window/tab
    window.open('https://forms.fillout.com/t/dBfgxFD3HKus', '_blank', 'width=650,height=700');
  };

  return (
    <section className="relative min-h-screen flex items-center py-16 md:py-0 overflow-hidden">
      {/* BG base */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Glows - reduzidos no mobile para não dominarem o espaço */}
      <motion.div
        className="pointer-events-none absolute -top-24 -left-28 h-[40vw] md:h-[36vw] w-[40vw] md:w-[36vw] rounded-full bg-green-500/20 blur-[80px] md:blur-[120px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-28 h-[30vw] md:h-[28vw] w-[30vw] md:w-[28vw] rounded-full bg-emerald-400/15 blur-[80px] md:blur-[120px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.15 }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0)_42%,black_100%)] bg-black/70" />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Texto / copy - melhorias na visualização mobile */}
        <div className="order-2 lg:order-1">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-raleway font-extrabold text-white leading-tight mb-4 md:mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Sua marca,{" "}
            <span className="text-green-400">nosso motor de liquidez</span>.
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200/95 mb-6 md:mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Lance sua própria stablecoin em real — com logo, cor e domínio —
            sobre a reserva segregada do tBRL. Ideal para bancos digitais,
            marketplaces e programas de fidelidade que precisam de BRL on-chain
            sem montar a infraestrutura do zero.
          </motion.p>

          {/* bullets - ajustados para melhor visibilidade em mobile */}
          <div className="space-y-3 md:space-y-4">
            {[
              "Conta segregada e compliance completos.",
              "Custódia e liquidez com SLA empresarial.",
              "Dashboard, Webhooks e relatórios contábeis.",
            ].map((txt, i) => (
              <motion.div
                key={txt}
                className="flex items-start gap-2 md:gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.12 * i }}
              >
                <span className="mt-0.5 md:mt-1 inline-flex h-4 md:h-5 w-4 md:w-5 items-center justify-center rounded-sm border border-green-400/40 bg-black/40">
                  <svg width="10" height="10" viewBox="0 0 24 24" className="text-green-400">
                    <path fill="currentColor" d="M20.285 6.709a1 1 0 0 1 .006 1.414l-9 9a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l3.293 3.293 8.293-8.293a1 1 0 0 1 1.408 0z"/>
                  </svg>
                </span>
                <p className="text-sm sm:text-base text-gray-200">{txt}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA - botão para abrir o modal Fillout */}
          <motion.div
            className="mt-6 md:mt-8"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.35 }}
          >
            <motion.button
              onClick={handleOpenForm}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md border border-green-400/40 text-green-300 hover:text-black bg-transparent hover:bg-green-400 transition-colors font-semibold text-sm sm:text-base"
              whileHover={mounted ? { scale: 1.03 } : {}}
              whileTap={mounted ? { scale: 0.98 } : {}}
            >
              Fale com nosso time enterprise
              <svg width="14" height="14" viewBox="0 0 24 24" className="hidden sm:inline">
                <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Mock visual do "card de token" - adaptativo para mobile */}
        <motion.div
          className="order-1 lg:order-2 relative rounded-2xl md:rounded-3xl border border-green-500/15 bg-black/40 backdrop-blur-xl p-4 sm:p-6 md:p-8 min-h-[280px] md:min-h-[360px]"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* "console" principal - ajustes para responsividade */}
          <div className="mt-2 md:mt-4 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6">
            {/* Disco/brand - centralizado no mobile */}
            <motion.div
              className="relative h-28 w-28 sm:h-32 md:h-40 sm:w-32 md:w-40 rounded-full bg-gradient-to-tr from-emerald-700 to-emerald-400 shadow-[inset_0_0_40px_rgba(255,255,255,0.15)] mx-auto sm:mx-0"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* aro luminoso */}
              <motion.span
                className="absolute inset-3 rounded-full border-2 border-white/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
            </motion.div>

            {/* Sliders / elementos UI - ajustados para fluidez */}
            <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5">
              {/* campo estilizado */}
              <motion.div
                className="h-10 sm:h-11 md:h-12 rounded-full border border-green-400/30 bg-black/30 backdrop-blur-md px-4 md:px-5 flex items-center justify-between"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <span className="text-sm md:text-base text-gray-300">Nome do token</span>
                <span className="text-sm md:text-base text-green-300/90">ex: BankBRL</span>
              </motion.div>

              <motion.div
                className="h-10 sm:h-11 md:h-12 rounded-full border border-green-400/30 bg-black/30 backdrop-blur-md px-4 md:px-5 flex items-center justify-between"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                <span className="text-sm md:text-base text-gray-300">Domínio/Marca</span>
                <span className="text-sm md:text-base text-green-300/90">seubanco.com</span>
              </motion.div>

              {/* Chip tBRL */}
              <motion.div
                className="self-start mt-1 inline-flex items-center gap-2 rounded-full border-2 border-yellow-400/70 px-3 md:px-4 py-1.5 md:py-2 bg-black/40"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.16 }}
              >
                <span className="h-2 w-2 rounded-full bg-yellow-300 animate-pulse" />
                <span className="text-xs md:text-sm text-yellow-300 font-semibold">tBRL</span>
              </motion.div>

              {/* botão de ação - também abre o mesmo modal de contato */}
              <motion.button
                className="mt-2 w-fit px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md text-black font-semibold bg-green-500 border border-green-400/60 shadow-lg shadow-green-500/20 relative overflow-hidden text-sm md:text-base"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.22 }}
                whileHover={
                  mounted
                    ? { scale: 1.04, boxShadow: "0 0 24px rgba(74,222,128,0.45)" }
                    : {}
                }
                whileTap={mounted ? { scale: 0.98 } : {}}
                onClick={handleOpenForm}
              >
                <span className="relative z-10">Iniciar white-label</span>
                <motion.span
                  className="absolute inset-y-0 left-[-20%] w-[40%] skew-x-[-20deg] bg-white/20"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "160%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </motion.button>
            </div>
          </div>

          {/* linhas decorativas à direita - visíveis apenas em telas maiores */}
          <motion.div
            className="absolute right-6 bottom-6 hidden md:flex flex-col gap-2 opacity-60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <span className="h-2 w-28 rounded bg-white/5" />
            <span className="h-2 w-24 rounded bg-white/5" />
            <span className="h-2 w-20 rounded bg-white/5" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Componente Fillout para renderizar o formulário (permanece oculto até ser aberto) */}
      <div style={{ display: "none" }}>
        <FilloutStandardEmbed filloutId="dBfgxFD3HKus" />
      </div>
    </section>
  );
};

export default Dobra5;
