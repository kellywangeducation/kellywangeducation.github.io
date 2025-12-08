import { Award } from 'lucide';
import { createIcons } from 'lucide';
import Level5Cert from '../assets/KW_Level_5_Cert.pdf';

export function renderCertifications() {
  const certs = [
    {
      name: 'Qualifi Level 5 Diploma in Teacher Of English To Speakers Of Other Languages (TEFL)',
      issuer: 'The TEFL Academy',
      date: 'Completed May 2025',
      link: Level5Cert
    },
    {
      name: 'Fluent in Mandarin Chinese',
      issuer: '',
      date: 'Skill'
    }
  ];

  return `
    <section id="certifications" class="py-12 md:py-20 bg-transparent">
      <div class="section-container">
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 scroll-fade text-center md:text-left"><span class="text-accent-pink">Certifications</span> & Skills</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          ${certs.map((cert, i) => {
             // If it has a link, it's the certificate PDF -> use a button to open modal
             const Wrapper = cert.link ? 'button' : 'div';
             const onclickAttr = cert.link ? `onclick="window.openCertModal('${cert.link}')"` : '';
             const cursorClass = cert.link ? 'cursor-pointer w-full text-left' : '';

             return `
            <${Wrapper} ${onclickAttr} class="glass-panel p-8 rounded-3xl hover:bg-white/90 dark:hover:bg-neutral-900/90 transition-all duration-500 hover:-translate-y-2 scroll-fade relative overflow-hidden group ${cursorClass}" style="transition-delay: ${i * 100}ms">
              <div class="absolute top-0 right-0 w-24 h-24 bg-accent-pink/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-accent-pink/10 transition-colors"></div>
              
              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-4">
                  <div class="p-2 bg-brand-surface dark:bg-black rounded-lg text-accent-pink">
                    <i data-lucide="award" class="w-6 h-6"></i>
                  </div>
                  <span class="text-sm font-bold tracking-wide uppercase text-slate-500 dark:text-slate-400">${cert.date}</span>
                </div>
                
                <h3 class="text-xl font-bold mb-2 group-hover:text-accent-pink transition-colors leading-tight">${cert.name}</h3>
                <div class="text-slate-600 dark:text-slate-400 font-medium">${cert.issuer}</div>
              </div>
            </${Wrapper}>
          `}).join('')}
        </div>
      </div>
      
      <!-- Certificate Modal -->
      <div id="cert-modal" class="fixed inset-0 z-[100] hidden opacity-0 transition-opacity duration-300">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="window.closeCertModal()"></div>
        <div class="absolute inset-4 md:inset-10 lg:inset-20 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden transform scale-95 transition-transform duration-300" id="cert-modal-content">
            <div class="flex justify-between items-center p-4 border-b border-slate-200 dark:border-white/10">
                <h3 class="font-bold text-lg">Certificate Viewer</h3>
                <button onclick="window.closeCertModal()" class="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>
            <iframe id="cert-frame" class="w-full h-full bg-slate-50" src=""></iframe>
        </div>
      </div>
    </section>
  `;
}

export function initCertifications() {
  createIcons({ icons: { Award } });

  // Expose modal functions to window
  window.openCertModal = (url) => {
    const modal = document.getElementById('cert-modal');
    const content = document.getElementById('cert-modal-content');
    const frame = document.getElementById('cert-frame');
    
    if (modal && frame) {
        frame.src = url;
        modal.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        requestAnimationFrame(() => {
            modal.classList.remove('opacity-0');
            content.classList.remove('scale-95');
            content.classList.add('scale-100');
        });
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  };

  window.closeCertModal = () => {
    const modal = document.getElementById('cert-modal');
    const content = document.getElementById('cert-modal-content');
    const frame = document.getElementById('cert-frame');
    
    if (modal) {
        modal.classList.add('opacity-0');
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            if (frame) frame.src = '';
            document.body.style.overflow = ''; // Restore scrolling
        }, 300);
    }
  };
}
