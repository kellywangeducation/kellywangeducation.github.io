import { t } from '../i18n';

export function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="py-12 border-t border-slate-200/50 dark:border-white/5 bg-white/50 dark:bg-black/50 backdrop-blur-md">
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>&copy; ${year} <span class="dark:text-white">${t('name')}.</span></p>
        <div class="flex gap-6">
          <a href="/privacy" class="hover:text-accent-pink transition-colors">${t('nav.privacy')}</a>
          <a href="/terms" class="hover:text-accent-pink transition-colors">${t('nav.terms')}</a>
        </div>
      </div>
    </footer>
  `;
}
