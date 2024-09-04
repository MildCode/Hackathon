

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
// Open Appointment Form Modal
function openBookingForm(doctorName) {
    document.getElementById('appointment-modal').style.display = 'block';
    document.getElementById('doctor-name').value = doctorName;
}

// Close Appointment Form Modal
function closeBookingForm() {
    document.getElementById('appointment-modal').style.display = 'none';
}

// Handle Form Submission
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Appointment booked successfully!');
    closeBookingForm();
});

// Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
