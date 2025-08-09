"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FilloutStandardEmbed } from "@fillout/react";
import { useLanguage } from "@/context/LanguageContext";

const Dobra8: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => setMounted(true), []);
  
  // Função para abrir o formulário modal - usando a mesma abordagem que funciona na dobra-5
  const handleOpenForm = () => {
    // Open Fillout form in a new window/tab
    window.open('https://forms.fillout.com/t/dBfgxFD3HKus', '_blank', 'width=650,height=700');
  };

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* BG base */}
      <div className="absolute inset-0 bg-black" />

      {/* Glows macro */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Card CTA */}
        <motion.div
          className="relative rounded-[28px] border border-green-500/20 bg-gradient-to-br from-emerald-900/50 via-emerald-800/40 to-black/40 backdrop-blur-xl px-6 md:px-16 py-12 md:py-16 overflow-hidden"
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* pulse leve no fundo */}
          <motion.div
            className="pointer-events-none absolute -z-10 inset-0"
            style={{
              background:
                "radial-gradient(1200px 300px at 20% 10%, rgba(16,185,129,0.18), transparent 60%)",
            }}
            animate={{ opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -z-10 inset-0"
            style={{
              background:
                "radial-gradient(1200px 300px at 80% 90%, rgba(34,197,94,0.16), transparent 60%)",
            }}
            animate={{ opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Heading */}
          <motion.h2
            className="text-center text-3xl md:text-5xl lg:text-6xl font-raleway font-extrabold text-white tracking-tight"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <span data-i18n="cta.title">
              {mounted && t("cta.title")}
            </span>{" "}
            <span 
              className="text-green-400" 
              data-i18n="cta.title.highlight"
            >
              {mounted && t("cta.title.highlight")}
            </span>
            <span data-i18n="cta.title.end">
              {mounted && t("cta.title.end")}
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="mt-4 text-center text-base md:text-xl text-gray-200/90"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            data-i18n="cta.subtitle"
          >
            {mounted && t("cta.subtitle")}
          </motion.p>

          {/* Chips de confiança */}
          <motion.div
            className="mx-auto mt-6 mb-8 flex flex-wrap items-center justify-center gap-2"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            {mounted &&
              Array.isArray(t("cta.chips")) && 
              (t("cta.chips") as unknown as string[]).map((chipText: string) => (
                <span
                  key={chipText}
                  className="text-[12px] rounded-full border border-green-500/25 bg-black/30 backdrop-blur px-3 py-1 text-green-200"
                >
                  {chipText}
                </span>
              ))}
          </motion.div>

          {/* Botões */}
          <motion.div
            className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {/* Primary */}
            <motion.div whileHover={{ scale: mounted ? 1.03 : 1 }} whileTap={{ scale: mounted ? 0.98 : 1 }}>
              <Link
                href="https://dev.tbrl.com.br/account/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-emerald-400/40 bg-emerald-500 px-6 py-4 text-base md:text-lg font-semibold text-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/40 transition-all"
                data-i18n="cta.button.primary"
              >
                {/* ícone chave */}
                <span className="grid h-6 w-6 place-items-center rounded-md bg-black/10">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7 14a5 5 0 1 1 4.9-6H22v3h-2v2h-2v2h-2v2h-2v-3.1A5 5 0 0 1 7 14Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                  </svg>
                </span>
                {mounted && t("cta.button.primary")}
                {/* shine */}
                <span className="relative ml-1 overflow-hidden">
                  <motion.span
                    className="absolute left-0 top-0 h-5 w-12 -skew-x-12 bg-white/30"
                    initial={{ x: -40 }}
                    whileHover={{ x: 60 }}
                    transition={{ duration: 0.6 }}
                  />
                </span>
              </Link>
            </motion.div>

            {/* Secondary - Usando a abordagem window.open que funciona na dobra-5 */}
            <motion.div 
              whileHover={{ scale: mounted ? 1.03 : 1 }} 
              whileTap={{ scale: mounted ? 0.98 : 1 }}
            >
              <button
                onClick={handleOpenForm}
                className="inline-flex items-center gap-3 rounded-xl border-2 border-emerald-400/60 bg-transparent px-6 py-4 text-base md:text-lg font-semibold text-emerald-300 hover:bg-emerald-500/10 transition-all"
                data-i18n="cta.button.secondary"
              >
                {/* ícone calendário */}
                <span className="grid h-6 w-6 place-items-center rounded-md border border-emerald-400/40">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="text-emerald-300">
                    <path
                      fill="currentColor"
                      d="M7 2v2H5a2 2 0 0 0-2 2v2h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7Zm14 8H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10Z"
                    />
                  </svg>
                </span>
                {mounted && t("cta.button.secondary")}
              </button>
            </motion.div>
          </motion.div>

          {/* Borda/halo animado no perímetro do card */}
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-[28px]"
            animate={{ boxShadow: ["0 0 0 0 rgba(16,185,129,0)", "0 0 60px 0 rgba(16,185,129,0.25)", "0 0 0 0 rgba(16,185,129,0)"] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
      
      {/* Componente Fillout para renderizar o formulário (permanece oculto até ser aberto) */}
      <div style={{ display: "none" }}>
        <FilloutStandardEmbed filloutId="dBfgxFD3HKus" />
      </div>
    </section>
  );
};

export default Dobra8;
