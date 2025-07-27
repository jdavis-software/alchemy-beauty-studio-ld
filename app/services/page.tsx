"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StickyHeader } from "@/components/sticky-header"
import { MobileCTA } from "@/components/mobile-cta"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

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
        },
      ],
    },
    {
      category: "HAIR CUTTING & STYLING",
      treatments: [
        {
          name: "Precision Haircuts",
          price: "Starting at $55",
          description: "Expert cutting tailored to your face shape, hair texture, and lifestyle. Style included",
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
        {
          name: "Keratin Bond Extensions",
          price: "Consultation needed",
          description: "Individual strand extensions for maximum customization",
        },
      ],
    },
    {
      category: "NAIL SERVICES",
      treatments: [
        {
          name: "Removal and Repairs",
          price: "Starting at $10",
          description: "Soak off or repair individual nails",
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
              SERVICES
            </motion.h1>
            <motion.div className="w-16 h-1 bg-tangerine mx-auto mb-6" variants={fadeInUp}></motion.div>
            <motion.p className="text-lg font-sans text-plum max-w-2xl mx-auto" variants={fadeInUp}>
              Experience luxury hair care with our comprehensive range of services, delivered by our team of expert
              stylists using only the finest products.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="space-y-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            {services.map((category, index) => (
              <motion.div key={index} className="space-y-8" variants={fadeInUp}>
                <div className="text-center">
                  <span className="inline-block bg-tangerine text-white px-6 py-2 rounded-full text-sm font-serif font-medium tracking-wide">
                    {category.category}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    >
                      <Card className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 h-full border-0 bg-white">
                        <CardContent className="p-0 text-center h-full flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-serif font-semibold tracking-wide text-espresso mb-2">
                              {treatment.name}
                            </h3>
                            <p className="text-lg font-sans font-medium text-tangerine mb-4">{treatment.price}</p>
                            <p className="text-sm font-sans text-plum leading-relaxed">{treatment.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                {index < services.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-24 h-px bg-tangerine/30"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="text-sm font-sans text-plum mb-8">
              All services include a complimentary consultation. Prices may vary based on hair length and condition.
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
