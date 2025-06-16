// assets/js/script.js
document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded. 🔐 Let's get to work.");
});
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("theme-light");
});

// Fake submit handler
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent (not really, this is just a static form 😉)");
    form.reset();
  });
}
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert("✅ Message sent! I'll get back to you soon.");
      form.reset();
    } else {
      alert("❌ Oops, something went wrong!");
    }
  });
}
