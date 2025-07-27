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
  title: "Alchemy Beauty Studio – Reno, NV | Where Color Meets Craft",
  description:
    "Reno's premier boutique salon specializing in blonding, custom color, fantasy hues, extensions, nails, and bridal styling. Located in Midtown Reno at 120 Thoma St. Expert stylists using premium products for stunning transformations.",
  keywords:
    "hair salon Reno, blonding specialist, hair color, extensions, nail services, bridal styling, Midtown Reno, fantasy color, custom hair color",
  openGraph: {
    title: "Alchemy Beauty Studio – Reno, NV | Where Color Meets Craft",
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
    title: "Alchemy Beauty Studio – Reno, NV",
    description: "Where color meets craft. Reno's destination for elevated hair, nail, and bridal transformations.",
    images: ["/placeholder.svg?height=630&width=1200&text=Alchemy+Beauty+Studio"],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#be4f1f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
