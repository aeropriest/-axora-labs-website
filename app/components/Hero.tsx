"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F5FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00F5FF]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#00F5FF]/3 to-transparent rounded-full" />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00F5FF 1px, transparent 1px),
              linear-gradient(to bottom, #00F5FF 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <Image
              src="/logo.png"
              alt="Axora Labs"
              width={120}
              height={120}
              className="mx-auto float-animation"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">Axora Labs</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4"
          >
            Context-Aware Conversational AI Agents
          </motion.p>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg text-[#00F5FF] font-medium mb-10"
          >
            Now Tokenized on Virtuals Protocol
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="#iao"
              className="group flex items-center gap-2 px-8 py-4 text-lg font-semibold text-[#0A1428] bg-[#00F5FF] rounded-full hover:shadow-lg hover:shadow-[#00F5FF]/30 transition-all duration-300 glow-effect"
            >
              Participate in the IAO
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#agent"
              className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-full hover:border-[#00F5FF]/50 hover:bg-white/5 transition-all duration-300"
            >
              Learn About the Agent
            </Link>
          </motion.div>

          {/* Social Follow CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <p className="text-sm text-gray-400 mb-4">
              Follow @axoralabsai on all platforms
            </p>
            <SocialIcons size="lg" />
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
          >
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-5 h-5 text-[#00F5FF]" />
              <span>Patented AI (HK30101316)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Zap className="w-5 h-5 text-[#00F5FF]" />
              <span>Virtuals Protocol IAO</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Globe className="w-5 h-5 text-[#00F5FF]" />
              <span>Global Patent Portfolio</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#00F5FF] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
