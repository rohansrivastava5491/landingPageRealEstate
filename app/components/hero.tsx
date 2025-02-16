import { Button } from "@/components/ui/button"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Find Your Dream Home With Us
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the perfect property that matches your lifestyle. We make finding
              your dream home simple, efficient, and enjoyable.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Browse Properties</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/hero-image.jpg"
              alt="Modern home interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 