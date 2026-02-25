/* ====================================================
   BLOCK BOX™ — MAIN SCRIPTS
   zerowaste.seedwave.faa.zone
   ==================================================== */

(function () {
  'use strict';

  /* ── Sticky nav ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ── Mobile burger menu ── */
  const burgerBtn  = document.getElementById('burgerBtn');
  const mobileNav  = document.getElementById('mobileNav');

  burgerBtn.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('is-open');
    burgerBtn.classList.toggle('is-open', open);
    burgerBtn.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.mnav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      burgerBtn.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── Smooth scroll (with nav offset) ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      const target = id === '#' ? null : document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '68',
        10
      );
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── Step reveal on scroll ── */
  const stepObserver = new IntersectionObserver(
    entries => {
      entries.forEach((entry, idx) => {
        if (!entry.isIntersecting) return;
        setTimeout(() => entry.target.classList.add('is-visible'), idx * 160);
        stepObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.step').forEach(el => stepObserver.observe(el));

  /* ── Counter animation for impact metrics ── */
  function animateCount(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 2000;
    const start    = performance.now();

    function tick(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const countObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target.querySelector('.count');
        if (el) animateCount(el);
        countObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll('.metric').forEach(el => countObserver.observe(el));

  /* ── Contact form (client-side feedback only) ── */
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  if (form && submitBtn) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      // Basic validation
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach(field => {
        field.style.borderColor = '';
        if (!field.value.trim() || (field.type === 'checkbox' && !field.checked)) {
          field.style.borderColor = '#f87171';
          valid = false;
        }
      });
      if (!valid) return;

      // Success state
      const original = submitBtn.textContent;
      submitBtn.textContent = '✓ Enquiry Submitted — We\'ll be in touch';
      submitBtn.disabled    = true;
      submitBtn.style.opacity = '0.75';

      // Reset after 6 seconds
      setTimeout(() => {
        submitBtn.textContent   = original;
        submitBtn.disabled      = false;
        submitBtn.style.opacity = '';
        form.reset();
      }, 6000);
    });
  }

})();
