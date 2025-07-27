import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PressPage() {
  const pressItems = [
    {
      publication: "Reno Magazine",
      title: "Midtown's Hidden Gem: Alchemy Beauty Studio",
      date: "March 2024",
      excerpt:
        "This boutique salon is transforming Reno's beauty scene with innovative color techniques and personalized service that rivals big-city salons.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      publication: "Nevada Appeal",
      title: "Best Hair Salons in Northern Nevada",
      date: "January 2024",
      excerpt:
        "Alchemy Beauty Studio stands out for their expertise in blonding and fantasy color, attracting clients from across the region.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      publication: "Reno News & Review",
      title: "Where Art Meets Beauty in Midtown",
      date: "November 2023",
      excerpt:
        "The talented team at Alchemy Beauty Studio combines technical skill with artistic vision to create stunning hair transformations.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const awards = [
    { year: "2024", award: "Best Hair Salon", organization: "Reno Magazine" },
    { year: "2023", award: "Top Colorist", organization: "Nevada Beauty Awards" },
    { year: "2023", award: "Best New Business", organization: "Midtown District" },
    { year: "2022", award: "Rising Star Salon", organization: "Northern Nevada Beauty" },
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
              <Link href="/press" className="text-sm font-sans font-medium tracking-wide text-clay">
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

      {/* Press Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wider text-espresso mb-6">
              PRESS & AWARDS
            </h1>
            <p className="text-lg font-sans text-clay max-w-2xl mx-auto">
              ALCHEMY BEAUTY STUDIO has been featured in leading beauty and lifestyle publications, recognized for our
              innovation, artistry, and commitment to excellence.
            </p>
          </div>

          {/* Featured Press */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-semibold tracking-wide text-espresso mb-12 text-center">
              FEATURED IN
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressItems.map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-none bg-peach hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={`${item.publication} feature`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-sans font-medium text-espresso tracking-wide">
                          {item.publication}
                        </h3>
                        <span className="text-xs font-sans text-clay">{item.date}</span>
                      </div>
                      <h4 className="text-lg font-serif font-medium text-espresso mb-3 leading-tight">{item.title}</h4>
                      <p className="text-sm font-sans text-clay leading-relaxed">{item.excerpt}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div className="bg-peach rounded-lg p-12">
            <h2 className="text-3xl font-serif font-semibold tracking-wide text-espresso mb-12 text-center">
              AWARDS & RECOGNITION
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-serif font-semibold text-tangerine mb-2">{award.year}</div>
                  <h3 className="text-lg font-serif font-medium text-espresso mb-1">{award.award}</h3>
                  <p className="text-sm font-sans text-clay">{award.organization}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Press Contact */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-serif font-semibold tracking-wide text-espresso mb-6">PRESS INQUIRIES</h2>
            <p className="text-lg font-sans text-clay mb-8">
              For press inquiries, high-resolution images, or interview requests, please contact our media relations
              team.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-sans text-clay">
                Email:{" "}
                <a
                  href="mailto:hello@alchemybeautystudio.com"
                  className="text-tangerine hover:text-clay transition-colors"
                >
                  hello@alchemybeautystudio.com
                </a>
              </p>
              <p className="text-sm font-sans text-clay">
                Phone:{" "}
                <a href="tel:+17755551234" className="text-tangerine hover:text-clay transition-colors">
                  (775) 555-1234
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
