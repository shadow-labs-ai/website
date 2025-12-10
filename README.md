# ShadowLabs Marketing Website

A modern marketing website built with Astro and Tailwind CSS, deployed to GitHub Pages.

## 🚀 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── public/
│   └── images/                 # Static assets from Figma
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── About.astro
│   │   ├── Testimonials.astro
│   │   ├── CTA.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Button.astro        # Utility components
│   │   ├── Card.astro
│   │   └── Section.astro
│   ├── layouts/
│   │   └── Layout.astro        # Main layout wrapper
│   ├── pages/
│   │   └── index.astro         # Landing page
│   └── styles/
│       └── global.css          # Global styles with Tailwind
├── astro.config.mjs            # Astro configuration
└── package.json
```

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321` to see your site.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📦 Converting Figma Design to Astro

### Step 1: Export Assets
- Export images from Figma (WebP format preferred)
- Export icons as SVG when possible
- Place assets in `public/images/` organized by section

### Step 2: Extract Design Tokens
Use Figma Dev Mode to extract:
- Color palette → Update `tailwind.config.mjs`
- Typography scale → Update `tailwind.config.mjs`
- Spacing values → Use Tailwind spacing scale
- Border radius and shadows → Use Tailwind utilities

### Step 3: Convert Sections
For each section in Figma:
1. Use Dev Mode to copy CSS properties
2. Convert to Tailwind classes
3. Update corresponding Astro component in `src/components/`
4. Match spacing, colors, and typography exactly

### Step 4: Test Responsiveness
- Test on multiple screen sizes
- Verify spacing and alignment
- Ensure images are optimized

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/vivekanandba/website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on every push to `main`

3. **Access your site:**
   - `https://vivekanandba.github.io/website`

## 📝 Configuration

### GitHub Pages Configuration
The site is configured in `astro.config.mjs`:
- `site: 'https://vivekanandba.github.io'`
- `base: '/website'`

### Tailwind CSS
Tailwind is configured via `@tailwindcss/vite`. Customize design tokens in `tailwind.config.mjs` to match your Figma design system.

## 🎨 Components

All components are ready to receive Figma design code. They're structured with:
- Semantic HTML
- Tailwind CSS classes
- Responsive design patterns
- Accessibility considerations

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Figma Dev Mode Guide](https://help.figma.com/hc/en-us/articles/360055204534)

## 📄 License

This project is private and proprietary.
