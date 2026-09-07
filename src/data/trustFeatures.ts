export interface TrustFeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const trustFeaturesData: TrustFeatureItem[] = [
  {
    id: "confidentiality",
    title: "Confidentiality",
    description: "Your privacy is our utmost priority. Every conversation and detail remains strictly private, secure, and non-judgmental.",
    iconName: "ShieldCheck"
  },
  {
    id: "support",
    title: "Support 24/7",
    description: "Accessible booking assistance and compassionate care whenever urgent emotional guidance or support is required.",
    iconName: "Clock"
  },
  {
    id: "development",
    title: "Development",
    description: "A continuous focus on holistic personal evolution, cognitive restructuring, and tangible emotional milestones.",
    iconName: "TrendingUp"
  },
  {
    id: "professionalism",
    title: "Professionalism",
    description: "Evidence-based psychological methodologies practiced with deep empathy, ethical standards, and scientific rigor.",
    iconName: "Award"
  },
  {
    id: "experience",
    title: "Work Experience",
    description: "Over 20 years of public service and clinical guidance in Kerala, enriching thousands of individual lives.",
    iconName: "Briefcase"
  },
  {
    id: "reliability",
    title: "Reliability",
    description: "A steady, dependable companion on your healing path with steadfast commitment to your long-term wellness.",
    iconName: "Compass"
  }
];
