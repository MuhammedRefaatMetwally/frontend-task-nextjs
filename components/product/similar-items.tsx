"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, ShoppingBag, Heart, Star } from "lucide-react"

interface SimilarItem {
  id: number
  image: string
  title: string
  category: string
  rating: number
  reviews: number
  price: number
  originalPrice: number | null
  discount: string | null
  colors: string[]
  additionalColors: number
  hasGreenBag: boolean
  hasFilledHeart: boolean
}

interface SimilarItemsProps {
  items: SimilarItem[]
}

export function SimilarItems({ items }: SimilarItemsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="mt-16 sm:mt-20">
      {/* Section Header */}
      <div className="mb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 relative inline-block">
          Similar Items
          <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#BE968E]" />
        </h2>
      </div>

      {/* Products Horizontal Scroll */}
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
        <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2">
          <div className="flex gap-4 sm:gap-5">
            {items.map((item) => (
              <div key={item.id} className="group flex-shrink-0 w-[260px] sm:w-[280px]">
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full p-10"
                    />

                    {item.discount && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#FEF2F2] text-[#DC2626] text-xs font-medium px-2.5 py-1 rounded">
                          {item.discount}
                        </span>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 flex flex-row gap-2 z-10">
                      <button
                        className={`w-9 h-9 rounded-md flex items-center justify-center transition-all shadow-sm flex-shrink-0 ${
                          item.hasGreenBag
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-white border border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <ShoppingBag className={`w-4 h-4 ${item.hasGreenBag ? "text-white" : "text-gray-600"}`} />
                      </button>
                      <button
                        className={`w-9 h-9 rounded-md flex items-center justify-center transition-all shadow-sm flex-shrink-0 ${
                          item.hasFilledHeart
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-white border border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            item.hasFilledHeart ? "text-white fill-white" : "text-gray-600 group-hover:text-red-500"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 bg-white">
                    {/* Category and Rating */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-600 truncate flex-1">{item.category}</span>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Star className="w-4 h-4 fill-[#BE968E] text-[#BE968E]" />
                        <span className="text-sm font-semibold text-gray-900">{item.rating}</span>
                        <span className="text-xs text-gray-500">({item.reviews})</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm text-gray-900 line-clamp-2 leading-relaxed mb-3 min-h-[2.5rem]">
                      {item.title}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="text-base sm:text-lg font-bold text-gray-900 flex-shrink-0">
                        AED {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through font-normal flex-shrink-0">
                          AED {item.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Color Swatches */}
                    <div className="flex items-center gap-2">
                      {item.colors.map((colorValue, idx) => (
                        <div
                          key={idx}
                          className="w-6 h-6 rounded-full border border-gray-200 flex-shrink-0"
                          style={{ backgroundColor: colorValue }}
                        />
                      ))}
                      <span className="text-sm font-semibold text-gray-900 flex-shrink-0">
                        +{item.additionalColors}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-3 mt-8 sm:mt-10 px-4 sm:px-6 lg:px-8">
        <button
          onClick={scrollLeft}
          className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </button>
        <button
          onClick={scrollRight}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-[#BE968E] rounded-full flex items-center justify-center hover:bg-[#A87F77] transition-colors shadow-md flex-shrink-0"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
      </div>
    </div>
  )
}
