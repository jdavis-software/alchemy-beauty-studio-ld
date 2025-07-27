"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    service: "Blonding & Color",
    rating: 5,
    text: "Chantel transformed my hair beyond my wildest dreams! The blonding technique she used gave me the most natural, lived-in color I've ever had. I get compliments everywhere I go.",
    image: "/placeholder.svg?height=80&width=80&text=SM",
  },
  {
    id: 2,
    name: "Jessica Chen",
    service: "Fantasy Color",
    rating: 5,
    text: "Morgan's creativity with fantasy colors is unmatched. She created this gorgeous rose gold to lavender ombre that perfectly matched my vision. The color has lasted beautifully!",
    image: "/placeholder.svg?height=80&width=80&text=JC",
  },
  {
    id: 3,
    name: "Amanda Rodriguez",
    service: "Bridal Styling",
    rating: 5,
    text: "Austin made my wedding day absolutely perfect. The trial run was flawless, and on the big day, my hair looked exactly as we planned. I felt like a princess!",
    image: "/placeholder.svg?height=80&width=80&text=AR",
  },
  {
    id: 4,
    name: "Taylor Johnson",
    service: "Extensions & Cut",
    rating: 5,
    text: "Jordan's extension work is incredible - you literally cannot tell where my hair ends and the extensions begin. The cut and style perfectly frame my face.",
    image: "/placeholder.svg?height=80&width=80&text=TJ",
  },
  {
    id: 5,
    name: "Rachel Kim",
    service: "Gel-X Nails",
    rating: 5,
    text: "Juliette's nail artistry is phenomenal. My Gel-X extensions have lasted weeks without any lifting or chipping. The attention to detail is incredible!",
    image: "/placeholder.svg?height=80&width=80&text=RK",
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      }
    })
  }

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative h-64 md:h-48 overflow-hidden rounded-lg bg-white shadow-md">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute inset-0 flex items-center justify-center p-8 cursor-grab active:cursor-grabbing"
          >
            <div className="text-center max-w-2xl">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-tangerine fill-current" />
                ))}
              </div>
              <blockquote className="text-lg font-sans text-plum mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-serif font-semibold text-espresso">{testimonials[currentIndex].name}</p>
                  <p className="text-sm font-sans text-clay">{testimonials[currentIndex].service}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 border-peach hover:bg-peach hover:text-espresso z-10"
        onClick={() => paginate(-1)}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 border-peach hover:bg-peach hover:text-espresso z-10"
        onClick={() => paginate(1)}
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-tangerine" : "bg-peach/40"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
