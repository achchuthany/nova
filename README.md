# Nova - Yogarajah Achchuthan Portfolio

A modern, SEO-optimized personal portfolio website showcasing dual expertise as an IT Instructor at University of Jaffna and Software Engineer.

## 🚀 Features

- **Next.js 14+ with App Router** - Modern React framework with server components
- **Dark Mode First** - Default dark theme with toggle and localStorage persistence
- **JSON-Based Content** - All content managed via JSON files for easy updates
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Animated UI** - Smooth animations powered by Framer Motion
- **SEO Optimized** - Proper metadata and semantic HTML structure
- **Component Library** - Reusable UI components with variants
- **Type-Safe** - JSDoc comments for documentation

## 📁 Project Structure

```
nova/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.jsx               # Root layout with theme provider
│   └── page.jsx                 # Homepage
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Site footer
│   │   └── ThemeProvider.jsx  # Dark/light mode context
│   ├── sections/                # Homepage sections
│   │   ├── HeroSection.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── BlogSection.jsx
│   │   └── CTASection.jsx
│   └── ui/                      # Reusable UI components
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Badge.jsx
│       ├── Section.jsx
│       └── Container.jsx
├── data/                         # JSON content files
│   ├── profile.json             # Personal information
│   ├── projects.json            # Project portfolio
│   ├── skills.json              # Technical skills
│   ├── experience.json          # Work history
│   ├── education.json           # Academic credentials
│   ├── courses.json             # Teaching courses
│   ├── testimonials.json        # Testimonials
│   └── blog-posts.json          # Blog metadata
├── lib/                          # Utility functions
│   ├── data-fetchers.js         # Data loading functions
│   ├── utils.js                 # Helper utilities
│   └── constants.js             # Site constants
├── public/                       # Static assets
│   ├── images/
│   ├── icons/
│   └── documents/
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Dependencies

```

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: JavaScript (ES6+) with JSDoc
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/achchuthany/nova.git
cd nova

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design System

### Colors

```css
/* Light Mode */
--background: 0 0% 100%;    /* White */
--foreground: 0 0% 3.9%;    /* Near Black */
--primary: 210 100% 50%;     /* Blue */
--secondary: 220 70% 50%;    /* Dark Blue */
--accent: 280 80% 60%;       /* Purple */

/* Dark Mode (Default) */
--background: 0 0% 3.9%;     /* Near Black */
--foreground: 0 0% 98%;      /* Near White */
--primary: 210 100% 50%;     /* Blue */
--secondary: 220 70% 50%;    /* Dark Blue */
--accent: 280 80% 60%;       /* Purple */
```

### Typography

- **Body**: Inter
- **Headings**: Space Grotesk

## 📄 Content Management

All content is stored in JSON files under the `/data` directory:

- `profile.json` - Personal info, bio, contact details, social links
- `projects.json` - Project portfolio with case studies
- `skills.json` - Technical skills by category
- `experience.json` - Work history and achievements
- `education.json` - Degrees and certifications
- `courses.json` - Teaching courses and syllabi
- `testimonials.json` - Student and colleague testimonials
- `blog-posts.json` - Blog post metadata

## 🎯 Key Features

### Homepage
- Animated hero section with typewriter effect
- Featured projects showcase
- Skills visualization with progress bars
- Testimonials carousel
- Latest blog posts
- Call-to-action section

### Theme System
- Dark mode by default
- Toggle with smooth transitions
- LocalStorage persistence
- System preference detection

### UI Components
- Button (primary, secondary, ghost, outline variants)
- Card with hover effects and glassmorphism
- Badge for tags
- Section with scroll animations
- Responsive container

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## 📝 License

MIT License

## 👤 Author

**Yogarajah Achchuthan**
- IT Instructor at University of Jaffna
- Software Engineer & System Architect
- Website: [achchuthan.lk](https://www.achchuthan.lk)
- Email: achchuthany@univ.jfn.ac.lk
- GitHub: [@achchuthany](https://github.com/achchuthany)

## 🙏 Acknowledgments

Built with Next.js, React, Tailwind CSS, and Framer Motion.

