
// Get the modal
var modal = document.getElementById("modal");

// Get the close button
var span = document.getElementsByClassName("close")[0];

// Open the modal
function openModal() {
    modal.style.display = "flex";
}

// Close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Example to open the modal on a button click (modify as needed)
document.querySelector('.btn-primary').addEventListener('click', openModal);
