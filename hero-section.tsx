"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Filmstrip Background */}
      <div className="absolute inset-0 z-0">
        <div className="filmstrip-container">
          {/* Row 1 */}
          <div className="filmstrip-row animate-scroll-left">
            {[...Array(8)].map((_, i) => (
              <div key={`row1-${i}`} className="filmstrip-item">
                <img
                  src={`/movie-poster-.jpg?height=400&width=300&query=movie-poster-${i + 1}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="filmstrip-row animate-scroll-right">
            {[...Array(8)].map((_, i) => (
              <div key={`row2-${i}`} className="filmstrip-item">
                <img
                  src={`/movie-poster-.jpg?height=400&width=300&query=movie-poster-${i + 9}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="filmstrip-row animate-scroll-left">
            {[...Array(8)].map((_, i) => (
              <div key={`row3-${i}`} className="filmstrip-item">
                <img
                  src={`/movie-poster-.jpg?height=400&width=300&query=movie-poster-${i + 17}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-500 text-sm md:text-base font-semibold tracking-wider uppercase mb-4">
            FAST IPTV CONNECTION
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Enjoy Top Quality Streaming With Nestor IPTV
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Includes all your favorite channels with local news, live sports, weather,
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search your content here"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-base font-semibold">
                Search Now
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Connect several devices at once</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>25,000 worldwide channels 4K</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>500K new and old movies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
