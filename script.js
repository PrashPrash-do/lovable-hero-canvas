
// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
  const customerForm = document.getElementById('customerForm');
  if (customerForm) {
    customerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };

      // Basic validation
      if (!isValidEmail(formData.email)) {
        alert('Please enter a valid email address');
        return;
      }

      if (!isValidPhone(formData.phone)) {
        alert('Please enter a valid phone number');
        return;
      }

      // Log form data (replace with your actual submission logic)
      console.log('Form submitted:', formData);
      alert('Thank you for your submission!');
      this.reset();
    });
  }

  // Smooth scrolling with animation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Animate step cards on scroll
  const stepCards = document.querySelectorAll('.step-card');
  if (stepCards.length > 0) {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    stepCards.forEach(card => {
      observer.observe(card);
    });
  }

  // Sticky navbar with hide/show on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
      }

      if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
      } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
      }
      lastScroll = currentScroll;
    });
  }
});

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  return phoneRegex.test(phone);
}
