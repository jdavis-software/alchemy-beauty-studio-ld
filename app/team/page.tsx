import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Chantel Sky",
      title: "Owner, Senior Stylist, Educator",
      experience: "15+ years",
      specialties: ["Blonding Specialist", "Hair Extensions", "Color Transformations"],
      bio: "Chantel founded Alchemy Beauty Studio with a vision set out to bring elevated hair and nail artistry to Reno by blending luxury with a laid back welcoming experience. She specializes in complex color transformations, blonding techniques, and hair extensions.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Morgan Perry",
      title: "Senior Stylist",
      experience: "4+ years",
      specialties: ["Blonding", "Hair Extensions", "Cutting"],
      bio: "Morgan is a blonding specialist known for her exceptional attention to detail and dedication to creating customized, dimensional looks.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Austin Calderoni",
      title: "Stylist",
      experience: "2+ years",
      specialties: ["Color", "Gender Affirming Cuts", "Perms"],
      bio: "Known for bold color, gender affirming haircuts, Austin creates looks that help every client feel seen and celebrated.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Jordan Lang",
      title: "Stylist",
      experience: "12+ years",
      specialties: ["Color Transformations"],
      bio: "Jordan delivers expert color services with precision and creativity.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Juliette",
      title: "Nail Artist",
      experience: "2+ years",
      specialties: ["Gel-X Extensions", "Nail Art", "Spa Manicures"],
      bio: "Juliette is a gel-x and nail artist known for intricate designs and custom press-ons that turn heads.",
      image: "/placeholder.svg?height=400&width=300",
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
              <Link href="/team" className="text-sm font-sans font-medium tracking-wide text-clay">
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

      {/* Team Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wider text-espresso mb-6">
              MEET THE TEAM
            </h1>
            <p className="text-lg font-sans text-clay max-w-2xl mx-auto">
              Our team of master stylists brings together decades of experience, artistic vision, and a passion for
              creating beautiful hair.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-none bg-peach">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-center space-y-4 p-6">
                    <div>
                      <h3 className="text-xl font-serif font-semibold tracking-wide text-espresso mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-sans text-clay mb-2">{member.title}</p>
                      <p className="text-sm font-sans font-medium text-tangerine">{member.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm font-sans text-clay mb-3">{member.bio}</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <span
                            key={specialtyIndex}
                            className="px-3 py-1 bg-linen text-xs font-sans text-espresso rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg font-sans text-clay mb-8">
              Ready to experience the Alchemy Beauty Studio difference? Book with one of our talented stylists today.
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
