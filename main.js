// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.body;

// Check user system preference or stored theme
const storedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (storedTheme) {
  rootElement.setAttribute('data-theme', storedTheme);
} else {
  rootElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
}

themeToggleBtn?.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
  rootElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
});

// Mobile Navigation Toggle
const mobileToggleBtn = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggleBtn?.addEventListener('click', () => {
  navMenu?.classList.toggle('active');
  const icon = mobileToggleBtn.querySelector('i');
  if (icon) {
    if (navMenu?.classList.contains('active')) {
      icon.className = 'fa-solid fa-xmark';
    } else {
      icon.className = 'fa-solid fa-bars';
    }
  }
});

// Close mobile menu when clicking any nav link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu?.classList.remove('active');
    const icon = mobileToggleBtn?.querySelector('i');
    if (icon) icon.className = 'fa-solid fa-bars';
  });
});

// Dynamic Year in Footer
const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}
