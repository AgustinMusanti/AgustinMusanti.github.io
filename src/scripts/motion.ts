const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function countUp(el: HTMLElement) {
  const raw = el.dataset.count ?? '';
  const match = raw.match(/^(\D*)(\d+)(\D*)$/);
  if (!match || reduceMotion) return;
  const [, prefix, digits, suffix] = match;
  const target = Number(digits);
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - start) / 1100, 1);
    el.textContent = `${prefix}${Math.round(target * (1 - (1 - p) ** 3))}${suffix}`;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target as HTMLElement;
      if (el.hasAttribute('data-reveal')) el.classList.add('is-visible');
      if (el.hasAttribute('data-draw')) el.classList.add('is-drawn');
      if (el.hasAttribute('data-count')) countUp(el);
      observer.unobserve(el);
    }
  },
  { threshold: 0.15 },
);

document.querySelectorAll('[data-reveal], [data-draw], [data-count]').forEach((el) => observer.observe(el));

const progress = document.querySelector<HTMLElement>('.read-progress');
if (progress) {
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.setProperty('--progress', String(max > 0 ? window.scrollY / max : 0));
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}
