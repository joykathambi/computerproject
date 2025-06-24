// ====== 1. Mobile Menu Toggle ======
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // ====== 2. FAQ Accordion Toggle ======
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      q.classList.toggle('active');
      const answer = q.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });

  // ====== 3. Auto Scrolling Partner Logos ======
  const slider = document.getElementById('partnersSlider');

  let scrollPosition = 0;

  function autoScrollLogos() {
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      scrollPosition = 0;
    } else {
      scrollPosition += 3; // Faster scroll
    }
    slider.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  setInterval(autoScrollLogos, 20); // Smooth scroll every 20ms

  // ====== 4. Scroll-triggered Card Animation (Resources Section) ======
  const animatedCards = document.querySelectorAll('.resources .card');

  function handleScroll() {
    animatedCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        card.classList.add('visible');
      }
    });
  }

  // Add animation class on load
  animatedCards.forEach(card => card.classList.add('animate'));

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
});