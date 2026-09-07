export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location?: string;
  quote: string;
  rating: number;
  initials: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "muhsin",
    name: "Muhsin Kolathur",
    role: "Marketing Trainer",
    location: "Kerala",
    quote:
      "I wanted to take a moment to share my experience with Pradheep NV, and I can't emphasize enough how much of a positive impact they've had on my life.",
    rating: 5,
    initials: "MK"
  },
  {
    id: "shoukath",
    name: "Shoukath Parappur",
    role: "Counselling Psychologist",
    location: "Palakkad, Kerala",
    quote:
      "I highly recommend Pradheep Sir to anyone seeking professional psychological counseling. He is truly one of the finest psychologists in Pattambi and Palakkad.",
    rating: 5,
    initials: "SP"
  },
  {
    id: "arshid",
    name: "Arshid Arif Kattupara",
    role: "Life Skill Coach",
    location: "Kerala",
    quote:
      "They are a true gem in the field, and their guidance has had a profound impact on my life. I'm forever grateful for their support and expertise.",
    rating: 5,
    initials: "AK"
  }
];
