# Connect2Roots Foundation Website

A beautiful, storytelling-style React website for Connect2Roots Foundation built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
connect2roots-react-app/
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # UI component library (shadcn/ui)
│   │   └── ...         # Custom components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and helpers
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles and Tailwind
├── public/             # Static assets
└── package.json
```

## 🎨 Features

- ✅ **React 18** with TypeScript
- ✅ **Vite** for fast development and building
- ✅ **Tailwind CSS** for styling
- ✅ **TanStack Router** for routing
- ✅ **TanStack Query** for data fetching
- ✅ **Radix UI** components (shadcn/ui)
- ✅ **Responsive design** - mobile-first
- ✅ **Smooth animations** and scroll reveals
- ✅ **Storytelling experience** with parallax effects

## 📄 Pages

- Home
- About (with sub-pages: Who We Are, Vision & Mission, Our Team, Working Model, Our Values, Journey)
- Programs
- Mentorship
- SEPF (Skills & Entrepreneurship Policy Forum)
- Resources
- Get Involved
- Contact
- Login

## 🎯 Customization

### Colors
Custom C2R colors are defined in `tailwind.config.js`:
- `c2r-primary`
- `c2r-secondary`
- `c2r-accent`

### Images
Images are loaded from Unsplash via `src/lib/images.ts`. To use your own images:
1. Add images to `public/assets/generated/`
2. Update `src/lib/images.ts` to point to local files

## 🔧 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **TanStack Router** - Routing
- **TanStack Query** - Data fetching
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## 📝 Notes

This is a standalone React application without Internet Computer dependencies. All backend functionality has been simplified to work with standard React patterns.

For form submissions and data fetching, you can integrate with your own backend API by updating the hooks in `src/hooks/useQueries.ts`.

## 📄 License

This project is for Connect2Roots Foundation.
