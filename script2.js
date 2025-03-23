// script.js

// Get the modal and contact link
const modal = document.getElementById('contact-modal');
const contactLink = document.querySelector('a[href="#contact"]');
const closeModal = document.querySelector('.close-modal');

// Open modal when "Contact" is clicked
contactLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  modal.style.display = 'flex'; // Show the modal
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide the modal
});

// Close modal when clicking outside the modal
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'; // Hide the modal
  }
});

// Handle form submission (optional)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // You can process the form data here (e.g., send it to a server)
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);

  // Close the modal after submission
  modal.style.display = 'none';
});