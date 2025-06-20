  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = 0;
    section.style.transition = "opacity 0.6s ease-in-out";
  });
  
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        section.style.opacity = 1;
      }
    });
  });