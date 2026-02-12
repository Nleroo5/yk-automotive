export interface Review {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
}

export const reviews: Review[] = [
  {
    name: "Fergus Esezobor",
    rating: 5,
    quote: "I can't say enough good things about this shop. The team here does excellent work—professional, reliable, and honest. They explained everything clearly, kept me updated, and got the job done right the first time. My car runs better than ever, and the price was more than fair for the quality of service. If you're looking for a mechanic you can truly trust, this is the place to go!"
  },
  {
    name: "Donna Chapman",
    rating: 5,
    quote: "Great price. Best mechanic in town. They have quickly serviced our fairly new and aging vehicles multiple times. The charge was always very reasonable."
  },
  {
    name: "Joseph Swygert",
    rating: 5,
    quote: "I have an older van. had an alternator problem I looked at it I wanted no part of it. took it to him he quoted me 2 hours labor and said that would be all I had to pay when I picked it up it had taken him 4 hours to do it but he only charged me for 2 hours That's as honest as you get that's why he is a five-star rating."
  }
];
