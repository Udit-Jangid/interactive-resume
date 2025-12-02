# Interactive Resume - Algokart Frontend Assignment

### 🌐 Live URL 👉 **https://udit-jangid.github.io/interactive-resume**

A modern, responsive, and interactive resume application built with React, Vite, and Tailwind CSS. Features a secure login system, multiple resume views, and powerful filtering capabilities.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: Tailwind CSS 3.3.0
- **Routing**: React Router DOM 6.20.0
- **Icons**: Lucide React 0.294.0
- **PDF Generation**: html2pdf.js 0.10.1

## 🚀 Setup & Run Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or download the files)

```bash
git clone <repository-url>
cd interactive-resume
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

## 🔐 Login (Hardcoded Credentials)

Use the following hardcoded credentials to login:

- **Email**: `intern@demo.com`
- **Password**: `pass123`

These credentials are displayed on the login page for convenience.

## 📝 Resume Data Format (resume.json)

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
const VALID_EMAIL = "your.email@example.com";
const VALID_PASSWORD = "your.password";
```

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

## 👤 Author

Created for Algokart Frontend Assignment by Udit Jangid

**Happy coding! 🎉**
