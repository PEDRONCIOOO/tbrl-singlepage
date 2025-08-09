"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const Dobra4: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [tab, setTab] = useState<"REST" | "WS">("REST");
  const [typed, setTyped] = useState("");
  const typingRef = useRef<number | null>(null);
  const { t } = useLanguage();

  // Trechos de código vêm das traduções
  const REST_SNIPPET = useMemo(() => t("api.snippet.rest"), [t]);
  const WS_SNIPPET = useMemo(() => t("api.snippet.ws"), [t]);

  const code = useMemo(() => (tab === "REST" ? REST_SNIPPET : WS_SNIPPET), [tab, REST_SNIPPET, WS_SNIPPET]);

  // Bullets com dados de tradução
  const bullets = useMemo(
    () => [
      {
        titleKey: "api.bullet.1.title",
        descriptionKey: "api.bullet.1.description",
      },
      {
        titleKey: "api.bullet.2.title",
        descriptionKey: "api.bullet.2.description",
      },
      {
        titleKey: "api.bullet.3.title",
        descriptionKey: "api.bullet.3.description",
      },
    ],
    []
  );

  // Chips de tecnologia
  const chips = useMemo(
    () => [
      { key: "api.chip.1" },
      { key: "api.chip.2" },
      { key: "api.chip.3" },
      { key: "api.chip.4" },
    ],
    []
  );

  // Efeito de digitação sempre que muda a aba
  useEffect(() => {
    setIsMounted(true);
    setTyped("");
    if (typingRef.current) cancelAnimationFrame(typingRef.current);

    let i = 0;
    let last = 0;
    const step = (t: number) => {
      if (!last) last = t;
      const delta = t - last;
      if (delta > 12) {
        i += 1;
        setTyped(code.slice(0, i));
        last = t;
      }
      if (i < code.length) typingRef.current = requestAnimationFrame(step);
    };
    typingRef.current = requestAnimationFrame(step);

    return () => {
      if (typingRef.current) cancelAnimationFrame(typingRef.current);
    };
  }, [code]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-16 md:py-0" id="api">
      {/* BG base */}
      <div className="absolute inset-0 bg-black" />
      {/* Glows - ajustados para mobile */}
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
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,black_100%)] bg-black/70" />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-10 mx-auto">
        {/* Subtítulo */}
        <motion.p
          className="text-xs tracking-[0.35em] text-green-300/80 text-center mb-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-i18n="api.badge"
        >
          {isMounted && t("api.badge")}
        </motion.p>

        {/* Título - ajustado para mobile */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-raleway font-extrabold text-center text-white mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span data-i18n="api.title">{isMounted && t("api.title")}</span>{" "}
          <span 
            className="text-green-400" 
            data-i18n="api.title.rest"
          >
            {isMounted && t("api.title.rest")}
          </span>{" "}
          <span data-i18n="api.title.or">{isMounted && t("api.title.or")}</span>{" "}
          <span 
            className="text-green-400"
            data-i18n="api.title.ws"
          >
            {isMounted && t("api.title.ws")}
          </span>
          .
        </motion.h2>

        <motion.p
          className="text-center text-gray-300/95 max-w-3xl mx-auto mb-8 md:mb-12 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-i18n="api.description"
        >
          {isMounted && t("api.description")}
        </motion.p>

        {/* Layout principal - ajustado para fluxo mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* Editor com tabs */}
          <motion.div
            className="relative rounded-xl sm:rounded-2xl border border-green-500/15 bg-black/40 backdrop-blur-xl shadow-[0_0_0_1px_rgba(16,185,129,0.05)]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Topbar estilo janela */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-green-500/10">
              <span className="h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-red-400/70" />
              <span className="h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-yellow-400/70" />
              <span className="h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-green-400/70" />
              <div className="ml-auto flex gap-1.5 sm:gap-2">
                <button
                  onClick={() => setTab("REST")}
                  className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-semibold ${
                    tab === "REST"
                      ? "bg-green-500 text-black"
                      : "text-green-300/80 hover:text-green-300 border border-green-500/20"
                  }`}
                >
                  REST
                </button>
                <button
                  onClick={() => setTab("WS")}
                  className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-semibold ${
                    tab === "WS"
                      ? "bg-green-500 text-black"
                      : "text-green-300/80 hover:text-green-300 border border-green-500/20"
                  }`}
                >
                  WebSocket
                </button>
              </div>
            </div>

            {/* Área de código - redesenhada para mobile */}
            <div className="relative p-3 sm:p-5 md:p-7 overflow-x-auto">
              {/* Linhas laterais - ajustadas para mobile */}
              <div className="absolute top-3 sm:top-5 bottom-3 sm:bottom-5 left-1.5 sm:left-3 w-4 sm:w-8 select-none text-green-400/50 text-[10px] sm:text-[12px] leading-5 sm:leading-7 font-mono">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="text-right pr-1 sm:pr-2 opacity-60">
                    {i + 1}
                  </div>
                ))}
              </div>

              {/* Código com digitação - ajustado para mobile */}
              <pre className="ml-5 sm:ml-8 text-[11px] sm:text-[14px] md:text-[15px] leading-5 sm:leading-7 font-mono text-gray-100 overflow-x-auto">
                <code>
                  {typed.split("\n").map((line, i) => (
                    <div key={i}>
                      {/* sintaxe fake simples */}
                      {line
                        .replace(/(POST|WS)/g, "§kw$1§")
                        .replace(/("[^"]*")/g, "§str$1§")
                        .replace(/(\{|\}|\[|\]|:|,)/g, "§sym$1§")
                        .split("§")
                        .map((tok, j) => {
                          if (tok.startsWith("kw")) return <span key={j} className="text-pink-400">{tok.slice(2)}</span>;
                          if (tok.startsWith("str")) return <span key={j} className="text-green-300">{tok.slice(3)}</span>;
                          if (tok.startsWith("sym")) return <span key={j} className="text-green-400/70">{tok.slice(3)}</span>;
                          return <span key={j}>{tok}</span>;
                        })}
                    </div>
                  ))}
                </code>
              </pre>

              {/* Glow embaixo */}
              <motion.div
                className="pointer-events-none absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 h-6 sm:h-10 w-2/3 rounded-full bg-green-500/20 blur-xl sm:blur-2xl"
                initial={{ opacity: 0 }}
                animate={isMounted ? { opacity: 0.6 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Bullets + CTA - ajustados para mobile */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {bullets.map((bullet, i) => (
              <motion.div
                key={bullet.titleKey}
                className="flex items-start gap-2 sm:gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 * i }}
              >
                <span className="mt-0.5 sm:mt-1 inline-flex h-4 sm:h-5 w-4 sm:w-5 items-center justify-center rounded-sm border border-green-400/40 bg-black/40">
                  <svg width="10" height="10" viewBox="0 0 24 24" className="text-green-400">
                    <path
                      fill="currentColor"
                      d="M20.285 6.709a1 1 0 0 1 .006 1.414l-9 9a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l3.293 3.293 8.293-8.293a1 1 0 0 1 1.408 0z"
                    />
                  </svg>
                </span>
                <div>
                  <p 
                    className="text-base sm:text-lg md:text-xl text-white"
                    data-i18n={bullet.titleKey}
                  >
                    {isMounted && t(bullet.titleKey)}
                  </p>
                  <p 
                    className="text-xs sm:text-sm text-gray-300/90"
                    data-i18n={bullet.descriptionKey}
                  >
                    {isMounted && t(bullet.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA - ajustado para mobile */}
            <motion.div
              className="pt-2 sm:pt-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Link
                href="https://dev.tbrl.com.br/account/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-md border border-green-400/40 text-green-300 hover:text-black bg-transparent hover:bg-green-400 transition-colors font-semibold text-sm sm:text-base"
                data-i18n="api.cta"
              >
                {isMounted && t("api.cta")}
                <svg width="14" height="14" viewBox="0 0 24 24" className="hidden sm:inline">
                  <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
                </svg>
              </Link>
            </motion.div>

            {/* Chips - ajustados para mobile */}
            <motion.div
              className="flex flex-wrap gap-1 sm:gap-2 pt-1 sm:pt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {chips.map((chip, i) => (
                <span
                  key={i}
                  className="text-[9px] sm:text-xs rounded-full border border-green-500/20 bg-black/30 backdrop-blur px-2 sm:px-3 py-0.5 sm:py-1 text-gray-300"
                  data-i18n={chip.key}
                >
                  {isMounted && t(chip.key)}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dobra4;
