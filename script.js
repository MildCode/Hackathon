document.addEventListener('DOMContentLoaded', () => {
  const appointmentForm = document.getElementById('appointment-form');

  // Handle form submission for booking appointments
  appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('patientName').value;
    const date = document.getElementById('appointmentDate').value;

    if (name && date) {
      alert(`Appointment booked for ${name} on ${date}`);
      appointmentForm.reset();
    } else {
      alert('Please fill in all fields');
    }
  });

  // Example: Adding dynamic content to Doctors Section (Placeholder for dynamic data)
  const doctorsSection = document.querySelector('#doctors .row');
  const doctors = [
    {
      name: 'Dr. John Doe',
      specialty: 'Cardiologist',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Dr. Jane Smith',
      specialty: 'Neurologist',
      image: 'https://via.placeholder.com/150',
    },
  ];

  doctors.forEach((doctor) => {
    const doctorCard = document.createElement('div');
    doctorCard.className = 'col-md-6 mb-4';
    doctorCard.innerHTML = `
      <div class="card">
        <img src="${doctor.image}" class="card-img-top" alt="${doctor.name}">
        <div class="card-body">
          <h5 class="card-title">${doctor.name}</h5>
          <p class="card-text">${doctor.specialty}</p>
        </div>
      </div>`;
    doctorsSection.appendChild(doctorCard);
  });
});
