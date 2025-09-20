# Lakshya Sharma - QA Automation Engineer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, showcasing quality assurance expertise and professional experience.

## 🌟 Features

- **Modern Design**: Clean, professional UI with dark/light mode toggle
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Elements**: Smooth animations, typing effects, and hover states
- **SEO Optimized**: Complete meta tags, structured data, and sitemap
- **Performance**: Fast loading with Vite and optimized assets
- **Accessibility**: WCAG compliant with keyboard navigation
- **Contact Form**: Functional Netlify Forms integration
- **Deployment Ready**: Pre-configured for Vercel and Netlify

## 🚀 Live Demo

**Demo URL**: [Coming Soon - Deploy to see live version]

## 📋 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [SEO & Analytics](#-seo--analytics)
- [Contact Form Setup](#-contact-form-setup)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)

## 🛠 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Icons**: Heroicons
- **Animations**: Framer Motion, CSS Animations
- **Charts**: Recharts
- **Forms**: Netlify Forms
- **Deployment**: Vercel (primary), Netlify (alternative)
- **SEO**: JSON-LD structured data, complete meta tags

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LakshyaQA/portfolio-qa-automation.git
   cd portfolio-qa-automation
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
yarn build
# or
npm run build
```

Preview production build:
```bash
yarn preview
# or
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation with theme toggle
│   ├── Hero.jsx         # Hero section with typing animation
│   ├── About.jsx        # About section with process flow
│   ├── Skills.jsx       # Skills with proficiency charts
│   ├── Experience.jsx   # Timeline-based experience
│   ├── Projects.jsx     # Filterable project showcase
│   ├── Resume.jsx       # Resume preview and download
│   ├── Contact.jsx      # Contact form and information
│   └── Footer.jsx       # Footer with social links
├── data/
│   └── profile.js       # All website content and data
├── App.jsx              # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles and Tailwind imports

public/
├── robots.txt          # SEO robots file
├── sitemap.xml         # Website sitemap
└── resume.pdf          # Downloadable resume (add your own)

Config Files:
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── vercel.json         # Vercel deployment config
├── netlify.toml        # Netlify deployment config
└── vite.config.js      # Vite configuration
```

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `/src/data/profile.js` to customize all content:

```javascript
export const profileData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... update all sections
};
```

### 2. Add Your Resume

1. Add your resume PDF to `/public/resume.pdf`
2. Update the download link in `profile.js` if needed

### 3. Add Your Projects

Update the `projects` array in `profile.js`:

```javascript
projects: [
  {
    name: "Your Project",
    description: "Project description",
    githubUrl: "https://github.com/yourusername/project",
    // ... other project details
  }
]
```

### 4. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Update primary colors
      }
    }
  }
}
```

### 5. Add Your Photo

1. Add your professional photo to `/public/your-photo.jpg`
2. Update the hero section in `Hero.jsx` to use your photo instead of initials

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to GitHub**
   - Push your code to a GitHub repository
   - Connect your repo to Vercel

2. **Auto-Deploy**
   - Vercel will automatically build and deploy
   - Get your live URL instantly

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update all URLs in the code to match your domain

### Deploy to Netlify (Alternative)

1. **Build the project**
   ```bash
   yarn build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repo for auto-deployment

3. **Configure Forms**
   - Netlify Forms will work automatically
   - Check your Netlify dashboard for form submissions

### GitHub Pages (Static Only)

For a simpler GitHub Pages deployment:

```bash
yarn build
# Deploy the dist folder to gh-pages branch
```

## 📈 SEO & Analytics

### Google Analytics Setup

1. Get your GA4 Measurement ID
2. Uncomment and update the GA code in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### SEO Features Included

- ✅ Complete meta tags
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML structure
- ✅ Alt text for images
- ✅ Proper heading hierarchy

## 📧 Contact Form Setup

The contact form is pre-configured for Netlify Forms:

### Netlify Forms (Recommended)
1. Deploy to Netlify
2. Forms will work automatically
3. Check submissions in Netlify dashboard

### Alternative: EmailJS
If you prefer EmailJS:
1. Sign up for EmailJS
2. Get your service ID and template ID
3. Replace the form handler in `Contact.jsx`

### Alternative: Custom Backend
For a custom form handler:
1. Create your API endpoint
2. Update the form submission logic in `Contact.jsx`

## 🌐 Browser Support

- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Performance Tips

- Images are lazy-loaded
- CSS is purged in production
- Components are optimized for re-renders
- Animations are GPU-accelerated

## 🔧 Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json yarn.lock
yarn install
yarn build
```

### Styling Issues
```bash
# Rebuild Tailwind
yarn build:css
```

### Form Not Working
- Check Netlify deployment
- Verify form attributes in HTML
- Check browser network tab for errors

## 📞 Support

If you have questions or need help customizing this portfolio:

- 📧 Email: lakshyasharmaqa@gmail.com
- 💼 LinkedIn: [lakshyasharmaqa](https://linkedin.com/in/lakshyasharmaqa)
- 🐙 GitHub: [LakshyaQA](https://github.com/LakshyaQA)

---

**Built with ❤️ by Lakshya Sharma**

*Ready to showcase your QA expertise to the world!*
