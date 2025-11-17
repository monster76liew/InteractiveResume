const q = s => document.querySelector(s);
const qAll = s => Array.from(document.querySelectorAll(s));

// Smooth scroll for nav buttons
qAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tgt = document.querySelector(btn.dataset.target);
    if (tgt) tgt.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Dark mode toggle (matches :root and :root.light)
const darkToggle = document.querySelector('#dark-mode-toggle');
if (darkToggle) {
  darkToggle.addEventListener('change', e => {
    document.documentElement.classList.toggle('light', !e.target.checked);
  });
}