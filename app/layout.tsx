import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axora Labs | Tokenizing Context-Aware Conversational AI on Virtuals Protocol",
  description: "Axora Labs is launching its Initial Agent Offering (IAO) on Virtuals Protocol. Own $AXORA - the patented, context-aware conversational AI agent tokenized on-chain. Patent No. HK30101316.",
  keywords: [
    "Axora Labs",
    "AXORA",
    "$AXORA",
    "IAO",
    "Initial Agent Offering",
    "Virtuals Protocol",
    "AI Agent",
    "Conversational AI",
    "Tokenized AI",
    "On-chain AI",
    "Web3 AI",
    "Crypto AI",
    "Patented AI",
    "Context-aware AI",
    "Hong Kong Patent",
  ],
  authors: [{ name: "Axora Labs", url: "https://axoralabs.ai" }],
  creator: "Axora Labs",
  publisher: "Axora Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axoralabs.ai",
    siteName: "Axora Labs",
    title: "Axora Labs | Tokenizing Context-Aware Conversational AI",
    description: "Join the $AXORA Initial Agent Offering on Virtuals Protocol. Patented AI technology, tokenized for the future.",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Axora Labs - Tokenizing the Future of Conversational AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@axoralabsai",
    creator: "@axoralabsai",
    title: "Axora Labs | $AXORA IAO on Virtuals Protocol",
    description: "Patented context-aware conversational AI, now tokenized. Join the IAO.",
    images: ["/banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Axora Labs",
              url: "https://axoralabs.ai",
              logo: "https://axoralabs.ai/logo.png",
              sameAs: [
                "https://x.com/axoralabsai",
                "https://t.me/axoralabsai",
                "https://discord.gg/axoralabsai",
                "https://linkedin.com/company/axoralabsai",
                "https://instagram.com/axoralabsai",
                "https://youtube.com/@axoralabsai",
              ],
              description: "Axora Labs - Tokenizing context-aware conversational AI agents on Virtuals Protocol. Patent No. HK30101316.",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
