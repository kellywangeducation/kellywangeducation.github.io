export function renderCourses() {
  const courses = [
    { code: '', name: 'Writing and Information Literacy' },
    { code: '', name: 'Design Thinking & Visual Design' }
  ];

  return `
    <section id="courses" class="bg-transparent py-12 md:py-20">
      <div class="section-container">
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 scroll-fade text-center md:text-left">Teaching</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          ${courses.map((course, i) => `
            <div class="glass-panel p-6 md:p-8 rounded-3xl transition-all duration-500 scroll-fade relative overflow-hidden group" style="transition-delay: ${i * 100}ms">
              <div class="absolute top-0 right-0 w-32 h-32 bg-accent-pink/5 rounded-full blur-3xl -mr-16 -mt-16 transition-colors"></div>

              <div class="relative z-10">
                <div class="flex flex-wrap items-center gap-2 mb-4">
                  <span class="text-[11px] md:text-xs font-bold tracking-wide uppercase text-accent-pink bg-accent-pink/10 px-2.5 py-1 rounded-full">Teaching Assistant</span>
                  <span class="text-[11px] md:text-xs font-bold tracking-wide uppercase text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full">Ontario Tech University</span>
                </div>
                <div class="text-xl md:text-2xl font-bold mb-2 text-slate-900 dark:text-white transition-transform origin-left leading-tight">${course.name}</div>
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
