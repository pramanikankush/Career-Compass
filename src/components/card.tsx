"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  variant?: "blue" | "red"
}

export function Card({ children, className, hover = true, variant = "blue" }: CardProps) {
  const hoverBorder = variant === "blue" ? "hover:border-blue-500" : "hover:border-red-500"
  
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-xl bg-gray-800 border border-gray-600 p-4 transition-all",
        hover && `${hoverBorder} hover:shadow-lg`,
        className
      )}
    >
      {children}
    </motion.div>
  )
}