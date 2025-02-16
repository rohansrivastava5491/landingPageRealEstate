import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content: "Found my dream home through this platform. The process was smooth and efficient!",
    author: "Sarah Johnson",
    role: "Homeowner",
    avatar: "/avatar-1.jpg",
  },
  {
    id: 2,
    content: "Found my dream home through this platform. The process was smooth and efficient!",
    author: "Sarah Johnson",
    role: "Homeowner",
    avatar: "/avatar-1.jpg",
  },
  {
    id: 3,
    content: "Found my dream home through this platform. The process was smooth and efficient!",
    author: "Sarah Johnson",
    role: "Homeowner",
    avatar: "/avatar-1.jpg",
  }
  // Add more testimonials
]

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">Testimonials from satisfied customers</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 