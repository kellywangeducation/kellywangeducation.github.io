import { ArrowDown } from 'lucide';
import { createIcons } from 'lucide';

import KellyImage from '../assets/Kelly Wang Image2.png';

export function renderHero() {
  return `
    <section id="about" class="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div id="particles-container" class="absolute inset-0 z-0 opacity-40"></div>
      
      <!-- Decorative gradient blob -->
      <div class="absolute top-0 left-0 w-[800px] h-[800px] bg-accent-pink/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      <div class="section-container relative z-10 w-full grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div class="order-2 md:order-1 opacity-0 animate-slide-up text-center md:text-left" style="animation-delay: 0.1s;">
          
          <div class="relative inline-block mb-8">
            <h1 id="hero-name" class="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-white dark:to-white leading-tight pb-4" style="clip-path: inset(0 100% 0 0);">
              Kelly Wang
            </h1>
            <canvas id="pixie-dust-canvas" class="absolute top-0 left-0 w-full h-full pointer-events-none z-20"></canvas>
          </div>

          <p class="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-lg lg:max-w-xl mx-auto md:mx-0">
            <span class="text-accent-pink font-semibold">Researcher & Educator</span>
          </p>
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" class="bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg hover:shadow-accent-pink/20 active:scale-95 flex items-center gap-2 text-lg">
              Get in Touch
            </a>
          </div>
        </div>
        
        <div class="order-1 md:order-2 flex justify-center opacity-0 animate-slide-up" style="animation-delay: 0.3s;">
          <div class="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] group">
            <div class="absolute inset-0 bg-gradient-to-tr from-accent-pink to-purple-500 rounded-full opacity-40 blur-[100px] animate-pulse scale-150 group-hover:scale-[1.8] transition-transform duration-1000"></div>
            <div class="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl hover:rotate-3 transition-all duration-500">
              <div class="absolute inset-0 bg-slate-200 dark:bg-neutral-800 animate-pulse"></div>
              <img 
                src="${KellyImage}" 
                alt="Kelly Wang - Researcher and Educator" 
                class="w-full h-full object-cover relative z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm" 
                width="500" 
                height="500"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                onload="this.previousElementSibling.style.display='none'"
              >
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400/50 dark:text-white/20">
        <i data-lucide="arrow-down" class="w-8 h-8"></i>
      </div>
    </section>
  `;
}

export function initHero() {
  createIcons({ icons: { ArrowDown } });

  const nameEl = document.getElementById('hero-name');
  const canvas = document.getElementById('pixie-dust-canvas');
  if (!nameEl || !canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let startTime = null;
  const duration = 2000; // 2 seconds for the full reveal

  // Resize canvas to match text
  function resizeCanvas() {
    // We need to account for the fact that the canvas is inside a relative container that fits the h1.
    // The canvas is absolute inset-0, so its internal size should match its offsetWidth/Height * dpr
    const dpr = window.devicePixelRatio || 1;
    canvas.width = nameEl.offsetWidth * dpr;
    canvas.height = nameEl.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${nameEl.offsetWidth}px`;
    canvas.style.height = `${nameEl.offsetHeight}px`;
  }
  
  // Call once and on resize
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Particle class
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.life = 1;
      this.decay = Math.random() * 0.03 + 0.01;
      this.size = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? '#ff2d55' : '#ffffff'; // Hot pink or white
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life -= this.decay;
      this.size *= 0.95;
    }

    draw(ctx) {
      ctx.globalAlpha = this.life;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);

    // Update clip path
    // Reveal from left to right: inset(0 100% 0 0) -> inset(0 0% 0 0)
    // The percentage is how much is HIDDEN from the right.
    // At progress 0, 100% hidden. At progress 1, 0% hidden.
    const clipVal = 100 - (progress * 100);
    nameEl.style.clipPath = `inset(0 ${clipVal}% 0 0)`;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Emit particles
    if (progress < 1) {
      const rect = nameEl.getBoundingClientRect();
      const leadingEdgeX = rect.width * progress;
      
      // Emit multiple particles per frame for density
      for (let i = 0; i < 8; i++) {
        const y = Math.random() * rect.height;
        
        // 1. Main reveal particles (more random spread around leading edge)
        let x;
        const randomFactor = Math.random();
        
        if (randomFactor > 0.7) {
            // Scattered sparkles ahead or behind
            x = leadingEdgeX + (Math.random() - 0.5) * 150; 
        } else {
            // Concentrated at reveal edge
            x = leadingEdgeX + (Math.random() - 0.5) * 40;
        }

        // 2. Random shimmer on already revealed text
        if (Math.random() > 0.9) {
             x = Math.random() * leadingEdgeX;
        }

        particles.push(new Particle(x, y));
      }
    }

    // Update and draw particles
    particles = particles.filter(p => p.life > 0);
    particles.forEach(p => {
      p.update();
      p.draw(ctx);
    });

    if (progress < 1 || particles.length > 0) {
      requestAnimationFrame(animate);
    }
  }

  // Start animation after a slight delay
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 500);
}
