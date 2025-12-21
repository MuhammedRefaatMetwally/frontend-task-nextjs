"use client"

import Header from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { RatingOverview } from "@/components/product/rating-overview"
import { ReviewCard } from "@/components/product/review-card"
import { SimilarItems } from "@/components/product/similar-items"

export default function ProductDetailsPage() {
  const product = {
    id: "1",
    name: "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue",
    category: "T-Shirt",
    originalPrice: 360.0,
    currentPrice: 300.0,
    taxInfo: "This price is exclusive of taxes.",
    description:
      "Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy",
    type: "Cotton",
    colors: [
      { name: "Red", value: "#DC2626" },
      { name: "Blue", value: "#93C5FD" },
      { name: "Yellow", value: "#A3A380" },
      { name: "Light Blue", value: "#60A5FA" },
      { name: "Gray", value: "#6B7280" },
    ],
    sizes: ["2Xl"],
    images: [
      "images/product1.svg",
      "images/product2.svg",
      "images/product3.svg",
      "images/product4.svg",
    ],
  }

  const ratingDistribution = [
    { stars: 5, percentage: 67 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 6 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 9 },
  ]

  const reviews = [
    {
      name: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      name: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      name: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      name: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
  ]

  const similarItems = [
    {
      id: 1,
      image: "images/similar_products/similar_product1.svg",
      title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello..",
      category: "Dresses",
      rating: 4.5,
      reviews: 2910,
      price: 900,
      originalPrice: null,
      discount: null,
      colors: ["#C8A696", "#1F2937"],
      additionalColors: 2,
      hasGreenBag: false,
      hasFilledHeart: false,
    },
    {
      id: 2,
      image: "images/similar_products/similar_product2.svg",
      title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello..",
      category: "Dresses",
      rating: 4.5,
      reviews: 2910,
      price: 900,
      originalPrice: 1300,
      discount: "25% OFF",
      colors: ["#C8A696", "#1F2937"],
      additionalColors: 2,
      hasGreenBag: false,
      hasFilledHeart: false,
    },
    {
      id: 3,
      image: "images/similar_products/similar_product3.svg",
      title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello..",
      category: "Dresses",
      rating: 4.5,
      reviews: 2910,
      price: 900,
      originalPrice: null,
      discount: null,
      colors: ["#C8A696", "#1F2937"],
      additionalColors: 2,
      hasGreenBag: true,
      hasFilledHeart: true,
    },
    {
      id: 4,
      image: "images/similar_products/similar_product4.svg",
      title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello..",
      category: "Dresses",
      rating: 4.5,
      reviews: 2910,
      price: 900,
      originalPrice: 1300,
      discount: "25% OFF",
      colors: ["#C8A696", "#1F2937"],
      additionalColors: 2,
      hasGreenBag: false,
      hasFilledHeart: false,
    },
    {
      id: 5,
      image: "images/similar_products/similar_product4.svg",
      title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello..",
      category: "Dresses",
      rating: 4.5,
      reviews: 2910,
      price: 900,
      originalPrice: 1300,
      discount: "25% OFF",
      colors: ["#C8A696", "#1F2937"],
      additionalColors: 2,
      hasGreenBag: false,
      hasFilledHeart: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden max-w-full">

        <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="bg-[#F5F5F5] w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Product Details
            </h1>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}


      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
            <div className="bg-[#ECECEC66] border-gray-200 rounded-lg px-5 py-3.5">
              <div className="flex items-center gap-2 text-sm">
                <a href="/" className="text-black hover:text-gray-600 font-medium">
                  Home
                </a>
                <img
                    src="icons/breadcrum_arrow.svg"
                    className="w-2 h-3"
                    alt="arrow"
                />
                <a href="/category" className="text-black hover:text-gray-600 font-medium">
                  Our Category
                </a>
                <img
                    src="icons/breadcrum_arrow.svg"
                    className="w-2 h-3"
                    alt="arrow"
                />
                <span className="text-[#8A8A8A] font-bold">Product Details</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mb-12 sm:mb-16">
          {/* Left: Image Gallery */}
          <ProductGallery images={product.images} />

          {/* Right: Product Info */}
          <div className="w-full max-w-full">
            <ProductInfo
              category={product.category}
              name={product.name}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              taxInfo={product.taxInfo}
              description={product.description}
              type={product.type}
              sizes={product.sizes}
              colors={product.colors}
            />
          </div>
        </div>

        {/* Rating & Reviews Section */}
        <div className="mt-12 sm:mt-16">
          {/* Section Header */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 relative inline-block pb-1">
              Rating & Reviews
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#BE968E]" />
            </h2>
          </div>

          {/* Rating Overview */}
          <RatingOverview averageRating="4,5" totalReviews="3.0K" ratingDistribution={ratingDistribution} />

          {/* Reviews List */}
          <div className="space-y-6 sm:space-y-8">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                rating={review.rating}
                date={review.date}
                comment={review.comment}
              />
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-6 sm:mt-8">
            <button className="text-[#BE968E] hover:text-[#A87F77] font-medium text-sm sm:text-base transition underline">
              View More Comments
            </button>
          </div>
        </div>

        {/* Similar Items Section */}
        <SimilarItems items={similarItems} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
