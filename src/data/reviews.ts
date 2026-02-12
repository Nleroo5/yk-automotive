export interface Review {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
}

// Note: Real customer reviews should be added here
// Currently using placeholder data until actual reviews are collected
export const reviews: Review[] = [
  {
    name: "Verified Customer",
    rating: 5,
    quote: "Professional service and honest pricing. Highly recommend for all your automotive needs."
  }
];
