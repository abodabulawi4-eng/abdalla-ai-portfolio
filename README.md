**الملف: `README.md`**

استبدل الملف كامل بهذا. هذا يوثق النسخة الجديدة بعد تحويل المشروع إلى صفحات مستقلة باستخدام React Router.

````md id="n8a6xc"
# Abdalla AI Portfolio

A professional dark futuristic multi-page portfolio website for Abdalla Hani Abulawi, focused on Artificial Intelligence, Data Science, Machine Learning, Computer Vision, Automation, and Full-Stack Development.

## Project Type

Static frontend portfolio website.

No backend.  
No database.  
No authentication.  
No paid services.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- React Icons
- Framer Motion

## Pages

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Skills | `/skills` |
| Projects | `/projects` |
| Certificates | `/certificates` |
| Contact | `/contact` |

## Main Features

- Multi-page routing with React Router
- Sticky glassmorphism navbar
- Active page highlighting
- Mobile responsive menu
- Scroll progress bar
- Back to top button
- Animated AI-style background
- Responsive dark futuristic design
- Project filtering
- Project details modal
- Certificate cards with external image view
- Contact cards with direct links

## Project Structure

```txt
src/
  assets/
    images/
      profile.jpeg

  components/
    AnimatedBackground.jsx
    BackToTop.jsx
    CertificateCard.jsx
    ContactCard.jsx
    Footer.jsx
    Navbar.jsx
    ProjectCard.jsx
    ProjectModal.jsx
    RouteScrollToTop.jsx
    ScrollProgress.jsx
    SectionTitle.jsx
    SkillGroup.jsx

  data/
    certificates.js
    focusAreas.js
    personal.js
    projects.js
    skills.js

  pages/
    About.jsx
    Certificates.jsx
    Contact.jsx
    Home.jsx
    Projects.jsx
    Skills.jsx

  App.jsx
  index.css
  main.jsx
````

## Required Public Certificate Images

Certificate images should be placed inside:

```txt
public/certificates/
```

Current expected image paths:

```txt
public/certificates/data-science-essentials.png
public/certificates/python-essentials.png
public/certificates/python-essentials-2.png
public/certificates/sql-database.png
public/certificates/introduction-to python.png
public/certificates/coding-like-a-pro.png
public/certificates/web-development.png
public/certificates/desktop-applications.png
```

## Installation

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deployment

This project can be deployed for free on:

* Vercel
* Netlify
* GitHub Pages

## Notes

* All website UI content is in English.
* The website is designed as an AI Developer personal brand, not a basic CV.
* Project cards do not include fake demo or GitHub buttons.
* Project details are shown through a modal.
* Contact page uses direct links only and does not include a fake contact form.

```

اكتب **كمل** للخطوة الأخيرة: أوامر الفحص والتشغيل.
```
