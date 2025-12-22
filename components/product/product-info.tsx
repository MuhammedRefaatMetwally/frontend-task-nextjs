"use client"

import { useState } from "react"
import { Separator } from "@/components/ui/separator"

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
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="flex items-center justify-between gap-3 sm:gap-4">
        <span className="inline-block px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 bg-white text-[#BE968E] text-xs sm:text-sm font-bold rounded-full border border-[#BE968E] flex-shrink-0">
          {category}
        </span>
                <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 flex-shrink-0">
                    <button className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 border border-gray-300 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-gray-50 transition bg-white flex-shrink-0">
                        <img src="/icons/bag-add.svg" className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" alt="bag-add" />
                    </button>
                    <button className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 border border-gray-300 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-gray-50 transition bg-white flex-shrink-0">
                        <img src="/icons/love.svg" className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" alt="love" />
                    </button>
                </div>
            </div>

            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">{name}</h1>

            <div className="space-y-0.5 sm:space-y-1">
                <div className="flex items-baseline gap-2 sm:gap-2.5 lg:gap-3">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">${currentPrice.toFixed(2)}</span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-400 line-through">
            ${originalPrice.toFixed(2)}
          </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">{taxInfo}</p>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{description}</p>

            <Separator className="my-3 sm:my-4" />

            <div className="relative">
                <label className="absolute left-3 sm:left-4 top-0 -translate-y-1/2 bg-white px-2 text-xs sm:text-sm font-medium text-gray-700 z-10">
                    Type
                </label>
                <select
                    className="w-[300px] max-w-full sm:max-w-[300px] px-3 sm:px-4 py-3 sm:py-4 pb-2.5 sm:pb-3 border border-gray-300 rounded-lg bg-white text-sm sm:text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%234A5568' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        paddingRight: "36px",
                        appearance: "none",
                    }}
                >
                    <option>{type}</option>
                </select>
            </div>

            <div className="relative">
                <label className="absolute left-3 sm:left-4 top-0 -translate-y-1/2 bg-white px-2 text-xs sm:text-sm font-medium text-gray-700 z-10">
                    Size
                </label>
                <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-[300px] max-w-full sm:max-w-[300px] px-3 sm:px-4 py-3 sm:py-4 pb-2.5 sm:pb-3 border border-gray-300 rounded-lg bg-white text-sm sm:text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%234A5568' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        paddingRight: "36px",
                        appearance: "none",
                    }}
                >
                    {sizes.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>

            <div className="space-y-3 sm:space-y-4">
                <label className="text-sm sm:text-base font-bold text-gray-900">Colors</label>
                <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            className="relative transition-all flex-shrink-0"
                            title={color.name}
                        >
                            <div
                                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-gray-200 transition-all ${
                                    selectedColor === color.name ? "ring-2 ring-black ring-offset-0" : ""
                                }`}
                            >
                                <div
                                    className="w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full"
                                    style={{ backgroundColor: color.value }}
                                />
                            </div>
                        </button>
                    ))}
                </div>
                {selectedColor && <p className="text-sm sm:text-base text-gray-600 font-normal">{selectedColor}</p>}
            </div>

            <div className="space-y-2.5 sm:space-y-3">
                <label className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 block">
                    Quantity{" "}
                    <span className="text-gray-400 font-normal text-xs sm:text-sm lg:text-base">($300.00 for Piece)</span>
                </label>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 lg:gap-6">
                    <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-4 lg:gap-6">
                        <div className="flex items-center bg-gray-50 rounded-xl sm:rounded-2xl flex-shrink-0 px-2 sm:px-3 py-1.5 sm:py-2 gap-2 sm:gap-3 lg:gap-4">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white text-gray-500 hover:text-gray-700 transition flex items-center justify-center rounded-xl sm:rounded-2xl shadow-sm flex-shrink-0"
                            >
                                {quantity > 1 ? (
                                    <img src="/icons/minus.png" className="w-3 h-3 sm:w-4 sm:h-4" alt="minus" />
                                ) : (
                                    <img src="/icons/minus.svg" className="w-3 h-3 sm:w-4 sm:h-4" alt="minus" />
                                )}
                            </button>

                            <div className="px-2 sm:px-4 lg:px-6 text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 min-w-[50px] sm:min-w-[60px] lg:min-w-[80px] text-center">
                                {quantity.toString().padStart(2, "0")}
                            </div>

                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white text-gray-900 flex items-center justify-center rounded-xl sm:rounded-2xl shadow-sm flex-shrink-0"
                            >
                                <img src="/icons/tabler_plus.svg" className="w-5 h-5 sm:w-6 sm:h-6" alt="plus" />
                            </button>
                        </div>

                        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 flex-shrink-0">
                            ${(currentPrice * quantity).toFixed(2)}
                        </div>
                    </div>

                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 lg:py-4 bg-[#BE968E] hover:bg-[#A87F77] text-white rounded-lg sm:rounded-xl font-medium flex items-center justify-center gap-2 transition text-sm sm:text-base whitespace-nowrap min-h-[48px] sm:min-h-[52px] lg:min-h-[56px]">
                        Add To Cart
                        <img src="/icons/shopping_bag.svg" className="w-6 h-6 sm:w-6 sm:h-6" alt="shopping bag" />
                    </button>
                </div>
            </div>
        </div>
    )
}
