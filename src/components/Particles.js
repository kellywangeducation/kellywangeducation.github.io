// Dynamic import for PixiJS - only loads when needed
let PIXI = null;

export async function initParticles(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Check if user prefers reduced motion - skip particles entirely
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }

  // Check if device has low memory or is a low-end device
  const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
    (navigator.deviceMemory && navigator.deviceMemory < 4);
  
  // Skip heavy particles on low-end devices
  if (isLowEndDevice) {
    return null;
  }

  // Dynamically import PixiJS only when needed
  if (!PIXI) {
    PIXI = await import('pixi.js');
  }

  const app = new PIXI.Application();
  
  // Reduce resolution on mobile for better performance
  const isMobile = window.innerWidth < 768;
  const resolution = isMobile ? 1 : Math.min(window.devicePixelRatio, 2);
  
  await app.init({ 
    backgroundAlpha: 0, 
    resizeTo: container,
    antialias: !isMobile, // Disable antialiasing on mobile
    autoDensity: true,
    resolution: resolution,
    powerPreference: 'low-power', // Prefer battery life
  });

  container.appendChild(app.canvas);

  // Reduce particle count significantly on mobile
  const particleCount = isMobile ? 10 : 35;
  const particles = [];
  
  // Create a container for particles
  const particleContainer = new PIXI.Container();
  app.stage.addChild(particleContainer);

  // Create textures for confetti
  const colors = [0xFF007F, 0xFFFFFF, 0x000000, 0xFFD700, 0x87CEEB];
  const textures = colors.map(color => {
    const g = new PIXI.Graphics();
    g.rect(0, 0, 8, 8); // Square confetti
    g.fill({ color: color, alpha: 0.8 });
    return app.renderer.generateTexture(g);
  });

  for (let i = 0; i < particleCount; i++) {
    const sprite = new PIXI.Sprite(textures[Math.floor(Math.random() * textures.length)]);
    sprite.x = Math.random() * app.screen.width;
    sprite.y = Math.random() * app.screen.height;
    sprite.anchor.set(0.5);
    sprite.scale.set(0.5 + Math.random() * 0.5);
    sprite.rotation = Math.random() * Math.PI * 2;
    
    // Custom properties for animation
    sprite.vy = 1 + Math.random() * 2; // Falling down
    sprite.vx = (Math.random() - 0.5) * 1; // Slight drift
    sprite.sway = Math.random() * 0.05;
    sprite.swayOffset = Math.random() * Math.PI * 2;
    
    particles.push(sprite);
    particleContainer.addChild(sprite);
  }

  let mouseX = 0;
  let mouseY = 0;
  
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  app.ticker.add(() => {
    particles.forEach((particle) => {
      // Falling motion with sway
      particle.y += particle.vy;
      particle.x += particle.vx + Math.sin(particle.swayOffset) * 0.5;
      particle.swayOffset += particle.sway;
      particle.rotation += 0.05; // Spin

      // Wrap around screen
      if (particle.y > app.screen.height + 10) {
         particle.y = -10;
         particle.x = Math.random() * app.screen.width;
      }
      if (particle.x < -10) particle.x = app.screen.width + 10;
      if (particle.x > app.screen.width + 10) particle.x = -10;
      
      // Mouse interaction (repel)
      const dx = particle.x - mouseX;
      const dy = particle.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const angle = Math.atan2(dy, dx);
        particle.x += Math.cos(angle) * 2;
        particle.y += Math.sin(angle) * 2;
      }
    });
  });

  // Handle resize
  window.addEventListener('resize', () => {
    app.resize();
  });
  
  return app;
}
