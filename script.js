const nav = document.querySelector('.main-navigation');
const base = document.querySelector('.base');

if (nav && base) {
  let lastY = window.scrollY;
  let ticking = false;
  const THRESHOLD = 5; // px — ignores micro-jitter

  const updateNav = () => {
    const y = window.scrollY;
    const delta = y - lastY;

    if (Math.abs(delta) > THRESHOLD) {
      nav.classList.toggle('hidden', delta > 0 && y > 0); 
      // 80px grace zone — nav stays visible near top
      lastY = y;
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateNav);
      ticking = true;
    }
  }, { passive: true });

  base.addEventListener('mouseenter', () => {
    nav.classList.remove('hidden');
  });
}