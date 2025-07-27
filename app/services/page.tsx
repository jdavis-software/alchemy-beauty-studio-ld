import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      category: "HAIR COLOR & BLONDING",
      treatments: [
        {
          name: "Blonding & Lived-In Color",
          price: "Starting at $180",
          description: "Expert blonding techniques for natural, lived-in color that grows out beautifully",
        },
        {
          name: "Custom Hair Color",
          price: "Starting at $150",
          description: "Personalized color formulations tailored to your skin tone and lifestyle",
        },
        {
          name: "Fantasy Hair Color",
          price: "Starting at $200",
          description: "Bold, creative colors including pastels, vivids, and unique color combinations",
        }
      ],
    },
    {
      category: "HAIR CUTTING & STYLING",
      treatments: [
        {
          name: "Precision Haircuts",
          price: "Starting at $55",
          description: "Expert cutting tailored to your face shape, hair texture, and lifestyle. style included",
        },
        {
          name: "Hair Styling",
          price: "Starting at $65",
          description: "Professional styling for everyday looks or special occasions",
        },
        {
          name: "Bridal & Event Styling",
          price: "Starting at $150",
          description: "Elegant updos and styling for weddings and special events",
        },
      ],
    },
    {
      category: "HAIR EXTENSIONS",
      treatments: [
        {
          name: "Tape-In Extensions",
          price: "consultation needed",
          description: "Seamless, reusable extensions for length and volume",
        },
        {
          name: "Hand-Tied Extensions",
          price: "consultation needed",
          description: "Premium hand-tied wefts for the most natural look and feel",
        },
        {
          name: "Keratin Bond Extensions",
          price: "consultation needed",
          description: "Individual strand extensions for maximum customization",
        },
      ],
    },
    {
      category: "NAIL SERVICES",
      treatments: [
        {
          name: "removal and repairs",
          price: "Starting at $10",
          description: "soak off or repair indivifual nails",
        },
        {
          name: "Gel Manicures",
          price: "Starting at $50",
          description: "Long-lasting gel polish with chip-resistant finish",
        },
        {
          name: "Gel-X Extensions",
          price: "Starting at $65",
          description: "Soft gel nail extensions for length and strength",
        },
      ],
    },
  ]

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
              <Link href="/services" className="text-sm font-sans font-medium tracking-wide text-clay">
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
            <Button className="hidden md:inline-flex bg-tangerine text-white hover:bg-clay font-sans font-medium tracking-wide text-sm px-6 py-2 rounded-full transition-colors">
              BOOK AN APPOINTMENT
            </Button>
          </div>
        </div>
      </header>

      {/* Services Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wider text-espresso mb-6">SERVICES</h1>
            <p className="text-lg font-sans text-clay max-w-2xl mx-auto">
              Experience luxury hair care with our comprehensive range of services, delivered by our team of expert
              stylists using only the finest products.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((category, index) => (
              <div key={index} className="border-b border-peach pb-16 last:border-b-0">
                <h2 className="text-2xl font-serif font-semibold tracking-wide text-espresso mb-8 text-center">
                  {category.category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.treatments.map((treatment, treatmentIndex) => (
                    <Card key={treatmentIndex} className="border-0 shadow-none bg-peach">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-xl font-serif font-semibold tracking-wide text-espresso mb-2">
                          {treatment.name}
                        </h3>
                        <p className="text-lg font-sans font-medium text-tangerine mb-4">{treatment.price}</p>
                        <p className="text-sm font-sans text-clay leading-relaxed">{treatment.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-sm font-sans text-clay mb-8">
              All services include a complimentary consultation. Prices may vary based on hair length and condition.
            </p>
            <Button className="bg-tangerine text-white hover:bg-clay font-sans font-medium tracking-wide px-8 py-3 rounded-full transition-colors">
              BOOK YOUR APPOINTMENT
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
