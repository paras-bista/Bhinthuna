# Cloudflare Deployment Guide - Multiple Preview URLs

## Quick Setup for 3 Preview URLs

### Method 1: Single Project with Automatic Previews (Recommended)

**Step 1: Connect GitHub Repository**
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
2. Click **"Create a project"** → **"Connect to Git"**
3. Authorize Cloudflare to access your GitHub repository
4. Select: `triovatelabs/ProjectSubmission_PB`

**Step 2: Configure Build Settings**
```
Framework preset: Vite
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
Node version: 18 or higher
```

**Step 3: Environment Variables** (if needed)
```
NODE_VERSION=18
```

**Step 4: Enable Preview Deployments**
- Go to Settings → Builds & deployments
- Enable **"Preview deployments"**
- Select **"All non-production branches"**

### 🎯 Result: You'll Get These URLs Automatically

| Branch | Purpose | URL Pattern |
|--------|---------|-------------|
| `main` | **Production** (Sprint 1 only) | `https://bhintuna.pages.dev` |
| `feat/sprint2-menu-catering` | **Sprint 2 Preview** | `https://[hash].feat-sprint2-menu-catering.bhintuna.pages.dev` |
| `feat/sprint3-about-contact-reviews` | **Sprint 3 Preview** | `https://[hash].feat-sprint3-about-contact-reviews.bhintuna.pages.dev` |

---

## What Each URL Will Show

### 🔴 Production URL (main branch)
**URL:** `https://bhintuna.pages.dev`

**Content:**
- ✅ Home page (Hero, Menu Preview, Catering Teaser, Trust Section)
- ✅ Full Menu page
- ❌ No About page
- ❌ No Contact page
- ❌ No Testimonials
- ❌ No SEO metadata

---

### 🟡 Sprint 2 Preview URL
**URL:** `https://[hash].feat-sprint2-menu-catering.bhintuna.pages.dev`

**Content:**
- ✅ Everything from Sprint 1
- ✅ Enhanced Menu page
- ✅ Catering page updates
- ❌ Still no About/Contact
- ❌ No Testimonials

---

### 🟢 Sprint 3 Preview URL (Latest)
**URL:** `https://[hash].feat-sprint3-about-contact-reviews.bhintuna.pages.dev`

**Content:**
- ✅ Complete About page with team bios
- ✅ Complete Contact page with working form
- ✅ Testimonials carousel (mobile-optimized)
- ✅ Full SEO metadata on all pages
- ✅ Schema.org structured data
- ✅ Open Graph tags

---

## Access Your Preview URLs

### After Pushing Branches to GitHub:

1. **Go to Cloudflare Pages Dashboard**
   - Navigate to your project
   - Click on **"View builds"** or **"Deployments"**

2. **Find Your Branches:**
   ```
   Production (main)
   └── Latest deployment: https://bhintuna.pages.dev
   
   Preview Deployments:
   ├── feat/sprint2-menu-catering
   │   └── https://abc123.feat-sprint2-menu-catering.bhintuna.pages.dev
   └── feat/sprint3-about-contact-reviews
       └── https://def456.feat-sprint3-about-contact-reviews.bhintuna.pages.dev
   ```

3. **Share URLs for Review:**
   - Each URL is publicly accessible
   - Perfect for client reviews
   - No authentication needed

---

## Automatic Deployment Triggers

Cloudflare automatically deploys when:
- ✅ You push to `main` → Updates production
- ✅ You push to any branch → Creates/updates preview
- ✅ You create a PR → Generates preview URL in PR comments

---

## Comparing Sprints - Testing Workflow

### Test Sprint 1 (Current Production):
```bash
# Open production URL
https://bhintuna.pages.dev

# Test:
- Home page works ✅
- Menu page works ✅
- /about shows 404 ❌
- /contact shows 404 ❌
```

### Test Sprint 2 Preview:
```bash
# Open Sprint 2 preview URL
https://[hash].feat-sprint2-menu-catering.bhintuna.pages.dev

# Test Sprint 2 additions:
- Enhanced menu functionality
- Catering page improvements
```

### Test Sprint 3 Preview:
```bash
# Open Sprint 3 preview URL
https://[hash].feat-sprint3-about-contact-reviews.bhintuna.pages.dev

# Test Sprint 3 additions:
- /about page works ✅
- /contact page works ✅
- Testimonials carousel ✅
- Mobile 320px optimization ✅
- SEO metadata present ✅
```

---

## Alternative: Deploy All Sprints to Production

If you want ALL features live on main production URL:

### Option A: Merge Sprints Sequentially
```bash
# 1. Merge Sprint 2 to main
git checkout main
git merge feat/sprint2-menu-catering
git push origin main

# Wait for deployment...
# Test: https://bhintuna.pages.dev

# 2. Merge Sprint 3 to main
git merge feat/sprint3-about-contact-reviews
git push origin main

# Final deployment with everything
# Test: https://bhintuna.pages.dev
```

### Option B: Create Combined Release Branch
```bash
# Create release branch with all sprints
git checkout main
git checkout -b release/all-sprints

# Merge all feature branches
git merge feat/sprint2-menu-catering
git merge feat/sprint3-about-contact-reviews

# Push and get preview URL
git push origin release/all-sprints

# Preview URL: https://[hash].release-all-sprints.bhintuna.pages.dev
```

---

## Troubleshooting

### Preview URLs Not Appearing?
1. Check Settings → Builds & deployments
2. Ensure "Preview deployments" is enabled
3. Push a new commit to trigger build

### Build Failing?
Check build logs in Cloudflare Dashboard:
- Correct Node version (18+)
- All dependencies installed
- Build command succeeds locally

### 404 Errors on Preview?
- Check that routes are configured in App.tsx
- Verify files exist in the branch
- Check build output includes all pages

---

## Best Practice for Sprint Reviews

**Before Client Meeting:**
1. ✅ Ensure all 3 branches are pushed to GitHub
2. ✅ Wait for Cloudflare builds to complete (2-5 min each)
3. ✅ Test each preview URL on mobile + desktop
4. ✅ Share URLs in meeting invite

**During Review:**
- Show Sprint 1 baseline
- Demonstrate Sprint 2 additions
- Highlight Sprint 3 new features
- Compare mobile responsiveness

**After Approval:**
- Merge approved sprints to main
- Production URL updates automatically
