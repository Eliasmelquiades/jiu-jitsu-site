// Initialize EmailJS
(function () {
  emailjs.init("bvnVgM4s6oXCxPgWh"); // Replace with your actual USER ID
})();

// References to DOM elements

const toggleButton = document.getElementById("themeToggle");
/*const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.querySelector(".close");
const form = document.getElementById("subscription-form");
const successMessage = document.getElementById("success-message");*/

// Toggle dark mode and add animation to the button
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Animate button scale on click
  toggleButton.style.transform = "scale(1.1)";
  setTimeout(() => {
    toggleButton.style.transform = "scale(1)";
  }, 200);
});
// Modal functionality book and Class 
const openBookingModalButton = document.getElementById("openBookingModal");
const bookingModal = document.getElementById("bookingModal");
const closeBookingModal = document.querySelector(".close-booking");
const bookingForm = document.getElementById("booking-form");
const bookingSuccess = document.getElementById("booking-success-message");

// Open modal on button click
openBookingModalButton.addEventListener("click", () => {
  bookingModal.style.display = "block";
});

// Close modal when clicking the close button (X)
closeBookingModal.addEventListener("click", () => {
  bookingModal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === bookingModal) {
    bookingModal.style.display = "none";
  }
});

// Submit form using EmailJS
bookingForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  emailjs.sendForm('service_a2t6r9h', 'template_abc123', this)
    .then(() => {
      bookingSuccess.style.display ="block";
      bookingForm.reset(); // Reset the form after successful submission
        setTimeout(() => {
            bookingSuccess.style.display = "none"; // Hide success message after 3 seconds
            bookingModal.style.display = "none"; // Close the modal after a short delay
        }, 3000);
    })
    .catch((error) => {
        alert('Failed to send email. Please try again later.');
      console.error('Failed to send email:', error);
    });
});
// modal : subscribe form
const openSubscribeModal = document.getElementById("openSubscribeModal");
const subscribeModal = document.getElementById("subscribeModal");
const closeSubscribeModal = document.querySelector(".close-subscribe");
const subscribeForm = document.getElementById("subscription-form");
const subscribeSuccess = document.getElementById("subscribe-success-message");
// Open modal on button click
openSubscribeModal.addEventListener("click", () => {
  subscribeModal.style.display = "block";
});
// Close modal when clicking the close button (X)
closeSubscribeModal.addEventListener("click", () => {
  subscribeModal.style.display = "none";
});
// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === subscribeModal) {
        subscribeModal.style.display = "none";
    }
    });
// Submit form using EmailJS
subscribeForm.addEventListener("submit", function (e) { 
    e.preventDefault(); // Prevent default form submission behavior
    
    emailjs.sendForm('service_a2t6r9h', 'template_abc123', this)
        .then(() => {
            alert('Subscription successful! Thank you for subscribing.');
        subscribeSuccess.style.display = "block";
        subscribeForm.reset(); // Reset the form after successful submission
            setTimeout(() => {
                subscribeSuccess.style.display = "none"; // Hide success message after 3 seconds
                subscribeModal.style.display = "none"; // Close the modal after a short delay
            }, 3000);
        })
        .catch((error) => {
            alert('Failed to send email. Please try again later.');
        console.error('Failed to send email:', error);
        });
    });
