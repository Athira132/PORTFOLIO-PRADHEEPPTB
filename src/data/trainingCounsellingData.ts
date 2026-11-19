export interface ProgramItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  highlights: string[];
  category: "training" | "therapeutic";
}

export interface TrainingFAQItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * Programs from Poster 1:
 * "Professional Training & Personal Development" (Training Sessions)
 */
export const trainingPrograms: ProgramItem[] = [
  {
    id: "parenting",
    title: "Parenting",
    tagline: "Empathetic communication and positive child guidance",
    description:
      "Nurturing family relationships through modern psychological approaches. Learn mindful communication, understand child and adolescent developmental psychology, handle emotional outbursts constructively, and establish loving, positive discipline without conflict.",
    iconName: "Users",
    highlights: [
      "Child & adolescent behavioral insight",
      "Emotion-focused communication strategies",
      "Positive discipline without punishment",
      "Nurturing emotional safety at home"
    ],
    category: "training"
  },
  {
    id: "couple-therapy-training",
    title: "Couple Therapy",
    tagline: "Rebuilding emotional closeness and mutual trust",
    description:
      "Guided sessions structured to help partners navigate recurring disputes, recognize attachment patterns, restore mutual respect, and develop compassionate dialogue for long-term relationship health.",
    iconName: "Heart",
    highlights: [
      "De-escalating communication roadblocks",
      "Rebuilding trust and emotional warmth",
      "Conflict resolution & mutual agreements",
      "Strengthening partnership foundations"
    ],
    category: "training"
  },
  {
    id: "premarital-counselling",
    title: "Pre-marital Counselling",
    tagline: "Foundational clarity before stepping into marriage",
    description:
      "A proactive, thoughtful program for couples preparing for marital life. Explore essential life expectations, personality compatibility, financial viewpoints, family relationship management, and healthy conflict resolution skills before tying the knot.",
    iconName: "Sparkles",
    highlights: [
      "Expectation alignment and values exploration",
      "Personality dynamics & emotional styles",
      "Constructive communication habits",
      "Navigating family and societal expectations"
    ],
    category: "training"
  },
  {
    id: "stress-management",
    title: "Stress Management",
    tagline: "Science-backed techniques for calm and resilience",
    description:
      "Comprehensive training to recognize physiological and mental stress cues, prevent chronic burnout, regulate the autonomic nervous system, and establish sustainable daily balance in personal and professional environments.",
    iconName: "ShieldCheck",
    highlights: [
      "Stress trigger analysis and somatic awareness",
      "Nervous system relaxation exercises",
      "Cognitive reframing for workplace stress",
      "Daily work-life equilibrium protocols"
    ],
    category: "training"
  },
  {
    id: "study-skills",
    title: "Study Skills",
    tagline: "Cognitive focus, memory enhancement & exam readiness",
    description:
      "Designed specifically for students seeking academic clarity and peak performance. Learn effective memorization strategies, active recall, structured time management, and techniques to overcome exam-related anxiety and procrastination.",
    iconName: "BookOpen",
    highlights: [
      "Memory retention & active recall strategies",
      "Overcoming exam anxiety & mental blocks",
      "Focus enhancement and distraction control",
      "Structured study scheduling & priority mapping"
    ],
    category: "training"
  },
  {
    id: "hypnotism",
    title: "Hypnotism",
    tagline: "Subconscious alignment and mental focus mastery",
    description:
      "Professional hypnosis training and sessions to access deeper subconscious states, release deep-seated mental resistance, enhance self-confidence, and align internal focus with positive personal aspirations.",
    iconName: "Disc",
    highlights: [
      "Subconscious mind mechanics and relaxation",
      "Self-hypnosis tools for stress relief",
      "Overcoming negative subconscious scripts",
      "Enhancing focus and emotional composure"
    ],
    category: "training"
  },
  {
    id: "addiction-support",
    title: "Addiction Support",
    tagline: "Compassionate guidance for habit breaking and recovery",
    description:
      "A non-judgmental, structured counselling framework providing psychological tools to understand impulse patterns, develop trigger awareness, prevent relapse, and rebuild healthy, fulfilling routines.",
    iconName: "LifeBuoy",
    highlights: [
      "Trigger mapping and impulse awareness",
      "Cognitive and behavioral coping strategies",
      "Relapse prevention and accountability",
      "Rebuilding self-esteem and family trust"
    ],
    category: "training"
  },
  {
    id: "nlp-training",
    title: "NLP",
    tagline: "Neuro-Linguistic Programming for personal excellence",
    description:
      "Delivered by NLP Master Trainer Pradheep Pattambi. Master the linguistic and neurological patterns that govern thoughts, dissolve limiting beliefs, enhance interpersonal influence, and install winning behavioral patterns.",
    iconName: "Brain",
    highlights: [
      "Cognitive reframing and internal dialog shift",
      "Effective linguistic modeling techniques",
      "Anchoring peak emotional resource states",
      "Goal setting and rapid behavioral alignment"
    ],
    category: "training"
  }
];

/**
 * Services from Poster 2:
 * "Therapeutic Counselling"
 */
export const therapeuticServices: ProgramItem[] = [
  {
    id: "cbt",
    title: "CBT (Cognitive Behavioural Therapy)",
    tagline: "Identify, reframe, and transform unhelpful thought loops",
    description:
      "A structured, time-tested psychotherapy modality that examines how thoughts influence emotions and behaviors. Clients learn practical cognitive tools to challenge catastrophic thinking, manage anxiety, and develop healthier coping habits.",
    iconName: "Brain",
    highlights: [
      "Cognitive restructuring of automatic thoughts",
      "Behavioral activation and exposure tools",
      "Evidence-based anxiety and mood management",
      "Practical exercises for everyday emotional balance"
    ],
    category: "therapeutic"
  },
  {
    id: "dbt",
    title: "DBT (Dialectical Behaviour Therapy)",
    tagline: "Emotional regulation and distress tolerance skills",
    description:
      "A compassionate therapeutic framework combining cognitive strategies with mindfulness. Especially beneficial for individuals experiencing intense emotional fluctuations, impulsivity, or difficulties in interpersonal relationships.",
    iconName: "Waves",
    highlights: [
      "Mindfulness and non-judgmental awareness",
      "Distress tolerance during crisis moments",
      "Emotional regulation techniques",
      "Interpersonal effectiveness and boundary setting"
    ],
    category: "therapeutic"
  },
  {
    id: "emdr",
    title: "EMDR (Trauma)",
    tagline: "Eye Movement Desensitization and Reprocessing",
    description:
      "An established therapeutic approach recognized worldwide for processing trauma and distressing life events. EMDR facilitates the brain's natural healing mechanisms to reprocess traumatic memories and reduce related emotional distress.",
    iconName: "Eye",
    highlights: [
      "Safe, structured desensitization protocols",
      "Reprocessing of past emotional wounds and trauma",
      "Reduction of physiological hyperarousal",
      "Cultivating present emotional stability and safety"
    ],
    category: "therapeutic"
  },
  {
    id: "couple-therapy-counselling",
    title: "Couple Therapy",
    tagline: "Clinical relationship restoration and conflict repair",
    description:
      "A dedicated, safe clinical space where couples can explore marital distress, resolve deep-seated conflicts, address infidelity or trust concerns, and re-establish mutually supportive companionship.",
    iconName: "HeartHandshake",
    highlights: [
      "Neutral, non-judgmental mediation",
      "Rebuilding vulnerable emotional communication",
      "Resolving longstanding marital conflicts",
      "Reviving mutual respect and companionship"
    ],
    category: "therapeutic"
  },
  {
    id: "sex-therapy",
    title: "Sex Therapy",
    tagline: "Confidential guidance for intimacy and psychosexual health",
    description:
      "Strictly confidential, clinical psychological counselling addressing psychosexual concerns, performance anxiety, intimacy barriers, desire discrepancies, and relational sexual wellness in a professional, empathetic setting.",
    iconName: "Shield",
    highlights: [
      "100% confidential and non-judgmental setting",
      "Addressing anxiety-induced psychosexual issues",
      "Fostering healthy communication between partners",
      "Restoring relational intimacy and comfort"
    ],
    category: "therapeutic"
  },
  {
    id: "hypnotic-therapy",
    title: "Hypnotic Therapy",
    tagline: "Clinical hypnotherapy for deep subconscious relief",
    description:
      "Guided hypnotherapy sessions designed to address subconscious tension, specific phobias, psychosomatic stress, and sleep disturbances, enabling deep relaxation and supportive cognitive suggestion.",
    iconName: "Target",
    highlights: [
      "Accessing calm, focused hypnotic states",
      "Addressing anxiety, fears, and internal stress",
      "Somatic relaxation for improved sleep quality",
      "Strengthening subconscious self-belief"
    ],
    category: "therapeutic"
  },
  {
    id: "nlp-therapies",
    title: "NLP Therapies",
    tagline: "Neurological reframing for rapid emotional liberation",
    description:
      "Specialized therapeutic interventions using Neuro-Linguistic Programming techniques such as timeline exploration, submodality shifts, and collapsing emotional anchors that maintain old patterns of distress.",
    iconName: "Zap",
    highlights: [
      "Collapsing limiting emotional triggers",
      "Timeline techniques for perspective shift",
      "Overcoming specific fears and mental blocks",
      "Instilling resilient, positive emotional anchors"
    ],
    category: "therapeutic"
  },
  {
    id: "meditation",
    title: "Meditation",
    tagline: "Mindfulness and contemplative stillness practices",
    description:
      "Integrative mindfulness and breathwork practices that quiet mental clutter, reduce autonomic nervous system arousal, foster present-moment grounding, and nurture inner clarity and emotional equilibrium.",
    iconName: "SunMedium",
    highlights: [
      "Guided mindfulness and focused breath regulation",
      "Calming autonomic nervous system responses",
      "Developing non-reactive emotional awareness",
      "Establishing sustainable home meditation habits"
    ],
    category: "therapeutic"
  }
];

/**
 * Frequently Asked Questions
 */
export const trainingFAQs: TrainingFAQItem[] = [
  {
    id: "faq-q1",
    question: "What counselling services are available in Pattambi?",
    answer:
      "At The Light Training and Counselling Centre in Pattambi, clients have access to a wide range of evidence-based psychological and therapeutic services. These include Cognitive Behavioural Therapy (CBT), Dialectical Behaviour Therapy (DBT), EMDR for trauma processing, Couple Therapy, Sex Therapy, Hypnotic Therapy, NLP Therapies, and guided mindfulness meditation. Each session is conducted in a strictly confidential, empathetic environment tailored to individual and relationship needs."
  },
  {
    id: "faq-q2",
    question: "What training programs are offered?",
    answer:
      "We offer specialized personal development and psychological training programs covering Parenting Guidance, Couple Therapy, Pre-marital Counselling, Stress Management, Study Skills & Exam Readiness for students, Hypnotism & Subconscious Mind Training, Addiction Support, and Neuro-Linguistic Programming (NLP) training led by NLP Master Trainer Pradheep Pattambi."
  },
  {
    id: "faq-q3",
    question: "How can I book a counselling session?",
    answer:
      "Booking an appointment is quick and convenient. You can call directly at +91 9567654880, send a message through our official WhatsApp booking line, or click the 'Book a Consultation' button on this page to select your preferred date and time. Both in-person consultations at our Pattambi centre and online video consultations are available."
  },
  {
    id: "faq-q4",
    question: "What is NLP training?",
    answer:
      "Neuro-Linguistic Programming (NLP) is a practical psychological discipline that studies how thought processes (neuro), communication styles (linguistic), and behavioral patterns (programming) interact. NLP training helps individuals reframe restrictive beliefs, overcome internal obstacles, enhance interpersonal influence, and develop high-performance habits for career and personal life."
  },
  {
    id: "faq-q5",
    question: "Where is The Light Training and Counselling Centre located?",
    answer:
      "The centre is centrally situated in Pattambi, Palakkad District, Kerala. It provides a quiet, serene, and confidential setting accessible to individuals and families from Pattambi, Shornur, Cherpulassery, Ottapalam, Perinthalmanna, and surrounding areas across Kerala."
  },
  {
    id: "faq-q6",
    question: "Are counselling sessions confidential?",
    answer:
      "Yes, absolute confidentiality is the cornerstone of our practice. All consultations, therapeutic disclosures, personal histories, and notes strictly follow professional psychological ethics and privacy standards. Your privacy and dignity are guaranteed at all times."
  }
];

