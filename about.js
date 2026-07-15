const submitBtn = document.querySelector("#contact-form button");

submitBtn.textContent = "✓ Message Sent";
submitBtn.disabled = true;

setTimeout(() => {
  submitBtn.textContent = "Send Message";

  submitBtn.disabled = false;
}, 4000);

setTimeout(() => {
  submitBtn.classList.remove("btn-success");
}, 4000);

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