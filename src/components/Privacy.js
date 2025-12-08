export function renderPrivacy() {
  return `
    <section class="pt-32 pb-20 min-h-screen bg-transparent">
      <div class="section-container max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Privacy Policy</h1>
        
        <div class="glass-panel p-8 rounded-3xl border border-white/50 dark:border-white/10 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
          <p class="font-medium text-lg text-slate-900 dark:text-white">Last updated: November 2025</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">1. Information Collection</h2>
          <p>This website collects minimal anonymous usage data via Google Analytics and Microsoft Clarity to improve the user experience. This may include pages visited, time spent, and general location data. No personally identifiable information (PII) is collected unless explicitly provided by you via email.</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">2. Contact Information</h2>
          <p>When you contact me via email (kellywangcontact@gmail.com), your email address and message content are used solely for the purpose of communication and are not shared with third parties.</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">3. Cookies</h2>
          <p>This site uses cookies for analytics purposes. You can control cookie preferences through your browser settings.</p>
          
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">4. Third-Party Links</h2>
          <p>This website may contain links to external sites (e.g., LinkedIn, University pages). I am not responsible for the privacy practices or content of these external sites.</p>
        </div>
        
        <div class="mt-8 text-center">
           <a href="#" id="back-to-home-privacy" class="text-accent-pink hover:underline font-medium">Back to Home</a>
        </div>
      </div>
    </section>
  `;
}
