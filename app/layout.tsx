import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Telangana Chess Club - Premier FIDE Certified Chess Training Academy",
  description:
    "Official website of Telangana Chess Club. Premier FIDE certified chess academy offering beginner to grandmaster level coaching, online classrooms, state tournaments, and expert mentors in Hyderabad.",
  keywords: [
    "Telangana Chess Club",
    "Hyderabad Chess Academy",
    "Chess Coaching Hyderabad",
    "FIDE Rated Chess Academy",
    "Online Chess Classes Hyderabad",
    "Chess Tournaments Hyderabad",
    "Best Chess Academy Telangana",
    "Kids Chess Training Hyderabad"
  ],
  authors: [{ name: "Telangana Chess Club" }],
  creator: "Telangana Chess Club",
  publisher: "Telangana Chess Club",
  metadataBase: new URL("https://www.telanganachessclub.com"),
  openGraph: {
    title: "Telangana Chess Club - Master Chess with FIDE Rated Coaches",
    description: "Empowering future chess champions across Hyderabad. Live online classes, offline coaching, grandmaster masterclasses, and certified tournaments.",
    url: "https://www.telanganachessclub.com",
    siteName: "Telangana Chess Club",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Telangana Chess Club Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telangana Chess Club",
    description: "FIDE Certified Chess Training & Tournaments in Hyderabad.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Telangana Chess Club",
    "alternateName": "HCC",
    "url": "https://www.telanganachessclub.com",
    "logo": "https://www.telanganachessclub.com/logo.jpg",
    "email": "telanganachessclub@gmail.com",
    "telephone": "+91 9864646481",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Road No 2, Alkapuri, Kothapet",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500035",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/telanganachessclub",
      "https://www.telanganachessclub.com/"
    ],
    "description": "Telangana Chess Club is a leading chess organization offering FIDE certified coaching, online training, and state-level chess tournaments."
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-white text-slate-900 antialiased selection:bg-amber-500/20 selection:text-amber-900`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
