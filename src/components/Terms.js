import { t } from '../i18n';

export function renderTerms() {
  return `
    <section class="pt-32 pb-20 min-h-screen bg-transparent">
      <div class="section-container max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">${t('terms.title')}</h1>
        
        <div class="glass-panel p-8 rounded-3xl border border-white/50 dark:border-white/10 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
          <p class="font-medium text-lg text-slate-900 dark:text-white">${t('terms.lastUpdated')}</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">${t('terms.intro')}</h2>
          <p>${t('terms.introText')}</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">${t('terms.ip')}</h2>
          <p>${t('terms.ipText')}</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">${t('terms.license')}</h2>
          <p>${t('terms.licenseText')}</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">${t('terms.disclaimer')}</h2>
          <p>${t('terms.disclaimerText')}</p>
        </div>
        
        <div class="mt-8 text-center">
           <a href="#" id="back-to-home-terms" class="text-accent-pink hover:underline font-medium">${t('terms.back')}</a>
        </div>
      </div>
    </section>
  `;
}
