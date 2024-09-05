// Function to open the booking form modal and set the doctor's name
function openBookingForm(doctorName) {
    // Set the doctor's name in the hidden input field
    document.getElementById('doctor-name').value = doctorName;

    // Display the appointment modal
    document.getElementById('appointment-modal').style.display = 'block';

    // Ensure the QR code section is visible and the confirmation message is hidden
    document.getElementById('qr-code-section').style.display = 'block';
    document.getElementById('confirmation-message').style.display = 'none';
}

// Function to close the booking form modal
function closeBookingForm() {
    // Hide the appointment modal
    document.getElementById('appointment-modal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('appointment-modal')) {
        closeBookingForm();
    }
}

// Function to simulate QR code form submission and display a confirmation message
function handleQRSubmission() {
    // Hide the QR code section
    document.getElementById('qr-code-section').style.display = 'none';

    // Show the confirmation message
    document.getElementById('confirmation-message').style.display = 'block';
}

// Simulate QR form submission after 5 seconds (for demo purposes)
// In a real-world scenario, this would be triggered by the actual form submission
setTimeout(handleQRSubmission, 5000);
