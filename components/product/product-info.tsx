"use client"

import { useState } from "react"
import { Heart, ShoppingBag } from "lucide-react"

interface Color {
  name: string
  value: string
}

interface ProductInfoProps {
  category: string
  name: string
  currentPrice: number
  originalPrice: number
  taxInfo: string
  description: string
  type: string
  sizes: string[]
  colors: Color[]
}

export function ProductInfo({
  category,
  name,
  currentPrice,
  originalPrice,
  taxInfo,
  description,
  type,
  sizes,
  colors,
}: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name || "")
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "")
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Category Badge & Icons */}
      <div className="flex items-center justify-between gap-4">
        <span className="inline-block px-4 sm:px-5 py-2 bg-white text-gray-600 text-sm font-normal rounded-full border border-gray-300 flex-shrink-0">
          {category}
        </span>
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button className="w-10 h-10 sm:w-11 sm:h-11 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 transition bg-white flex-shrink-0">
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
          </button>
          <button className="w-10 h-10 sm:w-11 sm:h-11 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 transition bg-white flex-shrink-0">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
          </button>
        </div>
      </div>

      {/* Product Title */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">{name}</h1>

      {/* Price */}
      <div className="space-y-1">
        <div className="flex items-baseline gap-2 sm:gap-3">
          <span className="text-2xl sm:text-3xl font-bold text-gray-900">${currentPrice.toFixed(2)}</span>
          <span className="text-base sm:text-lg text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-600">{taxInfo}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

      {/* Type Selector */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900">Type</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400">
          <option>{type}</option>
        </select>
      </div>

      {/* Size Selector */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900">Size</label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <label className="text-base font-bold text-gray-900">Colors</label>
        <div className="flex items-center gap-4 flex-wrap">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className="relative transition-all flex-shrink-0"
              title={color.name}
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-gray-200 transition-all ${
                  selectedColor === color.name ? "ring-2 ring-black ring-offset-0" : ""
                }`}
              >
                <div className="w-10 h-10 sm:w-9 sm:h-9 rounded-full" style={{ backgroundColor: color.value }} />
              </div>
            </button>
          ))}
        </div>
        {selectedColor && <p className="text-base text-gray-600 font-normal">{selectedColor}</p>}
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-3">
        <label className="text-lg sm:text-xl font-bold text-gray-900 block">
          Quantity <span className="text-gray-400 font-normal text-sm sm:text-base">($300.00 for Piece)</span>
        </label>
        <div className="flex flex-wrap items-stretch gap-3 sm:gap-4">
          {/* Quantity Controls */}
          <div className="flex items-stretch bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0 p-1 gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 sm:px-6 py-3 sm:py-4 bg-white text-gray-400 hover:text-gray-600 transition text-xl font-light flex-shrink-0 min-w-[50px] flex items-center justify-center rounded-xl"
            >
              −
            </button>
            <div className="px-4 sm:px-6 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-gray-900 flex items-center justify-center min-w-[70px] sm:min-w-[80px]">
              {quantity.toString().padStart(2, "0")}
            </div>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 sm:px-6 py-3 sm:py-4 bg-white text-gray-900 transition text-xl font-normal flex-shrink-0 min-w-[50px] flex items-center justify-center rounded-xl"
            >
              +
            </button>
          </div>

          {/* Price Display */}
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 flex-shrink-0 flex items-center min-w-[120px]">
            ${(currentPrice * quantity).toFixed(2)}
          </div>

          {/* Add to Cart Button */}
          <button className="flex-1 min-w-[200px] max-w-full sm:max-w-md px-4 sm:px-8 py-2.5 sm:py-3 bg-[#BE968E] hover:bg-[#A87F77] text-white rounded-lg font-medium flex items-center justify-center gap-2 transition text-sm sm:text-base whitespace-nowrap">
            Add To Cart
            <img
                src="icons/shopping_bag.svg"

            alt="shopping bag"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
