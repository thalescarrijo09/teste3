// script.js

document.addEventListener('DOMContentLoaded', () => {

  // Menu mobile hambúrguer
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  function closeMenu() {
    nav.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('.nav-link, .btn').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Fecha menu ao redimensionar para desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) closeMenu();
  });

  // Ano dinâmico no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
