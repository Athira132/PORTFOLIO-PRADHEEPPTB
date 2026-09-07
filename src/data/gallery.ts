export interface GalleryItem {
  id: string;
  title: string;
  category: "Counseling & Guidance" | "Workshops & Speaking" | "Personal Growth" | "Moments & Memories";
  imageSrc: string;
  description: string;
  featured?: boolean;
}

export const galleryCategories = [
  "All",
  "Counseling & Guidance",
  "Workshops & Speaking",
  "Personal Growth",
  "Moments & Memories"
] as const;

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Keynote Address on Mindset Transformation",
    category: "Workshops & Speaking",
    imageSrc: "/images/photo-2.png",
    description: "Pradheep N.V. engaging a vibrant audience on resilience, emotional intelligence, and purpose.",
    featured: true
  },
  {
    id: "gal-2",
    title: "Empowerment & Life Skills Seminar",
    category: "Workshops & Speaking",
    imageSrc: "/images/photo-3.png",
    description: "Interactive session fostering communication, confidence, and leadership among youth and educators.",
    featured: true
  },
  {
    id: "gal-3",
    title: "Quiet Reflection & Mindful Guidance",
    category: "Counseling & Guidance",
    imageSrc: "/images/photo-1.jpg",
    description: "Creating a calm sanctuary for deep self-reflection, understanding, and transformative healing.",
    featured: true
  },
  {
    id: "gal-4",
    title: "Author & Thought Leader Portrait",
    category: "Personal Growth",
    imageSrc: "/images/photo-4.png",
    description: "Over 20 years of humanitarian dedication, Malayalam literature, and mindful psychology.",
    featured: true
  },
  {
    id: "gal-5",
    title: "Career Mentorship & Future Roadmaps",
    category: "Counseling & Guidance",
    imageSrc: "/images/photo-2.png",
    description: "Guiding students and job seekers across Pattambi to uncover their innate strengths and career pathways.",
    featured: false
  },
  {
    id: "gal-6",
    title: "In Service of Human Wellness",
    category: "Moments & Memories",
    imageSrc: "/images/photo-1.jpg",
    description: "Reflections from community outreach programs and mindful wellness seminars in Kerala.",
    featured: false
  }
];
