export function renderCourses() {
  const courses = [
    { code: '', name: 'Writing and Information Literacy', term: 'Teaching Assistant - Ontario Tech University' },
    { code: '', name: 'Design Thinking & Visual Design', term: 'Teaching Assistant - Ontario Tech University' }
  ];

  return `
    <section id="courses" class="bg-transparent py-12 md:py-20">
      <div class="section-container">
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 scroll-fade text-center md:text-left">Teaching</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          ${courses.map((course, i) => `
            <div class="glass-panel p-8 rounded-3xl hover:bg-white/90 dark:hover:bg-neutral-900/90 transition-all duration-500 hover:-translate-y-2 scroll-fade relative overflow-hidden group" style="transition-delay: ${i * 100}ms">
              <div class="absolute top-0 right-0 w-32 h-32 bg-accent-pink/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent-pink/10 transition-colors"></div>
              
              <div class="relative z-10">
                <div class="text-sm font-bold tracking-wide uppercase text-accent-pink mb-4">${course.term}</div>
                <div class="text-2xl font-bold mb-2 text-slate-900 dark:text-white group-hover:scale-105 transition-transform origin-left leading-tight">${course.name}</div>
                <div class="text-lg text-slate-600 dark:text-slate-400 font-medium leading-tight mt-2">${course.code}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initCourses() {}
