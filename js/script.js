const q = s => document.querySelector(s);
const qAll = s => Array.from(document.querySelectorAll(s));

qAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tgt = document.querySelector(btn.dataset.target);
    if (tgt) tgt.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});