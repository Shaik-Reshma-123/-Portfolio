// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  
  // Scroll-to-Top Button Functionality
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerText = "↑";
  scrollToTopButton.className = "scroll-to-top";
  scrollToTopButton.style.display = "none";
  document.body.appendChild(scrollToTopButton);
  
  // Show/Hide Scroll-to-Top Button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  
  // Scroll to Top on Button Click
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  
  // Form Validation
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting
  
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you for reaching out! Your message has been sent.');
      contactForm.reset();
    }
  });
  
  // Email Validation Function
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  