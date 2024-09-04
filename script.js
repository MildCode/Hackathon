// Function to open the booking form modal and set the doctor's name
function openBookingForm(doctorName) {
    document.getElementById('doctor-name').value = doctorName;
    document.getElementById('appointment-modal').style.display = 'block';
}

// Function to close the booking form modal
function closeBookingForm() {
    document.getElementById('appointment-modal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('appointment-modal')) {
        closeBookingForm();
    }
}
