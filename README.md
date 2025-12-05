# Zeeniith Website

A modern, responsive React + TypeScript website for Zeeniith - a software agency that builds digital universes.

## 🚀 Features

- **React + TypeScript** - Modern, type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Dark/Light Mode** - System preference detection with manual toggle
- **Responsive Design** - Fully responsive across all device sizes
- **SEO Optimized** - Meta tags, OpenGraph, Twitter Cards, and JSON-LD schema
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **Smooth Animations** - Micro-interactions and transitions

## 📁 Project Structure

```
Zeeniith/
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Unified header with mobile menu
│   │   ├── Footer.tsx      # Footer component
│   │   └── SEO.tsx         # SEO meta tags component
│   ├── pages/
│   │   ├── Home.tsx        # Homepage
│   │   ├── About.tsx       # About page
│   │   ├── Services.tsx    # Services page
│   │   ├── Portfolio.tsx   # Portfolio page
│   │   └── Contact.tsx     # Contact page
│   ├── hooks/
│   │   └── useTheme.ts      # Dark/light mode hook
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Navigate to the project directory:
   ```bash
   cd Galaxy-website/Zeeniith
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Features

- **Unified Header** - Consistent navigation across all pages with active link highlighting
- **Mobile Menu** - Smooth slide-in menu for mobile devices
- **Dark Mode** - Toggle between light and dark themes with system preference detection
- **Animations** - Ticker animations, marquee effects, hover transitions
- **Responsive** - Mobile-first design that works on all screen sizes

## 📄 Pages

- **Home** (`/`) - Hero section, client logos, featured projects
- **About** (`/about`) - Company story, mission, values, timeline, team
- **Services** (`/services`) - Service offerings, development process, tech stack
- **Portfolio** (`/portfolio`) - Project showcase with filtering
- **Contact** (`/contact`) - Contact form, information, and map

## 🔧 Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **TailwindCSS** - Styling
- **Material Symbols** - Icons

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 SEO Features

- Semantic HTML5 elements
- Meta tags (title, description)
- OpenGraph tags
- Twitter Card tags
- JSON-LD structured data
- Canonical URLs
- Alt text for images
- Lazy loading images

## 🌙 Dark Mode

The website supports both light and dark themes:

- Automatically detects system preference on first visit
- Saves user preference in localStorage
- Manual toggle available in header
- Smooth theme transitions

## 📝 Notes

- The original HTML files in `/Galaxy-website` are kept as design reference only
- All images are loaded from external URLs (replace with local assets in production)
- **Contact Form**: Email functionality is set up using EmailJS. See `EMAILJS_SETUP.md` for configuration instructions.

## 📄 License

This project is proprietary and confidential.

