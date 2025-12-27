import { t } from '../i18n';

export function renderPrivacy() {
  return `
    <section class="pt-32 pb-20 min-h-screen bg-transparent">
      <div class="section-container max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">${t('privacy.title')}</h1>
        
        <div class="glass-panel p-8 rounded-3xl border border-white/50 dark:border-white/10 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
          <p class="font-medium text-lg text-slate-900 dark:text-white">${t('privacy.lastUpdated')}</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">${t('privacy.intro')}</h2>
          <p>${t('privacy.introText')}</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">${t('privacy.contact')}</h2>
          <p>${t('privacy.contactText')}</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">${t('privacy.cookies')}</h2>
          <p>${t('privacy.cookiesText')}</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">${t('privacy.links')}</h2>
          <p>${t('privacy.linksText')}</p>
        </div>
        
        <div class="mt-8 text-center">
           <a href="#" id="back-to-home-privacy" class="text-accent-pink hover:underline font-medium">${t('privacy.back')}</a>
        </div>
      </div>
    </section>
  `;
}
