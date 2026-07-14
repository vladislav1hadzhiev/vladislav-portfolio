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