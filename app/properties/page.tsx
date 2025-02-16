import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import PropertiesGrid from "@/app/components/properties/properties-grid"
import FilterSidebar from "@/app/components/properties/filter-sidebar"
import Breadcrumb from "@/app/components/breadcrumb"

export default function PropertiesPage() {
  return (
    <div className="min-h-screen">
      <Navbar showNavItems={false} />
      {/* Fixed header section */}
      <div className="fixed top-0 left-0 right-0 bg-white z-20">
        <div className="h-16" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="space-y-2">
            <Breadcrumb 
              items={[
                { label: "Properties" }
              ]} 
            />
            <h1 className="text-3xl font-bold text-center">Explore Properties</h1>
          </div>
        </div>
      </div>

      {/* Main content with adjusted padding */}
      <div className="pt-44 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <FilterSidebar />
          </div>
          <div className="w-full lg:w-3/4">
            <PropertiesGrid />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 