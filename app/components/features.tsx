import { Home, Search, Key, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Easy Property Search",
    description: "Find your perfect property with our advanced search filters.",
  },
  {
    icon: Home,
    title: "Wide Range of Properties",
    description: "Browse through thousands of properties across different locations.",
  },
  {
    icon: Key,
    title: "Secure Transactions",
    description: "Safe and secure property dealings with verified sellers.",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    description: "Get assistance from our experienced real estate agents.",
  },
]

const Features = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600">
            We provide the best service in the real estate industry
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 