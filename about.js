const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }

  lastScroll = currentScroll;
});

// ===========================
// MOBILE MENU
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
  const icon = menuToggle.querySelector("i");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
}

// ===========================
// EMAILJS
// ===========================

emailjs.init("C9lKxIcMlLcPw7Qyq");

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const submitButton = contactForm.querySelector("button");
  const status = document.getElementById("form-status");
  const originalText = submitButton.textContent;

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      await emailjs.sendForm(
        "service_m7bwscr",
        "template_sflj3jh",
        contactForm,
      );

      contactForm.reset();

      status.textContent = "✓ Your message has been sent successfully!";
      status.className = "form-status success show";
    } catch (error) {
      console.error(error);

      status.textContent = "✕ Something went wrong. Please try again.";
      status.className = "form-status error show";
    }

    submitButton.disabled = false;
    submitButton.textContent = originalText;

    setTimeout(() => {
      status.className = "form-status";
      status.textContent = "";
    }, 4000);
  });
}
// ===========================
// SMOOTH SCROLL TO CONTACT
// ===========================
