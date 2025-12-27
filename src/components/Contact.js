import { Mail, Github, Linkedin, Twitter } from 'lucide';
import { createIcons } from 'lucide';
import { t } from '../i18n';

export function renderContact() {
  return `
    <section id="contact" class="py-32 bg-transparent text-center relative">
      <div class="section-container max-w-4xl relative z-10">
        <div class="relative inline-block mb-16 scroll-fade">
          <!-- Dynamic lava lamp blob behind text. 
               Using a wrapper for positioning to avoid conflict between centering transform and animation transform. 
               Margin offset used for "slightly left and up" positioning (-200px is center, so -240px is offset). -->
          <div class="absolute top-1/2 left-1/2 w-[400px] h-[400px] pointer-events-none transform-gpu" style="margin-left: -220px; margin-top: -220px;">
            <div class="w-full h-full bg-gradient-to-tr from-accent-pink to-purple-500 opacity-40 blur-[80px] animate-lava"></div>
          </div>
          <h2 class="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"><span class="text-accent-pink">${t('contact.title')}</span></h2>
        </div>
        
        <div class="flex justify-center gap-6 mb-16 scroll-fade flex-wrap">
          <button id="email-copy-btn" class="glass-panel px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-xl group border border-white/50 dark:border-white/10 flex items-center gap-3 cursor-pointer" aria-label="Copy Email">
            <i data-lucide="mail" class="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-accent-pink transition-colors"></i>
            <span id="email-btn-text" class="font-medium text-slate-700 dark:text-slate-200">${t('contact.email')}</span>
          </button>
          <a href="https://www.linkedin.com/in/kelly--wang/" target="_blank" rel="noopener noreferrer" class="glass-panel px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-xl group border border-white/50 dark:border-white/10 flex items-center gap-3" aria-label="LinkedIn">
            <i data-lucide="linkedin" class="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-accent-pink transition-colors"></i>
             <span class="font-medium text-slate-700 dark:text-slate-200">${t('contact.linkedin')}</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

export function initContact() {
  createIcons({ icons: { Mail, Github, Linkedin, Twitter } });

  const emailBtn = document.getElementById('email-copy-btn');
  const emailText = document.getElementById('email-btn-text');
  
  if (emailBtn) {
    emailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('kellywangcontact@gmail.com');
        
        // Visual feedback
        const originalText = emailText.textContent;
        emailText.textContent = t('contact.copied');
        emailBtn.classList.add('bg-green-50', 'dark:bg-green-900/20', 'border-green-200', 'dark:border-green-800');
        
        setTimeout(() => {
          emailText.textContent = originalText;
          emailBtn.classList.remove('bg-green-50', 'dark:bg-green-900/20', 'border-green-200', 'dark:border-green-800');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback for visual feedback if copy fails (optional)
        emailText.textContent = t('contact.error');
        setTimeout(() => {
           emailText.textContent = t('contact.email');
        }, 2000);
      }
    });
  }
}
