import React, { useState, useMemo } from 'react';
import './glowe.css';

// GLOWÉ Product Catalogue Data
const PRODUCTS = [
  {
    id: 'dew-theory-serum',
    name: 'Dew Theory Hydrating Serum',
    category: 'serums',
    categoryLabel: 'Serums & Concentrates',
    concern: 'hydration',
    concernLabel: 'Deep Hydration',
    price: 68,
    size: '30ml / 1.0 fl oz',
    texture: 'Lightweight micro-droplet elixir',
    keyIngredients: 'Multi-Weight Hyaluronic Acid, Snow Mushroom, Niacinamide',
    image: '/projects/glowe/product-serum.jpg',
    badge: 'Flagship Award Winner',
    description: 'A transformative multi-molecular hydration serum combining ultra-low and high-molecular weight hyaluronic acid with bio-fermented snow mushroom to deliver 72 hours of cellular hydration and bouncy, dewy luminosity.',
    howToUse: 'Dispense 3–4 drops onto damp skin after cleansing and essence. Gently press into face, neck, and décolleté morning and evening before moisturizer.',
    ingredientsList: 'Aqua/Water, Tremella Fuciformis (Snow Mushroom) Extract, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Niacinamide (Vitamin B3), Glycerin, Camellia Sinensis Leaf Extract, Panthenol, Phenoxyethanol, Ethylhexylglycerin.'
  },
  {
    id: 'cloudmilk-cleanser',
    name: 'Cloudmilk Gentle Cleanser',
    category: 'cleansers',
    categoryLabel: 'Gentle Cleansers',
    concern: 'cleansing',
    concernLabel: 'Gentle Cleansing',
    price: 42,
    size: '150ml / 5.1 fl oz',
    texture: 'Velvety botanical emulsion',
    keyIngredients: 'Colloidal Oat, Chamomile Hydrosol, Squalane',
    image: '/projects/glowe/product-cleanser.jpg',
    badge: 'Daily Essential',
    description: 'A non-stripping, pH-balanced milky emulsion that effortlessly dissolves impurities, mineral sunscreen, and makeup while reinforcing the delicate lipid barrier with soothing colloidal oat.',
    howToUse: 'Massage 1–2 pumps onto dry or damp skin in circular motions. Rinse thoroughly with lukewarm water or remove with a damp organic muslin cloth.',
    ingredientsList: 'Water/Aqua, Cetearyl Alcohol, Glycerin, Avena Sativa (Oat) Kernel Flour, Squalane, Chamomilla Recutita (Matricaria) Flower Water, Decyl Glucoside, Allantoin, Xanthan Gum, Citric Acid.'
  },
  {
    id: 'barrier-veil-moisturizer',
    name: 'Barrier Veil Moisturizer',
    category: 'creams',
    categoryLabel: 'Barrier Creams',
    concern: 'barrier',
    concernLabel: 'Barrier Repair',
    price: 58,
    size: '50ml / 1.7 fl oz',
    texture: 'Whipped lipid-rich velvet cream',
    keyIngredients: 'Ceramides NP/AP/EOP, Cholesterol, Centella Asiatica',
    image: '/projects/glowe/product-moisturizer.jpg',
    badge: 'Clinical Favorite',
    description: 'Bio-mimetic ceramide cream formulated with a 3:1:1 physiological ratio of essential lipids, plant cholesterol, and fatty acids to seal trans-epidermal water loss and soothe sensitized skin.',
    howToUse: 'Warm a pea-sized amount between fingertips and smooth over face and neck as the final sealing step of your morning and nighttime ritual.',
    ingredientsList: 'Aqua, Butyrospermum Parkii (Shea) Butter, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Centella Asiatica Extract, Sodium Lauroyl Lactylate, Carbomer, Xanthan Gum.'
  },
  {
    id: 'sun-ritual-spf',
    name: 'Sun Ritual SPF 50 Fluid',
    category: 'sun',
    categoryLabel: 'Solar Protection',
    concern: 'barrier',
    concernLabel: 'Daily Defense',
    price: 46,
    size: '50ml / 1.7 fl oz',
    texture: 'Invisible serum-weight solar veil',
    keyIngredients: 'Non-Nano Zinc Oxide 12%, Ectoin, Green Tea Catechins',
    image: '/projects/glowe/product-spf.jpg',
    badge: 'Broad Spectrum 50+',
    description: 'Weightless 100% mineral sunscreen fluid that leaves zero white cast, greasiness, or pore congestion. Enriched with extremolyte Ectoin to shield skin from UV rays, HEV blue light, and urban pollution.',
    howToUse: 'Shake well before use. Apply liberally across face, neck, and ears 15 minutes before sun exposure. Reapply every 2 hours or after swimming.',
    ingredientsList: 'Zinc Oxide 12.0%, Water/Aqua, Caprylic/Capric Triglyceride, Ectoin, Camellia Sinensis (Green Tea) Leaf Extract, Silica, Tocopheryl Acetate, Polyglyceryl-3 Polyricinoleate, Isostearic Acid.'
  },
  {
    id: 'recovery-eye-nectar',
    name: 'Cellular Recovery Eye Nectar',
    category: 'serums',
    categoryLabel: 'Eye Care',
    concern: 'brightening',
    concernLabel: 'Dark Circles & Tone',
    price: 54,
    size: '15ml / 0.5 fl oz',
    texture: 'Silken cooling gel-nectar',
    keyIngredients: 'Caffeine, Tetrapeptide-30, Licorice Root Extract',
    image: '/projects/glowe/product-eye-cream.jpg',
    badge: 'Depuffing Formula',
    description: 'Targeted awakening eye serum powered by green tea caffeine and peptide complexes to visibly de-puff morning under-eye swelling, smooth fine dehydration lines, and fade vascular dark circles.',
    howToUse: 'Gently glide one pump around orbital eye bone with ring finger, tapping softly from outer corner inward until absorbed.',
    ingredientsList: 'Aqua, Caffeine, Tetrapeptide-30, Glycyrrhiza Glabra (Licorice) Root Extract, Sodium Hyaluronate, Hydroxyethylcellulose, Propanediol, Caprylyl Glycol.'
  },
  {
    id: 'rice-micro-essence',
    name: 'Rice Micro-Essence',
    category: 'cleansers',
    categoryLabel: 'Treatment Essences',
    concern: 'texture',
    concernLabel: 'Pore & Texture Refining',
    price: 48,
    size: '180ml / 6.1 fl oz',
    texture: 'Silky botanical infusion water',
    keyIngredients: 'Fermented Rice Filtrate 74%, Willow Bark Extract, Galactomyces',
    image: '/projects/glowe/product-essence.jpg',
    badge: 'K-Beauty Science',
    description: 'Traditional fermented rice water paired with natural enzymatic willow bark. Micro-exfoliates dead surface cells, softens rough texture, and primes skin to absorb subsequent serums 3x faster.',
    howToUse: 'Pour a generous splash into palms and pat gently across clean skin until fully quenched. Can be layered 3 to 7 times for intensified glass-skin radiance.',
    ingredientsList: 'Oryza Sativa (Rice) Bran Water, Galactomyces Ferment Filtrate, Salix Alba (Willow) Bark Extract, Glycerin, Butylene Glycol, Dipotassium Glycyrrhizate, 1,2-Hexanediol.'
  }
];

export default function GloweStore() {
  // Navigation & Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all'); // all | cleansers | serums | creams | sun
  const [activeConcernFilter, setActiveConcernFilter] = useState('all'); // all | hydration | brightening | barrier | cleansing | texture

  // Interactive Ritual Finder state
  const [finderStep, setFinderStep] = useState(1); // 1: Concern, 2: Routine Length, 3: Recommendations
  const [selectedConcern, setSelectedConcern] = useState('hydration');
  const [selectedRoutineLength, setSelectedRoutineLength] = useState('2'); // '2' or '4'

  // Daily Ritual Timeline state (AM vs PM)
  const [ritualTimelineMode, setRitualTimelineMode] = useState('am'); // am | pm

  // Product Quick Detail Modal state
  const [detailProduct, setDetailProduct] = useState(null);

  // Shopping Bag Drawer & Session Cart state
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      product: PRODUCTS[0], // Dew Theory Serum
      quantity: 1
    }
  ]);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState(null);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  // Mobile menu drawer
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper: Trigger Toast
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Cart operations
  const addToBag = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} to your ritual bag`);
  };

  const updateQuantity = (productId, delta) => {
    setCartItems(prev => {
      return prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from bag');
  };

  // Cart calculations
  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cartItems]);

  // Filtered Products for Product Edit Section
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = searchQuery === '' || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.keyIngredients.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat = activeCategory === 'all' || p.category === activeCategory;
      const matchesConcern = activeConcernFilter === 'all' || p.concern === activeConcernFilter;

      return matchesSearch && matchesCat && matchesConcern;
    });
  }, [searchQuery, activeCategory, activeConcernFilter]);

  // Ritual Finder Recommended Products
  const recommendedRoutineProducts = useMemo(() => {
    if (selectedRoutineLength === '2') {
      // 2-step essentials: Cleanser + specific treatment or moisturizer
      if (selectedConcern === 'hydration') {
        return [PRODUCTS[1], PRODUCTS[0]]; // Cloudmilk + Dew Theory
      } else if (selectedConcern === 'brightening') {
        return [PRODUCTS[1], PRODUCTS[4]]; // Cloudmilk + Eye Nectar
      } else if (selectedConcern === 'texture') {
        return [PRODUCTS[1], PRODUCTS[5]]; // Cloudmilk + Rice Essence
      } else {
        return [PRODUCTS[1], PRODUCTS[2]]; // Cloudmilk + Barrier Veil
      }
    } else {
      // 4-step comprehensive routine
      if (selectedConcern === 'hydration') {
        return [PRODUCTS[1], PRODUCTS[5], PRODUCTS[0], PRODUCTS[2]]; // Cleanser + Essence + Serum + Cream
      } else if (selectedConcern === 'brightening') {
        return [PRODUCTS[1], PRODUCTS[0], PRODUCTS[4], PRODUCTS[3]]; // Cleanser + Serum + Eye Nectar + SPF
      } else if (selectedConcern === 'texture') {
        return [PRODUCTS[1], PRODUCTS[5], PRODUCTS[0], PRODUCTS[3]]; // Cleanser + Essence + Serum + SPF
      } else {
        return [PRODUCTS[1], PRODUCTS[5], PRODUCTS[2], PRODUCTS[3]]; // Cleanser + Essence + Barrier Veil + SPF
      }
    }
  }, [selectedConcern, selectedRoutineLength]);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Newsletter submit
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterError('Please enter a valid beauty editorial email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubmitted(true);
  };

  return (
    <div className="glowe-store-root">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="glowe-toast" role="status">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Announcement Bar */}
      <div className="glowe-top-announcement">
        <div className="glowe-announcement-pills">
          <span className="glowe-announcement-pill">
            <span className="glowe-announcement-dot" />
            100% Bio-Compatible Botanical Actives
          </span>
          <span className="glowe-announcement-pill">
            <span className="glowe-announcement-dot" />
            Complimentary Ritual Discovery Samples with All Orders
          </span>
        </div>
        <div>
          <span>Free Carbon-Neutral Delivery over $50</span>
        </div>
      </div>

      {/* Header and Navigation */}
      <header className="glowe-header">
        <div className="glowe-header-inner">
          <div className="glowe-brand-lockup">
            <span className="glowe-wordmark">GLOWÉ</span>
            <span className="glowe-brand-subtitle">BOTANICAL SCIENCE &bull; PARIS / KYOTO</span>
          </div>

          <nav className="glowe-nav-links">
            <button type="button" className="glowe-nav-link" onClick={() => scrollToSection('glowe-concerns')}>
              Skin Concerns
            </button>
            <button type="button" className="glowe-nav-link" onClick={() => scrollToSection('glowe-products')}>
              The Products
            </button>
            <button type="button" className="glowe-nav-link" onClick={() => scrollToSection('glowe-finder')}>
              Ritual Finder <span className="glowe-nav-badge">NEW</span>
            </button>
            <button type="button" className="glowe-nav-link" onClick={() => scrollToSection('glowe-ingredients')}>
              Ingredient Library
            </button>
            <button type="button" className="glowe-nav-link" onClick={() => scrollToSection('glowe-story')}>
              Our Story
            </button>
          </nav>

          <div className="glowe-header-actions">
            {/* Live Search Bar */}
            <div className="glowe-search-bar">
              <svg className="glowe-search-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                className="glowe-search-input"
                placeholder="Search ingredients, serum..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Shopping Bag Trigger Button */}
            <button
              type="button"
              className="glowe-bag-btn"
              onClick={() => setIsBagOpen(true)}
              aria-label={`Shopping Bag, ${totalCartCount} items`}
            >
              <svg className="glowe-bag-icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="glowe-bag-count">{totalCartCount}</span>
            </button>

            {/* Explore Ritual CTA */}
            <button
              type="button"
              className="glowe-btn-ritual-cta"
              onClick={() => scrollToSection('glowe-finder')}
            >
              <span>Ritual Finder</span>
              <span>&rarr;</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="glowe-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#26231F" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION — Asymmetrical Botanical Editorial Campaign */}
      <section className="glowe-hero-section" aria-label="GLOWÉ Campaign Hero">
        <div className="glowe-hero-grid">
          {/* Narrow Left Vertical Campaign Label */}
          <div className="glowe-hero-vertical-index">
            <span className="glowe-vertical-issue">VOL. 04 &bull; RITUAL ARCHIVE</span>
            <div className="glowe-vertical-line" />
            <span className="glowe-vertical-coords">48.8566° N / 135.7681° E</span>
          </div>

          {/* Center Copy Column */}
          <div className="glowe-hero-copy">
            <div className="glowe-campaign-badge">
              <span className="glowe-badge-symbol">&bull;</span>
              <span className="glowe-badge-text">BOTANICAL SCIENCE &bull; 2026</span>
            </div>

            <h1 className="glowe-hero-headline">
              Pure Care. <br />
              <span className="glowe-headline-italic">Real Results.</span>
            </h1>

            <p className="glowe-hero-description">
              Bio-compatible active botanicals, multi-weight ceramides, and fermented rice extracts formulated to restore barrier equilibrium with effortless, glass-skin luminosity.
            </p>

            <div className="glowe-hero-ctas">
              <button
                type="button"
                className="glowe-btn-primary"
                onClick={() => scrollToSection('glowe-finder')}
              >
                <span>Explore the Ritual</span>
                <span>&rarr;</span>
              </button>

              <button
                type="button"
                className="glowe-btn-secondary"
                onClick={() => scrollToSection('glowe-products')}
              >
                <span>View Collection &bull; $42–$68</span>
              </button>
            </div>

            {/* Key Metric Badges */}
            <div className="glowe-hero-metrics">
              <div className="glowe-metric-item">
                <span className="glowe-metric-num">98%</span>
                <span className="glowe-metric-label">Bio-Compatible Base</span>
              </div>
              <div className="glowe-metric-item">
                <span className="glowe-metric-num">0%</span>
                <span className="glowe-metric-label">Silicones & PEGs</span>
              </div>
              <div className="glowe-metric-item">
                <span className="glowe-metric-num">72h</span>
                <span className="glowe-metric-label">Clinical Moisture Lock</span>
              </div>
            </div>
          </div>

          {/* Right Hero Stage: Skincare Still Life with Ingredient Annotation Pins */}
          <div className="glowe-hero-stage">
            <div className="glowe-stage-backdrop" />
            <div className="glowe-hero-photo-wrapper">
              <img
                src="/projects/glowe/hero-skincare.jpg"
                alt="GLOWÉ botanical skincare collection, cream textures and natural stone"
                className="glowe-hero-img"
              />
            </div>

            {/* Ingredient Annotation 1: Ceramide Complex */}
            <div className="glowe-ingredient-pin glowe-pin-1">
              <span className="glowe-pin-tag">LIPID BARRIER</span>
              <span className="glowe-pin-name">Ceramide Complex NP/AP</span>
            </div>

            {/* Ingredient Annotation 2: Botanical Hydration */}
            <div className="glowe-ingredient-pin glowe-pin-2">
              <span className="glowe-pin-tag">72H HYDRATION</span>
              <span className="glowe-pin-name">Snow Mushroom Glucan</span>
            </div>

            {/* Ingredient Annotation 3: Botanical Extract */}
            <div className="glowe-ingredient-pin glowe-pin-3">
              <span className="glowe-pin-tag">CELLULAR GLOW</span>
              <span className="glowe-pin-name">Fermented Rice Filtrate</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE INTERACTIVE FEATURE: THE SKIN RITUAL FINDER */}
      <section id="glowe-finder" className="glowe-ritual-finder-section" aria-label="The Skin Ritual Finder">
        <div className="glowe-finder-container">
          <div className="glowe-finder-header">
            <span className="glowe-section-eyebrow">DIAGNOSTIC ARCHITECTURE</span>
            <h2 className="glowe-section-title">The Skin Ritual Finder</h2>
            <p className="glowe-section-subtitle">
              Answer two brief questions to receive an engineered botanical regimen curated for your barrier health.
            </p>
          </div>

          {/* Step Progress Tracker */}
          <div className="glowe-finder-progress-bar">
            <div className={`glowe-step-item ${finderStep >= 1 ? 'active' : ''}`}>
              <span className="glowe-step-num">1</span>
              <span>Primary Concern</span>
            </div>
            <div className="glowe-step-connector" />
            <div className={`glowe-step-item ${finderStep >= 2 ? 'active' : ''}`}>
              <span className="glowe-step-num">2</span>
              <span>Routine Steps</span>
            </div>
            <div className="glowe-step-connector" />
            <div className={`glowe-step-item ${finderStep === 3 ? 'active' : ''}`}>
              <span className="glowe-step-num">3</span>
              <span>Curated Ritual</span>
            </div>
          </div>

          <div className="glowe-finder-body">
            {/* Step 1: Select Skin Concern */}
            {finderStep === 1 && (
              <div>
                <h3 style={{ fontFamily: 'var(--glowe-font-serif)', fontSize: '1.5rem', textAlign: 'center' }}>
                  What is your skin's primary requirement today?
                </h3>
                <div className="glowe-concerns-grid">
                  <div
                    className={`glowe-concern-card ${selectedConcern === 'hydration' ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedConcern('hydration');
                      setFinderStep(2);
                    }}
                  >
                    <div className="glowe-concern-icon">💧</div>
                    <h4 className="glowe-concern-name">Hydration</h4>
                    <p className="glowe-concern-desc">Tightness, dull surface, dry patches, dehydration lines</p>
                  </div>

                  <div
                    className={`glowe-concern-card ${selectedConcern === 'brightening' ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedConcern('brightening');
                      setFinderStep(2);
                    }}
                  >
                    <div className="glowe-concern-icon">✨</div>
                    <h4 className="glowe-concern-name">Uneven Tone</h4>
                    <p className="glowe-concern-desc">Post-blemish marks, sun spots, under-eye darkness</p>
                  </div>

                  <div
                    className={`glowe-concern-card ${selectedConcern === 'texture' ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedConcern('texture');
                      setFinderStep(2);
                    }}
                  >
                    <div className="glowe-concern-icon">🌿</div>
                    <h4 className="glowe-concern-name">Pores & Texture</h4>
                    <p className="glowe-concern-desc">Roughness, visible pores, lack of light refraction</p>
                  </div>

                  <div
                    className={`glowe-concern-card ${selectedConcern === 'barrier' ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedConcern('barrier');
                      setFinderStep(2);
                    }}
                  >
                    <div className="glowe-concern-icon">🛡️</div>
                    <h4 className="glowe-concern-name">Sensitivity</h4>
                    <p className="glowe-concern-desc">Flushing, compromised barrier, weather reactivity</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Select Routine Length */}
            {finderStep === 2 && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <button
                    type="button"
                    className="glowe-btn-secondary"
                    style={{ padding: '0.4rem 1rem', fontSize: '0.75rem' }}
                    onClick={() => setFinderStep(1)}
                  >
                    &larr; Back to Concerns
                  </button>
                  <span style={{ fontSize: '0.75rem', color: 'var(--glowe-olive)', fontWeight: 600 }}>
                    Selected Concern: {selectedConcern.toUpperCase()}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--glowe-font-serif)', fontSize: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>
                  Choose your preferred ritual pacing
                </h3>

                <div className="glowe-routines-grid">
                  <div
                    className={`glowe-routine-choice-card ${selectedRoutineLength === '2' ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedRoutineLength('2');
                      setFinderStep(3);
                    }}
                  >
                    <span className="glowe-routine-badge">MINIMALIST PROTOCOL</span>
                    <h4 className="glowe-routine-title">The 2-Step Essential</h4>
                    <p className="glowe-routine-desc">
                      Streamlined efficiency focusing on high-efficacy cleansing and concentrated active restoration.
                    </p>
                    <ul className="glowe-routine-steps-list">
                      <li>Gentle Lipid-Balanced Cleansing</li>
                      <li>Targeted Botanical Active Treatment</li>
                    </ul>
                  </div>

                  <div
                    className={`glowe-routine-choice-card ${selectedRoutineLength === '4' ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedRoutineLength('4');
                      setFinderStep(3);
                    }}
                  >
                    <span className="glowe-routine-badge">FULL EDITORIAL PROTOCOL</span>
                    <h4 className="glowe-routine-title">The 4-Step Comprehensive</h4>
                    <p className="glowe-routine-desc">
                      Multi-layered immersion for full barrier resilience, pore micro-exfoliation, and solar defense.
                    </p>
                    <ul className="glowe-routine-steps-list">
                      <li>Cleanse &bull; Cloudmilk Emulsion</li>
                      <li>Prime &bull; Fermented Rice Micro-Essence</li>
                      <li>Treat &bull; Concentrated Bio-Active Serum</li>
                      <li>Seal &bull; Ceramide Barrier Veil / SPF</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Recommendation Results */}
            {finderStep === 3 && (
              <div className="glowe-results-panel">
                <div className="glowe-results-header">
                  <div>
                    <span className="glowe-section-eyebrow">YOUR CUSTOM MATCH</span>
                    <h3 className="glowe-results-title">
                      {selectedRoutineLength}-Step Ritual for {selectedConcern.toUpperCase()}
                    </h3>
                  </div>
                  <div className="glowe-results-actions">
                    <button
                      type="button"
                      className="glowe-restart-btn"
                      onClick={() => setFinderStep(1)}
                    >
                      &larr; Retake Diagnostic
                    </button>
                    <button
                      type="button"
                      className="glowe-btn-primary"
                      style={{ padding: '0.5rem 1.25rem', fontSize: '0.75rem' }}
                      onClick={() => {
                        recommendedRoutineProducts.forEach(p => addToBag(p));
                      }}
                    >
                      Add Complete Ritual to Bag
                    </button>
                  </div>
                </div>

                <div className="glowe-recommended-grid">
                  {recommendedRoutineProducts.map((p, idx) => (
                    <div key={p.id} className="glowe-recommended-card">
                      <div className="glowe-rec-thumb-box">
                        <span className="glowe-rec-step-badge">STEP 0{idx + 1}</span>
                        <img src={p.image} alt={p.name} className="glowe-rec-img" />
                      </div>
                      <div className="glowe-rec-info">
                        <span className="glowe-rec-cat">{p.categoryLabel}</span>
                        <h4 className="glowe-rec-name">{p.name}</h4>
                        <span className="glowe-rec-price">${p.price} USD</span>
                        <div className="glowe-rec-btn-strip">
                          <button
                            type="button"
                            className="glowe-btn-rec-detail"
                            onClick={() => setDetailProduct(p)}
                          >
                            Details
                          </button>
                          <button
                            type="button"
                            className="glowe-btn-rec-add"
                            onClick={() => addToBag(p)}
                          >
                            + Bag
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="glowe-finder-disclaimer">
                  *Demonstration diagnostic based on generalized botanical compatibility. Formulations are dermatologist tested and hypoallergenic.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. SHOP BY SKIN CONCERN SECTION */}
      <section id="glowe-concerns" className="glowe-concern-tiles-section" aria-label="Shop by Skin Concern">
        <div className="glowe-concern-tiles-header">
          <div>
            <span className="glowe-section-eyebrow">TARGETED BOTANICALS</span>
            <h2 className="glowe-section-title">Shop by Skin Concern</h2>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--glowe-ink-muted)' }}>
            Select a tile to filter our formulations
          </span>
        </div>

        <div className="glowe-tiles-grid">
          {/* Tile 1: Hydration */}
          <div
            className={`glowe-tile-item ${activeConcernFilter === 'hydration' ? 'active' : ''}`}
            onClick={() => {
              setActiveConcernFilter(activeConcernFilter === 'hydration' ? 'all' : 'hydration');
              scrollToSection('glowe-products');
            }}
          >
            <img src="/projects/glowe/concern-hydration.jpg" alt="Deep Hydration" className="glowe-tile-img" />
            <div className="glowe-tile-overlay">
              <span className="glowe-tile-label">CONCERN 01</span>
              <h3 className="glowe-tile-title">Deep Hydration</h3>
              <span className="glowe-tile-action">Explore Hydrators &rarr;</span>
            </div>
          </div>

          {/* Tile 2: Brightening */}
          <div
            className={`glowe-tile-item ${activeConcernFilter === 'brightening' ? 'active' : ''}`}
            onClick={() => {
              setActiveConcernFilter(activeConcernFilter === 'brightening' ? 'all' : 'brightening');
              scrollToSection('glowe-products');
            }}
          >
            <img src="/projects/glowe/concern-brightening.jpg" alt="Brightening & Radiance" className="glowe-tile-img" />
            <div className="glowe-tile-overlay">
              <span className="glowe-tile-label">CONCERN 02</span>
              <h3 className="glowe-tile-title">Radiance & Tone</h3>
              <span className="glowe-tile-action">Explore Brighteners &rarr;</span>
            </div>
          </div>

          {/* Tile 3: Barrier Care */}
          <div
            className={`glowe-tile-item ${activeConcernFilter === 'barrier' ? 'active' : ''}`}
            onClick={() => {
              setActiveConcernFilter(activeConcernFilter === 'barrier' ? 'all' : 'barrier');
              scrollToSection('glowe-products');
            }}
          >
            <img src="/projects/glowe/concern-barrier.jpg" alt="Barrier Protection" className="glowe-tile-img" />
            <div className="glowe-tile-overlay">
              <span className="glowe-tile-label">CONCERN 03</span>
              <h3 className="glowe-tile-title">Barrier Defense</h3>
              <span className="glowe-tile-action">Explore Ceramides &rarr;</span>
            </div>
          </div>

          {/* Tile 4: Gentle Cleansing */}
          <div
            className={`glowe-tile-item ${activeConcernFilter === 'cleansing' ? 'active' : ''}`}
            onClick={() => {
              setActiveConcernFilter(activeConcernFilter === 'cleansing' ? 'all' : 'cleansing');
              scrollToSection('glowe-products');
            }}
          >
            <img src="/projects/glowe/concern-cleansing.jpg" alt="Gentle Cleansing" className="glowe-tile-img" />
            <div className="glowe-tile-overlay">
              <span className="glowe-tile-label">CONCERN 04</span>
              <h3 className="glowe-tile-title">Purifying Wash</h3>
              <span className="glowe-tile-action">Explore Cleansers &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE PRODUCT EDIT — Asymmetrical Product Presentation */}
      <section id="glowe-products" className="glowe-product-edit-section" aria-label="The Product Edit">
        <div className="glowe-product-edit-inner">
          <div className="glowe-edit-filter-strip">
            <div>
              <span className="glowe-section-eyebrow">CURATED FORMULATIONS</span>
              <h2 className="glowe-section-title">The Product Edit</h2>
            </div>

            {/* Filter Pills */}
            <div className="glowe-filter-pills">
              <button
                type="button"
                className={`glowe-filter-pill-btn ${activeCategory === 'all' && activeConcernFilter === 'all' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('all');
                  setActiveConcernFilter('all');
                }}
              >
                All Formulations
              </button>
              <button
                type="button"
                className={`glowe-filter-pill-btn ${activeCategory === 'cleansers' ? 'active' : ''}`}
                onClick={() => setActiveCategory('cleansers')}
              >
                Cleansers & Essences
              </button>
              <button
                type="button"
                className={`glowe-filter-pill-btn ${activeCategory === 'serums' ? 'active' : ''}`}
                onClick={() => setActiveCategory('serums')}
              >
                Targeted Serums
              </button>
              <button
                type="button"
                className={`glowe-filter-pill-btn ${activeCategory === 'creams' ? 'active' : ''}`}
                onClick={() => setActiveCategory('creams')}
              >
                Barrier Creams
              </button>
              <button
                type="button"
                className={`glowe-filter-pill-btn ${activeCategory === 'sun' ? 'active' : ''}`}
                onClick={() => setActiveCategory('sun')}
              >
                Solar Defense
              </button>
            </div>

            <span className="glowe-filter-count-badge">
              [{filteredProducts.length} PRODUCTS IN CATALOGUE]
            </span>
          </div>

          {/* Asymmetrical Grid: 1 Large Flagship card on the left, smaller items on right */}
          <div className="glowe-asym-product-layout">
            {/* Flagship Product: Dew Theory Serum */}
            {filteredProducts.length > 0 && (
              <div className="glowe-flagship-card">
                <div className="glowe-flagship-thumb">
                  <span className="glowe-flagship-badge">{filteredProducts[0].badge}</span>
                  <img src={filteredProducts[0].image} alt={filteredProducts[0].name} className="glowe-flagship-img" />
                </div>
                <div className="glowe-flagship-content">
                  <span className="glowe-flagship-key-ing">{filteredProducts[0].keyIngredients}</span>
                  <h3 className="glowe-flagship-title">{filteredProducts[0].name}</h3>
                  <p className="glowe-flagship-desc">{filteredProducts[0].description}</p>
                  
                  <div className="glowe-flagship-specs">
                    <div className="glowe-spec-item">
                      <span className="glowe-spec-label">VOLUME</span>
                      <span className="glowe-spec-val">{filteredProducts[0].size}</span>
                    </div>
                    <div className="glowe-spec-item">
                      <span className="glowe-spec-label">TEXTURE</span>
                      <span className="glowe-spec-val">{filteredProducts[0].texture}</span>
                    </div>
                    <div className="glowe-spec-item">
                      <span className="glowe-spec-label">SKIN CONCERN</span>
                      <span className="glowe-spec-val">{filteredProducts[0].concernLabel}</span>
                    </div>
                  </div>

                  <div className="glowe-flagship-footer">
                    <span className="glowe-flagship-price">${filteredProducts[0].price} USD</span>
                    <div style={{ display: 'flex', gap: '0.65rem' }}>
                      <button
                        type="button"
                        className="glowe-btn-secondary"
                        style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}
                        onClick={() => setDetailProduct(filteredProducts[0])}
                      >
                        Inspect Formula
                      </button>
                      <button
                        type="button"
                        className="glowe-btn-primary"
                        style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem' }}
                        onClick={() => addToBag(filteredProducts[0])}
                      >
                        + Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other Products */}
            {filteredProducts.slice(1).map(p => (
              <div key={p.id} className="glowe-product-card">
                <div className="glowe-card-thumb">
                  <span className="glowe-card-badge">{p.badge}</span>
                  <img src={p.image} alt={p.name} className="glowe-card-img" />
                </div>
                <div className="glowe-card-body">
                  <span className="glowe-card-category">{p.categoryLabel}</span>
                  <h4 className="glowe-card-title">{p.name}</h4>
                  <p className="glowe-card-desc">{p.description.slice(0, 110)}...</p>
                  <span className="glowe-card-ingredients-tag">Key: {p.keyIngredients}</span>

                  <div className="glowe-card-footer">
                    <span className="glowe-card-price">${p.price}</span>
                    <div className="glowe-card-actions">
                      <button
                        type="button"
                        className="glowe-btn-icon-view"
                        onClick={() => setDetailProduct(p)}
                        title="View formula details"
                      >
                        Inspect
                      </button>
                      <button
                        type="button"
                        className="glowe-btn-card-add"
                        onClick={() => addToBag(p)}
                      >
                        + Bag
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INGREDIENT LIBRARY SECTION */}
      <section id="glowe-ingredients" className="glowe-ingredient-library-section" aria-label="Ingredient Library">
        <div>
          <span className="glowe-section-eyebrow">BIO-COMPATIBLE MOLECULES</span>
          <h2 className="glowe-section-title">Ingredient Library</h2>
          <p className="glowe-section-subtitle">
            Every molecule is harvested for physiological tolerance and proven cellular performance.
          </p>
        </div>

        <div className="glowe-ingredient-grid">
          {/* Ingredient 1: Hyaluronic Acid */}
          <div
            className="glowe-ing-card"
            onClick={() => {
              setSearchQuery('Hyaluronic');
              scrollToSection('glowe-products');
            }}
          >
            <div className="glowe-ing-thumb">
              <img src="/projects/glowe/ingredient-hyaluronic.jpg" alt="Hyaluronic Acid" className="glowe-ing-img" />
            </div>
            <div className="glowe-ing-content">
              <span className="glowe-ing-latin">Sodium Hyaluronate</span>
              <h3 className="glowe-ing-title">Multi-Molecular HA</h3>
              <p className="glowe-ing-benefit">
                Draws 1,000x its weight in water to plump extracellular matrix and preserve tissue volume across dermal depths.
              </p>
              <span className="glowe-ing-pill-tag">Explore 2 Formulations &rarr;</span>
            </div>
          </div>

          {/* Ingredient 2: Ceramides */}
          <div
            className="glowe-ing-card"
            onClick={() => {
              setSearchQuery('Ceramides');
              scrollToSection('glowe-products');
            }}
          >
            <div className="glowe-ing-thumb">
              <img src="/projects/glowe/ingredient-ceramide.jpg" alt="Ceramides" className="glowe-ing-img" />
            </div>
            <div className="glowe-ing-content">
              <span className="glowe-ing-latin">Ceramides NP, AP, EOP</span>
              <h3 className="glowe-ing-title">Lipid Ceramides</h3>
              <p className="glowe-ing-benefit">
                Identical to natural intercellular cement. Fills micro-fissures in damaged barriers to stop irritants and moisture loss.
              </p>
              <span className="glowe-ing-pill-tag">Explore Barrier Care &rarr;</span>
            </div>
          </div>

          {/* Ingredient 3: Niacinamide */}
          <div
            className="glowe-ing-card"
            onClick={() => {
              setSearchQuery('Niacinamide');
              scrollToSection('glowe-products');
            }}
          >
            <div className="glowe-ing-thumb">
              <img src="/projects/glowe/ingredient-niacinamide.jpg" alt="Niacinamide" className="glowe-ing-img" />
            </div>
            <div className="glowe-ing-content">
              <span className="glowe-ing-latin">Vitamin B3 / Nicotinamide</span>
              <h3 className="glowe-ing-title">Active Niacinamide</h3>
              <p className="glowe-ing-benefit">
                Normalizes sebum secretions, calms erythema, refines pore circumference, and fades post-inflammatory hyperpigmentation.
              </p>
              <span className="glowe-ing-pill-tag">Explore Formulations &rarr;</span>
            </div>
          </div>

          {/* Ingredient 4: Colloidal Oat */}
          <div
            className="glowe-ing-card"
            onClick={() => {
              setSearchQuery('Oat');
              scrollToSection('glowe-products');
            }}
          >
            <div className="glowe-ing-thumb">
              <img src="/projects/glowe/ingredient-oat.jpg" alt="Colloidal Oat" className="glowe-ing-img" />
            </div>
            <div className="glowe-ing-content">
              <span className="glowe-ing-latin">Avena Sativa Kernel Flour</span>
              <h3 className="glowe-ing-title">Colloidal Oat</h3>
              <p className="glowe-ing-benefit">
                Rich in beta-glucans and avenanthramides. Instantly reduces burning sensations and relieves itchiness on stressed barriers.
              </p>
              <span className="glowe-ing-pill-tag">Explore Soothing &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE DAILY RITUAL (AM / PM TIMELINE) */}
      <section className="glowe-daily-ritual-section" aria-label="The Daily Skincare Ritual">
        <div className="glowe-ritual-inner">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <span className="glowe-section-eyebrow">CHRONO-BIOLOGY</span>
            <h2 className="glowe-section-title">The Daily Ritual</h2>
            <p className="glowe-section-subtitle">
              Synchronize your application with your skin’s biological circadian rhythms.
            </p>
          </div>

          {/* AM / PM Toggle Switcher */}
          <div className="glowe-ritual-toggle-bar">
            <div className="glowe-routine-mode-switcher">
              <button
                type="button"
                className={`glowe-routine-mode-btn ${ritualTimelineMode === 'am' ? 'active' : ''}`}
                onClick={() => setRitualTimelineMode('am')}
              >
                <span>☀️</span>
                <span>Morning Ritual (Protection & Glow)</span>
              </button>
              <button
                type="button"
                className={`glowe-routine-mode-btn ${ritualTimelineMode === 'pm' ? 'active' : ''}`}
                onClick={() => setRitualTimelineMode('pm')}
              >
                <span>🌙</span>
                <span>Evening Ritual (Cellular Repair)</span>
              </button>
            </div>
          </div>

          {/* Timeline Track */}
          <div className="glowe-timeline-track">
            {ritualTimelineMode === 'am' ? (
              <>
                <div className="glowe-timeline-step-card">
                  <div className="glowe-timeline-step-badge">01</div>
                  <span className="glowe-step-phase">STEP 1 &bull; 07:30 AM</span>
                  <h4 className="glowe-step-title">Awaken & Purify</h4>
                  <p className="glowe-step-desc">
                    Wash away overnight sebum secretions with lukewarm water and a comforting milky cleanser.
                  </p>
                  <div className="glowe-step-product-link" onClick={() => setDetailProduct(PRODUCTS[1])}>
                    <img src={PRODUCTS[1].image} alt="" className="glowe-step-prod-thumb" />
                    <div className="glowe-step-prod-meta">
                      <span className="glowe-step-prod-name">Cloudmilk Cleanser</span>
                      <span className="glowe-step-prod-price">$42 USD</span>
                    </div>
                  </div>
                </div>

                <div className="glowe-timeline-step-card">
                  <div className="glowe-timeline-step-badge">02</div>
                  <span className="glowe-step-phase">STEP 2 &bull; 07:32 AM</span>
                  <h4 className="glowe-step-title">Prime & Quench</h4>
                  <p className="glowe-step-desc">
                    Press fermented rice micro-essence into damp skin to create microscopic channels for serum absorption.
                  </p>
                  <div className="glowe-step-product-link" onClick={() => setDetailProduct(PRODUCTS[5])}>
                    <img src={PRODUCTS[5].image} alt="" className="glowe-step-prod-thumb" />
                    <div className="glowe-step-prod-meta">
                      <span className="glowe-step-prod-name">Rice Micro-Essence</span>
                      <span className="glowe-step-prod-price">$48 USD</span>
                    </div>
                  </div>
                </div>

                <div className="glowe-timeline-step-card">
                  <div className="glowe-timeline-step-badge">03</div>
                  <span className="glowe-step-phase">STEP 3 &bull; 07:35 AM</span>
                  <h4 className="glowe-step-title">Target & Plump</h4>
                  <p className="glowe-step-desc">
                    Layer multi-weight hyaluronic dew serum to lock in plump hydration and defend against dry office air.
                  </p>
                  <div className="glowe-step-product-link" onClick={() => setDetailProduct(PRODUCTS[0])}>
                    <img src={PRODUCTS[0].image} alt="" className="glowe-step-prod-thumb" />
                    <div className="glowe-step-prod-meta">
                      <span className="glowe-step-prod-name">Dew Theory Serum</span>
                      <span className="glowe-step-prod-price">$68 USD</span>
                    </div>
                  </div>
                </div>

                <div className="glowe-timeline-step-card">
                  <div className="glowe-timeline-step-badge">04</div>
                  <span className="glowe-step-phase">STEP 4 &bull; 07:38 AM</span>
                  <h4 className="glowe-step-title">Shield & Glow</h4>
                  <p className="glowe-step-desc">
                    Coat with mineral SPF 50 fluid. Provides broad-spectrum UV reflection and an invisible dewy primer for makeup.
                  </p>
                  <div className="glowe-step-product-link" onClick={() => setDetailProduct(PRODUCTS[3])}>
                    <img src={PRODUCTS[3].image} alt="" className="glowe-step-prod-thumb" />
                    <div className="glowe-step-prod-meta">
                      <span className="glowe-step-prod-name">Sun Ritual SPF 50</span>
                      <span className="glowe-step-prod-price">$46 USD</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="glowe-timeline-step-card">
                  <div className="glowe-timeline-step-badge">01</div>
                  <span className="glowe-step-phase">STEP 1 &bull; 09:30 PM</span>
                  <h4 className="glowe-step-title">Double Dissolve</h4>
                  <p className="glowe-step-desc">
                    Melt waterproof sunscreen, dust, and particulate pollution without disturbing acid mantle balance.
                  </p>
                  <div className="glowe-step-product-link" onClick={() => setDetailProduct(PRODUCTS[1])}>
                    <img src={PRODUCTS[1].image} alt="" className="glowe-step-prod-thumb" />
                    <div className="glowe-step-prod-meta">
                      <span className="glowe-step-prod-name">Cloudmilk Cleanser</span>
                      <span className="glowe-step-prod-price">$42 USD</span>
                    </div>
                  </div>
                </div>

                <div className="glowe-timeline-step-card">
                  <div className="glowe-timeline-step-badge">02</div>
                  <span className="glowe-step-phase">STEP 2 &bull; 09:34 PM</span>
                  <h4 className="glowe-step-title">Enzymatic Refine</h4>
                  <p className="glowe-step-desc">
                    Gentle galactomyces fermentation works overnight to dissolve keratin debris and loosen micro-congestion.
                  </p>
                  <div className="glowe-step-product-link" onClick={() => setDetailProduct(PRODUCTS[5])}>
                    <img src={PRODUCTS[5].image} alt="" className="glowe-step-prod-thumb" />
                    <div className="glowe-step-prod-meta">
                      <span className="glowe-step-prod-name">Rice Micro-Essence</span>
                      <span className="glowe-step-prod-price">$48 USD</span>
                    </div>
                  </div>
                </div>

                <div className="glowe-timeline-step-card">
                  <div className="glowe-timeline-step-badge">03</div>
                  <span className="glowe-step-phase">STEP 3 &bull; 09:38 PM</span>
                  <h4 className="glowe-step-title">Orbital Renewal</h4>
                  <p className="glowe-step-desc">
                    Tap caffeine and tetrapeptide-30 around orbital sockets to stimulate overnight micro-circulation.
                  </p>
                  <div className="glowe-step-product-link" onClick={() => setDetailProduct(PRODUCTS[4])}>
                    <img src={PRODUCTS[4].image} alt="" className="glowe-step-prod-thumb" />
                    <div className="glowe-step-prod-meta">
                      <span className="glowe-step-prod-name">Cellular Eye Nectar</span>
                      <span className="glowe-step-prod-price">$54 USD</span>
                    </div>
                  </div>
                </div>

                <div className="glowe-timeline-step-card">
                  <div className="glowe-timeline-step-badge">04</div>
                  <span className="glowe-step-phase">STEP 4 &bull; 09:42 PM</span>
                  <h4 className="glowe-step-title">Lipid Cocoon</h4>
                  <p className="glowe-step-desc">
                    Generously smooth ceramide barrier veil to lock in all treatment serums while you sleep in conditioned air.
                  </p>
                  <div className="glowe-step-product-link" onClick={() => setDetailProduct(PRODUCTS[2])}>
                    <img src={PRODUCTS[2].image} alt="" className="glowe-step-prod-thumb" />
                    <div className="glowe-step-prod-meta">
                      <span className="glowe-step-prod-name">Barrier Veil Cream</span>
                      <span className="glowe-step-prod-price">$58 USD</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 8. TEXTURE STUDIO SECTION */}
      <section className="glowe-texture-studio-section" aria-label="Texture Studio">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <span className="glowe-section-eyebrow">SENSORY FORMULATION</span>
          <h2 className="glowe-section-title">The Texture Studio</h2>
          <p className="glowe-section-subtitle">
            Tactile elegance engineered to delight fingertips and melt seamlessly upon skin contact.
          </p>
        </div>

        <div className="glowe-texture-grid">
          {/* Texture 1: Velvet Cream */}
          <div className="glowe-texture-card">
            <img src="/projects/glowe/texture-cream.jpg" alt="Whipped Velvet Cream" className="glowe-texture-img" />
            <div className="glowe-texture-overlay">
              <span className="glowe-texture-feel">TACTILE NOTE &bull; 01</span>
              <h3 className="glowe-texture-title">Whipped Velvet Cream</h3>
              <p className="glowe-texture-desc">
                Cushioning lipid-rich cushion that melts into a breathable moisture seal with zero sticky residue.
              </p>
            </div>
          </div>

          {/* Texture 2: Dewy Elixir */}
          <div className="glowe-texture-card">
            <img src="/projects/glowe/texture-serum.jpg" alt="Micro-Droplet Elixir" className="glowe-texture-img" />
            <div className="glowe-texture-overlay">
              <span className="glowe-texture-feel">TACTILE NOTE &bull; 02</span>
              <h3 className="glowe-texture-title">Micro-Droplet Elixir</h3>
              <p className="glowe-texture-desc">
                Fast-breaking hydro-gel that bursts into water on contact for immediate cellular quenching.
              </p>
            </div>
          </div>

          {/* Texture 3: Cooling Aqua Gel */}
          <div className="glowe-texture-card">
            <img src="/projects/glowe/texture-gel.jpg" alt="Cooling Botanical Gel" className="glowe-texture-img" />
            <div className="glowe-texture-overlay">
              <span className="glowe-texture-feel">TACTILE NOTE &bull; 03</span>
              <h3 className="glowe-texture-title">Cooling Aqua Infusion</h3>
              <p className="glowe-texture-desc">
                Weightless aqueous veil that lowers surface temperature by 1.8°C upon skin contact to reduce redness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BRAND STORY & BOTANICAL LAB */}
      <section id="glowe-story" className="glowe-story-section" aria-label="About GLOWÉ">
        <div className="glowe-story-grid">
          <div className="glowe-story-photo-frame">
            <img
              src="/projects/glowe/story-botanical-lab.jpg"
              alt="GLOWÉ botanical extraction laboratory in Kyoto"
              className="glowe-story-img"
            />
            <div className="glowe-story-caption-card">
              <span className="glowe-story-caption-title">LABORATOIRE GLOWÉ &bull; KYOTO</span>
              <span className="glowe-story-caption-sub">Cold-Process Botanical Extraction Facility</span>
            </div>
          </div>

          <div className="glowe-story-text">
            <span className="glowe-section-eyebrow">OUR PHILOSOPHY</span>
            <h2 className="glowe-story-quote">
              "We believe skin health is achieved through cellular harmony, not chemical aggression."
            </h2>
            <p className="glowe-story-body">
              Founded in 2024 between Paris and Kyoto, GLOWÉ bridges traditional East Asian fermentation alchemy with European clinical dermatology. We reject the cycle of over-exfoliation and compromised moisture barriers.
            </p>
            <p className="glowe-story-body">
              Every formula is compounded at low temperatures using renewable plant fractions, certified biomimetic ceramides, and fermented prebiotic waters to work in synergy with your skin’s inherent microbiome.
            </p>

            <div className="glowe-story-pillars">
              <div className="glowe-pillar-item">
                <h4>Cold-Process Fermentation</h4>
                <p>Preserves 99.4% of live vitamins, antioxidants, and active enzymes without thermal degradation.</p>
              </div>
              <div className="glowe-pillar-item">
                <h4>Recycled Violet Glass</h4>
                <p>Biophotonic glass bottles block the complete visible light spectrum to naturally stabilize botanical actives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER & FOOTER */}
      <section className="glowe-newsletter-section" aria-label="Beauty Editorial Newsletter">
        <span className="glowe-section-eyebrow">THE GLOWÉ JOURNAL</span>
        <h2 className="glowe-newsletter-title">Subscribe to The Ritual Gazette</h2>
        <p className="glowe-newsletter-desc">
          Receive seasonal ingredient harvest updates, clinical barrier care guides, and exclusive private release access.
        </p>

        {newsletterSubmitted ? (
          <div className="glowe-subscribe-success">
            ✓ Thank you for subscribing. Your private access code has been sent.
          </div>
        ) : (
          <form className="glowe-newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              className="glowe-newsletter-input"
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit" className="glowe-btn-subscribe">
              Join The Gazette
            </button>
          </form>
        )}
        {newsletterError && (
          <div style={{ color: 'var(--glowe-terracotta)', fontSize: '0.75rem', marginTop: '0.5rem' }}>
            {newsletterError}
          </div>
        )}
      </section>

      {/* Structured Footer */}
      <footer className="glowe-footer">
        <div className="glowe-footer-inner">
          <div className="glowe-footer-brand">
            <h3>GLOWÉ</h3>
            <p>
              Botanical science and barrier dermatology formulated to cultivate enduring skin vitality without compromise.
            </p>
          </div>

          <div className="glowe-footer-col">
            <h4>Rituals</h4>
            <ul>
              <li><a href="#glowe-products" onClick={(e) => { e.preventDefault(); scrollToSection('glowe-products'); }}>All Formulations</a></li>
              <li><a href="#glowe-finder" onClick={(e) => { e.preventDefault(); scrollToSection('glowe-finder'); }}>Ritual Diagnostic</a></li>
              <li><a href="#glowe-concerns" onClick={(e) => { e.preventDefault(); scrollToSection('glowe-concerns'); }}>Shop by Concern</a></li>
              <li><a href="#glowe-ingredients" onClick={(e) => { e.preventDefault(); scrollToSection('glowe-ingredients'); }}>Ingredient Library</a></li>
            </ul>
          </div>

          <div className="glowe-footer-col">
            <h4>Care & Ethics</h4>
            <ul>
              <li><a href="#care" onClick={(e) => e.preventDefault()}>Clinical Standards</a></li>
              <li><a href="#care" onClick={(e) => e.preventDefault()}>Sustainable Packaging</a></li>
              <li><a href="#care" onClick={(e) => e.preventDefault()}>Patch Test Protocol</a></li>
              <li><a href="#care" onClick={(e) => e.preventDefault()}>Recycling Program</a></li>
            </ul>
          </div>

          <div className="glowe-footer-col">
            <h4>Inquiries</h4>
            <ul>
              <li><a href="#contact" onClick={(e) => e.preventDefault()}>editorial@gloweskincare.com</a></li>
              <li><a href="#contact" onClick={(e) => e.preventDefault()}>Paris &bull; Kyoto Studios</a></li>
              <li><a href="#contact" onClick={(e) => e.preventDefault()}>Mon–Fri &bull; 9am–6pm CET</a></li>
            </ul>
          </div>
        </div>

        <div className="glowe-footer-bottom">
          <span>&copy; {new Date().getFullYear()} GLOWÉ BOTANICAL LABORATOIRE. DEMO PROJECT FOR VERHOST SHOWCASE.</span>
          <span>PRIVACY POLICY &bull; TERMS OF SERVICE &bull; GLUTEN-FREE &bull; CRUELTY-FREE</span>
        </div>
      </footer>

      {/* 11. SHOPPING BAG DRAWER */}
      {isBagOpen && (
        <>
          <div className="glowe-drawer-backdrop" onClick={() => setIsBagOpen(false)} />
          <aside className="glowe-bag-drawer" aria-label="Shopping Bag">
            <div className="glowe-drawer-header">
              <h3>Your Ritual Bag ({totalCartCount})</h3>
              <button
                type="button"
                className="glowe-drawer-close"
                onClick={() => setIsBagOpen(false)}
                aria-label="Close Bag Drawer"
              >
                &times;
              </button>
            </div>

            <div className="glowe-drawer-body">
              {cartItems.length === 0 ? (
                <div className="glowe-empty-bag">
                  <p>Your shopping bag is currently empty.</p>
                  <button
                    type="button"
                    className="glowe-btn-primary"
                    style={{ marginTop: '1rem', padding: '0.65rem 1.25rem', fontSize: '0.75rem' }}
                    onClick={() => {
                      setIsBagOpen(false);
                      scrollToSection('glowe-products');
                    }}
                  >
                    Discover Formulations
                  </button>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.product.id} className="glowe-cart-item">
                    <img src={item.product.image} alt={item.product.name} className="glowe-cart-thumb" />
                    <div className="glowe-cart-details">
                      <h4>{item.product.name}</h4>
                      <span>${item.product.price} USD</span>
                      <div className="glowe-qty-stepper">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, -1)}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="glowe-cart-remove-btn"
                      onClick={() => removeFromCart(item.product.id)}
                      aria-label="Remove item"
                    >
                      &times;
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="glowe-drawer-footer">
                <div className="glowe-subtotal-row">
                  <span style={{ color: 'var(--glowe-ink-muted)' }}>Estimated Subtotal</span>
                  <span className="glowe-subtotal-val">${subtotal} USD</span>
                </div>
                <button
                  type="button"
                  className="glowe-btn-checkout"
                  onClick={() => showToast('Demo Mode: Checkout process simulated.')}
                >
                  Proceed to Checkout &bull; ${subtotal}
                </button>
                <p className="glowe-demo-note">
                  VERHOST E-Commerce Demo &bull; Free express delivery & discovery samples included.
                </p>
              </div>
            )}
          </aside>
        </>
      )}

      {/* 12. PRODUCT DETAIL MODAL */}
      {detailProduct && (
        <div className="glowe-detail-modal-root" role="dialog" aria-modal="true">
          <div className="glowe-modal-card">
            <button
              type="button"
              className="glowe-modal-close"
              onClick={() => setDetailProduct(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="glowe-modal-img-col">
              <img src={detailProduct.image} alt={detailProduct.name} className="glowe-modal-img" />
            </div>

            <div className="glowe-modal-info-col">
              <span className="glowe-modal-category">{detailProduct.categoryLabel}</span>
              <h2 className="glowe-modal-title">{detailProduct.name}</h2>
              <span className="glowe-modal-price">${detailProduct.price} USD</span>
              <p className="glowe-modal-desc">{detailProduct.description}</p>

              <ul className="glowe-modal-bullets">
                <li><strong>Volume:</strong> {detailProduct.size}</li>
                <li><strong>Sensory Feel:</strong> {detailProduct.texture}</li>
                <li><strong>Primary Active:</strong> {detailProduct.keyIngredients}</li>
                <li><strong>How to Use:</strong> {detailProduct.howToUse}</li>
              </ul>

              <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
                <button
                  type="button"
                  className="glowe-btn-primary"
                  style={{ flexGrow: 1 }}
                  onClick={() => {
                    addToBag(detailProduct);
                    setDetailProduct(null);
                  }}
                >
                  Add to Bag &bull; ${detailProduct.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
