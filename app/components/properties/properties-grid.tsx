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
import Link from "next/link"
import { properties } from "@/app/data/properties"

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
                <Button variant="outline" asChild>
                  <Link href={`/properties/${property.id}`}>View Details</Link>
                </Button>
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