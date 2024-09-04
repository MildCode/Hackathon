// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = this.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert('Message sent successfully!');
    this.reset();
});
