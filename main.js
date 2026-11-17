const burger = document.getElementById('burger');
const links = document.getElementById('navLinks');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.addEventListener('click', e => { if (e.target.tagName === 'A') links.classList.remove('open'); });

// Hero rasmi skroll bilan yengil kattalashadi
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const heroImgs = document.querySelectorAll('.hero-img');
if (!reduce) {
  window.addEventListener('scroll', () => {
    heroImgs.forEach(img => {
      const r = img.getBoundingClientRect();
      const p = Math.min(Math.max(1 - r.top / window.innerHeight, 0), 1);
      img.style.transform = 'scale(' + (0.92 + p * 0.08) + ')';
    });
  }, { passive: true });
}
