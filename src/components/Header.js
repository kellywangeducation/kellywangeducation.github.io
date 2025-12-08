import { Menu, Moon, Sun, X } from 'lucide';
import { createIcons } from 'lucide';
import Logo from '../assets/Vector.svg';

export function renderHeader() {
  return `
    <header class="fixed top-6 left-1/2 -translate-x-1/2 w-[98%] max-w-[1400px] z-50 transition-all duration-500" id="main-header">
      <div class="glass-panel rounded-full px-8 h-20 flex items-center justify-between shadow-lg">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 hover:opacity-80 transition-opacity group">
          <img src="${Logo}" alt="Kelly Wang Logo" class="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" width="40" height="40" loading="eager">
          <span class="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-white pb-1">Kelly Wang</span>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden xl:flex items-center gap-1">
          <a href="#about" class="nav-link">About</a>
          <a href="#research" class="nav-link">Research</a>
          <a href="#experience" class="nav-link">Experience & Education</a>
          <a href="#publications" class="nav-link">Publications & Conferences</a>
          <a href="#courses" class="nav-link">Teaching</a>
          <a href="#certifications" class="nav-link">Certifications</a>
          <a href="#additional-experience" class="nav-link">Additional Experience</a>
          <a href="#contact" class="nav-link">Contact</a>
          
          <button id="theme-toggle" class="ml-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-slate-100" aria-label="Toggle theme">
            <i data-lucide="moon" class="w-5 h-5 hidden dark:block"></i>
            <i data-lucide="sun" class="w-5 h-5 block dark:hidden"></i>
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="xl:hidden p-2 -mr-2 text-slate-900 dark:text-slate-100" aria-label="Menu">
          <i data-lucide="menu" class="w-7 h-7"></i>
        </button>
      </div>
    </header>

    <!-- Mobile Nav Overlay -->
    <div id="mobile-menu" class="fixed inset-0 bg-white dark:bg-apple-dark transform translate-x-full transition-transform duration-300 xl:hidden z-[60] flex flex-col">
      <!-- Scrollable Nav Items -->
      <div class="flex-1 overflow-y-auto pt-20 px-8 flex flex-col gap-6">
        <button id="mobile-menu-close" class="absolute top-8 right-8 p-2 text-slate-900 dark:text-slate-100 z-10">
          <i data-lucide="x" class="w-8 h-8"></i>
        </button>
        <a href="#about" class="text-3xl font-bold mobile-link text-slate-900 dark:text-white">About</a>
        <a href="#research" class="text-3xl font-bold mobile-link text-slate-900 dark:text-white">Research</a>
        <a href="#experience" class="text-3xl font-bold mobile-link text-slate-900 dark:text-white">Experience & Education</a>
        <a href="#publications" class="text-3xl font-bold mobile-link text-slate-900 dark:text-white">Publications & Conferences</a>
        <a href="#courses" class="text-3xl font-bold mobile-link text-slate-900 dark:text-white">Teaching</a>
        <a href="#certifications" class="text-3xl font-bold mobile-link text-slate-900 dark:text-white">Certifications</a>
        <a href="#additional-experience" class="text-3xl font-bold mobile-link text-slate-900 dark:text-white">Additional Experience</a>
        <a href="#contact" class="text-3xl font-bold mobile-link text-slate-900 dark:text-white">Contact</a>
        
        <div class="mt-4 pt-8 border-t border-slate-100 dark:border-neutral-800 pb-10">
            <button id="mobile-theme-toggle" class="flex items-center gap-3 text-xl font-medium text-slate-600 dark:text-slate-300">
            <span class="dark:hidden">Dark Mode</span>
            <span class="hidden dark:block">Light Mode</span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Footer (Fixed at bottom) -->
      <div class="p-6 border-t border-slate-100 dark:border-neutral-800 text-center text-slate-500 dark:text-slate-400 text-sm bg-white dark:bg-apple-dark shrink-0" id="mobile-menu-footer">
        <p class="mb-4">&copy; 2026 <span class="dark:text-white">Kelly Wang.</span></p>
        <div class="flex justify-center gap-6">
            <a href="#" class="hover:text-accent-pink transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-accent-pink transition-colors">Terms of Use</a>
        </div>
      </div>
    </div>
  `;
}

export function initHeader() {
  createIcons({ icons: { Menu, Moon, Sun, X } });
  
  const header = document.getElementById('main-header');
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scale-[0.98]', 'translate-y-1');
    } else {
      header.classList.remove('scale-[0.98]', 'translate-y-1');
    }
  });

  // Dark mode logic
  function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }

  // Set initial theme
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  themeToggle.addEventListener('click', toggleTheme);
  mobileThemeToggle.addEventListener('click', toggleTheme);

  // Mobile menu logic
  function toggleMenu() {
    const isOpen = !mobileMenu.classList.contains('translate-x-full');
    if (isOpen) {
      mobileMenu.classList.add('translate-x-full');
      document.body.style.overflow = '';
    } else {
      mobileMenu.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
    }
  }

  mobileMenuBtn.addEventListener('click', toggleMenu);
  mobileMenuClose.addEventListener('click', toggleMenu);
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu();
    });
  });
}
