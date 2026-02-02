// Active nav link
const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Contact form validation
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("formMessage");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      message.textContent = "Please enter a valid email.";
      message.style.color = "red";
      return;
    }

    message.textContent = "Message sent successfully (dummy).";
    message.style.color = "green";
    form.reset();
  });
}
