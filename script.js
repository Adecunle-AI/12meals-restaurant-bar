// Show open/closed message based on time
const now = new Date();
const hour = now.getHours();
const messageEl = document.createElement('p');
messageEl.style.fontWeight = 'bold';

if (hour >= 11 && hour <= 23) {
  messageEl.textContent = "We’re open now! Come visit or make a reservation 🍽️";
  messageEl.style.color = "green";
} else {
  messageEl.textContent = "We’re currently closed. Opening hours: 11 AM – 11 PM";
  messageEl.style.color = "red";
}

const reservationSection = document.getElementById("reservation");
reservationSection.appendChild(messageEl);

const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });


document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  if (name && email.includes("@")) {
    message.textContent = "Reservation submitted! We'll contact you soon.";
    message.style.color = "green";
    document.getElementById("reservationForm").reset();
  } else {
    message.textContent = "Please enter a valid name and email.";
    message.style.color = "red";
  }
});

