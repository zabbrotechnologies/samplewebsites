// Centralized Project Configuration for VERHOST Digital Works Showcase
// 20 Projects structured across 5 distinct sections (4 projects per section)

export const SECTIONS = [
  {
    number: '01',
    category: 'E-Commerce',
    slug: 'ecommerce',
    count: '04 PROJECTS',
    description: 'High-conversion commerce experiences, bespoke online stores, and product showcases.'
  },
  {
    number: '02',
    category: 'Business Websites',
    slug: 'business',
    count: '04 PROJECTS',
    description: 'Corporate flagships, architecture practices, consultancies, and digital studio platforms.'
  },
  {
    number: '03',
    category: 'Landing Pages',
    slug: 'landing',
    count: '04 PROJECTS',
    description: 'High-impact conversion funnels, automotive detailing, artisanal culinary labs, and AI runtimes.'
  },
  {
    number: '04',
    category: 'Portfolio Websites',
    slug: 'portfolio',
    count: '04 PROJECTS',
    description: 'Editorial archives, personal designer identities, documentary photography, and curated indices.'
  },
  {
    number: '05',
    category: 'Creative & Web Experiences',
    slug: 'creative',
    count: '04 PROJECTS',
    description: 'Spatial UI concepts, kinetic typography experiments, motion studios, and interactive arenas.'
  }
];

export const projects = [
  // SECTION 01: E-COMMERCE
  {
    id: 'maxywalk',
    number: '01',
    title: 'MAXYWALK',
    category: 'E-Commerce',
    sectionSlug: 'ecommerce',
    year: '2026',
    client: 'MAXYWALK Leather Craft',
    description: 'Premium handcrafted leather footwear and bespoke accessories with minimalist retail layout.',
    deliverables: ['Custom Commerce', 'Product Photography', 'Checkout Flow'],
    demoUrl: 'https://maxywalk.vercel.app/',
    featured: true,
    visualTheme: {
      type: 'maxywalk',
      accent: '#C5A059',
      surface: '#141414',
      badge: 'FOOTWEAR ARCHIVE',
      headline: 'HANDCRAFTED LEATHERWORKS',
      tagline: 'Artisanal footwear tailored for timeless endurance.'
    }
  },
  {
    id: 'mithu-dairy',
    number: '02',
    title: 'Mithu Dairy',
    category: 'E-Commerce',
    sectionSlug: 'ecommerce',
    year: '2026',
    client: 'Mithu Organic Farms',
    description: 'Cream and mint palette e-commerce showcase featuring fresh farm dairy products and clean ordering.',
    deliverables: ['Farm-to-Door UI', 'Subscription Flow', 'Clean Architecture'],
    demoUrl: null,
    featured: false,
    visualTheme: {
      type: 'mithu',
      accent: '#2E8B57',
      surface: '#F4F9F5',
      badge: 'ORGANIC CERTIFIED',
      headline: 'PURE FARM FRESH DAIRY',
      tagline: 'Farm-fresh milk, cultured ghee, and artisanal butter.'
    }
  },
  {
    id: 'jkr-resin',
    number: '03',
    title: 'JKR Resin Arts',
    category: 'E-Commerce',
    sectionSlug: 'ecommerce',
    year: '2026',
    client: 'JKR Studio',
    description: 'Luxury resin art studio featuring customized bridal bouquet preservation, baby keepsakes & gifts.',
    deliverables: ['Editorial Store', 'Custom Inquiries', 'Bespoke Keepsakes'],
    demoUrl: 'https://jkr-resin-arts.vercel.app/',
    featured: true,
    visualTheme: {
      type: 'resin',
      accent: '#D4AF37',
      surface: '#18181A',
      badge: 'BESPOKE BOTANICALS',
      headline: 'TIMELESS RESIN CRAFT',
      tagline: 'Preserving emotional moments through crystal-clear epoxy craft.'
    }
  },
  {
    id: 'fresh-market',
    number: '04',
    title: 'Fresh Market',
    category: 'E-Commerce',
    sectionSlug: 'ecommerce',
    year: '2026',
    client: 'Fresh Market Collective',
    description: 'Warm white backdrop with natural green accents celebrating locally harvested organic produce.',
    deliverables: ['Daily Harvest UI', 'Express Cart', 'Producer Stories'],
    demoUrl: null,
    featured: false,
    visualTheme: {
      type: 'market',
      accent: '#169B50',
      surface: '#FAF8F5',
      badge: 'DAILY HARVEST',
      headline: 'PRODUCE WITH PROVENANCE',
      tagline: 'Crisp field greens and heirloom orchard fruits delivered daily.'
    }
  },

  // SECTION 02: BUSINESS WEBSITES
  {
    id: 'kinetic-arch',
    number: '05',
    title: 'Kinetic Architecture',
    category: 'Business Websites',
    sectionSlug: 'business',
    year: '2026',
    client: 'Kinetic Structural Practice',
    description: 'Monolithic digital portfolio for a European structural practice pairing brutalist grids with case studies.',
    deliverables: ['Spatial Grid', 'Blueprint Archive', 'Interactive Scale'],
    demoUrl: '/demos/kinetic-arch/index.html',
    featured: true,
    visualTheme: {
      type: 'kinetic',
      accent: '#111111',
      surface: '#EAEAE6',
      badge: 'STRUCTURAL MONOGRAPH',
      headline: 'FORM, VOID & GRAVITY',
      tagline: 'Precision engineered civic architectures across Northern Europe.'
    }
  },
  {
    id: 'greentech',
    number: '06',
    title: 'GreenTech',
    category: 'Business Websites',
    sectionSlug: 'business',
    year: '2026',
    client: 'GreenTech Energy Systems',
    description: 'Industrial technology platform with dark imagery, live telemetry graphs, and modern corporate layout.',
    deliverables: ['Industrial UX', 'Telemetry Visuals', 'ESG Disclosure'],
    demoUrl: null,
    featured: false,
    visualTheme: {
      type: 'greentech',
      accent: '#22C55E',
      surface: '#0B1118',
      badge: 'CLEANTECH INFRASTRUCTURE',
      headline: 'ZERO-EMISSION POWER',
      tagline: 'Turbine control telemetry and grid-scale hydrogen storage.'
    }
  },
  {
    id: 'verhost-studio',
    number: '07',
    title: 'Verhost Studio',
    category: 'Business Websites',
    sectionSlug: 'business',
    year: '2026',
    client: 'VERHOST Systems',
    description: 'Creative digital studio flagship with strong monochrome typography and interactive case archive.',
    deliverables: ['Digital Flagship', 'Interaction Systems', 'Case Studies'],
    demoUrl: null,
    featured: true,
    visualTheme: {
      type: 'verhost',
      accent: '#169B50',
      surface: '#0F0F10',
      badge: 'CREATIVE ENGINEERING',
      headline: 'EXCEPTIONAL DIGITAL WORKS',
      tagline: 'Crafting unforgettable web interfaces for visionary brands.'
    }
  },
  {
    id: 'solvix',
    number: '08',
    title: 'Solvix',
    category: 'Business Websites',
    sectionSlug: 'business',
    year: '2026',
    client: 'Solvix Strategy Partners',
    description: 'Modern advisory firm website with sharp black-and-white editorial composition and executive insights.',
    deliverables: ['Corporate Strategy', 'Executive Briefings', 'Swiss Grid'],
    demoUrl: '/demos/valence-capital/index.html',
    featured: false,
    visualTheme: {
      type: 'solvix',
      accent: '#777777',
      surface: '#FFFFFF',
      badge: 'STRATEGIC ADVISORY',
      headline: 'CAPITAL & RESTRUCTURING',
      tagline: 'Institutional clarity for complex transatlantic mergers.'
    }
  },

  // SECTION 03: LANDING PAGES
  {
    id: 'ngt-tuning',
    number: '09',
    title: 'New Generation Tuner',
    category: 'Landing Pages',
    sectionSlug: 'landing',
    year: '2026',
    client: 'NGT Motorsport Labs',
    description: 'High-octane automotive detailing and performance tuning showcase with dark visuals and race red accents.',
    deliverables: ['Performance Portal', 'Dyno Diagnostics', 'Booking System'],
    demoUrl: null,
    featured: true,
    visualTheme: {
      type: 'ngt',
      accent: '#E53E3E',
      surface: '#121214',
      badge: 'MOTORSPORT CALIBRATION',
      headline: 'UNRESTRICTED POWER',
      tagline: 'Precision ECU tuning and trackside aero calibration.'
    }
  },
  {
    id: 'cakexperiment',
    number: '10',
    title: 'Cakexperiment',
    category: 'Landing Pages',
    sectionSlug: 'landing',
    year: '2026',
    client: 'Cakexperiment Academy',
    description: 'Premium baking education lab presented with warm pastry cream tones and editorial serif typography.',
    deliverables: ['Masterclass Funnel', 'Recipe Archives', 'Interactive Timers'],
    demoUrl: null,
    featured: false,
    visualTheme: {
      type: 'cake',
      accent: '#D97706',
      surface: '#FAF7F2',
      badge: 'PATISSERIE ACADEMY',
      headline: 'THE SCIENCE OF PASTRY',
      tagline: 'Mastering viennoiserie, laminated doughs, and entremets.'
    }
  },
  {
    id: 'neural-synthetics',
    number: '11',
    title: 'Neural Synthetics',
    category: 'Landing Pages',
    sectionSlug: 'landing',
    year: '2026',
    client: 'Neural Synthetics Corp',
    description: 'Futuristic AI model runtime platform with dark background, neural topology, and controlled green highlights.',
    deliverables: ['Model Documentation', 'Real-time Latency UI', 'SDK Playgrounds'],
    demoUrl: '/demos/synapse-engine/index.html',
    featured: true,
    visualTheme: {
      type: 'neural',
      accent: '#169B50',
      surface: '#090D0B',
      badge: 'AUTONOMOUS RUNTIME',
      headline: 'SYNTHETIC COGNITION',
      tagline: 'Sub-millisecond inference across distributed tensor clusters.'
    }
  },
  {
    id: 'creativeflow',
    number: '12',
    title: 'CreativeFlow',
    category: 'Landing Pages',
    sectionSlug: 'landing',
    year: '2026',
    client: 'Flow Creative Studio',
    description: 'Design agency conversion page celebrating expressive typography, fluid layout shifts, and pastel accents.',
    deliverables: ['Agency Funnel', 'Interactive Motion', 'Client Onboarding'],
    demoUrl: null,
    featured: false,
    visualTheme: {
      type: 'creativeflow',
      accent: '#8B5CF6',
      surface: '#FDFBFE',
      badge: 'DESIGN COLLECTIVE',
      headline: 'UNBOUND CREATIVE DIRECTION',
      tagline: 'Crafting brand campaigns that define modern cultural moments.'
    }
  },

  // SECTION 04: PORTFOLIO WEBSITES
  {
    id: 'listit-app',
    number: '13',
    title: 'ListIt',
    category: 'Portfolio Websites',
    sectionSlug: 'portfolio',
    year: '2026',
    client: 'ListIt Concept Works',
    description: 'Structured editorial portfolio and media cataloging concept featuring anime tracking and Japanese typography.',
    deliverables: ['Media Catalog', 'Editorial Index', 'Scoring Matrix'],
    demoUrl: null,
    featured: false,
    visualTheme: {
      type: 'listit',
      accent: '#EC4899',
      surface: '#15171E',
      badge: 'MEDIA CURATION',
      headline: 'ARCHIVE OF CONTEMPORARY ANIME',
      tagline: 'Cinematic logs, production credits, and seasonal retrospectives.'
    }
  },
  {
    id: 'designer-portfolio',
    number: '14',
    title: 'Designer Portfolio',
    category: 'Portfolio Websites',
    sectionSlug: 'portfolio',
    year: '2026',
    client: 'Elena Rostova Studio',
    description: 'Minimal personal design monograph featuring oversized serif headlines and tactile project previews.',
    deliverables: ['Monograph UI', 'Exhibition List', 'Spatial Sound'],
    demoUrl: '/demos/elena-rostova/index.html',
    featured: true,
    visualTheme: {
      type: 'designer',
      accent: '#111111',
      surface: '#F5F5F0',
      badge: 'PRINCIPAL DESIGNER',
      headline: 'SYSTEMS, SPACES & ARTIFACTS',
      tagline: 'Ten years of architectural brand systems and generative tools.'
    }
  },
  {
    id: 'photographer-journal',
    number: '15',
    title: "Photographer's Journal",
    category: 'Portfolio Websites',
    sectionSlug: 'portfolio',
    year: '2026',
    client: 'Marcus Vance Gallery',
    description: 'Photography-first editorial portfolio with full-bleed aspect ratios, camera telemetry, and exhibition dates.',
    deliverables: ['Full-Bleed Media', 'EXIF Telemetry', 'Print Inquiries'],
    demoUrl: '/demos/chrono-studio/index.html',
    featured: false,
    visualTheme: {
      type: 'photo',
      accent: '#E6E6E2',
      surface: '#0A0A0A',
      badge: 'DOCUMENTARY MONOGRAPH',
      headline: 'SHADOWS OF THE HIGH ARCTIC',
      tagline: 'Medium format analog silver gelatin studies from Svalbard.'
    }
  },
  {
    id: 'architecture-archive',
    number: '16',
    title: 'Architecture Archive',
    category: 'Portfolio Websites',
    sectionSlug: 'portfolio',
    year: '2026',
    client: 'Nordic Heritage Foundation',
    description: 'Restrained Swiss layout and chronological index documenting 20th-century Scandinavian timber structures.',
    deliverables: ['Heritage Registry', 'Floorplan CAD', 'Geographic Coordinates'],
    demoUrl: null,
    featured: false,
    visualTheme: {
      type: 'archarchive',
      accent: '#475569',
      surface: '#EDEDE8',
      badge: 'HISTORIC SURVEY',
      headline: 'SCANDINAVIAN TIMBER HERITAGE',
      tagline: 'Structural surveys of vernacular church spires and coastal boathouses.'
    }
  },

  // SECTION 05: CREATIVE & WEB EXPERIENCES
  {
    id: 'digital-atelier',
    number: '17',
    title: 'Digital Atelier',
    category: 'Creative & Web Experiences',
    sectionSlug: 'creative',
    year: '2026',
    client: 'Aura Objects & Co.',
    description: 'Avant-garde experimental typography showcase exploring tactile digital fabrics and virtual objects.',
    deliverables: ['Virtual Couture', '3D Scans', 'Sensory Exploration'],
    demoUrl: '/demos/aura-atelier/index.html',
    featured: true,
    visualTheme: {
      type: 'atelier',
      accent: '#169B50',
      surface: '#F8F6F0',
      badge: 'HAUTE NUMÉRIQUE',
      headline: 'MATERIALISING THE VIRTUAL',
      tagline: 'Generative textiles and computational garment simulations.'
    }
  },
  {
    id: 'motion-lab',
    number: '18',
    title: 'Motion Lab',
    category: 'Creative & Web Experiences',
    sectionSlug: 'creative',
    year: '2026',
    client: 'Vanguard Dynamics',
    description: 'High-contrast kinetic motion laboratory demonstrating 60fps real-time physics and expressive web typography.',
    deliverables: ['Kinetic Typography', 'WebGL Shaders', 'Audio-reactive UI'],
    demoUrl: '/demos/vanguard-mobility/index.html',
    featured: false,
    visualTheme: {
      type: 'motion',
      accent: '#06B6D4',
      surface: '#0D0E12',
      badge: 'FRAME RATE: 60 FPS',
      headline: 'KINETIC CHOREOGRAPHY',
      tagline: 'Real-time physics engines powering dynamic brand identities.'
    }
  },
  {
    id: 'future-interface',
    number: '19',
    title: 'Future Interface',
    category: 'Creative & Web Experiences',
    sectionSlug: 'creative',
    year: '2026',
    client: 'Monolith Systems',
    description: 'Experimental spatial computing concept with translucent floating HUD elements and gesture mappings.',
    deliverables: ['Spatial HUD', 'Volumetric Grids', 'Audio Architecture'],
    demoUrl: '/demos/monolith-acoustics/index.html',
    featured: false,
    visualTheme: {
      type: 'futureui',
      accent: '#10B981',
      surface: '#08080A',
      badge: 'SPATIAL COMPUTING',
      headline: 'POST-SCREEN INTERACTIONS',
      tagline: 'Volumetric glass shaders and biometric eye-tracking paradigms.'
    }
  },
  {
    id: 'interactive-worlds',
    number: '20',
    title: 'Interactive Worlds',
    category: 'Creative & Web Experiences',
    sectionSlug: 'creative',
    year: '2026',
    client: 'PrimeTurf Arena',
    description: 'Immersive digital sports facility booking experience with live pitch matrix, slot booking, and equipment rental.',
    deliverables: ['Real-Time Booking', 'Pitch Allocation', 'Interactive Arena'],
    demoUrl: '/demos/turf/index.html',
    featured: true,
    visualTheme: {
      type: 'turf',
      accent: '#169B50',
      surface: '#0B150F',
      badge: 'PITCH RESERVATION LIVE',
      headline: 'PRIMETURF SPORTS ARENA',
      tagline: 'FIFA-standard turf pitches, floodlight scheduling, and live slots.'
    }
  }
];
