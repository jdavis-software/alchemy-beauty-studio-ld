"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    service: "Blonding & Color",
    text: "Chantel transformed my hair beyond my wildest dreams. The blonding technique she used gave me the most natural, lived-in color I've ever had.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jessica L.",
    service: "Bridal Styling",
    text: "My wedding hair was absolutely perfect. The team made me feel so beautiful and confident on my special day. I couldn't have asked for better service.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amanda K.",
    service: "Fantasy Color",
    text: "Austin created the most amazing rainbow hair for me. The colors are so vibrant and the technique is flawless. I get compliments everywhere I go!",
    rating: 5,
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl bg-white shadow-lg p-8 border border-mist">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-coral fill-current" />
              ))}
            </div>
            <blockquote className="text-lg font-sans text-plum italic mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <div>
              <cite className="text-espresso font-serif font-semibold not-italic">
                {testimonials[currentIndex].name}
              </cite>
              <p className="text-sm text-plum font-sans">{testimonials[currentIndex].service}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-blush text-coral hover:bg-coral hover:text-white transition-colors duration-200"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-coral" : "bg-blush"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-blush text-coral hover:bg-coral hover:text-white transition-colors duration-200"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
