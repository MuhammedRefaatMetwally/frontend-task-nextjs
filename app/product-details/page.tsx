"use client"

import Header from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { RatingOverview } from "@/components/product/rating-overview"
import { ReviewCard } from "@/components/product/review-card"
import { SimilarItems } from "@/components/product/similar-items"
import {product, ratingDistribution, reviews, similarItems} from "@/lib/constants";

export default function ProductDetailsPage() {


  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden max-w-full">
      <Header/>

        <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="bg-[#F5F5F5] w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Product Details
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4  flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
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
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mb-10 sm:mb-12 lg:mb-16">
          <ProductGallery images={product.images} />

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

        <div className="mt-12 sm:mt-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 relative inline-block pb-1">
              Rating & Reviews
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#BE968E] rounded-2xl" />
            </h2>
          </div>

          <RatingOverview averageRating="4,5" totalReviews="3.0K" ratingDistribution={ratingDistribution} />

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

          <div className="text-center mt-6 sm:mt-8">
            <button className="px-8 py-3 bg-[#F5F5F5] text-[#BE968E] hover:bg-[#FFD8CC] font-medium text-base transition rounded-lg">
              View More Comments
            </button>
          </div>
        </div>

        <SimilarItems items={similarItems} />
      </div>

      <Footer />
    </div>
  )
}
