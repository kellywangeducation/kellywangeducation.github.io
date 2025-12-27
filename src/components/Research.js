import { Microscope, Cpu, Globe, Code } from 'lucide';
import { createIcons } from 'lucide';
import { t } from '../i18n';

export function renderResearch() {
  const researchItems = t('research.items');
  const icons = ['globe', 'code'];
  
  const areas = researchItems.map((item, index) => ({
    ...item,
    icon: icons[index] || 'microscope'
  }));

  return `
    <section id="research" class="py-12 md:py-20 bg-transparent">
      <div class="section-container">
        <div class="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between mb-12 scroll-fade text-center md:text-left">
          <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">${t('research.title')} <span class="text-accent-pink">${t('research.areas')}</span></h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6 lg:gap-8 auto-rows-[minmax(200px,auto)]">
          ${areas.map((area, index) => {
            const bgClass = index === 0 ? 'bg-gradient-to-br from-white to-brand-surface dark:from-neutral-900 dark:to-black' : 'glass-panel bg-white/50 dark:bg-neutral-900/50';
            
            return `
            <div class="${bgClass} rounded-3xl p-8 relative group overflow-hidden border border-white/50 dark:border-white/10 shadow-sm transition-all duration-500 scroll-fade" style="transition-delay: ${index * 100}ms">
              <div class="absolute top-0 right-0 p-8 opacity-10 transition-opacity transform duration-500">
                <i data-lucide="${area.icon}" class="w-32 h-32 text-accent-pink"></i>
              </div>
              
              <div class="relative z-10 h-full flex flex-col justify-between">
                <div class="w-12 h-12 bg-white dark:bg-neutral-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-300">
                  <i data-lucide="${area.icon}" class="w-6 h-6 text-accent-pink"></i>
                </div>
                
                <div>
                  <h3 class="text-2xl font-bold mb-3 transition-colors">${area.title}</h3>
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
