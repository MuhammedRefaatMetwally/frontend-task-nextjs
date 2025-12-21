interface RatingOverviewProps {
  averageRating: string
  totalReviews: string
  ratingDistribution: Array<{ stars: number; percentage: number }>
}

export function RatingOverview({ averageRating, totalReviews, ratingDistribution }: RatingOverviewProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-12 mb-8 sm:mb-12">
      {/* Left: Average Rating */}
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-baseline">
          <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">{averageRating}</span>
          <span className="text-xl sm:text-2xl text-gray-400 ml-1">/5</span>
        </div>
      </div>

      {/* Middle: Rating Bars */}
      <div className="space-y-2 sm:space-y-2.5 flex-1 max-w-md lg:max-w-none">
        {ratingDistribution.map((rating) => (
          <div key={rating.stars} className="flex items-center gap-2 sm:gap-3">
            <svg className="w-4 h-4 text-[#BE968E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-700 w-2 sm:w-3 flex-shrink-0">{rating.stars}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden min-w-0">
              <div
                className="bg-[#BE968E] h-full rounded-full transition-all"
                style={{ width: `${rating.percentage}%` }}
              />
            </div>
            <span className="text-sm text-gray-600 w-9 sm:w-10 text-right flex-shrink-0">%{rating.percentage}</span>
          </div>
        ))}
      </div>

      {/* Right: Total Reviews - Better alignment */}
      <div className="flex flex-col items-start lg:items-end justify-center gap-3">
        <div className="flex flex-col items-start lg:items-end">
          <span className="text-xs sm:text-sm text-gray-600 mb-1">Total Reviews</span>
          <span className="text-3xl sm:text-4xl font-bold text-gray-900">{totalReviews}</span>
        </div>
        <button className="px-5 sm:px-6 py-2 sm:py-2.5 bg-[#BE968E] hover:bg-[#A87F77] text-white rounded-lg font-medium flex items-center gap-2 transition text-sm whitespace-nowrap">
          Add Comment
            <img
                src="icons/comment.svg"

                alt="shopping bag"
            />
        </button>
      </div>
    </div>
  )
}
