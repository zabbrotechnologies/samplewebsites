// Centralized Project Configuration for VERHOST Digital Works Showcase
// 20 Projects structured across 5 distinct sections (4 projects per section)

export const SECTIONS = [
  {
    number: '01',
    category: 'E-COMMERCE',
    slug: 'ecommerce',
    count: '04 PROJECTS',
  },
  {
    number: '02',
    category: 'BUSINESS',
    slug: 'business',
    count: '04 PROJECTS',
  },
  {
    number: '03',
    category: 'LANDING',
    slug: 'landing',
    count: '04 PROJECTS',
  },
  {
    number: '04',
    category: 'PORTFOLIO',
    slug: 'portfolio',
    count: '04 PROJECTS',
  },
  {
    number: '05',
    category: 'CREATIVE',
    slug: 'creative',
    count: '04 PROJECTS',
  }
];

export const projects = [
    // SECTION 01: E-COMMERCE
  {
    id: 'maxywalk',
    number: '01',
    title: 'MAXYWALK',
    category: 'E-COMMERCE',
    sectionSlug: 'ecommerce',
    year: '2026',
    client: 'MAXYWALK Leather Craft',
    description: 'Handcrafted full-grain leather footwear, bespoke comfort slippers, and artisanal accessories made in Avadi, Chennai.',
    deliverables: ['Handcrafted Footwear', 'Full-Grain Leather', 'Express Ordering'],
    demoUrl: 'https://maxywalk.vercel.app/',
    featured: true,
  },
  {
    id: 'lumora-living',
    number: '02',
    title: 'LUMORA LIVING',
    category: 'E-COMMERCE',
    sectionSlug: 'ecommerce',
    year: '2026',
    client: 'Lumora Living Studio',
    description: 'Premium home décor and furniture e-commerce featuring artisanal oak furniture, travertine tables, and ambient alabaster luminaires.',
    deliverables: ['Curated Interiors', 'White-Glove Delivery', 'Artisanal Oak'],
    demoUrl: null,
    featured: false,
  },
  {
    id: 'chronix',
    number: '03',
    title: 'CHRONIX',
    category: 'E-COMMERCE',
    sectionSlug: 'ecommerce',
    year: '2026',
    client: 'Chronix Horology Genève',
    description: 'Haute Horlogerie e-commerce featuring handcrafted automatic chronographs, sapphire crystal timepieces, and aerospace titanium cases.',
    deliverables: ['Haute Horlogerie', 'Grade 5 Titanium', 'Swiss Calibre'],
    demoUrl: null,
    featured: true,
  },
  {
    id: 'glowe',
    number: '04',
    title: 'GLOWÉ',
    category: 'E-COMMERCE',
    sectionSlug: 'ecommerce',
    year: '2026',
    client: 'GLOWÉ Botanical Laboratories',
    description: 'Botanical science and clean barrier dermatology featuring custom skin ritual diagnostics, bio-compatible ceramides, and fermented prebiotic waters.',
    deliverables: ['Botanical Science', 'Skin Ritual Finder', 'Barrier Formulations'],
    demoUrl: null,
    featured: true,
  },

  // SECTION 02: BUSINESS
  {
    id: 'atelier',
    number: '05',
    title: 'ATELIER',
    category: 'BUSINESS',
    sectionSlug: 'business',
    year: '2026',
    client: 'Atelier Architecture & Interiors',
    description: 'Award-winning architecture and interior design studio curating tactile spatial environments, residential pavilions, and material research.',
    deliverables: ['Architectural Field Journal', 'Interactive Material Library', 'Spatial Archive'],
    demoUrl: null,
    featured: true,
  },
  {
    id: 'greentech',
    number: '06',
    title: 'GREENTECH',
    category: 'BUSINESS',
    sectionSlug: 'business',
    year: '2026',
    client: 'GreenTech Energy',
    description: 'Industrial clean energy platform with live hydrogen telemetry, turbine monitoring, and ESG reports.',
    demoUrl: null,
    theme: {
      mode: 'dark',
      bg: '#0D131A',
      accent: '#22C55E',
      brand: 'GREENTECH',
      headline: 'Engineering a Cleaner Tomorrow.',
      sub: 'Grid-scale offshore wind and zero-carbon battery storage.',
      mockupType: 'turbine'
    }
  },
  {
    id: 'nexora',
    number: '07',
    title: 'NEXORA',
    category: 'BUSINESS',
    sectionSlug: 'business',
    year: '2026',
    client: 'Nexora Strategy Group',
    description: 'Strategic business advisory platform for modern enterprise growth, digital restructuring, and capital.',
    demoUrl: null,
    theme: {
      mode: 'light',
      bg: '#F8F9F8',
      accent: '#169B50',
      brand: 'NEXORA',
      headline: 'Your Growth Our Strategy',
      sub: 'Data-driven advisory for market expansion and transformation.',
      mockupType: 'growth'
    }
  },
  {
    id: 'solvix',
    number: '08',
    title: 'SOLVIX',
    category: 'BUSINESS',
    sectionSlug: 'business',
    year: '2026',
    client: 'Solvix Advisory',
    description: 'Executive advisory firm platform with sharp monochrome composition and transatlantic case studies.',
    demoUrl: '/demos/valence-capital/index.html',
    theme: {
      mode: 'dark',
      bg: '#111317',
      accent: '#64748B',
      brand: 'SOLVIX',
      headline: 'Digital Solutions For Tomorrow',
      sub: 'Private equity guidance and infrastructure investments.',
      mockupType: 'geometric'
    }
  },

  // SECTION 03: LANDING
  {
    id: 'creativio',
    number: '09',
    title: 'CREATIVIO',
    category: 'LANDING',
    sectionSlug: 'landing',
    year: '2026',
    client: 'Creativio Collective',
    description: 'High-conversion agency landing page with dynamic pastel gradients and fluid typography choreography.',
    demoUrl: null,
    theme: {
      mode: 'light',
      bg: '#FAF6FE',
      accent: '#8B5CF6',
      brand: 'CREATIVIO',
      headline: 'Turn Ideas Into Reality',
      sub: 'Bespoke branding campaigns and creative engineering.',
      mockupType: 'gradient'
    }
  },
  {
    id: 'synthora',
    number: '10',
    title: 'SYNTHORA',
    category: 'LANDING',
    sectionSlug: 'landing',
    year: '2026',
    client: 'Neural Synthetics Corp',
    description: 'AI product landing experience for next-generation intelligence, model runtimes, and sub-millisecond inference.',
    demoUrl: '/demos/synapse-engine/index.html',
    theme: {
      mode: 'dark',
      bg: '#0A0E0C',
      accent: '#169B50',
      brand: 'SYNTHORA',
      headline: 'Neural Synthetics',
      sub: 'Autonomous cognitive runtimes across distributed clusters.',
      mockupType: 'cyberpunk'
    }
  },
  {
    id: 'devflow',
    number: '11',
    title: 'DEVFLOW',
    category: 'LANDING',
    sectionSlug: 'landing',
    year: '2026',
    client: 'DevFlow Systems',
    description: 'Developer workspace and cloud pipeline conversion portal celebrating zero-friction deployment.',
    demoUrl: null,
    theme: {
      mode: 'light',
      bg: '#F5F8F6',
      accent: '#10B981',
      brand: 'DEVFLOW',
      headline: 'Build Without Limits',
      sub: 'Instant serverless infrastructure and automated edge testing.',
      mockupType: 'cubes'
    }
  },
  {
    id: 'spacen',
    number: '12',
    title: 'SPACEN',
    category: 'LANDING',
    sectionSlug: 'landing',
    year: '2026',
    client: 'Spacen Interactive',
    description: 'Creative network platform where designers and technical creators collaborate on experimental software.',
    demoUrl: null,
    theme: {
      mode: 'dark',
      bg: '#0B0B0E',
      accent: '#A855F7',
      brand: 'SPACEN',
      headline: 'Where Creators Connect',
      sub: 'Curated peer networks, live crits, and creative grants.',
      mockupType: 'sphere'
    }
  },

  // SECTION 04: PORTFOLIO
  {
    id: 'listit',
    number: '13',
    title: 'LISTIT ARCHIVE',
    category: 'PORTFOLIO',
    sectionSlug: 'portfolio',
    year: '2026',
    client: 'ListIt Concept Works',
    description: 'Structured editorial media catalog featuring contemporary anime monographs and visual indices.',
    demoUrl: null,
    theme: {
      mode: 'dark',
      bg: '#14161E',
      accent: '#EC4899',
      brand: 'LISTIT',
      headline: 'Contemporary Anime Log',
      sub: 'Cinematic retrospectives and production design archives.',
      mockupType: 'catalog'
    }
  },
  {
    id: 'designer-port',
    number: '14',
    title: 'ELENA ROSTOVA',
    category: 'PORTFOLIO',
    sectionSlug: 'portfolio',
    year: '2026',
    client: 'Elena Rostova Studio',
    description: 'Minimal personal design monograph featuring oversized serif headlines and tactile project previews.',
    demoUrl: '/demos/elena-rostova/index.html',
    theme: {
      mode: 'light',
      bg: '#F3F3EE',
      accent: '#111111',
      brand: 'ROSTOVA',
      headline: 'Systems, Spaces & Artifacts',
      sub: 'Ten years of architectural brand systems and generative tools.',
      mockupType: 'monograph'
    }
  },
  {
    id: 'photo-journal',
    number: '15',
    title: 'MARCUS VANCE',
    category: 'PORTFOLIO',
    sectionSlug: 'portfolio',
    year: '2026',
    client: 'Marcus Vance Gallery',
    description: 'Full-bleed photography monograph with camera telemetry, negative scans, and exhibition coordinates.',
    demoUrl: '/demos/chrono-studio/index.html',
    theme: {
      mode: 'dark',
      bg: '#0A0A0A',
      accent: '#E2E8F0',
      brand: 'VANCE',
      headline: 'Shadows of the High Arctic',
      sub: 'Analog silver gelatin studies from Svalbard and Greenland.',
      mockupType: 'photo'
    }
  },
  {
    id: 'arch-archive',
    number: '16',
    title: 'NORDIC TIMBER',
    category: 'PORTFOLIO',
    sectionSlug: 'portfolio',
    year: '2026',
    client: 'Nordic Heritage Registry',
    description: 'Swiss editorial archive documenting historic Scandinavian timber structures and coastal boathouses.',
    demoUrl: null,
    theme: {
      mode: 'light',
      bg: '#EEEEEA',
      accent: '#475569',
      brand: 'NORDIC',
      headline: 'Timber Heritage Survey',
      sub: 'Structural blueprints and geographic vernacular mapping.',
      mockupType: 'blueprint'
    }
  },

  // SECTION 05: CREATIVE
  {
    id: 'aura-atelier',
    number: '17',
    title: 'AURA ATELIER',
    category: 'CREATIVE',
    sectionSlug: 'creative',
    year: '2026',
    client: 'Aura Objects & Co.',
    description: 'Avant-garde digital flagship exploring tactile computational fabrics, generative garments, and 3D scans.',
    demoUrl: '/demos/aura-atelier/index.html',
    theme: {
      mode: 'light',
      bg: '#F7F5F0',
      accent: '#169B50',
      brand: 'AURA',
      headline: 'Materialising The Virtual',
      sub: 'Generative couture and physics-driven computational textiles.',
      mockupType: 'garment'
    }
  },
  {
    id: 'motion-lab',
    number: '18',
    title: 'VANGUARD MOTION',
    category: 'CREATIVE',
    sectionSlug: 'creative',
    year: '2026',
    client: 'Vanguard Dynamics',
    description: 'High-contrast kinetic motion laboratory demonstrating 60fps WebGL shaders and audio-reactive typography.',
    demoUrl: '/demos/vanguard-mobility/index.html',
    theme: {
      mode: 'dark',
      bg: '#0D0E14',
      accent: '#06B6D4',
      brand: 'VANGUARD',
      headline: 'Kinetic Choreography',
      sub: 'Real-time physics engines powering dynamic brand identities.',
      mockupType: 'motion'
    }
  },
  {
    id: 'monolith-ui',
    number: '19',
    title: 'MONOLITH HUD',
    category: 'CREATIVE',
    sectionSlug: 'creative',
    year: '2026',
    client: 'Monolith Systems',
    description: 'Experimental spatial computing interface with translucent volumetric grids and biometric eye-tracking.',
    demoUrl: '/demos/monolith-acoustics/index.html',
    theme: {
      mode: 'dark',
      bg: '#08080C',
      accent: '#10B981',
      brand: 'MONOLITH',
      headline: 'Spatial Computing Interface',
      sub: 'Volumetric glass shaders and post-screen interaction paradigms.',
      mockupType: 'hud'
    }
  },
  {
    id: 'primeturf',
    number: '20',
    title: 'PRIMETURF ARENA',
    category: 'CREATIVE',
    sectionSlug: 'creative',
    year: '2026',
    client: 'PrimeTurf Arena',
    description: 'Immersive sports arena reservation system with interactive pitch matrix, slot booking, and floodlight control.',
    demoUrl: '/demos/turf/index.html',
    theme: {
      mode: 'dark',
      bg: '#0B150F',
      accent: '#169B50',
      brand: 'PRIMETURF',
      headline: 'PrimeTurf Sports Arena',
      sub: 'FIFA-standard pitches, floodlight scheduling, and live booking.',
      mockupType: 'pitch'
    }
  }
];
