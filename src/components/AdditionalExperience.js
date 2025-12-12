import { Star } from 'lucide';
import { createIcons } from 'lucide';

export function renderAdditionalExperience() {
  const items = [
    {
      role: 'Podcast Host, Education Councillor',
      event: 'Western University’s Society of Graduate Students',
      date: 'Sept 2025 – Present',
      desc: 'Host of "GradCast" podcast featuring grad students. Contributor to student council discussions ensuring education students’ voices are heard.'
    },
    {
      role: 'Session Developer & Presenter',
      event: 'Rights and Responsibilities Awareness Initiative',
      date: 'Oct 2022 – Present',
      desc: 'Developing and presenting info sessions to support new immigrants on topics like language learning, social media safety, and citizenship.'
    },
    {
      role: 'Secretary and Board Member',
      event: 'Thames Region Ecological Association',
      date: 'April 2023 – Present',
      desc: 'Serving on the board since April 2023.'
    },
    {
      role: 'Board Member',
      event: 'Thames Valley Children’s Centre',
      date: 'Nov 2023 – Dec 2024',
      desc: 'Served from Nov 2023 – Dec 2024.'
    },
    {
      role: 'Board Member',
      event: 'Montessori Academy of London',
      date: 'May 2023 – Oct 2024',
      desc: 'Served from May 2023 – Oct 2024.'
    },
    {
      role: 'Curriculum Developer',
      event: 'Low Entropy',
      date: 'May 2022 – Oct 2023',
      desc: 'Developed asynchronous and synchronous online courses including grant writing, volunteer training, and storytelling.'
    },
    {
      role: 'Host & Crew',
      event: 'Rogers TV',
      date: 'June 2017 – Sept 2020',
      desc: 'Hosted "What’s Up London" for one season. Worked with audio, graphics, camera, and editing equipment.'
    },
    {
      role: 'FIMS Student Ambassador',
      event: 'Western University',
      date: 'Sept 2017 – April 2020',
      desc: 'Presented speeches, hosted Q&A booths, and provided a welcoming atmosphere at open house events.'
    },
    {
      role: 'Class Representative',
      event: 'Fanshawe College',
      date: 'Sept 2017 – April 2018',
      desc: 'Reported and resolved concerns raised by students by cooperating with student union directors.'
    }
  ];

  return `
    <section id="additional-experience" class="py-12 md:py-20 bg-transparent">
      <div class="section-container">
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 scroll-fade text-center md:text-left">Additional <span class="text-accent-pink">Experience</span></h2>
        
        <div class="space-y-6">
          ${items.map((item, i) => `
            <div class="glass-panel p-8 rounded-3xl transition-all duration-300 border border-white/50 dark:border-white/10 scroll-fade group flex flex-row gap-4 md:gap-6 items-start md:items-center" style="transition-delay: ${i * 50}ms">
              <div class="p-3 md:p-4 bg-brand-surface dark:bg-black rounded-2xl shrink-0 transition-transform duration-300">
                <i data-lucide="star" class="w-6 h-6 md:w-8 md:h-8 text-accent-pink"></i>
              </div>
              
              <div class="flex-grow">
                <div class="flex flex-col items-start md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 class="text-xl md:text-2xl font-bold transition-colors">${item.role}</h3>
                    <span class="text-[11px] md:text-xs font-bold tracking-wide uppercase text-accent-pink bg-accent-pink/10 px-2.5 py-1 rounded-full max-w-full whitespace-normal text-center">${item.date}</span>
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
