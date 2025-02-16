"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Import the properties data from your existing properties component
// or fetch from an API
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
  },
  {
    id: 7,
    title: "Waterfront Mansion",
    location: "Lake Tahoe, NV",
    price: "$6,800,000",
    beds: 6,
    baths: 5.5,
    sqft: "6,200",
    image: "/property-7.jpg",
    type: "For Sale",
  },
  {
    id: 8,
    title: "Downtown Apartment",
    location: "Seattle, WA",
    price: "$2,800/month",
    beds: 2,
    baths: 2,
    sqft: "1,500",
    image: "/property-8.jpg",
    type: "For Rent",
  },
  {
    id: 9,
    title: "Historic Brownstone",
    location: "Boston, MA",
    price: "$2,900,000",
    beds: 4,
    baths: 3.5,
    sqft: "3,200",
    image: "/property-9.jpg",
    type: "For Sale",
  },
  {
    id: 10,
    title: "Garden Apartment",
    location: "Portland, OR",
    price: "$2,400/month",
    beds: 1,
    baths: 1,
    sqft: "950",
    image: "/property-10.jpg",
    type: "For Rent",
  },
  {
    id: 11,
    title: "Desert Oasis Villa",
    location: "Scottsdale, AZ",
    price: "$1,950,000",
    beds: 3,
    baths: 2.5,
    sqft: "2,800",
    image: "/property-11.jpg",
    type: "For Sale",
  },
  {
    id: 12,
    title: "Skyline Penthouse",
    location: "Los Angeles, CA",
    price: "$5,500/month",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    image: "/property-12.jpg",
    type: "For Rent",
  },
  {
    id: 13,
    title: "Colonial Estate",
    location: "Greenwich, CT",
    price: "$3,800,000",
    beds: 5,
    baths: 4.5,
    sqft: "4,500",
    image: "/property-13.jpg",
    type: "For Sale",
  },
  {
    id: 14,
    title: "Modern Studio",
    location: "Austin, TX",
    price: "$1,800/month",
    beds: 1,
    baths: 1,
    sqft: "650",
    image: "/property-14.jpg",
    type: "For Rent",
  },
  {
    id: 15,
    title: "Lakefront Property",
    location: "Orlando, FL",
    price: "$2,200,000",
    beds: 4,
    baths: 3,
    sqft: "3,100",
    image: "/property-15.jpg",
    type: "For Sale",
  }
]

const ITEMS_PER_PAGE = 6

const PropertiesGrid = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProperties = properties.slice(startIndex, endIndex)

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProperties.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-[240px]">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4">
                  {property.type}
                </Badge>
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
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                onClick={() => setCurrentPage(i + 1)}
                isActive={currentPage === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PropertiesGrid 