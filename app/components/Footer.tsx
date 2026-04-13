"use client";

import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

const footerLinks = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Technology", href: "#technology" },
    { label: "The Agent", href: "#agent" },
    { label: "IAO", href: "#iao" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Community", href: "#community" },
  ],
  resources: [
    { label: "Whitepaper", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Patent Info", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1428]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Axora Labs"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-white">Axora Labs</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Tokenizing the future of context-aware conversational AI agents on
              Virtuals Protocol.
            </p>
            <SocialIcons size="sm" />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#00F5FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#00F5FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#00F5FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Axora Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">
                Patent No. HK30101316
              </span>
              <span className="text-gray-600">|</span>
              <Link
                href="https://x.com/axoralabsai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00F5FF] text-sm hover:underline"
              >
                @axoralabsai
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
