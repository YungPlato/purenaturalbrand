# Style Guide - Pure Natural Brand

## Design System Overview
**"Nature-Inspired Luxury Design System"**

This style guide establishes the foundational design principles, components, and patterns that ensure consistency across all Pure Natural Brand digital touchpoints. The system balances sophisticated aesthetics with natural beauty to create a premium user experience.

## Color System

### Primary Palette
```css
/* Primary Colors */
--sage-green: #8A9A8B;      /* Main brand color - natural, trustworthy */
--terracotta: #D2691E;      /* Secondary accent - warm, earthy */
--cream: #FDFBF7;           /* Background base - soft, welcoming */

/* Accent Colors */
--champagne-gold: #D4AF37;  /* Luxury accent - premium, sophisticated */
--charcoal: #2C3E50;        /* Text and borders - strong, elegant */
--pure-white: #FFFFFF;      /* Pure white - clean, minimal */
```

### Color Usage Guidelines
- **Sage Green**: Primary buttons, links, and brand elements
- **Terracotta**: Secondary actions, highlights, and warm accents
- **Cream**: Page backgrounds, card backgrounds, and subtle surfaces
- **Champagne Gold**: Premium features, special offers, and luxury elements
- **Charcoal**: Primary text, borders, and strong contrast elements
- **Pure White**: Content areas, buttons, and maximum contrast surfaces

### Semantic Colors
```css
/* Success States */
--success: #4A7C59;         /* Natural green for positive actions */
--success-light: #E8F5E8;   /* Light success background */

/* Warning States */
--warning: #D4A574;         /* Warm amber for caution */
--warning-light: #FDF7ED;   /* Light warning background */

/* Error States */
--error: #C44569;           /* Muted red for errors */
--error-light: #FDF2F2;     /* Light error background */

/* Information States */
--info: #5DADE2;            /* Soft blue for information */
--info-light: #F0F8FF;      /* Light info background */
```

## Typography System

### Font Families
```css
/* Heading Fonts */
--font-heading: 'Playfair Display', serif;
--font-heading-alt: 'Cormorant Garamond', serif;

/* Body Fonts */
--font-body: 'Inter', sans-serif;
--font-body-alt: 'Source Sans Pro', sans-serif;

/* Monospace */
--font-mono: 'JetBrains Mono', monospace;
```

### Type Scale
```css
/* Heading Scale */
--h1: 3.5rem;    /* 56px - Hero titles */
--h2: 2.5rem;    /* 40px - Section headers */
--h3: 2rem;      /* 32px - Subsection headers */
--h4: 1.5rem;    /* 24px - Card titles */
--h5: 1.25rem;   /* 20px - Small headers */
--h6: 1.125rem;  /* 18px - Micro headers */

/* Body Scale */
--body-large: 1.125rem;     /* 18px - Large body text */
--body: 1rem;               /* 16px - Standard body text */
--body-small: 0.875rem;     /* 14px - Small body text */
--body-xs: 0.75rem;         /* 12px - Captions, labels */

/* Line Heights */
--line-tight: 1.2;          /* Headings */
--line-normal: 1.5;         /* Body text */
--line-relaxed: 1.7;        /* Long-form content */
```

### Typography Guidelines
- **Headings**: Use serif fonts for elegance and sophistication
- **Body Text**: Use sans-serif fonts for optimal readability
- **Hierarchy**: Maintain clear contrast between heading levels
- **Spacing**: Use consistent spacing between text elements
- **Accessibility**: Ensure minimum 4.5:1 contrast ratio for text

## Component Library

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--sage-green);
  color: var(--pure-white);
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #7A8A7B;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(138, 154, 139, 0.3);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--sage-green);
  padding: 12px 24px;
  border-radius: 8px;
  border: 2px solid var(--sage-green);
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--sage-green);
  color: var(--pure-white);
}
```

#### Ghost Button
```css
.btn-ghost {
  background: transparent;
  color: var(--charcoal);
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid var(--charcoal);
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-ghost:hover {
  background: var(--charcoal);
  color: var(--pure-white);
}
```

### Cards

#### Product Card
```css
.product-card {
  background: var(--pure-white);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(138, 154, 139, 0.1);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
```

#### Feature Card
```css
.feature-card {
  background: var(--cream);
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  border: 1px solid rgba(138, 154, 139, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: var(--pure-white);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}
```

### Forms

#### Input Fields
```css
.form-input {
  width: 100%;
  padding: 16px;
  border: 2px solid rgba(138, 154, 139, 0.2);
  border-radius: 8px;
  font-size: var(--body);
  transition: all 0.3s ease;
  background: var(--pure-white);
}

.form-input:focus {
  outline: none;
  border-color: var(--sage-green);
  box-shadow: 0 0 0 3px rgba(138, 154, 139, 0.1);
}

.form-input::placeholder {
  color: rgba(44, 62, 80, 0.5);
}
```

#### Form Labels
```css
.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--charcoal);
  font-size: var(--body-small);
}
```

### Navigation

#### Main Navigation
```css
.nav-main {
  background: var(--pure-white);
  border-bottom: 1px solid rgba(138, 154, 139, 0.1);
  padding: 16px 0;
}

.nav-link {
  color: var(--charcoal);
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--sage-green);
  background: rgba(138, 154, 139, 0.1);
}
```

## Spacing System

### Spacing Scale
```css
/* Spacing Variables */
--space-xs: 4px;    /* 4px - Micro spacing */
--space-sm: 8px;    /* 8px - Small spacing */
--space-md: 16px;   /* 16px - Medium spacing */
--space-lg: 24px;   /* 24px - Large spacing */
--space-xl: 32px;   /* 32px - Extra large spacing */
--space-2xl: 48px;  /* 48px - Double extra large */
--space-3xl: 64px;  /* 64px - Triple extra large */
```

### Layout Spacing
```css
/* Section Spacing */
.section {
  padding: var(--space-2xl) 0;
}

.section-small {
  padding: var(--space-xl) 0;
}

.section-large {
  padding: var(--space-3xl) 0;
}

/* Component Spacing */
.component {
  margin-bottom: var(--space-lg);
}

.component-small {
  margin-bottom: var(--space-md);
}

.component-large {
  margin-bottom: var(--space-xl);
}
```

## Animation System

### Transition Timing
```css
/* Transition Variables */
--transition-fast: 0.15s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
--transition-bounce: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Hover Effects
```css
/* Standard Hover */
.hover-lift {
  transition: transform var(--transition-normal);
}

.hover-lift:hover {
  transform: translateY(-4px);
}

/* Scale Hover */
.hover-scale {
  transition: transform var(--transition-normal);
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Color Hover */
.hover-color {
  transition: color var(--transition-normal);
}

.hover-color:hover {
  color: var(--sage-green);
}
```

## Icon System

### Icon Guidelines
- **Style**: Line-based icons with consistent stroke width
- **Size**: Standard sizes: 16px, 20px, 24px, 32px, 48px
- **Color**: Use semantic colors or inherit from parent
- **Animation**: Subtle micro-interactions on hover/focus

### Icon Sizes
```css
.icon-xs { width: 16px; height: 16px; }
.icon-sm { width: 20px; height: 20px; }
.icon-md { width: 24px; height: 24px; }
.icon-lg { width: 32px; height: 32px; }
.icon-xl { width: 48px; height: 48px; }
```

## Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Medium devices */
--breakpoint-lg: 1024px;  /* Large devices */
--breakpoint-xl: 1280px;  /* Extra large devices */
--breakpoint-2xl: 1536px; /* 2X large devices */
```

### Container Widths
```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

@media (min-width: 640px) {
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1024px; }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}
```

## Accessibility Guidelines

### Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **UI Elements**: Minimum 3:1 contrast ratio

### Focus States
```css
.focus-visible {
  outline: 2px solid var(--sage-green);
  outline-offset: 2px;
}
```

### Screen Reader Support
- Use semantic HTML elements
- Provide alt text for images
- Use ARIA labels where appropriate
- Ensure logical tab order

## Performance Guidelines

### Image Optimization
- Use WebP format with fallbacks
- Implement lazy loading
- Optimize for different screen densities
- Compress images appropriately

### CSS Optimization
- Use CSS custom properties for theming
- Minimize CSS bundle size
- Implement critical CSS inline
- Use efficient selectors

### JavaScript Optimization
- Minimize bundle size
- Implement code splitting
- Use efficient event handlers
- Optimize animations with CSS transforms

## Brand Consistency

### Logo Usage
- Maintain minimum clear space around logo
- Use approved logo variations
- Ensure proper contrast on backgrounds
- Scale appropriately for different contexts

### Voice and Tone
- **Professional**: Knowledgeable and trustworthy
- **Natural**: Authentic and organic
- **Luxury**: Premium and sophisticated
- **Friendly**: Approachable and helpful

### Content Guidelines
- Use active voice
- Keep sentences concise
- Focus on benefits over features
- Maintain consistent terminology

---

*This style guide ensures that all Pure Natural Brand digital experiences maintain the sophisticated, nature-inspired luxury aesthetic while providing a consistent and accessible user experience across all platforms and devices.*
