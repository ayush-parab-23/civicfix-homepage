// script.js
document.addEventListener("DOMContentLoaded", function () {
  loadLanguage(); // apply saved language (from lang.js)

  const otpBtn = document.getElementById("getOtpBtn");
  if (otpBtn) {
    otpBtn.addEventListener("click", function () {
      const mobileEl = document.getElementById("mobile");
      const mobile = mobileEl ? mobileEl.value : "";
      if (mobile.length === 10) {
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
});

// Event listeners for language dropdown
document.querySelectorAll(".dropdown-item[data-lang]").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const langCode = e.target.getAttribute("data-lang");
    changeLanguage(langCode);
  });
});
