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
    title: "Keynote & Youth Transformation Seminar",
    category: "Workshops & Speaking",
    imageSrc: "/images/gallery/gallery-01.jpg",
    description: "Interactive session fostering communication, confidence, and leadership.",
    featured: true
  },
  {
    id: "gal-2",
    title: "Educational Mindset & Growth Workshop",
    category: "Workshops & Speaking",
    imageSrc: "/images/gallery/gallery-02.jpg",
    description: "Inspiring teachers and students on emotional intelligence and purpose.",
    featured: true
  },
  {
    id: "gal-3",
    title: "Community Outreach & Guidance Session",
    category: "Counseling & Guidance",
    imageSrc: "/images/gallery/gallery-03.jpg",
    description: "Empowering individuals through empathetic psychological guidance.",
    featured: true
  },
  {
    id: "gal-4",
    title: "Institutional Leadership Address",
    category: "Workshops & Speaking",
    imageSrc: "/images/gallery/gallery-04.jpg",
    description: "Pradheep N.V. speaking on holistic development and life skills.",
    featured: true
  },
  {
    id: "gal-5",
    title: "Personal Guidance & Mindfulness",
    category: "Personal Growth",
    imageSrc: "/images/gallery/gallery-05.jpg",
    description: "Creating spaces for self-reflection, understanding, and inner calm.",
    featured: false
  },
  {
    id: "gal-6",
    title: "Auditorium Address on Mental Wellness",
    category: "Workshops & Speaking",
    imageSrc: "/images/gallery/gallery-06.jpg",
    description: "Keynote presentation addressing stress management and mental resilience.",
    featured: false
  },
  {
    id: "gal-7",
    title: "Interactive Classroom Mentorship",
    category: "Counseling & Guidance",
    imageSrc: "/images/gallery/gallery-07.jpg",
    description: "Guiding learners with practical strategies for academic clarity and focus.",
    featured: false
  },
  {
    id: "gal-8",
    title: "Youth Leadership Conference",
    category: "Workshops & Speaking",
    imageSrc: "/images/gallery/gallery-08.jpg",
    description: "Fostering leadership, empathy, and active participation.",
    featured: false
  },
  {
    id: "gal-9",
    title: "Campus Motivation & Career Guidance",
    category: "Personal Growth",
    imageSrc: "/images/gallery/gallery-09.jpg",
    description: "Assisting youth to discover inherent strengths and confident life paths.",
    featured: false
  },
  {
    id: "gal-10",
    title: "Professional Training Seminar",
    category: "Workshops & Speaking",
    imageSrc: "/images/gallery/gallery-10.jpg",
    description: "Corporate and educator coaching on effective communication and team dynamics.",
    featured: false
  },
  {
    id: "gal-11",
    title: "Mindset Transformation Gathering",
    category: "Moments & Memories",
    imageSrc: "/images/gallery/gallery-11.jpg",
    description: "Sharing insights with audiences across Palakkad and Kerala.",
    featured: false
  },
  {
    id: "gal-12",
    title: "Interactive Student Dialogue",
    category: "Counseling & Guidance",
    imageSrc: "/images/gallery/gallery-12.jpg",
    description: "Engaging students directly to address emotional roadblocks and fears.",
    featured: false
  },
  {
    id: "gal-13",
    title: "Teacher Training & Educational Coaching",
    category: "Workshops & Speaking",
    imageSrc: "/images/gallery/gallery-13.jpg",
    description: "Equipping teachers with empathetic psychological tools for student care.",
    featured: false
  },
  {
    id: "gal-14",
    title: "Life Skills & Resilience Forum",
    category: "Personal Growth",
    imageSrc: "/images/gallery/gallery-14.jpg",
    description: "Equipping youth with emotional resilience and practical wisdom.",
    featured: false
  },
  {
    id: "gal-15",
    title: "Community Wellness Workshop",
    category: "Moments & Memories",
    imageSrc: "/images/gallery/gallery-15.jpg",
    description: "Fostering community bonds and positive mental health awareness.",
    featured: false
  },
  {
    id: "gal-16",
    title: "Public Speaking & Keynote Event",
    category: "Workshops & Speaking",
    imageSrc: "/images/gallery/gallery-16.jpg",
    description: "Pradheep Sir delivering an inspiring address at a regional convention.",
    featured: false
  },
  {
    id: "gal-17",
    title: "Parenting & Family Care Seminar",
    category: "Counseling & Guidance",
    imageSrc: "/images/gallery/gallery-17.jpg",
    description: "Guiding parents and families toward harmonious domestic relationships.",
    featured: false
  },
  {
    id: "gal-18",
    title: "Motivational Youth Gathering",
    category: "Personal Growth",
    imageSrc: "/images/gallery/gallery-18.jpg",
    description: "Inspiring youth to overcome adversity with confidence.",
    featured: false
  },
  {
    id: "gal-19",
    title: "Transformative Life Journey Reflection",
    category: "Moments & Memories",
    imageSrc: "/images/gallery/gallery-19.jpg",
    description: "Celebrating milestones and enduring positive impact across Kerala.",
    featured: false
  },
  {
    id: "gal-20",
    title: "Youth Empowerment & Motivational Coaching",
    category: "Workshops & Speaking",
    imageSrc: "/images/gallery/gallery-20.jpg",
    description: "Inspiring audiences with actionable psychological guidance and life skills.",
    featured: false
  },
  {
    id: "gal-21",
    title: "Mind Art Counseling Centre — Guidance Team",
    category: "Counseling & Guidance",
    imageSrc: "/images/gallery/gallery-21.jpg",
    description: "Counselling and guidance team addressing career, family, premarital, teenage, and couple counselling.",
    featured: false
  }
];


