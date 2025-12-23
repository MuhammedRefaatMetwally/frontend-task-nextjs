"use client"

import { useRef, useState } from "react"
import { ChevronRight, Star } from "lucide-react"

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

  // State to track which items are in bag and favorited
  const [baggedItems, setBaggedItems] = useState<Set<number>>(new Set())
  const [favoritedItems, setFavoritedItems] = useState<Set<number>>(new Set())

  const toggleBag = (itemId: number) => {
    setBaggedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const toggleFavorite = (itemId: number) => {
    setFavoritedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

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
        <div className="mb-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 relative inline-block">
            Similar Items
            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#BE968E] rounded-2xl" />
          </h2>
        </div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          <div
              ref={scrollContainerRef}
              className="overflow-x-auto px-4 sm:px-6 lg:px-8 pb-2"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex gap-4 sm:gap-5">
              {items.map((item) => (
                  <div key={item.id} className="group flex-shrink-0 w-[260px] sm:w-[280px]">
                    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-[3/4] bg-gray-50 flex items-center justify-center">
                        <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-contain"
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
                              onClick={() => toggleBag(item.id)}
                              className={`w-9 h-9 rounded-md flex items-center justify-center transition-all shadow-sm flex-shrink-0 bg-white`}
                          >
                            {baggedItems.has(item.id) ? (
                                <img src="/icons/bag-remove_fill.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="remove bag" />
                            ) : (
                                <img src="/icons/bag-add.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="add bag" />
                            )}
                          </button>
                          <button
                              onClick={() => toggleFavorite(item.id)}
                              className={`w-9 h-9 rounded-md flex items-center justify-center transition-all shadow-sm flex-shrink-0 bg-white`}
                          >
                            {favoritedItems.has(item.id) ? (
                                <img src="/icons/love_fill.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="love_fill" />
                            ) : (
                                <img src="/icons/love.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="love" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="p-3 sm:p-4 bg-white">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600 truncate flex-1">{item.category}</span>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <Star className="w-4 h-4 fill-[#BE968E] text-[#BE968E]" />
                            <span className="text-sm font-semibold text-gray-900">{item.rating}</span>
                            <span className="text-xs text-gray-500">({item.reviews})</span>
                          </div>
                        </div>

                        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-relaxed mb-3 min-h-[2.5rem]">
                          {item.title}
                        </h3>

                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1.5">
                        <span className="text-sm sm:text-base font-bold text-gray-900 flex-shrink-0">
                          AED {item.price}
                        </span>
                            {item.originalPrice && (
                                <span className="text-xs text-gray-400 line-through font-normal flex-shrink-0">
                            AED {item.originalPrice}
                          </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5">
                            {item.colors.map((colorValue, idx) => (
                                <div
                                    key={idx}
                                    className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0"
                                    style={{ backgroundColor: colorValue }}
                                />
                            ))}
                            <span className="text-xs font-semibold text-gray-900 flex-shrink-0">
                          +{item.additionalColors}
                        </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8 sm:mt-10 px-4 sm:px-6 lg:px-8">
          <button
              onClick={scrollLeft}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C4C4C4] hover:bg-gray-400 rounded-full flex items-center justify-center shadow-lg transition z-20"
          >
            <img src="icons/black_arrow.svg" className="w-5 h-5 text-black" alt="arrow" />
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
