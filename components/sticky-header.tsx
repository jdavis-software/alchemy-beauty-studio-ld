"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-linen/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold tracking-wider text-espresso">
            ALCHEMY BEAUTY STUDIO
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-tangerine transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-tangerine transition-colors"
            >
              ABOUT US
            </Link>
            <Link
              href="/team"
              className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-tangerine transition-colors"
            >
              MEET THE TEAM
            </Link>
            <Link
              href="/press"
              className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-tangerine transition-colors"
            >
              PRESS
            </Link>
            <Link
              href="/contact"
              className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-tangerine transition-colors"
            >
              CONTACT
            </Link>
          </nav>

          <Button className="hidden md:inline-flex bg-tangerine text-white hover:brightness-110 font-sans font-medium tracking-wide text-sm px-6 py-2 rounded-full transition-all">
            BOOK AN APPOINTMENT
          </Button>

          <button className="md:hidden p-2 text-espresso">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}
