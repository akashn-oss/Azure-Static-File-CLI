const button = document.getElementById("ctaBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  const now = new Date().toLocaleTimeString();
  message.textContent = `Button clicked at ${now}`;
});
