import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function AboutSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-black/95 to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4">WHO WE ARE</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We are proud to offer the best IPTV subscriptions
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our Best IPTV subscriptions offer high-quality streaming, with no buffering or lagging. You can easily
              navigate through channels using our user-friendly interface and enjoy a seamless experience.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Connect several devices at once</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Gig download speeds available everywhere</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Wall-to-wall wifi connection</span>
              </div>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-base font-semibold">
              Subscribe Now
            </Button>
          </div>

          {/* Right Content - Stats & Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Stats Cards */}
              <div className="absolute top-0 right-0 bg-yellow-400 text-black px-6 py-4 rounded-lg shadow-xl z-20 transform rotate-3">
                <p className="text-sm font-semibold uppercase">Active</p>
                <p className="text-xs uppercase">Subscription</p>
                <p className="text-4xl font-bold mt-1">5.3K</p>
              </div>

              <div className="absolute top-32 left-0 bg-teal-500 text-white px-6 py-4 rounded-lg shadow-xl z-20 transform -rotate-2">
                <p className="text-sm font-semibold uppercase">Five Star</p>
                <p className="text-xs uppercase">Reviews</p>
                <p className="text-4xl font-bold mt-1">500K</p>
              </div>

              {/* Main Image Placeholder */}
              <div className="relative mt-12 lg:mt-0">
                <img src="/person-holding-tv-remote-with-streaming-content.jpg" alt="IPTV Service" className="w-full rounded-lg shadow-2xl" />

                {/* Google Rating Badge */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">Google</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm font-semibold">Ratings</span>
                    <span className="text-lg font-bold text-blue-600">4.7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
