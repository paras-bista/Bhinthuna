# Bhintuna Restaurant Website

Modern, conversion-focused website for Bhintuna - an authentic Nepali restaurant in Parramatta serving traditional bara, momo, and authentic Nepali cuisine.

## 🚀 Sprint 1 Delivery

### Features Implemented
- ✅ **Hero Section** - Primary value proposition with strong CTA
- ✅ **Trust Section** - Social proof elements to build credibility
- ✅ **Menu Preview** - Featured dishes with appetizing visuals
- ✅ **Catering Teaser** - Introduction to catering services
- ✅ **Final CTA** - Conversion-optimized call-to-action
- ✅ **Full Menu Page** - Complete menu with organized categories
- ✅ **Responsive Design** - Mobile-first approach (320px - 1280px+)

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Testing:** Vitest
- **Package Manager:** Bun

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/triovatelabs/ProjectSubmission_PB.git

# Navigate to project directory
cd bhintuna

# Install dependencies
bun install
# or
npm install

# Start development server
bun dev
# or
npm run dev
```

The app will be available at `http://localhost:5173`

## 🧪 Testing

```bash
# Run tests
bun test
# or
npm test
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── TrustSection.tsx
│   ├── MenuPreview.tsx
│   ├── CateringTeaser.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   └── ui/             # shadcn/ui components
├── pages/              # Route pages
│   ├── Index.tsx       # Home page
│   ├── FullMenu.tsx    # Full menu page
│   └── NotFound.tsx    # 404 page
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

## 🔄 Development Workflow (SOP-Compliant)

This project follows strict Development SOPs:

1. **Branch per feature** - Never push directly to `main`
2. **Pull Request required** - All changes must go through PR review
3. **PR must include:**
   - Screenshots (desktop + mobile)
   - Lighthouse scores
   - QA evidence across breakpoints (320px, 375px, 768px, 1024px, 1280px)
4. **Commit standards** - Descriptive messages with clear intent
5. **Preview deployments** - Validate changes in production-like environment

### Creating a Feature Branch

```bash
# Create feature branch
git checkout -b feat/your-feature-name

# Make changes, then commit
git add .
git commit -m "feature: descriptive message about what changed"

# Push to remote
git push -u origin feat/your-feature-name
```

Then create a PR on GitHub with full documentation.

## 📱 Responsive Breakpoints

Tested and optimized for:
- 320px (Small mobile)
- 375px (iPhone SE)
- 768px (Tablet)
- 1024px (Laptop)
- 1280px+ (Desktop)

## 🎯 Performance Goals

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 90+
- Lighthouse Best Practices: 90+
- Lighthouse SEO: 90+

## 📄 License

Private project for Bhintuna Restaurant

## 🤝 Contributing

This project follows a strict PR-based workflow. See Development Workflow section above.
