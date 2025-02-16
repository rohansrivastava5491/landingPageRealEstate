import PropertiesGrid from "@/app/components/properties/properties-grid"
import FilterSidebar from "@/app/components/properties/filter-sidebar"

export default function PropertiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Explore Properties</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <FilterSidebar />
          </div>
          <div className="w-full lg:w-3/4">
            <PropertiesGrid />
          </div>
        </div>
      </div>
    </div>
  )
} 