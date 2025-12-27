import { Star } from 'lucide';
import { createIcons } from 'lucide';
import { t } from '../i18n';

export function renderAdditionalExperience() {
  const items = t('additional.items');

  return `
    <section id="additional-experience" class="py-12 md:py-20 bg-transparent">
      <div class="section-container">
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 scroll-fade text-center md:text-left">${t('additional.title')} <span class="text-accent-pink">${t('additional.highlight')}</span></h2>
        
        <div class="space-y-6">
          ${items.map((item, i) => `
            <div class="glass-panel p-8 rounded-3xl transition-all duration-300 border border-white/50 dark:border-white/10 scroll-fade group flex flex-row gap-4 md:gap-6 items-start md:items-center" style="transition-delay: ${i * 50}ms">
              <div class="p-3 md:p-4 bg-brand-surface dark:bg-black rounded-2xl shrink-0 transition-transform duration-300">
                <i data-lucide="star" class="w-6 h-6 md:w-8 md:h-8 text-accent-pink"></i>
              </div>
              
              <div class="flex-grow">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 class="text-xl md:text-2xl font-bold transition-colors">${item.role}</h3>
                    <span class="text-xs font-bold tracking-wide uppercase text-accent-pink bg-accent-pink/10 px-3 py-1 rounded-full whitespace-nowrap">${item.date}</span>
                </div>
                <div class="text-lg text-slate-700 dark:text-slate-300 font-medium mb-1">${item.event}</div>
                <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initAdditionalExperience() {
  createIcons({ icons: { Star } });
}
