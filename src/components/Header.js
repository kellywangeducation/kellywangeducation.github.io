import { Menu, Moon, Sun, X, Languages } from 'lucide';
import { createIcons } from 'lucide';
import Logo from '../assets/Vector.svg';
import { t, getLang, setLang } from '../i18n';

export function renderHeader() {
  const currentLang = getLang();
  
  return `
    <header class="fixed top-6 left-1/2 -translate-x-1/2 w-[98%] max-w-[1400px] z-50 transition-all duration-500" id="main-header">
      <div class="glass-panel rounded-full px-8 h-20 flex items-center justify-between shadow-lg">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 hover:opacity-80 transition-opacity group">
          <img src="${Logo}" alt="Kelly Wang Logo" class="w-10 h-10 group-hover:scale-90 transition-transform duration-300" width="40" height="40" loading="eager">
          <span class="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-white py-1">${t('name')}</span>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden xl:contents">
          <a href="#about" class="nav-link">${t('nav.about')}</a>
          <a href="#research" class="nav-link">${t('nav.research')}</a>
          <a href="#experience" class="nav-link">${t('nav.experience')}</a>
          <a href="#publications" class="nav-link">${t('nav.publications')}</a>
          <a href="#courses" class="nav-link">${t('nav.teaching')}</a>
          <a href="#certifications" class="nav-link">${t('nav.certifications')}</a>
          <a href="#additional-experience" class="nav-link">${t('nav.additional')}</a>
          <a href="#contact" class="nav-link">${t('nav.contact')}</a>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-1 md:gap-2">
          <!-- Language Toggle -->
          <button id="lang-toggle" class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-slate-100 font-bold text-sm flex items-center justify-center w-10 h-10" aria-label="Switch Language">
            ${currentLang === 'en' ? '中' : 'EN'}
          </button>

          <!-- Theme Toggle -->
          <button id="theme-toggle" class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-slate-100" aria-label="Toggle theme">
            <i data-lucide="moon" class="w-5 h-5 hidden dark:block"></i>
            <i data-lucide="sun" class="w-5 h-5 block dark:hidden"></i>
          </button>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="xl:hidden p-2 -mr-2 text-slate-900 dark:text-slate-100" aria-label="Menu">
            <i data-lucide="menu" class="w-7 h-7"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Nav Overlay -->
    <div id="mobile-menu" class="fixed inset-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-3xl transform translate-x-full transition-transform duration-500 xl:hidden z-[60] flex flex-col overflow-hidden">
      
      <!-- Decorative Background Blobs -->
      <div class="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-accent-pink/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px] pointer-events-none animate-pulse" style="animation-delay: 1s"></div>

      <!-- Header with Close Button -->
      <div class="flex justify-end items-center p-8 relative z-20">
        <button id="mobile-menu-close" class="p-3 rounded-full bg-slate-100/50 dark:bg-white/10 text-slate-900 dark:text-white hover:rotate-90 transition-all duration-300 shadow-sm border border-white/20 hover:scale-110">
          <i data-lucide="x" class="w-8 h-8"></i>
        </button>
      </div>

      <!-- Main Nav Items - Centered -->
      <div class="flex-1 flex flex-col justify-center px-12 gap-8 relative z-10">
        <nav class="flex flex-col gap-6" id="mobile-nav-links">
            <a href="#about" class="mobile-link text-2xl font-bold text-slate-900 dark:text-white hover:text-accent-pink transition-all duration-300 transform translate-x-10 opacity-0" style="transition-delay: 100ms">${t('nav.about')}</a>
            <a href="#research" class="mobile-link text-2xl font-bold text-slate-900 dark:text-white hover:text-accent-pink transition-all duration-300 transform translate-x-10 opacity-0" style="transition-delay: 150ms">${t('nav.research')}</a>
            <a href="#experience" class="mobile-link text-2xl font-bold text-slate-900 dark:text-white hover:text-accent-pink transition-all duration-300 transform translate-x-10 opacity-0" style="transition-delay: 200ms">${t('nav.experience')}</a>
            <a href="#publications" class="mobile-link text-2xl font-bold text-slate-900 dark:text-white hover:text-accent-pink transition-all duration-300 transform translate-x-10 opacity-0" style="transition-delay: 250ms">${t('nav.publications')}</a>
            <a href="#courses" class="mobile-link text-2xl font-bold text-slate-900 dark:text-white hover:text-accent-pink transition-all duration-300 transform translate-x-10 opacity-0" style="transition-delay: 300ms">${t('nav.teaching')}</a>
            <a href="#certifications" class="mobile-link text-2xl font-bold text-slate-900 dark:text-white hover:text-accent-pink transition-all duration-300 transform translate-x-10 opacity-0" style="transition-delay: 350ms">${t('nav.certifications')}</a>
            <a href="#additional-experience" class="mobile-link text-2xl font-bold text-slate-900 dark:text-white hover:text-accent-pink transition-all duration-300 transform translate-x-10 opacity-0" style="transition-delay: 400ms">${t('nav.more')}</a>
            <a href="#contact" class="mobile-link text-2xl font-bold text-slate-900 dark:text-white hover:text-accent-pink transition-all duration-300 transform translate-x-10 opacity-0" style="transition-delay: 450ms">${t('nav.contact')}</a>
        </nav>
      </div>
    </div>
  `;
}

export function initHeader() {
  createIcons({ icons: { Menu, Moon, Sun, X, Languages } });
  
  const header = document.getElementById('main-header');
  const themeToggle = document.getElementById('theme-toggle');
  const langToggle = document.getElementById('lang-toggle');
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
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  themeToggle.addEventListener('click', toggleTheme);
  
  langToggle.addEventListener('click', () => {
    const current = getLang();
    setLang(current === 'en' ? 'zh' : 'en');
  });

  // Mobile menu logic
  function toggleMenu() {
    const isClosed = mobileMenu.classList.contains('translate-x-full');
    
    if (isClosed) {
      // Open menu
      mobileMenu.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
      
      // Trigger animations
      requestAnimationFrame(() => {
        mobileLinks.forEach(link => {
            link.classList.remove('translate-x-10', 'opacity-0');
        });
      });
    } else {
      // Close menu
      mobileMenu.classList.add('translate-x-full');
      document.body.style.overflow = '';
      
      // Reset animations
      mobileLinks.forEach(link => {
          link.classList.add('translate-x-10', 'opacity-0');
      });
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
