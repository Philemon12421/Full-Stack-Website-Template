// Shared JS used across pages
document.addEventListener('DOMContentLoaded', function () {
  // set footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
  });

  // highlight active nav link based on file name
  (function highlightNav() {
    try {
      const links = document.querySelectorAll('#mainNav a');
      const path = window.location.pathname.split('/').pop() || 'index.html';
      links.forEach(a => {
        const href = a.getAttribute('href');
        if (!href) return;
        const clean = href.split('/').pop();
        if (clean === path) a.classList.add('active');
      });
    } catch (e) { /* ignore */ }
  })();

  // contact form behavior (prevents actual submit)
  (function contactFormHandler() {
    const form = document.getElementById('contactForm');
    const clearBtn = document.getElementById('clearBtn');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = (form.name && form.name.value || '').trim();
      const email = (form.email && form.email.value || '').trim();
      const message = (form.message && form.message.value || '').trim();
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      alert('Thanks, ' + name + '! Your message has been noted. We will contact you shortly.');
      form.reset();
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        form.reset();
      });
    }
  })();
});

//Full website template @Drench