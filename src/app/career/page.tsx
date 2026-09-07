import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Compass,
  RefreshCw,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  Lightbulb
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Career Counselling in Pattambi | Pradheep N.V. (Psychologist)",
  description:
    "Expert, psychology-based career counselling in Pattambi for +2 students, college graduates, job seekers, and career changers. Discover your true strengths."
};

const audienceGroups = [
  {
    title: "Students After +2",
    icon: GraduationCap,
    description:
      "Struggling to choose between engineering, medicine, humanities, commerce, design, or vocational streams? We help you navigate choices based on cognitive strength rather than peer trend.",
    points: [
      "Stream & Degree selection guidance",
      "Entrance exam mindset & stress relief",
      "Matching natural aptitudes with future courses"
    ]
  },
  {
    title: "Degree Students",
    icon: Compass,
    description:
      "Nearing graduation and unsure of the next step? Whether to pursue higher studies (Master’s/PhD), civil services, or enter the corporate world, gain absolute clarity.",
    points: [
      "Post-graduation path alignment",
      "Skill gap identification",
      "Confidence building for campus recruitment"
    ]
  },
  {
    title: "Job Seekers",
    icon: Briefcase,
    description:
      "Facing interview anxiety, continuous rejection, or uncertainty about the right job role? Learn to position your unique capabilities with conviction and resilience.",
    points: [
      "Identifying your market niche",
      "Interview fear & communication coaching",
      "Building emotional resilience during search"
    ]
  },
  {
    title: "Career Changers",
    icon: RefreshCw,
    description:
      "Feeling stuck, burned out, or unfulfilled in your current profession? Plan a deliberate, risk-managed transition into a vocation aligned with your authentic personality.",
    points: [
      "Evaluating transferable skills",
      "Overcoming mid-career fear of change",
      "Designing a step-by-step transition plan"
    ]
  }
];

export default function CareerPage() {
  return (
    <div className="overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. CAREER HERO — CIRCULAR PHOTO ON LEFT, GUIDANCE DETAILS ON RIGHT */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Circular Photo Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[390px] xl:h-[390px] rounded-full bg-white border border-[#EAE2D3] shadow-sm flex items-center justify-center p-3 sm:p-4 shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/photo-2.png"
                    alt="Career Counselling and Student Mentorship with Pradheep N.V."
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 390px"
                  />
                </div>
              </div>
            </div>

            {/* Right: Editorial Typography & Actions */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/60 w-fit">
                <span className="w-2 h-2 rounded-full bg-olive-600" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-olive-800">
                  PATTAMBI CAREER GUIDANCE
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl text-forest-950 font-bold tracking-tight leading-[1.1]">
                Confused About Your Career Path?
              </h1>

              <p className="text-muted-text text-base sm:text-lg max-w-2xl leading-relaxed">
                &ldquo;Get expert, psychology-based career counselling in Pattambi to discover your
                strengths, choose the right path, and build a confident future.&rdquo;
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm sm:text-base font-medium tracking-wide shadow-sm group"
                >
                  <span>Book Your Career Session</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=919567654880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-forest-900/30 text-forest-950 bg-white hover:bg-[#F3EDE2] transition-colors text-sm sm:text-base font-medium tracking-wide"
                >
                  <span>Chat with Pradheep Sir</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CAREER OVERVIEW CONTENT — REFINED SMALLER PHOTO */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Col: 100% visible, object-contain */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden shadow-md border border-[#EAE2D3] bg-white aspect-[4/5] p-3 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/photo-3.png"
                    alt="Career Guidance in Pattambi"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
              </div>
            </div>

            {/* Narrative Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-olive-600" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-olive-800">
                  CLARITY OVER CONFUSION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-bold leading-tight tracking-tight">
                Find the Right Career with the Right Guidance
              </h2>

              <div className="space-y-4 text-muted-text text-base sm:text-lg leading-relaxed font-sans">
                <p>
                  Choosing a career is one of the most important decisions in life — but
                  many students and young professionals in Pattambi feel confused and
                  overwhelmed.
                </p>

                <p>
                  Through my career counselling in Pattambi, I help you understand yourself
                  better and make the right career decisions based on your interests,
                  abilities, and personality. This is not generic advice — it is
                  personalised guidance designed specifically for you.
                </p>

                <p>
                  By taking into account your emotional temperament, analytical strengths,
                  and authentic aspirations, we turn vague anxieties into an actionable,
                  inspiring plan.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm sm:text-base font-medium tracking-wide shadow-sm group"
                >
                  <span>Book a Session</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY GUIDANCE MATTERS — BRIGHT SOFT CREAM */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8F5EE] border-t border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="THE HIDDEN RISKS"
            title="Why You Shouldn’t Leave Your Career to Guesswork"
            description="Navigating modern careers without psychological clarity often leads to years of silent frustration."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FEE2E2] text-red-700 flex items-center justify-center">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-forest-950 font-bold mb-2">
                Family & Social Pressure
              </h3>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Well-meaning expectations from relatives often push students into conventional
                fields where their true talents remain suppressed, leading to academic exhaustion and low morale.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-olive-700" />
              </div>
              <h3 className="text-2xl text-forest-950 font-bold mb-2">
                Peer Influence & Herd Mentality
              </h3>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Choosing a path simply because friends or classmates are pursuing it can result in
                a mismatch between your organic learning style and demanding course syllabi.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-olive-700" />
              </div>
              <h3 className="text-2xl text-forest-950 font-bold mb-2">
                Lack of Career Awareness
              </h3>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Hundreds of fulfilling, high-impact career alternatives exist today beyond the traditional
                handful. Expert guidance unlocks possibilities perfectly matched to your strengths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHO SHOULD CONSIDER CAREER COUNSELLING? — BRIGHT LIGHT BEIGE / IVORY */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F5EFEB] text-forest-950 border-b border-[#D8CCA8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="TARGETED GUIDANCE"
            title="Who Should Consider Career Counselling?"
            description="Whether at the onset of higher education or re-evaluating decades in the workplace, tailored clarity is available."
            align="center"
            light={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {audienceGroups.map((group) => {
              const IconComp = group.icon;
              return (
                <div
                  key={group.title}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center shrink-0">
                      <IconComp className="w-7 h-7 text-olive-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-forest-950">
                        {group.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-olive-700 font-semibold">
                        Pattambi & Palakkad Mentorship
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                    {group.description}
                  </p>

                  <ul className="space-y-2.5 pt-2 border-t border-[#F0EAE0]">
                    {group.points.map((pt, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-forest-950"
                      >
                        <CheckCircle2 className="w-4 h-4 text-olive-600 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. MY APPROACH TO CAREER COUNSELLING — BRIGHT WARM CREAM */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <SectionHeading
            label="THE METHODOLOGY"
            title="My Approach to Career Counselling"
            description="Rooted in deep empathy, psychological evaluation, and practical career navigation."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm">
              <span className="text-3xl text-olive-700 font-bold block mb-3">
                01.
              </span>
              <h4 className="text-xl font-bold text-forest-950 mb-2">
                Understanding Interests & Temperament
              </h4>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                Exploring what genuinely energizes you, your core values, learning styles, and natural personality preferences.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8F5EE] border border-[#EAE2D3] shadow-sm">
              <span className="text-3xl text-forest-900 font-bold block mb-3">
                02.
              </span>
              <h4 className="text-xl font-bold text-forest-950 mb-2">
                Mapping Inherent Strengths
              </h4>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                Evaluating cognitive proficiencies, problem-solving skills, and emotional resilience to identify high-probability career domains.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm">
              <span className="text-3xl text-olive-700 font-bold block mb-3">
                03.
              </span>
              <h4 className="text-xl font-bold text-forest-950 mb-2">
                Step-by-Step Action Roadmap
              </h4>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                Guiding you with specific educational institutions, skill milestones, timeline planning, and confidence-building habits.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="https://api.whatsapp.com/send?phone=919567654880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-base font-medium shadow-sm group"
            >
              <span>Let’s Talk</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
