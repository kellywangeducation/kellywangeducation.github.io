import { Microscope, Cpu, Globe, Code } from 'lucide';
import { createIcons } from 'lucide';

export function renderResearch() {
  const areas = [
    {
      icon: 'globe',
      title: 'Language Learning for Seniors',
      desc: 'Exploring methodologies and tools to support English language acquisition among the elderly population.'
    },
    {
      icon: 'code',
      title: 'Digital Tools & Education',
      desc: 'Investigating the intersection of English language learning and modern media & digital tools.'
    }
  ];

  return `
    <section id="research" class="py-12 md:py-20 bg-transparent">
      <div class="section-container">
        <div class="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between mb-12 scroll-fade text-center md:text-left">
          <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">Research <span class="text-accent-pink">Areas</span></h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6 lg:gap-8 auto-rows-[minmax(200px,auto)]">
          ${areas.map((area, index) => {
            const bgClass = index === 0 ? 'bg-gradient-to-br from-white to-brand-surface dark:from-neutral-900 dark:to-black' : 'glass-panel bg-white/50 dark:bg-neutral-900/50';
            
            return `
            <div class="${bgClass} rounded-3xl p-8 relative group overflow-hidden border border-white/50 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 scroll-fade" style="transition-delay: ${index * 100}ms">
              <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                <i data-lucide="${area.icon}" class="w-32 h-32 text-accent-pink"></i>
              </div>
              
              <div class="relative z-10 h-full flex flex-col justify-between">
                <div class="w-12 h-12 bg-white dark:bg-neutral-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:rotate-12 transition-transform duration-300">
                  <i data-lucide="${area.icon}" class="w-6 h-6 text-accent-pink"></i>
                </div>
                
                <div>
                  <h3 class="text-2xl font-bold mb-3 group-hover:text-accent-pink transition-colors">${area.title}</h3>
                  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">${area.desc}</p>
                </div>
              </div>
            </div>
          `}).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initResearch() {
  createIcons({ icons: { Microscope, Cpu, Globe, Code } });
}
