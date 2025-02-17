import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import Breadcrumb from "@/app/components/breadcrumb"
import { properties } from "@/app/data/properties"
import Image from "next/image"

import { Bed, Bath, Square, MapPin, Phone, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScheduleViewingModal } from "@/app/components/properties/schedule-viewing-modal"
import { RequestInfoModal } from "@/app/components/properties/request-info-modal"

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function PropertyPage({ params, searchParams }: PageProps) {
  const id = await params.id
  const property = properties.find(p => p.id === parseInt(id))

  if (!property) {
    return <div>Property not found</div>
  }

  return (
    <div className="min-h-screen">
      <Navbar showNavItems={false} />
      {/* Header section */}
      <div className="fixed top-0 left-0 right-0 bg-white z-20">
        <div className="h-16" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb 
            items={[
              { label: "Properties", href: "/properties" },
              { label: property.title }
            ]} 
          />
        </div>
      </div>

      {/* Main content */}
      <div className="pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Property Images */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Property Info */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{property.location}</span>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {property.price}
                </div>
              </div>

              <div className="flex gap-6 py-6 border-y">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-gray-600" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-gray-600" />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="h-5 w-5 text-gray-600" />
                  <span>{property.sqft} sqft</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-600">
                  This beautiful {property.title.toLowerCase()} is located in the heart of {property.location}. 
                  Featuring {property.beds} bedrooms and {property.baths} bathrooms, this property offers 
                  {property.sqft} square feet of living space. Perfect for families or professionals 
                  looking for a comfortable and stylish home.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center gap-2">✓ Air Conditioning</li>
                  <li className="flex items-center gap-2">✓ Heating</li>
                  <li className="flex items-center gap-2">✓ Parking</li>
                  <li className="flex items-center gap-2">✓ Security System</li>
                  <li className="flex items-center gap-2">✓ High-Speed Internet</li>
                  <li className="flex items-center gap-2">✓ Modern Appliances</li>
                </ul>
              </div>
            </div>

            {/* Contact Card */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>(123) 456-7890</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>agent@realestate.com</span>
                    </div>
                    <ScheduleViewingModal />
                    <RequestInfoModal />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 