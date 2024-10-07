// Scroll to section functionality for smooth scrolling
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      window.scroll({
          top: section.offsetTop - 60,
          behavior: 'smooth'
      });
  });
});

// Scroll Animation for About Section
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const aboutSection = document.querySelector('.about');
  if (isElementInViewport(aboutSection)) {
      aboutSection.classList.add('animate');
  }
}

// Check for scroll events and trigger animations
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
