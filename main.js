const modal = document.querySelector(".modal");
const modalOverlay = document.getElementById("modal-overlay");
const registerForm = document.querySelector(".register-form");
const registerBtn = document.querySelector(".js-register-btn");
const switchRegisterBtn = document.querySelector(".js-switch-register-btn");
const registerBackBtn2 = document.querySelector(".js-register-back-btn");
const registerBackBtn = document.querySelector(".auth-form__controls-back");
const loginForm = document.querySelector(".login-form");
const loginBtn = document.getElementById("js-login-btn");
const switchLoginBtn = document.querySelector(".js-switch-login-btn");
const loginBackBtn = document.querySelector(".js-login-back-btn");
const loginCompletedBtn = document.querySelector(".js-login-completed");
const navbarUser = document.querySelector(".header__navbar-user");
const logoutBtn = document.querySelector(".js-logout-btn");

modal.style.display = "none";
loginForm.style.display = "none";
navbarUser.style.display = "none";
registerBtn.addEventListener("click", openRegisterForm);
switchRegisterBtn.addEventListener("click", openRegisterForm);
registerBackBtn.addEventListener("click", backToHome);
registerBackBtn2.addEventListener("click", openLoginForm);
loginBackBtn.addEventListener("click", backToHome);
loginBtn.addEventListener("click", openLoginForm);
switchLoginBtn.addEventListener("click", openLoginForm);
loginCompletedBtn.addEventListener("click", loginCompleted);
logoutBtn.addEventListener("click", logOut);
function openRegisterForm() {
  modal.style.display = "block";
  modalOverlay.style.zIndex = "-1";
  registerForm.style.display = "block";
  loginForm.style.display = "none";
}
function openLoginForm() {
  modal.style.display = "block";
  modalOverlay.style.zIndex = "-1";
  registerForm.style.display = "none";
  loginForm.style.display = "block";
}
function loginCompleted() {
  navbarUser.classList.add("active");
  modal.style.display = "none";
  loginBtn.style.display = "none";
  registerBtn.style.display = "none";
}

function backToHome() {
  modal.style.display = "none";
}
function logOut() {
  navbarUser.classList.remove("active");
  loginBtn.style.display = "flex";
  registerBtn.style.display = "flex";
}
