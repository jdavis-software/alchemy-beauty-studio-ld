"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StickyHeader } from "@/components/sticky-header"
import { MobileCTA } from "@/components/mobile-cta"
import { Instagram, Award } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
}

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Chantel Sky",
      role: "Master Stylist & Owner",
      specialties: ["Blonding Specialist", "Color Correction", "Lived-In Color"],
      bio: "With over 12 years of experience, Chantel is renowned for her expertise in blonding techniques and natural color placement. She founded Alchemy Beauty Studio with a vision to create a space where artistry meets science.",
      image: "/placeholder.svg?height=400&width=400&text=Professional+Blonde+Stylist+Headshot",
      instagram: "@chantelsky_hair",
      certifications: ["Redken Certified", "Olaplex Specialist", "Balayage Expert"],
    },
    {
      name: "Morgan Perry",
      role: "Senior Colorist",
      specialties: ["Fantasy Color", "Vivid Hues", "Color Transformations"],
      bio: "Morgan's creative vision and technical precision make her the go-to artist for bold color transformations. She specializes in fantasy colors and has a passion for pushing creative boundaries.",
      image: "/placeholder.svg?height=400&width=400&text=Creative+Brunette+Colorist+Portrait",
      instagram: "@morganperry_color",
      certifications: ["Pravana Certified", "Manic Panic Pro", "Color Theory Expert"],
    },
    {
      name: "Austin Calderoni",
      role: "Bridal & Event Specialist",
      specialties: ["Bridal Styling", "Updos", "Special Occasion Hair"],
      bio: "Austin brings elegance and sophistication to every bridal look. With an eye for detail and a passion for making every bride feel beautiful, Austin creates timeless styles for life's most important moments.",
      image: "/placeholder.svg?height=400&width=400&text=Elegant+Bridal+Stylist+Professional",
      instagram: "@austincalderoni_bridal",
      certifications: ["Bridal Styling Certified", "Updo Specialist", "Wedding Hair Expert"],
    },
    {
      name: "Jordan Lang",
      role: "Extension & Cut Specialist",
      specialties: ["Hair Extensions", "Precision Cuts", "Texture Specialist"],
      bio: "Jordan's expertise in hair extensions and precision cutting creates seamless, natural-looking transformations. With a focus on hair health and longevity, Jordan ensures every client leaves feeling confident.",
      image: "/placeholder.svg?height=400&width=400&text=Professional+Extension+Specialist+Photo",
      instagram: "@jordanlang_extensions",
      certifications: ["Extension Certified", "Cutting Specialist", "Hair Health Expert"],
    },
    {
      name: "Juliette",
      role: "Nail Artist",
      specialties: ["Gel-X Extensions", "Nail Art", "Manicure Specialist"],
      bio: "Juliette's artistic talent shines through in every nail design. From classic elegance to bold artistic expressions, she creates beautiful, long-lasting nail art that perfectly complements your style.",
      image: "/placeholder.svg?height=400&width=400&text=Professional+Nail+Artist+With+Beautiful+Hands",
      instagram: "@juliette_nails",
      certifications: ["Gel-X Certified", "Nail Art Specialist", "Manicure Expert"],
    },
  ]

  return (
    <div className="min-h-screen bg-linen">
      <StickyHeader />
      <MobileCTA />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-peach">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-espresso mb-6 leading-tight"
              variants={fadeInUp}
            >
              MEET THE TEAM
            </motion.h1>
            <motion.div className="w-16 h-1 bg-tangerine mx-auto mb-6" variants={fadeInUp}></motion.div>
            <motion.p className="text-lg font-sans text-plum max-w-2xl mx-auto" variants={fadeInUp}>
              Our talented team of artists brings passion, expertise, and creativity to every transformation. Get to
              know the professionals who will help you achieve your beauty goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                variants={scaleIn}
              >
                <motion.div
                  className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="rounded-xl shadow-md overflow-hidden border-0 bg-white">
                    <CardContent className="p-0">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`${member.name} - ${member.role}`}
                        width={400}
                        height={400}
                        className="w-full h-96 object-cover"
                        priority={index < 2}
                      />
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  variants={fadeInUp}
                >
                  <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-espresso mb-2">{member.name}</h2>
                    <p className="text-xl font-sans font-medium text-tangerine mb-4">{member.role}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="inline-block bg-peach/60 text-espresso px-3 py-1 rounded-full text-sm font-sans font-medium border border-tangerine/20"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <p className="text-base font-sans text-plum leading-relaxed">{member.bio}</p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-tangerine" />
                      <span className="text-sm font-sans font-medium text-espresso">Certifications:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-6">
                      {member.certifications.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="text-xs font-sans text-plum bg-linen px-2 py-1 rounded border border-peach/40"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={`https://instagram.com/${member.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-tangerine hover:text-clay transition-colors focus:outline-none focus:ring-2 focus:ring-tangerine focus:ring-offset-2 rounded"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm font-sans">{member.instagram}</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-20 bg-peach/30 rounded-xl p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-serif font-bold text-espresso mb-6">Ready to Transform Your Look?</h3>
            <p className="text-lg font-sans text-plum mb-8 max-w-2xl mx-auto">
              Book a consultation with one of our talented artists and discover what makes Alchemy Beauty Studio
              special.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-tangerine text-white px-6 py-3 rounded-full hover:brightness-110 shadow-lg transition-all duration-200 font-sans font-medium tracking-wide">
                BOOK YOUR APPOINTMENT
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
