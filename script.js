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
