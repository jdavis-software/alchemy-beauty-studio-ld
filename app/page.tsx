"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StickyHeader } from "@/components/sticky-header"
import { FloatingCTA } from "@/components/floating-cta"
import { Phone, Mail, Instagram, MapPin } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.2 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export default function Component() {
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
        },
      ],
    },
    {
      category: "HAIR CUTTING & STYLING",
      treatments: [
        {
          name: "Precision Haircuts",
          price: "Starting at $55",
          description: "Expert cutting tailored to your face shape, hair texture, and lifestyle",
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
          price: "Consultation needed",
          description: "Seamless, reusable extensions for length and volume",
        },
        {
          name: "Hand-Tied Extensions",
          price: "Consultation needed",
          description: "Premium hand-tied wefts for the most natural look and feel",
        },
      ],
    },
    {
      category: "NAIL SERVICES",
      treatments: [
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
      <StickyHeader />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Alchemy+Beauty+Studio"
          alt="Alchemy Beauty Studio exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-espresso bg-opacity-50" />

        <motion.div
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8" variants={fadeInUp}>
            <div className="flex justify-center items-center space-x-1">
              <div className="w-4 h-4 bg-peach"></div>
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-tangerine"></div>
              <div className="w-4 h-4 bg-clay rounded-full"></div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Where color meets craft.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-sans font-light text-peach mb-12"
            variants={fadeInUp}
          >
            Reno's destination for elevated hair, nail, and bridal transformations.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-tangerine text-white hover:brightness-110 font-sans font-medium px-8 py-3 text-lg rounded-full transition-all">
                Book Appointment
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                className="border-peach text-peach hover:bg-peach hover:text-espresso font-sans font-medium px-8 py-3 text-lg rounded-full bg-transparent transition-all"
              >
                See Services
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Split Layout */}
      <section className="bg-peach py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Image
                src="/placeholder.svg?height=600&width=500&text=Alchemy+Studio+Interior"
                alt="Alchemy Beauty Studio interior"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso">
                Welcome to Alchemy Beauty Studio
              </h2>
              <div className="w-16 h-1 bg-tangerine"></div>
              <p className="text-xl font-sans text-plum leading-relaxed">
                A boutique salon in Midtown Reno where science meets beauty, and transformation becomes art.
              </p>
              <p className="text-lg font-sans text-plum leading-relaxed">
                Our experienced artists specialize in blonding, custom color, fantasy hues, extensions, nails, and
                bridal styling. We believe that every visit should be tailored to your unique vision, combining expert
                care with modern techniques to achieve stunning results.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-tangerine text-white hover:brightness-110 font-sans font-medium tracking-wide px-8 py-3 rounded-full transition-all">
                  LEARN MORE ABOUT US
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-linen py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso mb-6">OUR SERVICES</h2>
            <div className="w-16 h-1 bg-tangerine mx-auto mb-6"></div>
            <p className="text-lg font-sans text-plum max-w-2xl mx-auto">
              Experience luxury hair care with our comprehensive range of services, delivered by our team of expert
              stylists using only the finest products.
            </p>
          </motion.div>

          <motion.div
            className="space-y-16 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            {services.map((category, index) => (
              <motion.div key={index} className="border-b border-peach pb-16 last:border-b-0" variants={fadeInUp}>
                <h3 className="text-2xl font-serif font-semibold tracking-wide text-espresso mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.treatments.map((treatment, treatmentIndex) => (
                    <motion.div
                      key={treatmentIndex}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
                        <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                          <div>
                            <h4 className="text-xl font-serif font-semibold tracking-wide text-espresso mb-2">
                              {treatment.name}
                            </h4>
                            <p className="text-lg font-sans font-medium text-tangerine mb-4">{treatment.price}</p>
                            <p className="text-sm font-sans text-plum leading-relaxed">{treatment.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bridal/Specialty Section with Parallax */}
      <section className="relative bg-peach py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=800&width=1200&text=Bridal+Veil+Texture"
            alt="Bridal texture background"
            fill
            className="object-cover"
          />
        </div>
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <motion.h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso mb-6" variants={fadeInUp}>
            BRIDAL & SPECIAL EVENTS
          </motion.h2>
          <motion.div className="w-16 h-1 bg-tangerine mx-auto mb-6" variants={fadeInUp}></motion.div>
          <motion.p className="text-xl font-sans text-plum mb-8 leading-relaxed" variants={fadeInUp}>
            Make your special day unforgettable with our expert bridal styling services. From elegant updos to flawless
            makeup, we'll help you look and feel your absolute best.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-tangerine text-white hover:brightness-110 font-sans font-medium tracking-wide px-8 py-3 rounded-full transition-all">
                BOOK BRIDAL CONSULTATION
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Block */}
      <section className="bg-linen py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            <motion.h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso mb-6" variants={fadeInUp}>
              VISIT US
            </motion.h2>
            <motion.div className="w-16 h-1 bg-tangerine mx-auto mb-12" variants={fadeInUp}></motion.div>

            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" variants={staggerChildren}>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-peach rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-tangerine" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-espresso mb-2">Location</h3>
                <p className="text-sm font-sans text-plum">
                  120 Thoma St, Suite 2<br />
                  Reno, NV 89501
                </p>
              </motion.div>

              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-peach rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-tangerine" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-espresso mb-2">Phone/Text</h3>
                <a
                  href="tel:+17755551234"
                  className="text-sm font-sans text-tangerine hover:text-clay transition-colors"
                >
                  (775) 555-1234
                </a>
              </motion.div>

              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-peach rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-tangerine" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-espresso mb-2">Email</h3>
                <a
                  href="mailto:hello@alchemybeautystudio.com"
                  className="text-sm font-sans text-tangerine hover:text-clay transition-colors"
                >
                  hello@alchemybeautystudio.com
                </a>
              </motion.div>

              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-peach rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-8 h-8 text-tangerine" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-espresso mb-2">Instagram</h3>
                <a
                  href="https://instagram.com/alchemybeautystudioreno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans text-tangerine hover:text-clay transition-colors"
                >
                  @alchemybeautystudioreno
                </a>
              </motion.div>
            </motion.div>

            <motion.div className="bg-peach rounded-lg p-8" variants={fadeInUp}>
              <h3 className="text-2xl font-serif font-semibold text-espresso mb-4">Hours</h3>
              <p className="text-lg font-sans text-plum">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-sm font-sans text-plum mt-2">Closed Sundays</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
