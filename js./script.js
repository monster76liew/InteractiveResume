// --- Small helpers
const q = s => document.querySelector(s);
const qAll = s => Array.from(document.querySelectorAll(s));

// Smooth nav scrolling
qAll('.nav-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const tgt = document.querySelector(btn.dataset.target);
    if(tgt) tgt.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Collapsible job details
qAll('.job .toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const job = btn.closest('.job');
    const body = job.querySelector('.job-body');
    const open = body.style.display === 'block';
    body.style.display = open ? 'none' : 'block';
    btn.textContent = open ? 'Details' : 'Hide';
  });
});

// Animate skill bars on scroll into view
function animateSkills(){
  qAll('.fill').forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 40){
      const width = el.dataset.fill || 70;
      el.style.width = width + '%';
    }
  });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', ()=>{
  // set date
  const lu = document.getElementById('lastUpdated');
  if(lu) lu.textContent = new Date().toLocaleDateString();

  animateSkills();
});

// Theme toggle: checkbox toggles light mode
const themeToggle = q('#themeToggle');
if(themeToggle){
  // initialize from saved preference
  const saved = localStorage.getItem('theme') || 'dark';
  if(saved === 'light') document.documentElement.classList.add('light');

  themeToggle.checked = saved === 'light';
  themeToggle.addEventListener('change', ()=>{
    if(themeToggle.checked){
      document.documentElement.classList.add('light');
      localStorage.setItem('theme','light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme','dark');
    }
  });
}

// Copy email buttons
qAll('.copy').forEach(b=>{
  b.addEventListener('click', async ()=>{
    const text = b.dataset.copy;
    try{
      await navigator.clipboard.writeText(text);
      b.textContent = 'Copied';
      setTimeout(()=> b.textContent = 'Copy', 1400);
    }catch(e){
      alert('Copy failed — please copy manually: ' + text);
    }
  });
});
