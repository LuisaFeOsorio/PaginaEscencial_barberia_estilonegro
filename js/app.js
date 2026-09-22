document.addEventListener('DOMContentLoaded', () => {
  // --- Menú Móvil ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // --- Header Sticky (opcional: cambiar color al hacer scroll) ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
      header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
      header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
      header.style.boxShadow = 'none';
    }
  });
});
