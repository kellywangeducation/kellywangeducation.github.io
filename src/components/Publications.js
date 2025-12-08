import { BookOpen } from 'lucide';
import { createIcons } from 'lucide';

export function renderPublications() {
  const papers = [
    {
      title: 'TikTok as a Platform for Social Activism',
      venue: 'Ontario Tech University’s Faculty of Education',
      authors: 'Conference Presentation',
      link: '#',
      date: 'May 2023'
    },
    {
      title: 'TikTok and Youth Mental Health: Its Impact, Their Stories',
      venue: 'Canadian Society for the Study of Education',
      authors: 'Conference Presentation',
      link: '#',
      date: 'May 2023'
    },
    {
      title: 'Exploring TikTok, Youth Activism and Fast Fashion through an Education Lens',
      venue: 'Western University',
      authors: 'Student Symposium',
      link: '#',
      date: 'March 2023'
    },
    {
      title: 'TikTok as Research Data',
      venue: 'STEAM-3D Maker Lab',
      authors: 'Guest Lecture',
      link: '#',
      date: 'Dec 2022'
    },
    {
      title: 'Using TikTok and Social Media in the Classroom',
      venue: 'STEAM-3D Maker Lab',
      authors: 'Conference Presentation',
      link: '#',
      date: 'Nov 2022'
    },
    {
      title: 'Artificial Intelligence and Social Media',
      venue: 'STEAM-3D Maker Lab',
      authors: 'Presentation',
      link: '#',
      date: 'Sept 2022'
    },
    {
      title: 'Video lecture series for class in Japan',
      venue: 'STEAM-3D Maker Lab',
      authors: 'Video Series',
      link: '#',
      date: 'Aug 2022'
    },
    {
      title: 'Digital Design Tools and Leadership',
      venue: 'STEAM-3D Maker Lab',
      authors: 'Conference Presentation',
      link: '#',
      date: 'Aug 2022'
    },
    {
      title: 'Critical Digital Citizenship',
      venue: 'STEAM-3D Maker Lab',
      authors: 'Professional Learning Session',
      link: '#',
      date: 'Nov 2021'
    }
  ];

  return `
    <section id="publications" class="py-12 md:py-20 bg-transparent">
      <div class="section-container">
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 scroll-fade text-center md:text-left">Publications & <span class="text-accent-pink">Conferences</span></h2>
        
        <div class="grid gap-6">
          ${papers.map((paper, i) => `
            <div class="block glass-panel p-8 rounded-3xl group scroll-fade hover:bg-white/90 dark:hover:bg-neutral-900/90 transition-all duration-300 border border-white/50 dark:border-white/10 hover:shadow-lg" style="transition-delay: ${i * 50}ms">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div class="space-y-2">
                  <div class="flex items-center gap-3">
                    <span class="text-xs font-bold tracking-wide uppercase text-accent-pink bg-accent-pink/10 px-3 py-1 rounded-full whitespace-nowrap">${paper.date}</span>
                    <span class="text-xs font-bold tracking-wide uppercase text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full text-center">${paper.authors}</span>
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold group-hover:text-accent-pink transition-colors leading-tight">${paper.title}</h3>
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
