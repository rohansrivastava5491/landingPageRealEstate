"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
const properties = [
  {
    id: 1,
    title: "Modern Villa",
    location: "Beverly Hills, CA",
    price: "$2,500,000",
    beds: 4,
    baths: 3,
    sqft: "3,500",
    image: "/property-1.jpg",
    type: "For Sale",
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    location: "Manhattan, NY",
    price: "$3,200,000",
    beds: 3,
    baths: 2.5,
    sqft: "2,800",
    image: "/property-2.jpg",
    type: "For Sale",
  },
  {
    id: 3,
    title: "Beachfront Condo",
    location: "Miami Beach, FL",
    price: "$4,500/month",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    image: "/property-3.jpg",
    type: "For Rent",
  },
  {
    id: 4,
    title: "Contemporary Townhouse",
    location: "San Francisco, CA",
    price: "$1,800,000",
    beds: 3,
    baths: 2.5,
    sqft: "2,200",
    image: "/property-4.jpg",
    type: "For Sale",
  },
  {
    id: 5,
    title: "Urban Loft",
    location: "Chicago, IL",
    price: "$3,200/month",
    beds: 1,
    baths: 1,
    sqft: "1,200",
    image: "/property-5.jpg",
    type: "For Rent",
  },
  {
    id: 6,
    title: "Mountain View Estate",
    location: "Aspen, CO",
    price: "$4,500,000",
    beds: 5,
    baths: 4,
    sqft: "4,800",
    image: "/property-6.jpg",
    type: "For Sale",
  }
]

const Properties = () => {
  return (
    <section className="py-12" id="properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
          <p className="text-gray-600">Explore our handpicked properties</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-[240px]">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-4 left-4">{property.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xl font-bold text-primary">
                      {property.price}
                    </span>
                    <Button variant="outline">View Details</Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button size="lg" asChild>
  <Link href="/properties">View All Properties</Link>
</Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Properties 