"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Partículas com posições fixas para evitar mismatch de hidratação
const particlePositions = [
  { left: "10%", top: "20%" },
  { left: "20%", top: "40%" },
  { left: "30%", top: "10%" },
  { left: "40%", top: "60%" },
  { left: "50%", top: "30%" },
  { left: "60%", top: "70%" },
  { left: "70%", top: "20%" },
  { left: "80%", top: "50%" },
  { left: "90%", top: "40%" },
  { left: "15%", top: "80%" },
];

const Dobra1 = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Parallax seguro (só roda no cliente)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glowX = useTransform(mx, [0, 1], [-15, 15]);
  const glowY = useTransform(my, [0, 1], [-10, 10]);
  const orbX = useTransform(mx, [0, 1], [10, -10]);
  const orbY = useTransform(my, [0, 1], [6, -6]);

  useEffect(() => setIsMounted(true), []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={(e) => {
        // normaliza posição do mouse para [0..1]
        const { left, top, width, height } = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set((e.clientX - left) / width);
        my.set((e.clientY - top) / height);
      }}
    >
      {/* Background com imagem, gradiente e camada de ruído */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg-edited.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        {/* Grid tech sutil */}
        <div className="absolute inset-0 opacity-[0.07] mix-blend-soft-light pointer-events-none"
             style={{
               backgroundImage:
                 "linear-gradient(rgba(16,185,129,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.12) 1px, transparent 1px)",
               backgroundSize: "36px 36px, 36px 36px",
             }}
        />
        {/* Ruído */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
             style={{
               backgroundImage:
                 "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.4'/></svg>\")",
               backgroundSize: "140px 140px",
             }}
        />
      </div>

      {/* Glows com parallax */}
      <motion.div
        className="absolute top-[-5%] right-[-8%] w-[40vw] h-[40vh] bg-green-500/25 rounded-full blur-[110px]"
        style={{ x: glowX, y: glowY }}
        initial={{ opacity: 0 }}
        animate={isMounted ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute bottom-[-8%] left-[-10%] w-[34vw] h-[34vh] bg-emerald-400/20 rounded-full blur-[130px]"
        style={{ x: orbX, y: orbY }}
        initial={{ opacity: 0 }}
        animate={isMounted ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.15 }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none z-[1]" />

      {/* Conteúdo */}
      <div className="container z-10 px-6 md:px-12 relative flex items-center min-h-screen lg:ml-42 w-fit">
        <div className="max-w-4xl">
          {/* Chip de destaque com glass */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-black/40 backdrop-blur-md px-4 py-2"
            initial={{ opacity: 0, y: 16 }}
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6 }}
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-200">
              +20MM transações on-chain no 1º mês
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-raleway font-extrabold text-white mb-6 leading-tight"
            initial={{ opacity: 0, x: -24 }}
            animate={isMounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Entre
            </span>{" "}
            e{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              saia
            </span>{" "}
            do Brasil em segundos
          </motion.h1>

          {/* Descrição */}
          <motion.p
            className="text-lg md:text-2xl text-gray-100/95 mb-10 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            O tBRL é a stablecoin{" "}
            <span className="text-green-400 font-semibold">
              100% lastreada em real
            </span>{" "}
            que conecta o Pix à Web3, liberando liquidez instantânea para
            exchanges, fintechs, bancos digitais e corporações globais.
          </motion.p>

          {/* Botões */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 18 }}
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <motion.button
              className="relative px-8 py-4 rounded-md text-lg font-bold text-black bg-green-500 border border-green-400/60 shadow-lg shadow-green-500/20 overflow-hidden"
              whileHover={
                isMounted
                  ? {
                      scale: 1.04,
                      boxShadow: "0 0 24px rgba(74,222,128,0.45)",
                    }
                  : {}
              }
              whileTap={isMounted ? { scale: 0.98 } : {}}
            >
              <span className="relative z-10">
                <Link href="https://dev.tbrl.com.br/account/login" target="_blank" rel="noopener noreferrer">Começar Integração</Link>
              </span>
              {/* brilho varrendo */}
              <motion.span
                className="absolute inset-y-0 left-[-20%] w-[40%] skew-x-[-20deg] bg-white/20"
                initial={{ x: "-120%" }}
                whileHover={{ x: "160%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </motion.button>

            <motion.button
              className="px-8 py-4 rounded-md text-lg font-bold text-green-400 border-2 border-green-500 bg-black/30 backdrop-blur-md hover:bg-green-500/10 transition-colors"
              whileHover={
                isMounted
                  ? { scale: 1.04, boxShadow: "0 0 18px rgba(74,222,128,0.3)" }
                  : {}
              }
              whileTap={isMounted ? { scale: 0.98 } : {}}
            >
              <Link href="https://axia-tokeniza-us-east-2-s3-bucket.s3.us-east-2.amazonaws.com/tBRL+Whitepaper+PT.pdf" target="_blank" rel="noopener noreferrer">
                Whitepaper (PDF)
              </Link>
            </motion.button>
          </motion.div>

          {/* Badges de confiança (opcional) */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-300/90"
            initial={{ opacity: 0, y: 10 }}
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="rounded-full border border-green-400/25 bg-black/30 px-3 py-1 backdrop-blur-md">
              Liquidez instantânea
            </span>
            <span className="rounded-full border border-green-400/25 bg-black/30 px-3 py-1 backdrop-blur-md">
              Auditoria & Prova de reservas
            </span>
            <span className="rounded-full border border-green-400/25 bg-black/30 px-3 py-1 backdrop-blur-md">
              Integração Pix ↔ Web3
            </span>
          </motion.div>
        </div>
      </div>

      {/* Orbes decorativos com glass */}
      <motion.div
        className="absolute right-10 top-1/3 w-32 h-32 rounded-full bg-green-500/10 backdrop-blur-xl border border-green-500/20"
        style={{ x: glowX, y: glowY }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isMounted ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      />
      <motion.div
        className="absolute left-20 bottom-1/3 w-48 h-48 rounded-full bg-green-500/5 backdrop-blur-md border border-green-500/10"
        style={{ x: orbX, y: orbY }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isMounted ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />

      {/* Partículas (posições fixas) */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-green-400"
            style={{ left: position.left, top: position.top }}
            initial={{ opacity: 0 }}
            animate={
              isMounted
                ? { opacity: [0, 0.85, 0], y: [0, -24, 0] }
                : { opacity: 0 }
            }
            transition={{
              duration: 2.6 + (i % 5) * 0.3,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.18,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* “Código” decorativo */}
      <motion.div
        className="absolute bottom-[30%] right-[10%] hidden md:block"
        initial={{ opacity: 0, y: 8 }}
        animate={isMounted ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ delay: 1.6, duration: 0.9 }}
      >
        <pre className="text-green-500 text-xs font-mono opacity-40">
{`function transfer() {
  const pix = connect();
  const web3 = init();
  return pix.bridge(web3);
}`}
        </pre>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={isMounted ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0 }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      >
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-green-400 rounded-full mt-2"
            animate={isMounted ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.4 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

// estilos xD
const styles = `
  .bg-radial-gradient {
    background: radial-gradient(circle, transparent 42%, rgba(0, 0, 0, 0.85) 100%);
  }
`;

export default Dobra1;
