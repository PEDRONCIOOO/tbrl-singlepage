"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Dobra2: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { t } = useLanguage();

    useEffect(() => setMounted(true), []);

    // Cards com estrutura de dados simplificada - conteúdo vem das traduções
    const cards = [
        {
            id: 1,
            i18nPrefix: "how.card.1",
            icon: "/icons/onRamp.png",
            gradient: "from-green-500/20 to-emerald-400/10",
        },
        {
            id: 2,
            i18nPrefix: "how.card.2",
            icon: "/icons/offRamp.png",
            gradient: "from-emerald-500/20 to-green-400/10",
        },
        {
            id: 3,
            i18nPrefix: "how.card.3",
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

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-0" id="como-funciona">
            {/* BG base */}
            <div className="absolute inset-0 bg-black" />

            {/* Glow blobs - reduzidos no mobile */}
            <motion.div
                className="pointer-events-none absolute -top-24 -right-24 h-[40vw] md:h-[36vw] w-[40vw] md:w-[36vw] rounded-full bg-green-500/20 blur-[80px] md:blur-[120px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
            />
            <motion.div
                className="pointer-events-none absolute -bottom-24 -left-24 h-[30vw] md:h-[28vw] w-[30vw] md:w-[28vw] rounded-full bg-emerald-400/15 blur-[80px] md:blur-[120px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,black_100%)] bg-black/70" />

            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-10">
                {/* Título - ajustado para mobile */}
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-5xl font-raleway font-extrabold text-white mb-6 sm:mb-8 md:mb-10 tracking-tight"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    data-i18n="how.title"
                >
                    {t("how.title")}{" "}
                    <span className="text-green-400" data-i18n="how.title.highlight">
                        {t("how.title.highlight")}
                    </span>{" "}
                    <span data-i18n="how.title.end">{t("how.title.end")}</span>
                </motion.h2>

                {/* Grid reorganizado - fluxo vertical em mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((c, idx) => (
                        <motion.div
                            key={c.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: idx * 0.12,
                            }}
                            className={`group relative rounded-xl sm:rounded-2xl border border-green-500/15 bg-gradient-to-br ${c.gradient} p-5 sm:p-6 md:p-8 backdrop-blur-xl shadow-[0_0_0_1px_rgba(16,185,129,0.05)] hover:border-green-400/30 transition-colors`}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-xl sm:rounded-2xl"
                                initial={{ boxShadow: "0 0 0 0 rgba(16,185,129,0)" }}
                                whileHover={{
                                    boxShadow: "0 0 60px 0 rgba(16,185,129,0.25)",
                                }}
                                transition={{ type: "tween", duration: 0.35 }}
                            />
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="relative h-12 sm:h-14 w-12 sm:w-14 shrink-0 rounded-lg sm:rounded-xl bg-black/50 border border-green-500/20 grid place-items-center">
                                    <Image
                                        src={c.icon}
                                        alt={mounted ? t(`${c.i18nPrefix}.title`) : ""}
                                        width={24}
                                        height={24}
                                        className="opacity-90 w-6 sm:w-7"
                                    />
                                    <motion.span
                                        className="absolute inset-0 rounded-lg sm:rounded-xl border border-green-500/30"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 0.35 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-green-400/80">
                                        0{c.id}
                                    </p>
                                    <h3 
                                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-white"
                                        data-i18n={`${c.i18nPrefix}.title`}
                                    >
                                        {mounted && t(`${c.i18nPrefix}.title`)}
                                    </h3>
                                </div>
                            </div>
                            <div className="my-4 sm:my-6 h-px w-full bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
                            <div className="space-y-3 sm:space-y-5">
                                <p 
                                    className="text-base sm:text-lg text-gray-200/90"
                                    data-i18n={`${c.i18nPrefix}.subtitle`}
                                >
                                    {mounted && t(`${c.i18nPrefix}.subtitle`)}
                                </p>
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
                                <div className="inline-flex items-center gap-2 rounded-md sm:rounded-lg border border-green-400/30 bg-black/40 px-2.5 sm:px-3 py-1.5 sm:py-2">
                                    <span className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-green-400 animate-pulse" />
                                    <code 
                                        className="font-mono text-xs sm:text-sm text-green-300"
                                        data-i18n={`${c.i18nPrefix}.code`}
                                    >
                                        {mounted && t(`${c.i18nPrefix}.code`)}
                                    </code>
                                </div>
                                {t(`${c.i18nPrefix}.footer`) && (
                                    <p 
                                        className="pt-1 sm:pt-2 text-sm sm:text-base text-gray-300"
                                        data-i18n={`${c.i18nPrefix}.footer`}
                                    >
                                        {mounted && t(`${c.i18nPrefix}.footer`)}
                                    </p>
                                )}
                            </div>
                            <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 sm:h-32 w-24 sm:w-32 rounded-full bg-green-400/10 blur-xl sm:blur-2xl" />
                        </motion.div>
                    ))}
                </div>

                {/* Integração EVM ready embaixo - ajustada para mobile */}
                <motion.aside
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    className="mt-6 sm:mt-8 relative rounded-xl sm:rounded-2xl border border-green-500/15 bg-black/40 backdrop-blur-xl p-5 sm:p-6 md:p-8 max-w-xl mx-auto"
                >
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 sm:mb-6 text-center">
                        <span data-i18n="how.integration">{mounted && t("how.integration")}</span>{" "}
                        <span className="text-green-400" data-i18n="how.integration.highlight">
                            {mounted && t("how.integration.highlight")}
                        </span>
                    </h4>
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4">
                        {evmChains.map((c, i) => (
                            <motion.div
                                key={c.name}
                                className="flex flex-col items-center gap-1 sm:gap-2"
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: 0.1 * i }}
                            >
                                <div className="grid h-10 sm:h-12 w-10 sm:w-12 place-items-center rounded-lg sm:rounded-xl border border-green-400/20 bg-white/5">
                                    <Image
                                        src={c.logo}
                                        alt={c.name}
                                        width={20}
                                        height={20}
                                        className="opacity-90 w-5 sm:w-6 md:w-7"
                                    />
                                </div>
                                <span className="text-gray-200 text-xs sm:text-sm">
                                    {c.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 -bottom-0 h-12 sm:h-16 bg-gradient-to-t from-green-500/10 to-transparent rounded-b-xl sm:rounded-b-2xl" />
                </motion.aside>
            </div>
        </section>
    );
};

export default Dobra2;
