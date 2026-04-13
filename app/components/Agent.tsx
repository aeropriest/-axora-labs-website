"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Zap,
  Lock,
  Globe,
  MessageCircle,
  Bot,
} from "lucide-react";

const capabilities = [
  {
    icon: MessageCircle,
    title: "Natural Conversations",
    description: "Human-like dialogue with emotional intelligence",
  },
  {
    icon: Sparkles,
    title: "Adaptive Learning",
    description: "Learns and evolves from every interaction",
  },
  {
    icon: Lock,
    title: "On-Chain Licensing",
    description: "Transparent, decentralized IP management",
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "Deploy anywhere: toys, robots, devices",
  },
];

const useCases = [
  {
    title: "Educational Toys",
    items: ["Interactive learning companions", "Language tutors for kids", "STEM education robots"],
  },
  {
    title: "Companion Robots",
    items: ["Emotionally responsive AI pets", "Elderly companionship", "Mental health support"],
  },
  {
    title: "Smart Devices",
    items: ["Context-aware assistants", "Personalized interactions", "Multi-device ecosystems"],
  },
  {
    title: "Enterprise",
    items: ["Customer service bots", "Training simulators", "Accessibility tools"],
  },
];

export default function Agent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agent" className="py-24 md:py-32 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00F5FF]/5 to-transparent" />

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
            <Bot className="w-4 h-4 text-[#00F5FF]" />
            <span className="text-sm text-[#00F5FF]">$AXORA Agent</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">The Axora Agent</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A tokenized AI agent powered by patented conversational technology,
            ready to transform how we interact with machines.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Agent Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#00F5FF]/20 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-4 rounded-full border border-[#00F5FF]/10 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
              
              {/* Center Core */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-[#00F5FF]/20 to-[#00F5FF]/5 flex items-center justify-center glow-effect">
                <div className="text-center">
                  <Bot className="w-16 h-16 text-[#00F5FF] mx-auto mb-4" />
                  <p className="text-2xl font-bold text-white">$AXORA</p>
                  <p className="text-sm text-gray-400">Tokenized Agent</p>
                </div>
              </div>

              {/* Floating Nodes */}
              {capabilities.map((cap, index) => {
                const angle = (index * 90 - 45) * (Math.PI / 180);
                const radius = 45;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute w-16 h-16 -ml-8 -mt-8 glass-card rounded-xl flex items-center justify-center float-animation"
                    style={{ 
                      left: `${x}%`, 
                      top: `${y}%`,
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <cap.icon className="w-6 h-6 text-[#00F5FF]" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Key Capabilities
            </h3>
            <div className="space-y-4">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-5 h-5 text-[#00F5FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{cap.title}</h4>
                    <p className="text-sm text-gray-400">{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Live Demo Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 rounded-2xl border-2 border-dashed border-[#00F5FF]/30 text-center"
            >
              <Zap className="w-8 h-8 text-[#00F5FF] mx-auto mb-3" />
              <p className="text-white font-medium mb-1">Live Demo Coming Soon</p>
              <p className="text-sm text-gray-500">
                Experience the Axora Agent in action
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Use Cases Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Powering the Future of AI Interactions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass-card rounded-xl p-5"
              >
                <h4 className="text-[#00F5FF] font-semibold mb-3">
                  {useCase.title}
                </h4>
                <ul className="space-y-2">
                  {useCase.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-[#00F5FF] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
