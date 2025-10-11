# 👋 Sameer Sheikh - Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my journey as an aspiring Full-Stack Developer.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) <!-- Replace with your actual deployment URL -->

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **🌙 Dark/Light Theme**: Toggle between themes with persistent preference
- **📱 Fully Responsive**: Optimized for all device sizes
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎯 Interactive Elements**:
  - Animated BlurFade components for smooth scroll effects
  - Interactive dock navigation with hover effects
  - Responsive avatar with glow effects
- **🎪 Smooth Animations**: Framer Motion powered animations throughout
- **♿ Accessible**: Built with accessibility best practices using Radix UI

## 🛠️ Tech Stack

### Frontend

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions

### UI Components

- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful, customizable icons
- **Class Variance Authority** - Component variant management

### Development Tools

- **ESLint** - Code linting and formatting
- **Git** - Version control
- **Node.js** - Runtime environment

## 📁 Project Structure

```
src/
├── components/          # Main page components
│   ├── About.jsx       # About section
│   ├── Education.jsx   # Education timeline
│   ├── Hero.jsx        # Hero section with avatar
│   └── Skills.jsx      # Skills showcase
├── ui/                 # Reusable UI components
│   └── NavDock.jsx     # Bottom navigation dock
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Theme management
├── hooks/              # Custom React hooks
│   └── useTheme.js     # Theme hook
├── constant/           # Static data
│   └── data.js         # Education and skills data
└── assets/             # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Customization

### Personal Information

Update your personal details in `src/constant/data.js`:

```javascript
export const education = [
  {
    id: 1,
    instituteName: "Your University",
    course: "Your Degree",
    year: "2020 - 2024",
    avatarUrl: "/your-avatar.png",
  },
];

export const skills = [
  "React",
  "Node.js",
  "JavaScript",
  // Add your skills here
];
```

### Styling

- Modify colors and themes in `tailwind.config.js`
- Update component styles in individual component files
- Customize animations in the BlurFade components

### Images

- Replace `/public/me.jpg` with your profile picture
- Update favicon in `/public/favicon.png`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📱 Sections

### 🏠 Hero Section

- Personal introduction with animated avatar
- Professional tagline and current status
- Responsive design with hover effects

### 👨‍💻 About Section

- Personal story and journey
- Career transition narrative
- Professional aspirations

### 🎓 Education Section

- Academic background
- Current learning journey at Masai School
- Timeline with visual elements

### 🛠️ Skills Section

- Technical skills showcase
- Interactive skill badges
- Theme-aware styling

### 🚀 Navigation Dock

- Fixed bottom navigation
- Social media links (GitHub, LinkedIn)
- Theme toggle functionality
- Smooth hover animations

## 🎯 Key Features Explained

- BlurFade components for scroll-triggered animations
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Sameer Sheikh](https://www.linkedin.com/in/sameersheikh2)
- **GitHub**: [@sameersheikh2](https://www.github.com/sameersheikh2)

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Masai School](https://www.masaischool.com/) for the learning journey

---

⭐ **Star this repository if you found it helpful!**

_Built with ❤️ by Sameer Sheikh_
