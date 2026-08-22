document.addEventListener('DOMContentLoaded', () => {
  const mainNav = document.getElementById('outer-nav');
  const sideNav = document.getElementById('fixed-side-nav');

  if (mainNav && sideNav) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          sideNav.classList.add('is-show');
        } else {
          sideNav.classList.remove('is-show');
        }
      });
    }, {
      threshold: 0
    });

    observer.observe(mainNav);
  }
});