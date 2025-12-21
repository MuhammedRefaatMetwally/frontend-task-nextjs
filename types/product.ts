export interface Product {
    id: string;
    name: string;
    category: string;
    originalPrice: number;
    currentPrice: number;
    description: string;
    type: string;
    colors: Color[];
    sizes: string[];
    images: string[];
}

export interface Color {
    name: string;
    value: string;
}

export interface Review {
    id: string;
    author: string;
    rating: number;
    comment: string;
    createdAt: string;
}