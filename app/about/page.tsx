import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linen">
      {/* Header */}
      <header className="relative z-10 bg-linen border-b border-peach">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif font-bold tracking-wider text-espresso">
              ALCHEMY BEAUTY STUDIO
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/services"
                className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-clay transition-colors"
              >
                SERVICES
              </Link>
              <Link href="/about" className="text-sm font-sans font-medium tracking-wide text-clay">
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
            <Button className="hidden md:inline-flex bg-tangerine text-white hover:bg-clay font-sans font-medium tracking-wide text-sm px-6 py-2 rounded-full transition-colors">
              BOOK AN APPOINTMENT
            </Button>
          </div>
        </div>
      </header>

      {/* About Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wider text-espresso mb-6">
              ABOUT ALCHEMY BEAUTY STUDIO
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Alchemy Beauty Studio interior"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-semibold tracking-wide text-espresso">Our Story</h2>
              <p className="text-lg font-sans text-clay leading-relaxed">
                Welcome to Alchemy Beauty Studio — a boutique salon in Midtown Reno where science meets beauty, and
                transformation becomes art. Located in the heart of Reno's vibrant Midtown district, we've created a
                space where creativity and technical expertise come together.
              </p>
              <p className="text-lg font-sans text-clay leading-relaxed">
                Our experienced artists specialize in blonding, custom color, fantasy hues, extensions, nails, and
                bridal styling. We believe that every visit should be tailored to your unique vision, combining expert
                care with modern techniques to achieve stunning results.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6 lg:order-2">
              <h2 className="text-3xl font-serif font-semibold tracking-wide text-espresso">Our Philosophy</h2>
              <p className="text-lg font-sans text-clay leading-relaxed">
                At Alchemy Beauty Studio, we believe that true beauty transformation is both an art and a science. Our
                approach combines technical precision with creative vision, ensuring that every color, cut, and style is
                perfectly crafted for you.
              </p>
              <p className="text-lg font-sans text-clay leading-relaxed">
                Whether you're looking for a subtle enhancement or a dramatic transformation, our team takes the time to
                understand your lifestyle, preferences, and hair goals. We use only premium products and the latest
                techniques to deliver results that exceed your expectations.
              </p>
            </div>
            <div className="lg:order-1">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Premium hair care products"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="bg-peach rounded-lg p-12 text-center">
            <h2 className="text-3xl font-serif font-semibold tracking-wide text-espresso mb-6">Awards & Recognition</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif font-medium text-espresso mb-2">Best Salon 2023</h3>
                <p className="text-sm font-sans text-clay">Reno Magazine</p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-espresso mb-2">Top Colorist</h3>
                <p className="text-sm font-sans text-clay">Nevada Beauty Awards</p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-espresso mb-2">Eco-Friendly Salon</h3>
                <p className="text-sm font-sans text-clay">Green Beauty Awards</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
