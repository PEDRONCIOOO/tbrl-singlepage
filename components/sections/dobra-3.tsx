"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ---- Ajuste os valores aqui (ou passe por props depois) ----
const BANK_BALANCE = 462_664.51; // Saldo no Banco (BRL)
const TBRL_SUPPLY = 292_317; // Total em tBRL (BRL-equivalente)

const Dobra3: React.FC = () => {
  // contador suave dos valores (client-only)
  const [mounted, setMounted] = useState(false);
  const [bankDisplay, setBankDisplay] = useState(0);
  const [tbrlDisplay, setTbrlDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    let start: number | null = null;
    const duration = 900; // ms

    const animate = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      setBankDisplay(BANK_BALANCE * p);
      setTbrlDisplay(TBRL_SUPPLY * p);
      if (p < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // alturas relativas das barras
  const maxVal = useMemo(() => Math.max(BANK_BALANCE, TBRL_SUPPLY) || 1, []);
  const bankPercent = (BANK_BALANCE / maxVal) * 100;
  const tbrlPercent = (TBRL_SUPPLY / maxVal) * 100;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG sólido */}
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
        {/* Título */}
        <motion.h2
          className="text-3xl md:text-5xl font-raleway font-extrabold text-white mb-10 tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Transparência não é promessa, é{" "}
          <span className="text-green-400">código aberto</span>.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Lado esquerdo: bullets */}
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {[
              "Conta segregada e auditada com registro on-chain.",
              "Oráculo publica saldo BRL → contrato Proof-of-Reserves.",
              "Qualquer pessoa pode verificar `totalSupply()` × saldo bancário via API.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                {/* ícone */}
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm border border-green-400/40 bg-black/40">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    className="text-green-400"
                  >
                    <path
                      fill="currentColor"
                      d="M20.285 6.709a1 1 0 0 1 .006 1.414l-9 9a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l3.293 3.293 8.293-8.293a1 1 0 0 1 1.408 0z"
                    />
                  </svg>
                </span>
                <p className="text-lg md:text-xl text-gray-200/95 leading-relaxed">
                  <span className="bg-black/30 rounded px-1.5 py-0.5 border border-green-500/10">
                    {text}
                  </span>
                </p>
              </div>
            ))}

            {/* CTA secundário */}
            <motion.div
              className="mt-6 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/api/docs"
                className="rounded-md border-2 border-green-500 text-green-400 px-5 py-3 font-semibold bg-black/30 backdrop-blur-md hover:bg-green-500/10 transition-colors"
              >
                Verificar via API
              </Link>
              <Link
                href="/proof-of-reserves"
                className="rounded-md border border-green-400/50 bg-green-500 text-black px-5 py-3 font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-400/40 transition-all"
              >
                Proof-of-Reserves
              </Link>
            </motion.div>
          </motion.div>

          {/* Lado direito: gráfico de barras em glass (igual à referência) */}
          <motion.div
            className="relative rounded-2xl border border-green-500/15 bg-black/40 backdrop-blur-xl p-6 md:p-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-white font-semibold text-lg">
                Prova de lastro
              </h3>
              <span className="text-xs text-gray-400">
                Atualiza em tempo real*
              </span>
            </div>

            {/* Área do gráfico */}
            <div className="relative h-72 w-full rounded-xl border border-green-500/10 bg-gradient-to-b from-white/5 to-transparent overflow-hidden">
              {/* linhas guia */}
              <div
                className="absolute inset-0 opacity-[0.12] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(16,185,129,0.24) 1px, transparent 1px)",
                  backgroundSize: "100% 36px",
                }}
              />
              {/* baseline */}
              <div className="absolute bottom-10 left-0 right-0 h-[2px] bg-white/10" />

              <div className="absolute bottom-10 top-12 inset-x-0 flex items-end justify-evenly gap-10 px-6">
                {/* Barra 1 - Saldo no Banco */}
                <motion.div
                  className="relative w-28 sm:w-32 rounded-t-xl"
                  initial={{ height: 0, opacity: 0.8 }}
                  whileInView={{
                    height: `${
                      (BANK_BALANCE / Math.max(BANK_BALANCE, TBRL_SUPPLY)) * 100
                    }%`,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  style={{
                    background:
                      "linear-gradient(to top, rgba(22,163,74,1) 0%, rgba(52,211,153,0.95) 100%)",
                    boxShadow: "0 10px 30px rgba(16,185,129,0.15) inset",
                  }}
                >
                  {/* brilho vertical */}
                  <div className="absolute inset-0 rounded-t-xl bg-gradient-to-r from-white/15 via-transparent to-transparent opacity-30" />
                  {/* valor no topo */}
                  <motion.span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-white"
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.45 }}
                  >
                    R${" "}
                    {BANK_BALANCE.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </motion.span>
                </motion.div>

                {/* Barra 2 - Total em tBRL */}
                <motion.div
                  className="relative w-24 sm:w-28 rounded-t-xl"
                  initial={{ height: 0, opacity: 0.8 }}
                  whileInView={{
                    height: `${
                      (TBRL_SUPPLY / Math.max(BANK_BALANCE, TBRL_SUPPLY)) * 100
                    }%`,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                  style={{
                    background:
                      "linear-gradient(to top, rgba(21,128,61,1) 0%, rgba(16,185,129,0.95) 100%)",
                    boxShadow: "0 10px 30px rgba(16,185,129,0.15) inset",
                  }}
                >
                  <div className="absolute inset-0 rounded-t-xl bg-gradient-to-r from-white/15 via-transparent to-transparent opacity-30" />
                  <motion.span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-white whitespace-nowrap"
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.45 }}
                  >
                    R${" "}
                    {TBRL_SUPPLY.toLocaleString("pt-BR", {
                      maximumFractionDigits: 0,
                    })}
                  </motion.span>
                </motion.div>
              </div>

              {/* rótulos eixo X (iguais à referência) */}
              <div className="absolute inset-x-0 bottom-2 flex justify-evenly px-6 text-sm text-gray-300/90">
                <span>Saldo no Banco</span>
                <span>Total em tBRL</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              * Valores ilustrativos. Conecte seu oráculo/endpoint para dados ao
              vivo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dobra3;
