"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Clock, CreditCard, Calendar, AlertCircle } from "lucide-react"

const policies = [
  {
    id: "cancellation",
    title: "Cancellation Policy",
    icon: Calendar,
    content:
      "We require 24-hour notice for cancellations or rescheduling. Same-day cancellations or no-shows will be charged 50% of the service fee.",
  },
  {
    id: "payment",
    title: "Payment & Pricing",
    icon: CreditCard,
    content:
      "We accept cash, credit cards, and digital payments. Prices may vary based on hair length, condition, and consultation. A deposit may be required for appointments over $200.",
  },
  {
    id: "arrival",
    title: "Arrival Time",
    icon: Clock,
    content:
      "Please arrive 10 minutes early for your appointment. Late arrivals may result in shortened service time or rescheduling to accommodate other clients.",
  },
  {
    id: "consultation",
    title: "Consultation Process",
    icon: AlertCircle,
    content:
      "All color services include a complimentary consultation. We'll discuss your hair goals, assess your hair condition, and create a customized plan for your transformation.",
  },
]

export function PoliciesAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      {policies.map((policy, index) => {
        const Icon = policy.icon
        const isOpen = openItem === policy.id

        return (
          <motion.div
            key={policy.id}
            className="border border-peach rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-peach/20 transition-colors duration-200"
              onClick={() => setOpenItem(isOpen ? null : policy.id)}
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-tangerine" />
                <span className="font-serif font-medium text-espresso">{policy.title}</span>
              </div>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-5 h-5 text-clay" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-linen border-t border-peach">
                    <p className="text-sm font-sans text-plum leading-relaxed">{policy.content}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
