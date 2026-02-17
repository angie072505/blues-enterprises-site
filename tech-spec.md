# Wright Rose Cinema - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Routing | React Router DOM |

## 2. Tailwind Configuration

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        'bg-primary': '#000000',
        'bg-secondary': '#1a1a1a',
        'bg-tertiary': '#2d2d2d',
        'accent': '#A64D6E',
        'accent-hover': '#8B3D5A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B3B3B3',
        'text-muted': '#666666',
        'border-subtle': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.15em',
      },
      width: {
        'sidebar': '180px',
      },
    }
  }
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)
- Button (customized: no radius, uppercase, accent bg)
- Input (customized: white bg, no radius)
- Checkbox (customized: square, accent checked)
- Textarea (customized: white bg)
- Select (customized: white bg)

### Custom Components

**Layout Components:**
| Component | Props | Description |
|-----------|-------|-------------|
| `Sidebar` | `activePage: string` | Fixed left navigation |
| `MainLayout` | `children: ReactNode` | Wrapper with sidebar + content |
| `PageWrapper` | `children: ReactNode` | AnimatePresence wrapper |

**Section Components:**
| Component | Props | Description |
|-----------|-------|-------------|
| `HeroSection` | `image, title, subtitle, text, cta` | Hero with image + overlay card |
| `BookingPolicies` | - | 3-column policy grid |
| `ServiceCard` | `title, description, price, image, reverse?` | Service showcase |
| `PackageCard` | `title, price, features, image` | Pricing package |
| `PhotoGallery` | `images: string[]` | Masonry gallery grid |
| `TestimonialSlider` | `testimonials: Testimonial[]` | Quote slider with nav |
| `ContactForm` | - | Full contact form |
| `DegreeCard` | `title, emphasis, school, date, description, image` | Education entry |
| `QuoteCTA` | `quote, author, ctaTitle, ctaText, ctaButton` | Quote + CTA section |

**UI Components:**
| Component | Props | Description |
|-----------|-------|-------------|
| `SectionTitle` | `children` | Centered section heading |
| `FooterCTA` | - | 3-column footer links |
| `SocialLinks` | - | Instagram + LinkedIn icons |

## 4. Animation Implementation Plan

| Interaction | Tech | Implementation |
|-------------|------|----------------|
| Page Load | Framer Motion | `initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`, duration 0.5s |
| Sidebar Entrance | Framer Motion | `initial={{ x: -20, opacity: 0 }}`, `animate={{ x: 0, opacity: 1 }}`, duration 0.4s |
| Hero Image | Framer Motion | `initial={{ scale: 1.02 }}`, `animate={{ scale: 1 }}`, duration 0.8s |
| Text Card | Framer Motion | `initial={{ opacity: 0, x: 20 }}`, `animate={{ opacity: 1, x: 0 }}`, delay 0.2s |
| Nav Link Hover | Tailwind + CSS | `hover:translate-x-1 hover:opacity-100 transition-all duration-200` |
| Button Hover | Tailwind | `hover:bg-accent-hover hover:scale-[1.02] transition-all duration-200` |
| Button Active | Tailwind | `active:scale-[0.98]` |
| Image Hover | Tailwind | `hover:scale-[1.03] transition-transform duration-400` |
| Scroll Reveal | Framer Motion | `whileInView={{ opacity: 1, y: 0 }}`, `initial={{ opacity: 0, y: 30 }}` |
| Gallery Hover | Tailwind | `group-hover:opacity-100` overlay fade |
| Testimonial Slide | Framer Motion | `AnimatePresence` with slide direction |
| Input Focus | Tailwind | `focus:ring-2 focus:ring-accent transition-shadow` |

### Animation Timing Constants
```typescript
const ANIMATION = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    page: 0.8,
  },
  ease: {
    default: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },
  delay: {
    stagger: 0.1,
    section: 0.2,
  }
};
```

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/           # Generated image assets
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn components
│   │   ├── layout/       # Sidebar, MainLayout
│   │   └── sections/     # Page sections
│   ├── pages/            # Route pages
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilities
│   ├── data/             # Static content
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 6. Package Installation

```bash
# Initialize project
bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "Wright Rose Cinema"

# Install animation library
npm install framer-motion

# Install icons
npm install lucide-react

# Install router
npm install react-router-dom
```

## 7. Route Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `WelcomePage` | Home with hero, policies, services |
| `/contact` | `ContactPage` | Hero + contact form |
| `/about` | `AboutPage` | Bio, degrees, athlete, dog dad, testimonials |
| `/graduation` | `GraduationPage` | Hero, packages, gallery, quote |
| `/sports` | `SportsPage` | Service description |
| `/portraits` | `PortraitsPage` | Service description |
| `/experience` | `ExperiencePage` | Experience/portfolio |

## 8. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 768px | Sidebar becomes hamburger menu, single column |
| Tablet | 768-1024px | Sidebar collapses to icons, 2-column grids |
| Desktop | > 1024px | Full sidebar, multi-column layouts |

## 9. Performance Considerations

- Use `will-change` on animated elements
- Lazy load images below the fold
- Use `transform` and `opacity` for animations (GPU accelerated)
- Implement `prefers-reduced-motion` media query
- Optimize images with WebP format

## 10. Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast ratio > 4.5:1
- Reduced motion support
