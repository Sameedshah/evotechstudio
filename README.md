# EvoTech Studio - Digital Excellence

A modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS. EvoTech Studio specializes in web development, UI/UX design, Shopify development, and digital marketing services.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Performance Optimized**: Built with Next.js App Router and Turbopack
- **Accessibility**: WCAG compliant components and navigation
- **SEO Ready**: Optimized meta tags and structured data
- **Component Library**: Shadcn/ui components with custom styling
- **Smooth Animations**: Framer Motion for engaging user interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Font**: Geist Sans & Geist Mono

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page  
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── component/             # React components
│   ├── ui/               # Shadcn/ui components
│   ├── About.tsx         # About section
│   ├── ClientLayout.tsx  # Client-side layout wrapper
│   ├── Contact.tsx       # Contact form and info
│   ├── Footer.tsx        # Site footer
│   ├── Home.tsx          # Homepage sections
│   ├── Navbar.tsx        # Navigation component
│   ├── PageTransition.tsx # Page transition animations
│   ├── Portfolio.tsx     # Portfolio showcase with project filtering
│   └── Services.tsx      # Services showcase
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Color Palette**: HSL-based colors with dark/light mode support
- **Typography**: Geist font family with consistent sizing
- **Spacing**: Tailwind's spacing scale
- **Components**: Consistent button, card, and form styles
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd evotech-studio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Navigation
- Responsive navbar with mobile menu
- Active page indicators
- Dark/light mode toggle
- Smooth scroll animations

### Homepage
- Hero section with gradient background
- Services showcase
- Featured projects preview
- Client testimonials
- Statistics display
- Call-to-action sections

### Services Page
- Detailed service descriptions
- Feature lists with icons
- Process workflow
- Pricing information

### Portfolio Page
- Categorized project showcase (All Projects, Web Development, AI Agent, UI/UX Design, Graphic Designer, Branding)
- Interactive project cards with hover effects
- Detailed project modals with technologies and features
- 11 featured projects including School Management System, Image Generation APP, Emirates Visual Identity, and more
- Responsive grid layout with smooth animations

### About Page
- Team member profiles
- Company mission and vision
- Core values
- Why choose us section

### Contact Page
- Contact form with validation
- Business information
- Interactive map
- Multiple contact methods

## 🎨 Customization

### Colors
Edit the CSS variables in `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: 220 90% 56%;
  --secondary: 0 0% 96%;
  /* ... other colors */
}
```

### Components
All UI components are in `component/ui/` and can be customized using the `cn()` utility function.

### Animations
Framer Motion animations can be adjusted in individual components. Global animation settings are in the component files.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - Shadcn/ui configuration

## 📈 Performance

- **Core Web Vitals**: Optimized for excellent scores
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router
- **Caching**: Built-in Next.js caching strategies

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: info@evotechstudio.dev
- **Phone**: +92 370 0589908
- **Location**: Karachi, Pakistan

---

Built with ❤️ by EvoTech Studio
