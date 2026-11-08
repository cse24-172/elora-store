const count = document.getElementById("cart-count");
const dialog = document.getElementById("notify-dialog");
const selected = document.getElementById("selected-product");
const message = document.getElementById("form-message");
document.getElementById("year").textContent = new Date().getFullYear();

// This is a launch-preview storefront. No real orders or payments are processed.
document.querySelectorAll("[data-product]").forEach(button => {
  button.addEventListener("click", () => {
    selected.textContent = `Get launch updates for ${button.dataset.product}.`;
    dialog.showModal();
  });
});
document.querySelector(".close-dialog").addEventListener("click", () => dialog.close());
document.getElementById("notify-submit").addEventListener("click", event => {
  event.preventDefault();
  const email = document.getElementById("notify-email");
  if (!email.reportValidity()) return;
  document.getElementById("notify-message").textContent =
    "Thank you! This is a demo only; connect an email service to collect sign-ups.";
});
document.getElementById("newsletter-form").addEventListener("submit", event => {
  event.preventDefault();
  message.textContent = "Thank you for your interest! Email collection is not connected yet.";
});
document.getElementById("cart-toggle").addEventListener("click", () => {
  alert("The shopping bag will be enabled when real products and checkout are connected.");
});
