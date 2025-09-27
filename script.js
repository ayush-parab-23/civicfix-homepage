// script.js - small glue code for index.html

document.addEventListener("DOMContentLoaded", function () {
  // apply stored language
  if (typeof loadLanguage === "function") loadLanguage();

  const otpBtn = document.getElementById("getOtpBtn");
  if (otpBtn) {
    otpBtn.addEventListener("click", function () {
      const mobileEl = document.getElementById("mobile");
      const mobile = mobileEl ? mobileEl.value.trim() : "";
      if (/^\d{10}$/.test(mobile)) {
        alert("OTP sent to " + mobile);
      } else {
        alert("Please enter a valid 10-digit mobile number.");
      }
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = "dashboard.html"; // redirect after login
    });
  }

  // safety: attach dropdown handlers
  document.querySelectorAll(".dropdown-item[data-lang]").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const langCode = e.target.getAttribute("data-lang");
      if (typeof setLanguage === "function") setLanguage(langCode);
    });
  });
});
