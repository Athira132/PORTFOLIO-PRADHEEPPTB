export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tagline: string;
  iconName: string;
  href: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "counseling",
    title: "Counseling",
    tagline: "One-on-one psychological support for healing and growth",
    shortDescription:
      "You don’t have to face life’s challenges alone. Pradheep is your trusted partner on your mental health journey. Through one-on-one counseling sessions, Pradheep will help you gain insight, develop coping strategies, and build the resilience needed to overcome obstacles and thrive.",
    fullDescription:
      "Life can bring moments of emotional turmoil, anxiety, grief, relationship strain, or deep confusion. In our confidential, compassionate sessions, we explore the roots of your challenges and work step-by-step toward emotional clarity and renewed vitality.",
    iconName: "HeartHandshake",
    href: "/counselling",
    features: [
      "Individual Stress & Anxiety Management",
      "Emotional Healing & Trauma Recovery",
      "Relationship & Premarital Guidance",
      "Confidential, Empathetic Safe Space"
    ]
  },
  {
    id: "motivational-speaking",
    title: "Motivational Speaking",
    tagline: "Inspiring talks tailored for students, professionals, and institutions",
    shortDescription:
      "No matter where you are in your journey—whether you’re a student, professional, entrepreneur, or simply someone seeking a boost of inspiration—Pradheep offers tailored motivational insights and strategies. From overcoming challenges to finding purpose.",
    fullDescription:
      "Drawing from over two decades of public service, literary storytelling, and deep psychological understanding, Pradheep delivers compelling, humorous, and thought-provoking keynotes that awaken self-belief and ignite purpose.",
    iconName: "Mic",
    href: "/counselling",
    features: [
      "Student Motivation & Exam Confidence",
      "Corporate Leadership & Team Wellness",
      "Overcoming Adversity & Building Grit",
      "Finding Life Purpose & Passion"
    ]
  },
  {
    id: "life-skill-coaching",
    title: "Life Skill Coaching",
    tagline: "Practical personal development for clarity and resilience",
    shortDescription:
      "Are you looking to enhance your communication, leadership, time management, or resilience skills? Pradheep is your trusted partner in personal development. With a wealth of experience and a passion for empowering clients.",
    fullDescription:
      "True personal transformation occurs when psychology meets daily practice. Master essential life skills that improve your decision-making, interpersonal relationships, emotional regulation, and everyday confidence.",
    iconName: "Sparkles",
    href: "/career",
    features: [
      "Effective Communication & Assertiveness",
      "Time & Priority Management",
      "Emotional Intelligence & Mindfulness",
      "Career Alignment & Decision Making"
    ]
  }
];
