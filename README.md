# Pradheep Pattambi — Official Personal Brand Website

A responsive multi-page personal website for **Pradheep N.V. (Pradheep Pattambi)**, a psychologist, motivational speaker, and life skill coach based in Kerala.

Built with **Next.js (App Router)**, **Tailwind CSS**, and **TypeScript**, designed with a warm ivory/cream background, deep forest green typography, refined serif headings (`Playfair Display`), clean modern sans-serif body (`Plus Jakarta Sans`), and generous editorial spacing.

---

## 🌿 Brand Identity & Design System

- **Brand Name:** Pradheep Pattambi
- **Professional Name:** Pradheep N.V.
- **Primary Color:** Deep Forest Green (`#143022` / `#0E2016`)
- **Background Color:** Warm Ivory / Cream (`#FAF7F2`)
- **Accent Color:** Muted Olive Green (`#5E7356`)
- **Luxury Highlight:** Warm Sand / Ochre (`#C5A880`)
- **Serif Font:** Playfair Display
- **Sans-Serif Font:** Plus Jakarta Sans

---

## 📄 Pages & Architecture

1. **Home (`/`)**:
   - Split-screen hero featuring the official photo, clean copy, and dual CTAs.
   - About preview with bio teaser, literary background, and philosophy.
   - Services section: Counseling, Motivational Speaking, and Life Skill Coaching.
   - Curated portfolio/gallery preview.
   - Client testimonials: Muhsin Kolathur, Shoukath Parappur, and Arshid Arif Kattupara.
   - "Let's take the next step together" CTA banner.
   - Accordion FAQ answering 7 core questions regarding psychological counseling.

2. **About (`/about`)**:
   - In-depth biography: Pattambi origins, parents Sri. Narayanan Nair & Smt. Lakshmi Amma, graduation with distinction, 20+ years of Kerala Government service.
   - Literary achievements: Author of 3 Malayalam poetry books, storytelling, and martial arts enthusiasm.
   - Direct WhatsApp CTA (`https://wa.link/jc9lgn`).
   - 3 Pillars of Expertise & core counseling philosophy.
   - Full-width testimonials and FAQ.

3. **Gallery (`/gallery`)**:
   - Filterable categories: *All*, *Counseling & Guidance*, *Workshops & Speaking*, *Personal Growth*, *Moments & Memories*.
   - Balanced editorial grid with hover interactions.
   - Interactive Lightbox modal to view full-resolution photographs with descriptions.

4. **Counselling in Palakkad (`/counselling`)**:
   - Focused therapeutic narrative for Palakkad and Pattambi.
   - Direct WhatsApp appointment link (`https://wa.link/n8jdj7`).
   - 3 specialized therapeutic pathways.
   - 6-item Trust Grid: *Confidentiality*, *Support 24/7*, *Development*, *Professionalism*, *Work Experience*, *Reliability*.
   - Testimonials and clinical FAQ.

5. **Career Counselling in Pattambi (`/career`)**:
   - Tailored guidance for 4 audiences: *Students after +2*, *Degree students*, *Job seekers*, and *Career changers*.
   - Why career guidance matters: breaking free from family pressure, peer herd mentality, and lack of awareness.
   - 3-step structured methodology & WhatsApp consultation CTA.

6. **Contact (`/contact`)**:
   - Direct cards: Phone (`+91 9567-654-880`), Email (`info@pradheeppattambi.com`), Address (`Sree Nilayam, Umikkunnu Pattambi`).
   - Interactive confidential contact form with instant validation and feedback.
   - Quick WhatsApp link & social links (Facebook, Instagram, WhatsApp).

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm 9+

### Installation & Run Locally
```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Open in browser
http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```

---

## 🌐 Deployment to Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com).
All static pages, responsive images, and fonts are pre-rendered at build time with zero configuration needed.

---

## 📷 Managing & Replacing Photos

All images are stored in `public/images/`:
- `pradheep-hero.png`: Main hero banner photo
- `pradheep-about.webp`: Portrait for About Me preview
- `pradheep-speaking-1.webp`: Speaking & keynote photo
- `pradheep-counselling.webp`: One-on-one session photo
- `pradheep-portrait.webp`: Formal biography portrait
- `pradheep-speaking-2.webp`: Seminar & interactive workshop photo
- `pradheep-career.webp`: Career counselling photo

To replace any photo, simply drop your new image with the same filename in `public/images/` or update `src/data/gallery.ts`.
