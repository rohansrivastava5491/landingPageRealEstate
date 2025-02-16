"use client"

import { Button } from "@/components/ui/button" 
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    } else {
      // Optional: Add a delay and reset to create a loop
      const timeout = setTimeout(() => {
        setDisplayText("")
        setCurrentIndex(0)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const Hero = () => {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              <TypewriterText text="Find Your Dream Home With Us" />
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the perfect property that matches your lifestyle. We make finding
              your dream home simple, efficient, and enjoyable.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/properties">Browse Properties</Link>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/hero-image.jpg"
              alt="Modern home interior"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 