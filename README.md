<<<<<<< HEAD
# Personal Portfolio — ReactJS

A production-ready personal portfolio built with **ReactJS**, designed to present my engineering experience, projects, and technical strengths in a clear and professional manner.

This repository is intentionally structured, version-controlled, and deployed with automated CI/CD to reflect real-world engineering practices rather than a demo or sample project.

---

## 🔗 Live Application
👉 https://your-name.netlify.app  
_(Replace with your deployed URL)_

---

## 🧭 Purpose & Philosophy

This portfolio is not just a personal website — it is a **technical artifact**.

The goal of this project is to:
- Present my professional experience in a clean and credible way
- Demonstrate frontend fundamentals with ReactJS
- Follow best practices around version control, deployment, and maintainability
- Act as a foundation for future backend and AI-driven integrations

The design intentionally avoids unnecessary complexity and focuses on **clarity, performance, and structure**.

---

## 🧑‍💻 About Me (Context)

I am a **Backend / API Engineer** with hands-on experience building and maintaining production systems.  
While my core expertise lies in backend development, this project demonstrates my ability to:
- Build clean, maintainable frontend applications
- Think in terms of system boundaries and contracts
- Deliver complete, deployable solutions end-to-end

---

## 🛠️ Technology Stack

### Frontend
- **ReactJS**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

### Tooling & Platform
- Git & GitHub (version control)
- Static site deployment (Netlify / Vercel)
- Automated CI/CD on every push to `main`
- HTTPS-enabled hosting

---

## ✨ Key Features

- Responsive layout across desktop, tablet, and mobile
- Projects section highlighting real-world engineering work
- Skills section focused on practical technologies
- Clean navigation and readable content hierarchy
- Optimized static build for fast load times
- Continuous deployment from GitHub

---

## 📂 Project Structure

The project follows a simple and maintainable structure:

=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> bf301a8 (Initial commit: React portfolio)
