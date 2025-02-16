import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const keyPoints = [
  "Over 15 years of industry experience",
  "Professional and certified real estate agents",
  "Personalized property recommendations",
  "Transparent and hassle-free process",
]

const About = () => {
  return (
    <section className="py-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/about-image.jpg"
              alt="Our team of real estate professionals"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Your Trusted Partner in Real Estate Excellence
            </h2>
            <p className="text-gray-600 mb-6">
              At RealEstate, we believe everyone deserves to find their perfect
              home. With over 15 years of experience in the real estate market,
              we&apos;ve helped thousands of families and individuals find properties
              that match their dreams and aspirations.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of dedicated professionals combines deep market knowledge
              with personalized service to ensure your property journey is
              smooth and successful.
            </p>
            <div className="space-y-4 mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Button size="lg">Contact Us</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 