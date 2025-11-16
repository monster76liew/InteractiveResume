// Smooth scroll for nav links
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  });
});

// Job toggles (collapsible)
document.querySelectorAll('.job-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const body = btn.nextElementSibling;
    body.style.display = (body.style.display === 'block') ? 'none' : 'block';
  });
});

// copy email buttons
function copyText(text){
  navigator.clipboard?.writeText(text).then(()=>{
    alert('Copied to clipboard: ' + text);
  }, ()=>{ alert('Copy failed — try selecting and copying manually.');});
}
document.getElementById('copyEmail')?.addEventListener('click', ()=>copyText('monster76liew@gmail.com'));
document.getElementById('copyEmail2')?.addEventListener('click', ()=>copyText('monster76liew@gmail.com'));

// theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('dark');
});

