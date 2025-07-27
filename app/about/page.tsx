"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { StickyHeader } from "@/components/sticky-header"
import { FloatingCTA } from "@/components/floating-cta"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.2 } },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linen">
      <StickyHeader />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-peach">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto" initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-wider text-espresso mb-6">
              ABOUT ALCHEMY BEAUTY STUDIO
            </h1>
            <div className="w-16 h-1 bg-tangerine mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Our Story Section */}
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
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
              <h2 className="text-4xl font-serif font-semibold tracking-wide text-espresso">Our Story</h2>
              <div className="w-16 h-1 bg-tangerine"></div>
              <p className="text-lg font-sans text-plum leading-relaxed">
                Welcome to Alchemy Beauty Studio — a boutique salon in Midtown Reno where science meets beauty, and
                transformation becomes art. Located in the heart of Reno's vibrant Midtown district, we've created a
                space where creativity and technical expertise come together.
              </p>
              <p className="text-lg font-sans text-plum leading-relaxed">
                Our experienced artists specialize in blonding, custom color, fantasy hues, extensions, nails, and
                bridal styling. We believe that every visit should be tailored to your unique vision, combining expert
                care with modern techniques to achieve stunning results.
              </p>
            </motion.div>
          </motion.div>

          {/* Our Philosophy Section */}
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center bg-peach rounded-2xl p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            <motion.div className="space-y-6 lg:order-2" variants={fadeInUp}>
              <h2 className="text-4xl font-serif font-semibold tracking-wide text-espresso">Our Philosophy</h2>
              <div className="w-16 h-1 bg-tangerine"></div>
              <p className="text-lg font-sans text-plum leading-relaxed">
                At Alchemy Beauty Studio, we believe that true beauty transformation is both an art and a science. Our
                approach combines technical precision with creative vision, ensuring that every color, cut, and style is
                perfectly crafted for you.
              </p>
              <p className="text-lg font-sans text-plum leading-relaxed">
                Whether you're looking for a subtle enhancement or a dramatic transformation, our team takes the time to
                understand your lifestyle, preferences, and hair goals. We use only premium products and the latest
                techniques to deliver results that exceed your expectations.
              </p>
            </motion.div>
            <motion.div className="lg:order-1" variants={fadeInUp}>
              <Image
                src="/placeholder.svg?height=600&width=500&text=Premium+Hair+Products"
                alt="Premium hair care products"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Awards Section */}
          <motion.div
            className="bg-linen rounded-2xl p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-4xl font-serif font-semibold tracking-wide text-espresso mb-12"
              variants={fadeInUp}
            >
              Awards & Recognition
            </motion.h2>
            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerChildren}>
              <motion.div variants={fadeInUp}>
                <div className="bg-peach rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-tangerine">2023</span>
                </div>
                <h3 className="text-xl font-serif font-medium text-espresso mb-2">Best Salon</h3>
                <p className="text-sm font-sans text-plum">Reno Magazine</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="bg-peach rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-tangerine">2023</span>
                </div>
                <h3 className="text-xl font-serif font-medium text-espresso mb-2">Top Colorist</h3>
                <p className="text-sm font-sans text-plum">Nevada Beauty Awards</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="bg-peach rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-tangerine">2023</span>
                </div>
                <h3 className="text-xl font-serif font-medium text-espresso mb-2">Eco-Friendly Salon</h3>
                <p className="text-sm font-sans text-plum">Green Beauty Awards</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
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
