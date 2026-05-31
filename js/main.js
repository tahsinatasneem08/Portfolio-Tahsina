// Loader Animation
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  setTimeout(() => {
    loader.style.opacity = '0';

    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);

  }, 1200);
});


// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }

  });
}, {
  threshold: 0.2,
});


const hiddenElements = document.querySelectorAll(
  '.fade-up, .fade-left, .fade-right'
);

hiddenElements.forEach((el) => observer.observe(el));


// Active Navbar Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {

    link.classList.remove('active');

    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});


// Dark / Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
}

// Toggle theme
toggleBtn.addEventListener('click', () => {

  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});


// Smooth Close Mobile Menu
const mobileLinks = document.querySelectorAll('#mobile-menu a');

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});


// Navbar Background on Scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

  if (window.scrollY > 50) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }

});


// Scroll To Top Button
const scrollTopBtn = document.createElement('button');

scrollTopBtn.innerHTML = '↑';

scrollTopBtn.className =
  'fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#DB8043] text-white text-xl hidden z-50 hover:scale-110 transition';

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {

  if (window.scrollY > 400) {
    scrollTopBtn.classList.remove('hidden');
  } else {
    scrollTopBtn.classList.add('hidden');
  }

});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});