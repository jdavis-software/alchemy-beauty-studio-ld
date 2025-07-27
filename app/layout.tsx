import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Alchemy Beauty Studio – Midtown Reno | Where Color Meets Craft",
  description:
    "Alchemy Beauty Studio – Reno's destination for elevated hair, nail, and bridal transformations. Expert blonding, custom color, fantasy hues, extensions, and bridal styling in Midtown Reno.",
  keywords:
    "hair salon Reno, blonding specialist, hair color, extensions, nail services, bridal styling, Midtown Reno, fantasy color, custom hair color, Alchemy Beauty Studio",
  authors: [{ name: "Alchemy Beauty Studio" }],
  creator: "Alchemy Beauty Studio",
  publisher: "Alchemy Beauty Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Alchemy Beauty Studio – Midtown Reno | Where Color Meets Craft",
    description:
      "Reno's destination for elevated hair, nail, and bridal transformations. Expert stylists, premium products, stunning results.",
    url: "https://alchemybeautystudio.com",
    siteName: "Alchemy Beauty Studio",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Alchemy+Beauty+Studio",
        width: 1200,
        height: 630,
        alt: "Alchemy Beauty Studio - Reno's Premier Hair Salon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alchemy Beauty Studio – Midtown Reno",
    description: "Where color meets craft. Reno's destination for elevated hair, nail, and bridal transformations.",
    images: ["/placeholder.svg?height=630&width=1200&text=Alchemy+Beauty+Studio"],
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#be4f1f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Alchemy Beauty Studio – Reno's destination for elevated hair, nail, and bridal transformations."
        />
      </head>
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
