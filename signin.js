const form = document.getElementById("signinForm");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const okBtn = document.getElementById("okBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const username = email.split("@")[0]; // derive name from email

  
  popup.classList.add("active");
});

okBtn.addEventListener("click", () => {
  popup.classList.remove("active");

  // redirect to home page
  window.location.href = "index.html";
});

