"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StickyHeader } from "@/components/sticky-header"
import { MobileCTA } from "@/components/mobile-cta"
import { EnhancedAccordion } from "@/components/enhanced-accordion"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { Phone, Mail, Instagram, MapPin, ExternalLink } from "lucide-react"

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

const heroAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
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
      <MobileCTA />

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
              <div className="w-4 h-4 bg-blush"></div>
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-coral"></div>
              <div className="w-4 h-4 bg-rosewood rounded-full"></div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-6 leading-tight tracking-tight"
            variants={heroAnimation}
          >
            Where color meets craft.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-sans font-light text-blush mb-12 leading-relaxed"
            variants={fadeInUp}
          >
            Reno's destination for elevated hair, nail, and bridal transformations.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-coral text-white px-6 py-3 rounded-full hover:bg-rosewood shadow-lg transition-all duration-200 font-sans font-medium text-lg">
                Book Appointment
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                className="border-blush text-blush hover:bg-blush hover:text-espresso font-sans font-medium px-8 py-3 text-lg rounded-full bg-transparent transition-all duration-200"
              >
                See Services
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Split Layout */}
      <section className="bg-blush py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
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
                className="w-full h-auto rounded-xl shadow-md"
              />
            </motion.div>
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso leading-tight">
                Welcome to Alchemy Beauty Studio
              </h2>
              <div className="w-16 h-1 bg-coral"></div>
              <p className="text-xl font-sans text-plum leading-relaxed">
                A boutique salon in Midtown Reno where science meets beauty, and transformation becomes art.
              </p>
              <p className="text-lg font-sans text-plum leading-relaxed">
                Our experienced artists specialize in blonding, custom color, fantasy hues, extensions, nails, and
                bridal styling. We believe that every visit should be tailored to your unique vision, combining expert
                care with modern techniques to achieve stunning results.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-coral text-white px-6 py-3 rounded-full hover:bg-rosewood shadow-lg transition-all duration-200 font-sans font-medium tracking-wide">
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
            <div className="w-16 h-1 bg-coral mx-auto mb-6"></div>
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
              <motion.div key={index} className="space-y-8" variants={fadeInUp}>
                <div className="text-center">
                  <span className="inline-block bg-coral text-white px-6 py-2 rounded-full text-sm font-serif font-medium tracking-wide">
                    {category.category}
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                  {category.treatments.map((treatment, treatmentIndex) => (
                    <motion.div
                      key={treatmentIndex}
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      variants={scaleIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="w-full sm:w-80 md:w-72 lg:w-80"
                    >
                      <Card className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 h-full border-0 bg-white">
                        <CardContent className="p-0 text-center h-full flex flex-col justify-between">
                          <div>
                            <h4 className="text-xl font-serif font-semibold tracking-wide text-espresso mb-2">
                              {treatment.name}
                            </h4>
                            <p className="text-lg font-sans font-medium text-coral mb-4">{treatment.price}</p>
                            <p className="text-sm font-sans text-plum leading-relaxed">{treatment.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                {index < services.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-24 h-px bg-rosewood/30"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bridal Section with Veil Texture */}
      <section className="relative bg-blush py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/placeholder.svg?height=800&width=1200&text=Subtle+Veil+Texture"
            alt="Subtle veil texture background"
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
          <motion.h2
            className="text-center text-5xl font-serif font-bold text-espresso mb-6 leading-tight"
            variants={fadeInUp}
          >
            Timeless Bridal Styling
          </motion.h2>
          <motion.div className="w-16 h-1 bg-coral mx-auto mb-6" variants={fadeInUp}></motion.div>
          <motion.p className="text-xl font-sans text-plum mb-8 leading-relaxed" variants={fadeInUp}>
            Make your special day unforgettable with our expert bridal styling services. From elegant updos to flawless
            color, we'll help you look and feel your absolute best on your wedding day.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-coral text-white px-6 py-3 rounded-full hover:bg-rosewood shadow-lg transition-all duration-200 font-sans font-medium tracking-wide">
                BOOK BRIDAL CONSULTATION
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-lavender py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso mb-6">CLIENT LOVE</h2>
            <div className="w-16 h-1 bg-coral mx-auto mb-6"></div>
            <p className="text-lg font-sans text-plum max-w-2xl mx-auto">
              Hear what our clients have to say about their transformative experiences at Alchemy Beauty Studio.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <TestimonialsCarousel />
          </motion.div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="bg-linen py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso mb-6">SALON POLICIES</h2>
              <div className="w-16 h-1 bg-coral mx-auto mb-6"></div>
              <p className="text-lg font-sans text-plum">
                Please review our policies to ensure the best experience for all our clients.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <EnhancedAccordion />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Block */}
      <section className="bg-linen py-20 border-t border-mist">
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
            <motion.div className="w-16 h-1 bg-coral mx-auto mb-12" variants={fadeInUp}></motion.div>

            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" variants={staggerChildren}>
              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-blush rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <MapPin className="w-8 h-8 text-coral" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-espresso mb-2">Location</h3>
                <p className="text-sm font-sans text-plum mb-2">
                  120 Thoma St, Suite 2<br />
                  Reno, NV 89501
                </p>
                <a
                  href="https://maps.apple.com/?q=120+Thoma+St,+Reno+NV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-sans text-coral hover:text-rosewood transition-colors focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 rounded"
                >
                  View on Apple Maps <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </motion.div>

              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-blush rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Phone className="w-8 h-8 text-coral" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-espresso mb-2">Phone/Text</h3>
                <a
                  href="tel:7755551234"
                  className="text-sm font-sans text-coral hover:text-rosewood transition-colors focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 rounded"
                >
                  (775) 555-1234
                </a>
              </motion.div>

              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-blush rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Mail className="w-8 h-8 text-coral" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-espresso mb-2">Email</h3>
                <a
                  href="mailto:hello@alchemybeautystudio.com"
                  className="text-sm font-sans text-coral hover:text-rosewood transition-colors focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 rounded"
                >
                  hello@alchemybeautystudio.com
                </a>
              </motion.div>

              <motion.div className="text-center" variants={scaleIn}>
                <div className="bg-blush rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Instagram className="w-8 h-8 text-coral" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-espresso mb-2">Instagram</h3>
                <a
                  href="https://instagram.com/alchemybeautystudioreno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans text-coral hover:text-rosewood transition-colors focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 rounded"
                >
                  @alchemybeautystudioreno
                </a>
              </motion.div>
            </motion.div>

            <motion.div className="bg-blush/30 rounded-xl p-8 shadow-sm border border-mist" variants={fadeInUp}>
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
