// Navigation links
export const navLinks = [
  { id: 'welcome', label: 'WELCOME', href: '#welcome' },
  { id: 'sports', label: 'SPORTS', href: '#sports' },
  { id: 'graduation', label: 'GRADUATION', href: '#graduation' },
  { id: 'portraits', label: 'PORTRAITS', href: '#portraits' },
  { id: 'experience', label: 'EXPERIENCE', href: '#experience' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
  { id: 'about', label: 'ABOUT ME', href: '#about' },
];

// Welcome page content
export const welcomeContent = {
  hero: {
    title: 'WELCOME TO',
    subtitle: 'BLUES ENTERPRISE',
    paragraphs: [
      "Defined by precision. Driven by excellence.",
      "From private celebrations to large-scale events, I craft photography that is clean, cinematic, and elevated. Every frame is intentional. Every detail matters.",
      "Your moments deserve more than documentation — they deserve distinction.",
      "Blues Enterprise delivers timeless imagery built to last."
    ],
    cta: 'LETS RUN IT!!!',
    image: '/images/hero-welcome.jpg'
  },
  bookingPolicies: {
    title: 'BOOKING POLICIES',
    policies: [
      {
        title: 'PAYMENT',
        text: "At the time of booking 1/3 Deposit is required and is non-refundable. The full payment must be completed on the day of shooting or before."
      },
      {
        title: 'CANCELLATIONS & LATENESS',
        text: "The Session will be cancelled if more than 30 minutes late. If you are unable to make your session all deposits will act as a cancellation fee. 48 hours of advance notice of cancellation is required in order to credit the deposit to a different session or 2/3 refund."
      },
      {
        title: 'MUST CONSULT BEFORE BOOKING',
        text: "Use 'Contact Me' to schedule a booking!"
      },
      {
        title: 'EVENT BOOKING TERMS',
        text: "A signed agreement and a non-refundable retainer (25%) are required to secure your event date. Dates are not reserved until both the contract and retainer have been received. The remaining balance is due no later than 48 hours prior to the event date. Cancellations made at least 48 hours prior to the scheduled shoot may be rescheduled to a new date (subject to availability). The retainer remains non-refundable but may be applied toward the rescheduled date."
      }
    ]
  },
  services: {
    title: 'MY SERVICES',
    items: [
      {
        id: 'graduation',
        title: 'GRADUATION',
        description: "Graduation isn't just a cap and gown. It's proof of everything you pushed through to get here.\n\nThe late nights. The setbacks. The growth. The discipline.\n\nI'm here to capture more than a milestone. I capture your personality, your confidence, and the story behind the achievement. Every frame is clean, intentional, and designed to reflect who you are in this moment.\n\nTogether, we'll create images that feel powerful, polished, and true to your journey.\n\nThis isn't just graduation photos.\nIt's the closing of one chapter and the start of what's next.\n\nBook your session today",
        price: '$200',
        image: '/images/service-graduation.jpg'
      },
      {
        id: 'sports',
        title: 'SPORTS',
        description: "From game-day intensity to the quiet work nobody sees, I capture the focus, grit, and discipline you bring every time you compete.\n\nWhether it's explosive action shots, locked-in warmups, team chemistry, or custom-designed sports posters, every frame is intentional — built to showcase your dedication and elevate your presence.\n\nI offer tailored packages including full game coverage, practice sessions, individual athlete shoots, highlight visuals, and cinematic sports graphics. We can shoot at your home field, your gym, or any location that reflects your environment and your grind.\n\nThis isn't just photography.\nIt's building your athletic identity through powerful, polished visuals.",
        price: null,
        cta: 'CONTACT ME FOR PRICING',
        image: '/images/service-sports.jpg'
      },
      {
        id: 'portraits',
        title: 'PORTRAITS',
        description: "Let me catch you in your element: bold, authentic, and most importantly you. I have you covered whether you need fresh headshots, couples pictures, family memories, or unique lifestyle images. I want it to be real, accentuating your narrative and style in every shot. We may shoot anywhere you feel most like yourself, in the streets, or on site.\n\nBook your session today",
        price: '$200',
        image: '/images/service-portraits.jpg'
      }
    ]
  },
  footerCTA: [
    { label: 'ABOUT', text: 'GET TO KNOW ME' },
    { label: 'PORTFOLIO', text: 'VIEW MY WORKS', href: 'https://drive.google.com/drive/folders/1RrTQiWZUbpCcC6svC6DZI_jWdTm1pJCK?usp=sharing' },
    { label: 'CONTACT ME', text: 'GET IN TOUCH' }
  ]
};

// Contact page content
export const contactContent = {
  hero: {
    subtitle: "GET IN TOUCH TO BOOK YOUR SESSION OR DISCUSS YOUR IDEAS. LET ME TELL YOUR STORY",
    title: "LET'S CONNECT!",
    phone: '(954)-825-3988',
    image: '/images/contact-hero.jpg'
  },
  form: {
    fields: {
      name: { label: 'NAME', type: 'text', required: true },
      email: { label: 'EMAIL ADDRESS', type: 'email', required: true },
      phone: { label: 'PHONE NUMBER', type: 'tel', required: true },
      location: { label: 'WHERE ARE YOU LOCATED', type: 'text', required: true },
      packages: {
        label: 'WHICH PHOTO PACKAGE ARE YOU INTERESTED IN?',
        required: true,
        options: [
          'Graduation Package 1',
          'Graduation Package 2',
          'Graduation Package 3',
          'Portrait Photoshoot',
          'Events',
          'Weddings',
          'Sports Photography',
          'Sports Posters'
        ]
      },
      addons: {
        label: 'ADD ON | RUSHED EDIT',
        required: true,
        options: [
          { label: '$50', value: '50' },
          { label: '$75', value: '75' },
          { label: '$100', value: '100' },
          { label: 'No Rush Edit - Take ya time', value: 'none' }
        ]
      },
      referral: {
        label: 'HOW DID YOU HEAR ABOUT ME?',
        required: true,
        options: ['Instagram', 'Facebook', 'Referral', 'Google', 'Other']
      },
      message: { label: 'MESSAGE', type: 'textarea', required: true }
    },
    submitButton: 'SEND MESSAGE',
    emailTo: 'info@bluesenterprise.com'
  }
};

// About page content
export const aboutContent = {
  hero: {
    title: 'ABOUT ME',
    subtitle: 'EVENT PHOTOGRAPHER | SOUTH FLORIDA',
    paragraphs: [
      "I'm a South Florida–based event photographer and founder of Blues Enterprise, specializing in professional, high-level event coverage.",
      "I've photographed high-end venues including DAER Nightclub and Kimpton EPIC Hotel, capturing upscale nightlife, corporate events, and exclusive gatherings. I also document milestone moments such as weddings and private celebrations with the same precision and elevated approach.",
      "My focus is simple: deliver clean, intentional imagery that represents your event at its highest standard.",
      "Based in South Florida and available for professional event coverage throughout the region."
    ],
    cta: "WHAT I'VE BUILT",
    image: '/images/about-hero.jpg'
  },
  degrees: {
    title: 'MY DEGREES',
    items: [
      {
        title: 'MASTER OF BUSINESS',
        emphasis: 'Emphasis: International Business',
        school: 'Pittsburg State University | December 2026',
        description: 'Focused on global business strategies, international marketing, cross-cultural management, and global supply chain operations. Developed expertise in international trade regulations, financial markets, and strategic business planning for multinational enterprises.',
        image: '/images/degree-pitt-state.jpg'
      },
      {
        title: 'BACHELORS OF BUSINESS',
        emphasis: 'Minor: Spanish',
        school: '',
        description: 'Comprehensive business education with a focus on management, finance, and marketing principles. The Spanish minor provides bilingual communication skills essential for international business operations and cross-cultural professional environments.',
        image: '/images/degree-building.jpg'
      }
    ]
  },
  athlete: {
    title: 'IM AN ATHLETE',
    description: "As a former collegiate athlete at Pittsburg State University, I understand the discipline, preparation, and intensity that define competitive performance. Competing as an 800m runner, I learned firsthand what it takes to execute under pressure, stay composed in fast-moving environments, and deliver when it matters most.\n\nThat mindset translates directly into my work behind the camera—anticipating key moments, moving with purpose, and capturing performances with precision and authenticity.",
    image: '/images/athlete-track.jpg'
  },
  dogDad: {
    title: 'IM A DOG DAD',
    description: "I'm not just a passionate photographer and athlete, I'm also a proud dog dad to Ghost, my Siberian Husky and model extraordinaire! Ghost brings joy, energy, and inspiration to my life, and you'll often see him in front of the camera as much as behind it.",
    image: '/images/dog-ghost.jpg'
  },
  testimonials: {
    title: 'TESTIMONIALS',
    items: [
      {
        quote: "I love these so much, Tee! You truly captured the day perfectly. Thank you for your amazing work and attention to detail. These photos mean everything to me, and I couldn't be happier with how they turned out!",
        author: 'BRENNA LAVENDER'
      }
    ],
    cta: 'CONTACT ME',
    image: '/images/testimonial-bg.jpg'
  }
};

// Graduation page content
export const graduationContent = {
  hero: {
    title: 'GRADUATION',
    subtitle: 'AUTHENTIC. INTENTIONAL. 100% YOU.',
    description: "This is more than just a cap and gown, it's the celebration of your perseverance, dedication, and the journey that brought you here. I'm here to capture your personality, your style, and everything that makes this moment special. Together, we'll create images that reflect your journey and accomplishments!",
    cta: 'BOOK TODAY!!!',
    image: '/images/graduation-hero.jpg'
  },
  packages: {
    title: 'PRICING & PACKAGES',
    items: [
      {
        title: 'PACKAGE 1',
        price: '$200',
        features: [
          '1 Outfit',
          '45 Minutes of Shooting Time',
          '20 Edited Photos'
        ],
        image: '/images/grad-package-1.jpg'
      },
      {
        title: 'PACKAGE 2',
        price: '$275',
        features: [
          '2 Outfits',
          '1 Hour and 30 Minutes of Shooting Time',
          '30 Edited Photos'
        ],
        image: '/images/grad-package-2.jpg'
      },
      {
        title: 'PACKAGE 3',
        price: '$350',
        features: [
          '3 Locations',
          '3 Outfits',
          '2 Hours of Shooting Time',
          '45 Edited Photos'
        ],
        image: '/images/grad-package-3.jpg'
      }
    ]
  },
  addons: {
    title: 'ADD ONS | RUSHED EDIT',
    items: [
      {
        title: 'EXPRESS',
        price: '$75',
        subtitle: '3-Day Turnaround',
        description: 'Delivered within 3 days'
      },
      {
        title: 'PRIORITY',
        price: '$150',
        subtitle: '1-2 Day Turnaround',
        description: 'Delivered in 48 hours or less. Your project moves to the top of my editing queue.'
      }
    ]
  },
  gallery: {
    title: 'PHOTO GALLERY',
    images: [
      '/images/gallery-01.jpg',
      '/images/gallery-02.jpg',
      '/images/gallery-03.jpg',
      '/images/gallery-04.jpg',
      '/images/gallery-05.jpg',
      '/images/gallery-06.jpg',
      '/images/gallery-07.jpg',
      '/images/gallery-08.jpg',
      '/images/gallery-09.jpg',
      '/images/gallery-10.jpg',
      '/images/gallery-11.jpg'
    ]
  },
  quoteCTA: {
    quote: "If you're going to try, go all the way.",
    author: 'Charles Bukowski',
    ctaTitle: 'BRING YOUR VISION TO LIFE!',
    ctaText: "CONTACT ME TO BOOK YOUR SESSION OR IF YOU HAVE ANY QUESTIONS. I'M LOOKING FORWARD TO HELPING YOU CAPTURE SOME UNFORGETTABLE MOMENTS!",
    ctaButton: 'BOOK TODAY!!!',
    image: '/images/quote-bg.jpg'
  }
};
