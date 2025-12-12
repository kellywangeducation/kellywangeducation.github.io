import { Briefcase, GraduationCap, Award } from 'lucide';
import { createIcons } from 'lucide';

export function renderExperience() {
  const jobs = [
    {
      role: 'Graduate Student Assistant',
      company: 'Western University',
      period: 'Sept 2025 – Present',
      desc: 'Research Assistant for Interdisciplinary Centre for Research in Curriculum as a Social Practice. Focus: Multilingualism, digital literacies, digital storytelling, translanguaging.'
    },
    {
      role: 'Teaching Assistant',
      company: 'Ontario Tech University',
      period: 'Sept 2024 – Aug 2025',
      desc: 'Planned weekly lessons and provided feedback for 130 students in Writing and Information Literacy, Design Thinking & Visual Design courses.'
    },
    {
      role: 'Research Assistant',
      company: 'STEAM-3D Maker Lab',
      period: 'Sept 2021 – April 2024',
      desc: 'Developed pedagogies on digital literacies and taught media literacy to Bachelor of Education students.'
    },
    {
      role: 'Reporter & Newscaster',
      company: '980 CFPL (Global News Radio)',
      period: 'May 2019 – May 2024',
      desc: 'Wrote and recorded radio newscasts. Researched and wrote over 1,300 online articles under tight deadlines.'
    },
    {
      role: 'Tutor',
      company: 'Private',
      period: 'Sept 2021 - May 2023',
      desc: 'Provided one-on-one English language instruction tailored to individual learning goals.'
    }
  ];

  const education = [
    {
      degree: 'PhD in Education',
      school: 'Western University',
      period: 'Sept 2025 – Present',
      desc: 'Curriculum Studies and Applied Linguistics'
    },
    {
      degree: 'Master of Education',
      school: 'Ontario Tech University',
      period: 'Completed 2024',
      desc: ''
    },
    {
      degree: 'Master of Media',
      school: 'Western University',
      period: 'Completed 2021',
      desc: 'Journalism and Communication'
    },
    {
      degree: 'BA in Media, Info & Technoculture',
      school: 'Western University',
      period: 'Completed 2020',
      desc: 'Dual Degree'
    },
    {
      degree: 'Diploma in Broadcast Journalism',
      school: 'Fanshawe College',
      period: 'Completed 2020',
      desc: 'Dual Degree'
    }
  ];
  
  const honours = [
    { title: 'Finalist in 3 Minute Thesis Competition', year: '2023', org: 'Ontario Tech University' },
    { title: "Recipient of the Dean's Graduate Scholarship", year: '2021', org: 'Ontario Tech University' },
    { title: 'Recipient of the HaakSaan Award for Responsible Journalism', year: '2021', org: 'Western University' },
    { title: 'Recipient of the Manjunath & Roja Pendakur Scholarship', year: '2021', org: 'Western University' },
    { title: 'Recipient of the John K. Elliott Scholarship', year: '2020', org: 'Western University' },
    { title: 'Recipient of the RTDNF: Dataminr Digital Journalism Scholarship', year: '2020', org: 'Fanshawe College' },
    { title: 'Recipient of Bayshore Broadcasting’s Newscaster of the Year', year: '2020', org: 'Fanshawe College' },
    { title: 'Recipient of Corus’s Most Promising Journalist', year: '2018', org: 'Fanshawe College' },
    { title: 'Recipient of Western University’s $10,000 Continuing Admissions Scholarship', year: '2016', org: 'Western University' }
  ];

  return `
    <section id="experience" class="bg-transparent py-12 md:py-20">
      <div class="section-container">
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-16 lg:mb-24 scroll-fade text-center md:text-left">Experience & <span class="text-accent-pink">Education</span></h2>
        
        <div class="grid md:grid-cols-2 gap-16 lg:gap-24">
          <!-- Work -->
          <div class="space-y-12">
            <div class="flex items-center gap-4 mb-8 scroll-fade justify-center md:justify-start">
              <div class="p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm">
                <i data-lucide="briefcase" class="w-6 h-6 text-accent-pink"></i>
              </div>
              <h3 class="text-2xl font-bold">Professional</h3>
            </div>
            
            <div class="relative border-l-2 border-slate-200 dark:border-neutral-800 ml-6 space-y-12 pb-4">
              ${jobs.map((job, i) => `
                <div class="pl-10 relative scroll-fade" style="transition-delay: ${i * 50}ms">
                  <div class="absolute -left-[13px] top-2 w-4 h-4 rounded-full bg-brand-surface dark:bg-black border-4 border-accent-pink box-content"></div>
                  
                  <div class="glass-panel p-6 rounded-2xl transition-colors group">
                    <div class="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                      <h4 class="text-xl font-bold transition-colors">${job.role}</h4>
                      <span class="text-xs font-bold tracking-wide uppercase text-accent-pink bg-accent-pink/10 px-3 py-1 rounded-full text-nowrap">${job.period}</span>
                    </div>
                    <div class="text-lg text-slate-700 dark:text-slate-300 font-medium mb-3">${job.company}</div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">${job.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Education & Honours -->
          <div class="space-y-16">
            <!-- Education -->
            <div class="space-y-12">
                <div class="flex items-center gap-4 mb-8 scroll-fade justify-center md:justify-start">
                <div class="p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm">
                    <i data-lucide="graduation-cap" class="w-6 h-6 text-accent-pink"></i>
                </div>
                <h3 class="text-2xl font-bold">Education</h3>
                </div>
                
                <div class="relative border-l-2 border-slate-200 dark:border-neutral-800 ml-6 space-y-12 pb-4">
                ${education.map((edu, i) => `
                    <div class="pl-10 relative scroll-fade" style="transition-delay: ${i * 50}ms">
                    <div class="absolute -left-[13px] top-2 w-4 h-4 rounded-full bg-brand-surface dark:bg-black border-4 border-accent-pink box-content"></div>
                    
                    <div class="glass-panel p-6 rounded-2xl transition-colors group">
                        <div class="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                        <h4 class="text-xl font-bold transition-colors">${edu.degree}</h4>
                        <span class="text-xs font-bold tracking-wide uppercase text-accent-pink bg-accent-pink/10 px-3 py-1 rounded-full text-nowrap">${edu.period}</span>
                        </div>
                        <div class="text-lg text-slate-700 dark:text-slate-300 font-medium mb-3">${edu.school}</div>
                        ${edu.desc ? `<p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">${edu.desc}</p>` : ''}
                    </div>
                    </div>
                `).join('')}
                </div>
            </div>

            <!-- Honours -->
            <div class="space-y-8">
                <div class="flex items-center gap-4 mb-8 scroll-fade justify-center md:justify-start">
                    <div class="p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm">
                        <i data-lucide="award" class="w-6 h-6 text-accent-pink"></i>
                    </div>
                    <h3 class="text-2xl font-bold">Honours & Awards</h3>
                </div>

                <div class="grid gap-4">
                     ${honours.map((honour, i) => `
                        <div class="glass-panel p-5 rounded-xl transition-all duration-300 border border-white/50 dark:border-white/10 scroll-fade flex flex-col sm:flex-row sm:items-center justify-between gap-2" style="transition-delay: ${i * 30}ms">
                             <div>
                                <h4 class="font-bold text-slate-800 dark:text-slate-200 text-sm leading-tight">${honour.title}</h4>
                                <div class="text-xs text-slate-500 dark:text-slate-400 mt-1">${honour.org}</div>
                             </div>
                             <span class="text-xs font-bold tracking-wide text-accent-pink whitespace-nowrap bg-accent-pink/5 px-2 py-1 rounded-md self-start sm:self-center">${honour.year}</span>
                        </div>
                     `).join('')}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initExperience() {
  createIcons({ icons: { Briefcase, GraduationCap, Award } });
}
