// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  const headerRight = document.querySelector('.header-right');
  
  if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      headerRight.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a link
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
      headerRight.classList.remove('active');
    });
  });

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if(linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Form submission
  const contactForm = document.getElementById('contactForm');
  if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.');
      this.reset();
    });
  }

  // Login form submission
  const loginForm = document.querySelector('.login-form');
  if(loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Login functionaliteit wordt binnenkort geïmplementeerd. Voor nu kunt u contact opnemen via telefoon of WhatsApp.');
      this.reset();
    });
  }

  // Add shadow to header on scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.pageYOffset > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});