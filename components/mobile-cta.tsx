"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function MobileCTA() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 md:hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        className="bg-tangerine text-white px-4 py-2 rounded-full shadow-lg hover:brightness-110 transition-all duration-200"
        onClick={() => window.open("tel:+17755551234", "_self")}
      >
        Book Now
      </Button>
    </motion.div>
  )
}
