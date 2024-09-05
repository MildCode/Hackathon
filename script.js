// JavaScript for Modal and QR Code Interaction
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('appointment-modal');
    var closeButton = document.querySelector('.close-button');

    // Open Modal
    function openBookingForm() {
        modal.style.display = 'flex';
    }

    // Close Modal
    closeButton.onclick = function () {
        closeBookingForm();
    };

    // Close modal when clicking outside of the modal content
    window.onclick = function (event) {
        if (event.target == modal) {
            closeBookingForm();
        }
    };

    function closeBookingForm() {
        modal.style.display = 'none';
    }
});
