export const COLORS = {
    primary: '#BE968E',
    primaryHover: '#A87F77',
    secondary: '#F4F7F9',
} as const;

export const BREAKPOINTS = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
} as const;



export  const product = {
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

export const ratingDistribution = [
    { stars: 5, percentage: 67 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 6 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 9 },
]

export const reviews = [
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

export const similarItems = [
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
        colors: ["#C8A696", "#1F2937","#E8E8E8"],
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
        colors: ["#C8A696", "#1F2937","#E8E8E8"],
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
        colors: ["#C8A696", "#1F2937","#E8E8E8"],
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
        colors: ["#C8A696", "#1F2937","#E8E8E8"],
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
        colors: ["#C8A696", "#1F2937","#E8E8E8"],
        additionalColors: 2,
        hasGreenBag: false,
        hasFilledHeart: false,
    },
]