const form = document.getElementById("registerForm");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const okBtn = document.getElementById("okBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();

  popupMessage.textContent =
    `Congratulations ${username}, your account has been successfully created!`;

  popup.classList.add("active");
});

okBtn.addEventListener("click", () => {
  popup.classList.remove("active");
  form.reset();
});
