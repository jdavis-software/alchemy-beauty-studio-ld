"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function FloatingCTA() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 md:hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        className="bg-tangerine text-white hover:brightness-110 shadow-lg rounded-full h-14 w-14 p-0"
        onClick={() => window.open("tel:+17755551234", "_self")}
      >
        <Phone className="h-6 w-6" />
        <span className="sr-only">Call to book appointment</span>
      </Button>
    </motion.div>
  )
}
