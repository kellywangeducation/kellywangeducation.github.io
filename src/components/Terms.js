export function renderTerms() {
  return `
    <section class="pt-32 pb-20 min-h-screen bg-transparent">
      <div class="section-container max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Terms of Use</h1>
        
        <div class="glass-panel p-8 rounded-3xl border border-white/50 dark:border-white/10 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
          <p class="font-medium text-lg text-slate-900 dark:text-white">Last updated: November 2025</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">1. Acceptance of Terms</h2>
          <p>By accessing this website, you agree to be bound by these Terms of Use. If you disagree with any part of the terms, you may not access the website.</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">2. Intellectual Property</h2>
          <p>The content, design, and code of this website are the intellectual property of Kelly Wang, unless otherwise noted. Personal portfolio projects and research summaries are protected by copyright.</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">3. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only.</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">4. Disclaimer</h2>
          <p>The materials on this website are provided on an 'as is' basis. Kelly Wang makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </div>
        
        <div class="mt-8 text-center">
           <a href="#" id="back-to-home-terms" class="text-accent-pink hover:underline font-medium">Back to Home</a>
        </div>
      </div>
    </section>
  `;
}
