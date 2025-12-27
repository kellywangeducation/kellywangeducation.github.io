import { BookOpen } from 'lucide';
import { createIcons } from 'lucide';
import { t } from '../i18n';

export function renderPublications() {
  const papers = t('publications.items');

  return `
    <section id="publications" class="py-12 md:py-20 bg-transparent">
      <div class="section-container">
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 scroll-fade text-center md:text-left">${t('publications.title')} <span class="text-accent-pink">${t('publications.highlight')}</span></h2>
        
        <div class="grid gap-6">
          ${papers.map((paper, i) => `
            <div class="block glass-panel p-8 rounded-3xl group scroll-fade transition-all duration-300 border border-white/50 dark:border-white/10" style="transition-delay: ${i * 50}ms">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div class="space-y-2">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="text-xs font-bold tracking-wide uppercase text-accent-pink bg-accent-pink/10 px-2.5 py-1 rounded-full">${paper.date}</span>
                    <span class="text-xs font-bold tracking-wide uppercase text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full">${paper.authors}</span>
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold transition-colors leading-tight">${paper.title}</h3>
                  <div class="text-slate-600 dark:text-slate-400 font-medium">${paper.venue}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initPublications() {
  createIcons({ icons: { BookOpen } });
}
