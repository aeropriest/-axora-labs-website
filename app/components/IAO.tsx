"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  Rocket,
  Clock,
  Coins,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Share2,
} from "lucide-react";
import SocialIcons from "./SocialIcons";

const tokenomics = [
  { label: "Token Symbol", value: "$AXORA" },
  { label: "Platform", value: "Virtuals Protocol" },
  { label: "Type", value: "AI Agent Token" },
  { label: "Utility", value: "Licensing & Governance" },
];

const marketData = [
  { label: "Conversational AI Market", value: "$49.9B", year: "by 2030" },
  { label: "EdTech Market", value: "$404B", year: "by 2025" },
  { label: "Smart Toys Market", value: "$42.8B", year: "by 2028" },
  { label: "Companion Robotics", value: "$34B", year: "by 2026" },
];

export default function IAO() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Countdown timer to May 18, 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const iaoDate = new Date("2026-05-18T00:00:00Z").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = iaoDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const shareText = encodeURIComponent(
    "🚀 $AXORA - Patented AI technology, launching IAO on May 18! Join us on Virtuals Protocol. @axoralabsai #AXORA #VirtualsProtocol #AIAgent"
  );

  return (
    <section id="iao" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00F5FF]/5 via-transparent to-[#00F5FF]/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F5FF]/10 border border-[#00F5FF]/20 mb-6">
            <Rocket className="w-4 h-4 text-[#00F5FF]" />
            <span className="text-sm text-[#00F5FF]">
              Initial Agent Offering
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">$AXORA IAO Launch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Patented, context-aware conversational AI tokenized on Virtuals Protocol.
            Launching May 18, 2026.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl p-8 mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-[#00F5FF]" />
            <span className="text-gray-400">Launch Countdown: May 18, 2026</span>
          </div>
          <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-[#00F5FF] mb-1">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA to Virtuals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 mb-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Participate on Virtuals Protocol
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join the IAO directly on Virtuals Protocol. No whitelist required — 
            fair and open access for all participants.
          </p>
          <Link
            href="https://app.virtuals.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-[#0A1428] bg-[#00F5FF] rounded-full hover:bg-[#00F5FF]/90 transition-all duration-300 glow-effect"
          >
            Launch on Virtuals
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Token Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Coins className="w-6 h-6 text-[#00F5FF]" />
            <h3 className="text-xl font-bold text-white">Token Details</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tokenomics.map((item) => (
              <div key={item.label} className="text-center p-4 rounded-xl bg-white/5">
                <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                <p className="text-white font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-[#00F5FF]/10 border border-[#00F5FF]/20">
            <p className="text-sm text-[#00F5FF] font-medium mb-2">
              Token Utility
            </p>
            <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Access to AI agent licensing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Governance participation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Revenue sharing from deployments
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Priority access to new features
              </li>
            </div>
          </div>
        </motion.div>

        {/* Market Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-2xl p-8 mb-12"
        >
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Total Addressable Market
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketData.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#00F5FF] mb-1">
                  {item.value}
                </p>
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="text-xs text-gray-500">{item.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Share & Spread the Word */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Share2 className="w-5 h-5 text-[#00F5FF]" />
            <span className="text-white font-medium">
              Spread the Word — Help Us Go Viral!
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            Share $AXORA with your network. Every share helps build our
            community and drives the IAO success.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <Link
              href={`https://twitter.com/intent/tweet?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Share on X
            </Link>
            <Link
              href={`https://t.me/share/url?url=https://axoralabs.ai&text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Share on Telegram
            </Link>
          </div>
          <SocialIcons size="md" />
        </motion.div>
      </div>
    </section>
  );
}
