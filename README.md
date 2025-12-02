# Interactive Resume - Algokart Frontend Assignment

A modern, responsive, and interactive resume application built with React, Vite, and Tailwind CSS. Features a secure login system, multiple resume views, and powerful filtering capabilities.

## ✨ Features

### 1. **Authentication**
- ✅ Secure login with hardcoded credentials
- ✅ Email validation
- ✅ Password strength validation
- ✅ Session management with localStorage
- ✅ Logout functionality
- ✅ Error messages and feedback

### 2. **Interactive Resume**
- ✅ **Timeline View**: Visual timeline of work experience with expand/collapse
- ✅ **Cards View**: Alternative card-based layout for experience
- ✅ **Search Functionality**: Search by company, role, or description
- ✅ **Skill Filtering**: Filter experience by tech skills with multi-select
- ✅ **Active Filters Display**: Visual indicators of applied filters
- ✅ **Download PDF**: Export resume as PDF with professional formatting
- ✅ **Skills Section**: Organized by category (Frontend, Backend, Tools)
- ✅ **Education Section**: Display education credentials
- ✅ **Expandable Achievements**: View key achievements for each role

### 3. **Responsive Design**
- ✅ Mobile-first approach
- ✅ Optimized for mobile (320px), tablet (768px), desktop (1024px+)
- ✅ Touch-friendly interface
- ✅ Flexible layouts using Tailwind CSS
- ✅ Smooth animations and transitions

### 4. **Accessibility**
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ WCAG AA color contrast
- ✅ Proper form labeling
- ✅ Screen reader friendly

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: Tailwind CSS 3.3.0
- **Routing**: React Router DOM 6.20.0
- **Icons**: Lucide React 0.294.0
- **PDF Generation**: html2pdf.js 0.10.1

## 📋 Project Structure

```
resume-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx           # Search functionality
│   │   ├── SkillFilter.jsx         # Skill filtering
│   │   ├── ExperienceTimeline.jsx  # Timeline view
│   │   ├── ViewToggle.jsx          # View switcher
│   │   └── DownloadResumeButton.jsx # PDF download
│   ├── pages/
│   │   ├── LoginPage.jsx           # Login page
│   │   └── ResumePage.jsx          # Main resume page
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── public/
│   └── resume.json                 # Resume data
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
└── package.json                    # Dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or download the files)
```bash
git clone <repository-url>
cd resume-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔐 Login Credentials

Use the following hardcoded credentials to login:

- **Email**: `intern@demo.com`
- **Password**: `pass123`

These credentials are displayed on the login page for convenience.

## 📝 Resume Data Format

The resume data is loaded from `public/resume.json`. You can customize it with your own information:

```json
{
  "personal": {
    "name": "Your Name",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "City, State",
    "summary": "Your professional summary...",
    "profileImage": "URL to image"
  },
  "experience": [
    {
      "id": 1,
      "company": "Company Name",
      "role": "Job Title",
      "startDate": "YYYY-MM",
      "endDate": "present",
      "description": "Job description...",
      "skills": ["Skill1", "Skill2"],
      "achievements": ["Achievement 1", "Achievement 2"]
    }
  ],
  "education": [...],
  "skills": [...]
}
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#3B82F6',     // Blue
  secondary: '#10B981',   // Green
  accent: '#F59E0B'       // Amber
}
```

### Update Resume Data
Simply edit `public/resume.json` with your information. The app will automatically reload.

### Change Hardcoded Credentials
Edit `src/pages/LoginPage.jsx`:

```javascript
const VALID_EMAIL = 'your.email@example.com'
const VALID_PASSWORD = 'your.password'
```

## ✅ Requirements Checklist

- ✅ Login page with hardcoded credentials
- ✅ Session management (localStorage)
- ✅ Error handling and validation
- ✅ Logout functionality
- ✅ Interactive resume with multiple elements
- ✅ Work experience timeline (expandable/collapsible)
- ✅ Skill filtering
- ✅ Search functionality
- ✅ Multiple view modes (Timeline & Cards)
- ✅ Download as PDF
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Accessible HTML
- ✅ Smooth animations
- ✅ Clean empty states
- ✅ Client-side routing only
- ✅ No backend required
- ✅ localStorage support for sessions

## 🌐 Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Option 3: GitHub Pages
```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

## 📱 Responsive Breakpoints

The application is optimized for:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px and above

## ♿ Accessibility Features

- Semantic HTML elements (`<header>`, `<main>`, `<nav>`, etc.)
- Proper form labels and ARIA attributes
- Keyboard navigation support (Tab, Enter, Escape)
- Focus indicators on interactive elements
- Color contrast ratio ≥ 4.5:1 for normal text
- Screen reader friendly
- Mobile-friendly touch targets

## 🔄 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚠️ Known Limitations & Trade-offs

1. **No real backend**: Authentication is simulated with hardcoded credentials
2. **localStorage limitation**: Session persists only within the same browser
3. **PDF generation**: Uses client-side library (no server processing)
4. **Single user**: Designed for single-user resume display

## 💡 Future Improvements

If I had more time:
1. Add multiple resume templates
2. Implement real authentication with JWT
3. Add database support for multiple users
4. Create admin panel for resume management
5. Add dark mode toggle
6. Implement resume version history
7. Add ATS-friendly export options
8. Create resume builder/editor
9. Add LinkedIn/GitHub integration
10. Implement analytics

## 🐛 Troubleshooting

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Resume.json not loading
- Ensure the file is in the `public` folder
- Check browser console for errors
- Verify JSON syntax

### Styling not applied
```bash
npm install
npm run dev
```

### PDF download not working
- Ensure html2pdf.js is installed: `npm install html2pdf.js`
- Check browser console for errors

## 📄 License

This project is created for the Algokart Frontend Intern Assignment.

## 👤 Author

Created as a solution for Algokart Frontend Assignment

---

**Happy coding! 🎉**

For questions or issues, please check the troubleshooting section or refer to the documentation.
# interactive-resume
