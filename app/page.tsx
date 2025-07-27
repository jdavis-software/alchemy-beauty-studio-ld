import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-linen">
      {/* Header */}
      <header className="relative z-10 bg-linen border-b border-peach">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-serif font-bold tracking-wider text-espresso">
              ALCHEMY BEAUTY STUDIO
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/services"
                className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-clay transition-colors"
              >
                SERVICES
              </Link>
              <Link
                href="/about"
                className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-clay transition-colors"
              >
                ABOUT US
              </Link>
              <Link
                href="/team"
                className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-clay transition-colors"
              >
                MEET THE TEAM
              </Link>
              <Link
                href="/press"
                className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-clay transition-colors"
              >
                PRESS
              </Link>
              <Link
                href="/contact"
                className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-clay transition-colors"
              >
                CONTACT
              </Link>
            </nav>

            {/* Book Appointment Button */}
            <Button className="hidden md:inline-flex bg-tangerine text-white hover:bg-clay font-sans font-medium tracking-wide text-sm px-6 py-2 rounded-full transition-colors">
              BOOK AN APPOINTMENT
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-espresso">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="relative h-screen flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=800&width=1200&text=Alchemy+Beauty+Studio"
            alt="Alchemy Beauty Studio exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-espresso bg-opacity-50" />

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            {/* Logo Symbol */}
            <div className="mb-8">
              <div className="flex justify-center items-center space-x-1">
                <div className="w-4 h-4 bg-peach"></div>
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-tangerine"></div>
                <div className="w-4 h-4 bg-clay rounded-full"></div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
              Where color meets craft.
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl font-sans font-light text-peach mb-12">
              Reno's destination for elevated hair, nail, and bridal transformations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-tangerine text-white hover:bg-clay font-sans font-medium px-8 py-3 text-lg rounded-full transition-colors">
                Book Appointment
              </Button>
              <Button
                variant="outline"
                className="border-peach text-peach hover:bg-peach hover:text-espresso font-sans font-medium px-8 py-3 text-lg rounded-full bg-transparent transition-colors"
              >
                See Services
              </Button>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="bg-peach py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-espresso mb-4">
              Welcome to Alchemy Beauty Studio
            </h2>
            <div className="w-16 h-1 bg-clay mx-auto mb-6"></div>
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-espresso mb-8">
              a boutique salon in Midtown Reno where science meets beauty.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-sans font-light text-clay">
              Transformation becomes art in an elegant, feminine space.
            </p>
          </div>
        </div>
      </main>

      {/* Mobile Navigation Menu (hidden by default) */}
      <div className="md:hidden fixed inset-0 z-50 bg-linen transform translate-x-full transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-peach">
            <span className="text-xl font-serif font-bold tracking-wider text-espresso">ALCHEMY BEAUTY STUDIO</span>
            <button className="p-2 text-espresso">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 px-4 py-8">
            <div className="space-y-6">
              <Link href="/services" className="block text-lg font-sans font-medium tracking-wide text-espresso">
                SERVICES
              </Link>
              <Link href="/about" className="block text-lg font-sans font-medium tracking-wide text-espresso">
                ABOUT US
              </Link>
              <Link href="/team" className="block text-lg font-sans font-medium tracking-wide text-espresso">
                MEET THE TEAM
              </Link>
              <Link href="/press" className="block text-lg font-sans font-medium tracking-wide text-espresso">
                PRESS
              </Link>
              <Link href="/contact" className="block text-lg font-sans font-medium tracking-wide text-espresso">
                CONTACT
              </Link>
            </div>
            <div className="mt-8">
              <Button className="w-full bg-tangerine text-white hover:bg-clay font-sans font-medium tracking-wide rounded-full transition-colors">
                BOOK AN APPOINTMENT
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
