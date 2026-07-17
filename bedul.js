const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const orderButton = document.getElementById('orderButton');
const whatsappButton = document.getElementById('whatsappButton');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('nav-open');
  menuToggle.textContent = mainNav.classList.contains('nav-open') ? '✕' : '☰';
});

orderButton.addEventListener('click', () => {
  alert('Terima kasih! Pesanan Anda sedang diproses.');
});

whatsappButton.addEventListener('click', () => {
  window.location.href = 'https://wa.me/6281234567890?text=Halo%20Java%20House%20Coffee,%20saya%20ingin%20memesan.';
});
