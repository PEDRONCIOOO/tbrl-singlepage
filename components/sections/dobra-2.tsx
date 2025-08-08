"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "On-Ramp",
    subtitle: "Pix-IN",
    code: "mint()",
    footer: "tBRL creditado",
    icon: "/icons/onRamp.png",
    gradient: "from-green-500/20 to-emerald-400/10",
  },
  {
    id: 2,
    title: "Off-Ramp",
    subtitle: "Pix-OUT",
    code: "burn()",
    footer: "BRL na conta",
    icon: "/icons/offRamp.png",
    gradient: "from-emerald-500/20 to-green-400/10",
  },
  {
    id: 3,
    title: "Cross-Border",
    subtitle: "Direto Pix",
    code: "USDT com spread a partir de +0,6%",
    footer: "",
    icon: "/icons/crossBorder.png",
    gradient: "from-green-400/20 to-teal-400/10",
  },
];

const evmChains = [
  { name: "Moonbeam", logo: "/chains/moonbeam.svg" },
  { name: "Polygon", logo: "/chains/polygon.svg" },
  { name: "Ethereum", logo: "/chains/ethereum.svg" },
  { name: "Tron", logo: "/chains/tron.svg" },
];

const Dobra2: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG base */}
      <div className="absolute inset-0 bg-black" />

      {/* Glow blobs */}
      <motion.div
        className="pointer-events-none absolute -top-24 -right-24 h-[36vw] w-[36vw] rounded-full bg-green-500/20 blur-[120px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[28vw] w-[28vw] rounded-full bg-emerald-400/15 blur-[120px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,black_100%)] bg-black/70" />

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-10">
        {/* Título */}
        <motion.h2
          className="text-3xl md:text-5xl font-raleway font-extrabold text-white mb-10 tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Como o <span className="text-green-400">tBRL</span> funciona
        </motion.h2>

        {/* Grid reorganizado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.12 }}
              className={`group relative rounded-2xl border border-green-500/15 bg-gradient-to-br ${c.gradient} p-6 md:p-8 backdrop-blur-xl shadow-[0_0_0_1px_rgba(16,185,129,0.05)] hover:border-green-400/30 transition-colors`}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ boxShadow: "0 0 0 0 rgba(16,185,129,0)" }}
                whileHover={{
                  boxShadow: "0 0 60px 0 rgba(16,185,129,0.25)",
                }}
                transition={{ type: "tween", duration: 0.35 }}
              />
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 rounded-xl bg-black/50 border border-green-500/20 grid place-items-center">
                  <Image
                    src={c.icon}
                    alt={c.title}
                    width={28}
                    height={28}
                    className="opacity-90"
                  />
                  <motion.span
                    className="absolute inset-0 rounded-xl border border-green-500/30"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.35 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
                <div>
                  <p className="text-sm text-green-400/80">0{c.id}</p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {c.title}
                  </h3>
                </div>
              </div>
              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
              <div className="space-y-5">
                <p className="text-lg text-gray-200/90">{c.subtitle}</p>
                <motion.div
                  aria-hidden
                  className="text-green-400/70"
                  initial={{ y: -4, opacity: 0 }}
                  whileInView={{
                    y: [0, 6, 0],
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ↓
                </motion.div>
                <div className="inline-flex items-center gap-2 rounded-lg border border-green-400/30 bg-black/40 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <code className="font-mono text-green-300">{c.code}</code>
                </div>
                {c.footer && (
                  <p className="pt-2 text-base text-gray-300">{c.footer}</p>
                )}
              </div>
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-green-400/10 blur-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Integração EVM ready embaixo */}
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-8 relative rounded-2xl border border-green-500/15 bg-black/40 backdrop-blur-xl p-6 md:p-8 max-w-xl mx-auto"
        >
          <h4 className="text-lg md:text-xl font-semibold text-white mb-6 text-center">
            Integração <span className="text-green-400">EVM ready</span>
          </h4>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {evmChains.map((c, i) => (
              <motion.div
                key={c.name}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 * i }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-green-400/20 bg-white/5">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={28}
                    height={28}
                    className="opacity-90"
                  />
                </div>
                <span className="text-gray-200 text-sm">{c.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 -bottom-0 h-16 bg-gradient-to-t from-green-500/10 to-transparent rounded-b-2xl" />
        </motion.aside>
      </div>
    </section>
  );
};

export default Dobra2;
