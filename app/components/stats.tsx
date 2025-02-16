"use client"

import { Building, Users, Home, Award } from "lucide-react"
import CountUp from "react-countup"
import { motion } from "framer-motion"

const stats = [
  {
    icon: Building,
    value: 1000,
    label: "Properties Listed",
  },
  {
    icon: Users,
    value: 500,
    label: "Happy Clients",
  },
  {
    icon: Home,
    value: 800,
    label: "Properties Sold",
  },
  {
    icon: Award,
    value: 15,
    label: "Years Experience",
  },
]

const Stats = () => {
  return (
    <section className="py-12 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">
                <CountUp end={stat.value} duration={2.5} suffix="+" />
              </div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats