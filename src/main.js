import './style.css'
import { renderHeader, initHeader } from './components/Header.js'
import { renderHero, initHero } from './components/Hero.js'
import { renderResearch, initResearch } from './components/Research.js'
import { renderExperience, initExperience } from './components/Experience.js'
import { renderPublications, initPublications } from './components/Publications.js'
import { renderCourses, initCourses } from './components/Courses.js'
import { renderContact, initContact } from './components/Contact.js'
import { renderFooter } from './components/Footer.js'
import { renderPrivacy } from './components/Privacy.js'
import { renderTerms } from './components/Terms.js'
import { renderCertifications, initCertifications } from './components/Certifications.js'
import { renderAdditionalExperience, initAdditionalExperience } from './components/AdditionalExperience.js'
import { initParticles } from './components/Particles.js'
import { onLangChange, t } from './i18n.js'

const app = document.querySelector('#app');

function renderPage() {
  // Update Title and Meta Description
  document.title = t('meta.title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', t('meta.description'));
  }

  // Simple client-side router logic
  // In a production Vite app we might use a router library, but this keeps it vanilla & modular
  const path = window.location.pathname;
  
  if (path.endsWith('/privacy') || path.endsWith('/privacy.html')) {
    app.innerHTML = `
      ${renderHeader()}
      <main>
        ${renderPrivacy()}
      </main>
      ${renderFooter()}
    `;
    initHeader();
    attachLinkListeners();
  } else if (path.endsWith('/terms') || path.endsWith('/terms.html')) {
    app.innerHTML = `
      ${renderHeader()}
      <main>
        ${renderTerms()}
      </main>
      ${renderFooter()}
    `;
    initHeader();
    attachLinkListeners();
  } else {
    // Home Page
    app.innerHTML = `
      ${renderHeader()}
      <main>
        ${renderHero()}
        ${renderResearch()}
        ${renderExperience()}
        ${renderPublications()}
        ${renderCourses()}
        ${renderCertifications()}
        ${renderAdditionalExperience()}
        ${renderContact()}
      </main>
      ${renderFooter()}
    `;
    
    // Initialize interactive elements
    initHeader();
    initHero();
    initResearch();
    initExperience();
    initPublications();
    initCourses();
    initCertifications();
    initAdditionalExperience();
    initContact();
    
    // Initialize Particles only on home page
    initParticles('particles-container');
    
    // Scroll Fade Animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-fade').forEach((el) => {
      el.classList.add('fade-enter');
      observer.observe(el);
    });
    attachLinkListeners();
  }
}

function attachLinkListeners() {
  // Handle Privacy/Terms links in footer and mobile menu
  const footerLinks = document.querySelectorAll('footer a, #mobile-menu-footer a, #back-to-home-privacy, #back-to-home-terms');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      // Use href check instead of textContent for multilingual support
      if (href && (href.endsWith('/privacy') || href.endsWith('/privacy.html'))) {
        e.preventDefault();
        window.history.pushState({}, '', '/privacy');
        renderPage();
        window.scrollTo(0, 0);
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
             mobileMenu.classList.add('translate-x-full');
             // Reset icon
             const icon = mobileMenuBtn.querySelector('svg');
             if(icon) {
                 // logic to reset icon might be needed or handled by re-render
             }
        }
      } else if (href && (href.endsWith('/terms') || href.endsWith('/terms.html'))) {
        e.preventDefault();
        window.history.pushState({}, '', '/terms');
        renderPage();
        window.scrollTo(0, 0);
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
             mobileMenu.classList.add('translate-x-full');
        }
      } else if (link.id && link.id.startsWith('back-to-home')) {
         e.preventDefault();
         window.history.pushState({}, '', '/');
         renderPage();
         window.scrollTo(0, 0);
      }
    });
  });
}

// Handle navigation
renderPage();
window.addEventListener('popstate', renderPage);

// Handle language changes
onLangChange(() => {
  renderPage();
  window.scrollTo(0, 0);
});
