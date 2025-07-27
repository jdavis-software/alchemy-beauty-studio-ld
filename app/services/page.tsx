"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StickyHeader } from "@/components/sticky-header"
import { FloatingCTA } from "@/components/floating-cta"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
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
      <FloatingCTA />

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
              className="text-5xl md:text-6xl font-serif font-bold tracking-wider text-espresso mb-6"
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
              <motion.div
                key={index}
                className={`${index % 2 === 0 ? "bg-linen" : "bg-peach"} rounded-2xl p-12 border-b border-peach pb-16 last:border-b-0`}
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-serif font-semibold tracking-wide text-espresso mb-12 text-center">
                  {category.category}
                </h2>
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
              <Button className="bg-tangerine text-white hover:brightness-110 font-sans font-medium tracking-wide px-8 py-3 rounded-full transition-all">
                BOOK YOUR APPOINTMENT
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
