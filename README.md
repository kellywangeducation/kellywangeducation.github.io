# Personal Digital CV

A modern, Apple-inspired static personal website and portfolio built with Node.js, Vite, TailwindCSS, and PixiJS.

## Features

- 🍎 **Apple-Inspired Design**: Clean typography (SF Pro/System), minimal aesthetics, and subtle animations.
- 🌓 **Dark Mode**: True-black dark mode support with toggle.
- 📱 **Responsive**: Fully optimized for desktop, tablet, and mobile.
- 🎨 **Interactive Particles**: Lightweight 2D particle simulation using PixiJS.
- 🧩 **Modular Components**: Easy to maintain Vanilla JS component structure.
- ⚡ **High Performance**: Optimized build via Vite.

## Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Modular JS components (Header, Hero, Research, etc.)
├── main.js        # Entry point and composition
└── style.css      # Tailwind directives and custom styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd personal-digital-cv
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Deployment on Render.com

This project is configured to be deployed as a **Static Site** on Render.

1. **Push to GitHub/GitLab**: Ensure your code is pushed to a repository.
2. **Create New Static Site**: Log in to Render and click "New +", then select "Static Site".
3. **Connect Repository**: Select your repo.
4. **Configure Build**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. **Deploy**: Click "Create Static Site".

## Customization

- **Personal Info**: Edit the HTML strings in `src/components/*.js` files.
- **Theme Colors**: Update `tailwind.config.js` `colors` section.
- **Particles**: Modify `src/components/Particles.js` to change particle behavior, count, or colors.
- **Analytics**: Replace the placeholders in `index.html` with your actual Google Analytics 4 and Microsoft Clarity IDs.

## Technologies

- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PixiJS](https://pixijs.com/)
- [Lucide Icons](https://lucide.dev/)
