// NAV TOGGLE (mobile)
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navList.style.display = expanded ? 'none' : 'flex';
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const faq = btn.closest('.faq');
    faq.classList.toggle('open');
  });
});

// Simple carousel (next/prev + thumbs)
const track = document.querySelector('.carousel-track');
const items = Array.from(document.querySelectorAll('.carousel-item'));
const prevBtn = document.querySelector('[data-carousel-button="prev"]');
const nextBtn = document.querySelector('[data-carousel-button="next"]');
const thumbs = Array.from(document.querySelectorAll('.thumb'));

let index = 0;
function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
  thumbs.forEach(t => t.classList.remove('active'));
  thumbs[index]?.classList.add('active');
}
nextBtn?.addEventListener('click', () => { index = (index+1) % items.length; updateCarousel(); });
prevBtn?.addEventListener('click', () => { index = (index-1 + items.length) % items.length; updateCarousel(); });
thumbs.forEach(t => {
  t.addEventListener('click', () => {
    const i = Number(t.dataset.index);
    if (!Number.isNaN(i)) { index = i; updateCarousel(); }
  });
});
updateCarousel();

// Contact form simulated submit
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  note.textContent = 'Mensagem enviada. Obrigada! (simulação local)';
  form.reset();
  setTimeout(()=> note.textContent = '', 5000);
});
