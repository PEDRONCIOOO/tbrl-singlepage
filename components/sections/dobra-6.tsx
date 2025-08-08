"use client";

import React from "react";
import { motion } from "framer-motion";

const cases = [
  { title: "Exchanges Globais", desc: "On-ramp Pix sem licença local, liquidez BRL ↔ USDT em minutos." },
  { title: "Gestores de RWA", desc: "Distribua rendimentos de precatórios, imóveis ou agro em tBRL." },
  { title: "Fintechs de Pagamento", desc: "Boletos, TEDs e Pix dentro de uma camada programável." },
  { title: "Empresas de Remessa", desc: "Reduza custos cross-border com stablecoin nativa do Brasil." },
];

const Dobra6: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG base */}
      <div className="absolute inset-0 bg-black" />
      {/* Glows */}
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

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-10 mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-raleway font-extrabold text-white mb-10 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-green-400">Casos</span> de Uso
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          {/* Lado esquerdo: grafo animado */}
          <motion.div
            className="relative rounded-3xl border border-green-500/15 bg-black/40 backdrop-blur-xl p-6 md:p-8 min-h-[420px] overflow-hidden"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* painel/slots à esquerda */}
            <div className="absolute left-6 top-10 flex flex-col gap-3 opacity-60">
              <span className="h-2 w-16 rounded bg-white/5" />
              <span className="h-2 w-14 rounded bg-white/5" />
              <span className="h-2 w-12 rounded bg-white/5" />
            </div>

            {/* ===== Conexões (atrás da moeda) ===== */}
            {/* Linha → Celular (direita / topo) */}
            <motion.span
              className="absolute bg-emerald-400/40 z-0"
              style={{ left: "56%", top: "40%", width: "16%", height: 2 }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            {/* Linha → Banco (direita / meio) */}
            <motion.span
              className="absolute bg-emerald-400/40 z-0"
              style={{ left: "58%", top: "58%", width: "14%", height: 2 }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            />
            {/* Linha → Remessas (direita / baixo) */}
            <motion.span
              className="absolute bg-emerald-400/40 z-0"
              style={{ left: "52%", top: "66%", width: "10%", height: 2, rotate: 35 }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            {/* NOVA Linha → World (esquerda / baixo) */}
            <motion.span
              className="absolute bg-emerald-400/40 z-0"
              style={{ left: "35%", top: "75%", width: "20%", height: 2, rotate: -40 }}
              initial={{ scaleX: 0, originX: 1 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            />

            {/* ===== Nó central (moeda) ===== */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-44 w-44 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-400 shadow-[inset_0_0_40px_rgba(255,255,255,0.12)]">
                <div className="absolute inset-3 rounded-full border-2 border-white/15" />
              </div>
            </motion.div>

            {/* ===== Nós externos (na frente das linhas) ===== */}
            {/* Celular */}
            <motion.div
              className="absolute grid place-items-center rounded-full border border-emerald-400/30 z-10"
              style={{ left: "73%", top: "33%", width: 86, height: 86 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35 }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" className="text-white/90">
                <path fill="currentColor" d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 3h10v14H7V5Zm5 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
              </svg>
            </motion.div>

            {/* Banco */}
            <motion.div
              className="absolute grid place-items-center rounded-full border border-emerald-400/30 z-10"
              style={{ left: "72%", top: "52%", width: 86, height: 86 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.4 }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" className="text-white/90">
                <path fill="currentColor" d="M12 3 3 7v2h18V7L12 3Zm-8 7v8h2v-8H4Zm4 0v8h2v-8H8Zm4 0v8h2v-8h-2Zm4 0v8h2v-8h-2Zm-11 10h14v2H5v-2Z"/>
              </svg>
            </motion.div>

            {/* Remessas (duas setas) */}
            <motion.div
              className="absolute grid place-items-center rounded-full border border-emerald-400/30 z-10"
              style={{ left: "57%", top: "72%", width: 96, height: 96 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.45 }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" className="text-green-400">
                <path fill="currentColor" d="M10 6h8l-3-3 1.4-1.4L22.8 6l-6.4 4.4L15 9l3-3h-8V6Zm4 12H6l3 3-1.4 1.4L1.2 18l6.4-4.4L9 15l-3 3h8v0Z"/>
              </svg>
            </motion.div>

            {/* World / Globo */}
            <motion.div
              className="absolute grid place-items-center rounded-full border border-emerald-400/30 z-10"
              style={{ left: "22%", top: "72%", width: 96, height: 96 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.5 }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-emerald-300">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
                <path d="M12 3c3 3.6 3 13.4 0 18" stroke="currentColor" strokeWidth="2" />
                <path d="M12 3c-3 3.6-3 13.4 0 18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </motion.div>

            {/* ondas discretas no fundo */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "radial-gradient(800px 200px at 60% 60%, rgba(16,185,129,0.5), transparent 60%)" }}
              animate={{ opacity: [0.06, 0.12, 0.06] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Lado direito: cards de casos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cases.map((c, i) => (
              <motion.div
                key={c.title}
                className="relative rounded-2xl border border-green-500/15 bg-black/40 backdrop-blur-xl px-6 py-6 overflow-hidden group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 * i }}
                whileHover={{ y: -2 }}
              >
                <motion.span
                  className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-green-400 to-emerald-500"
                  initial={{ scaleY: 0, originY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="pointer-events-none absolute -z-10 inset-0 opacity-0 group-hover:opacity-100"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ background: "radial-gradient(600px 140px at 30% 0%, rgba(16,185,129,0.2), transparent 60%)" }}
                />
                <h3 className="text-white text-xl font-semibold mb-1">{c.title}</h3>
                <p className="text-gray-300/95 text-sm leading-relaxed">{c.desc}</p>
                <motion.span
                  className="absolute right-4 bottom-4 h-6 w-6 rounded-full border border-green-400/30 grid place-items-center text-green-300"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  animate={{ y: [0, -2, 0] }}
                >
                  ↗
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dobra6;
