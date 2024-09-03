document.addEventListener('DOMContentLoaded', function() {
  // Fetch patient data from WordPress REST API
  fetch('https://your-wordpress-site.com/wp-json/wp/v2/patients')
    .then(response => response.json())
    .then(data => {
      const patientsList = document.getElementById('patients-list');
      patientsList.innerHTML = data.map(patient => `
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${patient.title.rendered}</h5>
              <p class="card-text">Condition: ${patient.acf.medical_condition}</p>
            </div>
          </div>
        </div>
      `).join('');
    })
    .catch(error => console.error('Error fetching patient data:', error));

  // Handle appointment form submission
  document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('patientName').value;
    const date = document.getElementById('appointmentDate').value;

    // Send appointment data to WordPress REST API
    fetch('https://your-wordpress-site.com/wp-json/wp/v2/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_AUTH_TOKEN' // if needed
      },
      body: JSON.stringify({
        title: name,
        date: date,
      })
    })
    .then(response => response.json())
    .then(data => {
      alert('Appointment booked successfully!');
      document.getElementById('appointment-form').reset();
    })
    .catch(error => console.error('Error booking appointment:', error));
  });
});
