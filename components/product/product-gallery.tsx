"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      <div className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
        <div className="aspect-square relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20  via-transparent to-transparent z-10 pointer-events-none" />

          <div className="absolute top-4 left-4 right-4 flex items-center gap-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`flex-1 h-1 rounded-full transition-all ${
                  idx === currentImageIndex ? "bg-white shadow-sm" : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>

          <img
            src={images[currentImageIndex]}
            alt="Product"
            className="w-full h-full pt-14"
          />
        </div>

        <button
          onClick={prevImage}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#C4C4C4] hover:bg-gray-400 rounded-full flex items-center justify-center shadow-lg transition z-20"
        >
          <img
              src="icons/swipe_arrow.svg"
              className="w-5 h-5 text-white rotate-180"
              alt="arrow"
          />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#BE968E] hover:bg-[#A87F77] rounded-full flex items-center justify-center shadow-lg transition z-20"
        >
          <img
              src="icons/swipe_arrow.svg"
              className="w-5 h-5 text-white"
              alt="arrow"
          />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {images.slice(1, 3).map((image, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`aspect-square rounded-xl sm:rounded-2xl overflow-hidden transition-all`}
          >
            <img
              src={image}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
        {images.length > 3 && (
          <button
            onClick={() => setCurrentImageIndex(3)}
            className="aspect-square rounded-xl sm:rounded-2xl bg-black/70 flex items-center justify-center relative overflow-hidden"
          >
            <img
              src={images[3]}
              alt="More"
              className="w-full h-full object-cover absolute inset-0"
            />
            <span className="relative z-10 font-bold text-white text-2xl sm:text-3xl">+2</span>
          </button>
        )}
      </div>
    </div>
  )
}
