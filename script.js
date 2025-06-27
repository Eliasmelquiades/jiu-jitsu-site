// Initialize EmailJS
(function () {
  emailjs.init("bvnVgM4s6oXCxPgWh"); // Replace with your actual USER ID
})();

// References to DOM elements

const toggleButton = document.getElementById("themeToggle");

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
// FAQ accordion functionality
const faqs = [
  {
    question: "How can I schedule a class?",
    answer: "You can schedule through our contact form or via WhatsApp."
  },
  {
    question: "Do I need experience to start?",
    answer: "No! We welcome students of all levels, including beginners."
  },
  {
    question: "What are the class times?",
    answer: "We have classes in the morning, afternoon, and evening. Check our schedule for details."
  },
  {
  question: "What should I wear to the first class?",
  answer: "If you don’t have a gi (kimono) yet, come with comfortable sportswear. We can lend you one for your trial."
},
{
  question: "Can kids join the classes?",
  answer: "Yes! We have specific classes for children starting from age 4."
},
{
  question: "Do you offer trial classes?",
  answer: "Yes, we offer a free trial class for new students. Come and experience it!"
},
{
  question: "Can I train even if I work shifts?",
  answer: "Absolutely. Our flexible schedule allows you to train in the morning, afternoon or evening."
},
{
  question: "Do you participate in competitions?",
  answer: "Yes, we support and prepare students who want to compete in local and national tournaments."
}
];

let currentIndex = 0;

const questionEl = document.getElementById("faq-question");
const answerEl = document.getElementById("faq-answer");

function showFAQ(index) {
  questionEl.textContent = faqs[index].question;
  answerEl.textContent = faqs[index].answer;
}

// Buttons
document.getElementById("prev-faq").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + faqs.length) % faqs.length;
  showFAQ(currentIndex);
});

document.getElementById("next-faq").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % faqs.length;
  showFAQ(currentIndex);
});

// Show first FAQ on page load
showFAQ(currentIndex);

//cookie consent functionality
const cookieBanner = document.getElementById("cookie-banner");
const acceptCookies = document.getElementById("accept-cookies");

// Show cookie banner if not accepted
if (!localStorage.getItem("cookiesAccepted")) {
  cookieBanner.style.display = "block";
}

// Accept cookies
acceptCookies.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookieBanner.style.display = "none";
});
