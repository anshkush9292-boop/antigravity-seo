/**
 * Advanced Portfolio Animation Manager
 * Anshuman Kushwaha v4.1
 */

class AnimationManager {
  constructor() {
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches || localStorage.getItem('reduceMotion') === 'true';
    this.orbitNodes = [
      { name: "ChatGPT", desc: "Advanced LLM for strategy & copy", cta: "Automate Copy" },
      { name: "Claude", desc: "High-precision analysis & coding", cta: "Analyze Data" },
      { name: "Gemini", desc: "Multi-modal AI integration", cta: "Integrate AI" },
      { name: "Prompt Eng", desc: "Architecting AI instructions", cta: "Optimze Prompts" },
      { name: "Google Ads", desc: "Performance Search Marketing", cta: "Scale Ads" },
      { name: "Meta Ads", desc: "Paid Social & Direct Response", cta: "Grow Social" },
      { name: "YouTube SEO", desc: "AEO & Video discoverability", cta: "Rank Videos" },
      { name: "Analytics", desc: "Data modeling & attribution", cta: "Visualise Stats" },
      { name: "Looker Studio", desc: "Business Intelligence Dashboards", cta: "Get Insights" },
      { name: "AEO/Schema", desc: "Answer Engine Optimization", cta: "Dominate Search" },
      { name: "Automation", desc: "Zapier & Makes workflows", cta: "Save Time" },
      { name: "CapCut", desc: "AI-powered video production", cta: "Edit Clips" }
    ];
    this.init();
  }

  init() {
    this.initLenis();
    this.initParticles();
    this.initHeroAnimations();
    this.initOrbitingEcosystem();
    this.initScrollReveals();
    this.initCounters();
    this.initAccessibility();
    this.initMouseParallax();
    this.initNavEffect();
  }

  initLenis() {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  initParticles() {
    if (this.isReducedMotion) return;
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = `rgba(94, 234, 212, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < 50; i++) particles.push(new Particle());
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    };
    init();
    animate();
  }

  initHeroAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Headline Stagger
    const headline = document.getElementById('heroHeadline');
    if (headline) {
      const text = headline.innerText;
      headline.innerHTML = text.split('').map(char => `<span class="char" style="display:inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
      gsap.from("#heroHeadline .char", {
        opacity: 0,
        y: 20,
        stagger: 0.03,
        duration: 0.6,
        ease: "power3.out"
      });
    }

    gsap.from(".fade-up", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      delay: 0.5
    });
  }

  initOrbitingEcosystem() {
    const container = document.getElementById('orbitContainer');
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 6 : 12;
    const radius = isMobile ? 0 : 250;
    
    this.orbitNodes.slice(0, nodeCount).forEach((node, i) => {
      const el = document.createElement('div');
      el.className = 'glass-card node will-animate';
      el.style.position = isMobile ? 'relative' : 'absolute';
      el.style.width = '70px';
      el.style.height = '70px';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      el.style.cursor = 'pointer';
      el.style.fontSize = '0.65rem';
      el.style.textAlign = 'center';
      el.style.padding = '5px';
      el.innerHTML = `<strong>${node.name}</strong>`;
      
      container.appendChild(el);

      if (!isMobile && !this.isReducedMotion) {
        const angle = (i / nodeCount) * Math.PI * 2;
        gsap.set(el, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius
        });

        // Orbit Loop
        gsap.to(el, {
          duration: 40,
          repeat: -1,
          ease: "none",
          onUpdate: function() {
            const time = gsap.ticker.time * 0.1;
            const currentAngle = angle + time;
            gsap.set(el, {
              x: Math.cos(currentAngle) * radius,
              y: Math.sin(currentAngle) * radius
            });
          }
        });
      }

      // Tooltip Logic
      el.addEventListener('mouseenter', (e) => {
        const tooltip = document.getElementById('tooltip');
        tooltip.innerHTML = `<h4 style="color:var(--accent);">${node.name}</h4><p style="font-size:0.75rem; margin: 0.5rem 0;">${node.desc}</p><span style="font-weight:bold; color:var(--text);">${node.cta}</span>`;
        tooltip.style.opacity = 1;
        gsap.to(el, { scale: 1.1, borderColor: "var(--accent)", duration: 0.3 });
      });

      el.addEventListener('mouseleave', () => {
        document.getElementById('tooltip').style.opacity = 0;
        gsap.to(el, { scale: 1, borderColor: "rgba(255,255,255,0.1)", duration: 0.3 });
      });

      el.addEventListener('mousemove', (e) => {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.left = (e.pageX + 15) + 'px';
        tooltip.style.top = (e.pageY + 15) + 'px';
      });
    });
  }

  initScrollReveals() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }

  initCounters() {
    const counters = document.querySelectorAll('.impact-num');
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const suffix = counter.getAttribute('data-suffix') || '';
      ScrollTrigger.create({
        trigger: counter,
        start: "top 90%",
        onEnter: () => {
          gsap.to(counter, {
            innerText: target,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerText: target % 1 === 0 ? 1 : 0.1 },
            onUpdate: function() {
              const val = parseFloat(this.targets()[0].innerText);
              counter.innerHTML = (target % 1 === 0 ? Math.floor(val) : val.toFixed(1)) + suffix;
            }
          });
        }
      });
    });
  }

  initMouseParallax() {
    if (this.isReducedMotion || window.innerWidth < 1024) return;
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      gsap.to("#robotSvg", {
        rotationY: x,
        rotationX: -y,
        x: x * 0.5,
        y: y * 0.5,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  }

  initNavEffect() {
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    });
  }

  initAccessibility() {
    const toggle = document.getElementById('motionToggle');
    if (this.isReducedMotion) {
      document.body.classList.add('reduce-motion-active');
      toggle.innerText = "Enable Motion";
    }
    
    toggle.addEventListener('click', () => {
      this.isReducedMotion = !this.isReducedMotion;
      localStorage.setItem('reduceMotion', this.isReducedMotion);
      document.body.classList.toggle('reduce-motion-active');
      location.reload();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AnimationManager();
});
