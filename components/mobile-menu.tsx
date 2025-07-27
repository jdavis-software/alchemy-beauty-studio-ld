"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="md:hidden p-2" onClick={() => setIsOpen(true)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-light tracking-wider">MÈCHE</span>
            <button className="p-2" onClick={() => setIsOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 px-4 py-8">
            <div className="space-y-6">
              <Link
                href="/services"
                className="block text-lg font-light tracking-wide text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/about"
                className="block text-lg font-light tracking-wide text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="/team"
                className="block text-lg font-light tracking-wide text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                MEET THE TEAM
              </Link>
              <Link
                href="/press"
                className="block text-lg font-light tracking-wide text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                PRESS
              </Link>
              <Link
                href="/contact"
                className="block text-lg font-light tracking-wide text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </div>
            <div className="mt-8">
              <Button
                variant="outline"
                className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-light tracking-wide bg-transparent"
                onClick={() => setIsOpen(false)}
              >
                BOOK AN APPOINTMENT
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
