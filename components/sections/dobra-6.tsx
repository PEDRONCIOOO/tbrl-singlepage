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
          {/* Lado esquerdo: Showpiece (moeda + badges soltos, sem conexões) */}
          <motion.div
            className="relative rounded-3xl border border-green-500/15 bg-black/40 backdrop-blur-xl p-6 md:p-8 min-h-[480px] overflow-hidden"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* heading chip */}
            <motion.span
              className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-black/50 backdrop-blur px-3 py-1 text-xs text-green-300"
              initial={{ opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              ● tBRL Core
            </motion.span>

            {/* moeda central */}
            <motion.div
              className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-44 w-44 rounded-full overflow-hidden">
                {/* conic gradient girando */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 210deg, rgba(16,185,129,.28), rgba(6,95,70,.6) 40%, rgba(20,184,166,.28) 70%, rgba(16,185,129,.28))",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />
                {/* disco interno */}
                <div className="absolute inset-5 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-400 shadow-[inset_0_0_40px_rgba(255,255,255,0.16)]" />
                {/* anel pulsante */}
                <motion.div
                  className="absolute inset-2 rounded-full border-2 border-emerald-300/20"
                  animate={{ boxShadow: ["0 0 0 0 rgba(16,185,129,0.0)","0 0 45px 0 rgba(16,185,129,0.35)","0 0 0 0 rgba(16,185,129,0.0)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* brilho */}
                <div className="absolute -top-8 -left-10 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
              </div>
            </motion.div>

            {/* badges flutuando (sem conexões) */}
            {/* Celular */}
            <motion.div
              className="absolute grid place-items-center rounded-2xl border border-emerald-400/25 bg-black/40 backdrop-blur-md px-4 py-3"
              style={{ left: "70%", top: "18%" }}
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              animate={{ y: [0, -6, 0] }}
              // loop suave
              // @ts-ignore
              transition2={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/30 bg-white/5">
                  <svg width="22" height="22" viewBox="0 0 24 24" className="text-white/90">
                    <path fill="currentColor" d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 3h10v14H7V5Zm5 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
                  </svg>
                </span>
                <div className="text-xs">
                  <p className="text-white/90 font-semibold leading-tight">Apps & Wallets</p>
                  <p className="text-emerald-300/90">SDK Mobile</p>
                </div>
              </div>
            </motion.div>

            {/* Banco */}
            <motion.div
              className="absolute grid place-items-center rounded-2xl border border-emerald-400/25 bg-black/40 backdrop-blur-md px-4 py-3"
              style={{ left: "72%", top: "50%" }}
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              animate={{ x: [0, 4, 0] }}
              // @ts-ignore
              transition2={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/30 bg-white/5">
                  <svg width="22" height="22" viewBox="0 0 24 24" className="text-white/90">
                    <path fill="currentColor" d="M12 3 3 7v2h18V7L12 3Zm-8 7v8h2v-8H4Zm4 0v8h2v-8H8Zm4 0v8h2v-8h-2Zm4 0v8h2v-8h-2Zm-11 10h14v2H5v-2Z"/>
                  </svg>
                </span>
                <div className="text-xs">
                  <p className="text-white/90 font-semibold leading-tight">Banking</p>
                  <p className="text-emerald-300/90">Pix & Boleto</p>
                </div>
              </div>
            </motion.div>

            {/* Remessas */}
            <motion.div
              className="absolute grid place-items-center rounded-2xl border border-emerald-400/25 bg-black/40 backdrop-blur-md px-4 py-3"
              style={{ left: "58%", top: "76%" }}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              animate={{ y: [0, -5, 0] }}
              // @ts-ignore
              transition2={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/30 bg-white/5">
                  <svg width="22" height="22" viewBox="0 0 24 24" className="text-green-400">
                    <path fill="currentColor" d="M10 6h8l-3-3 1.4-1.4L22.8 6l-6.4 4.4L15 9l3-3h-8V6Zm4 12H6l3 3-1.4 1.4L1.2 18l6.4-4.4L9 15l-3 3h8v0Z"/>
                  </svg>
                </span>
                <div className="text-xs">
                  <p className="text-white/90 font-semibold leading-tight">Remessas</p>
                  <p className="text-emerald-300/90">Spread baixo</p>
                </div>
              </div>
            </motion.div>

            {/* Mundo */}
            <motion.div
              className="absolute grid place-items-center rounded-2xl border border-emerald-400/25 bg-black/40 backdrop-blur-md px-4 py-3"
              style={{ left: "16%", top: "76%" }}
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              animate={{ x: [0, -4, 0] }}
              // @ts-ignore
              transition2={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/30 bg-white/5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-300">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 3c3 3.6 3 13.4 0 18" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 3c-3 3.6-3 13.4 0 18" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <div className="text-xs">
                  <p className="text-white/90 font-semibold leading-tight">Global</p>
                  <p className="text-emerald-300/90">EVM ready</p>
                </div>
              </div>
            </motion.div>

            {/* chips rápidos (em baixo da moeda) */}
            <motion.div
              className="absolute left-1/2 top-[62%] -translate-x-1/2 flex flex-wrap items-center justify-center gap-2"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
            >
              {["KYC/KYB", "Webhooks", "SLA", "SDK TS/Python"].map((t, i) => (
                <span
                  key={t}
                  className="text-[11px] rounded-full border border-green-500/25 bg-black/30 backdrop-blur px-3 py-1 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* ticker leve no rodapé */}
            <motion.div
              className="absolute inset-x-6 bottom-5 h-9 rounded-lg border border-green-500/10 bg-white/5 overflow-hidden"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <motion.div
                className="absolute whitespace-nowrap text-xs text-emerald-200/90 top-1/2 -translate-y-1/2"
                animate={{ x: ["0%", "-60%"] }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              >
                &nbsp;&nbsp;• Liquidez instantânea • Custódia segregada • Auditoria on-chain • Integração REST/WS •
                Proof-of-Reserves •
              </motion.div>
            </motion.div>
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
