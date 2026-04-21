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
    loginForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      
      const otpInput = document.getElementById("otp");
      if (otpInput && otpInput.value !== "123456") {
        if(typeof Swal !== 'undefined') Swal.fire({icon: 'error', title: 'Invalid OTP', text: 'Please enter the simulated OTP: 123456'});
        else alert('Invalid OTP. Please enter 123456.');
        return;
      }
      
      const name = document.getElementById("name").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const email = document.getElementById("email").value.trim();
      const stateEl = document.getElementById("state");
      const state = stateEl ? stateEl.value : "Delhi";
      
      try {
          const res = await fetch('/api/login', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({ name, mobile, email, state })
          });
          const data = await res.json();
          if (data.success) {
              const user = { name, mobile, email, loginTime: new Date().getTime() };
              localStorage.setItem("currentUser", JSON.stringify(user));
              
              if (typeof Swal !== "undefined") {
                  Swal.fire({
                      icon: 'success',
                      title: 'Welcome!',
                      text: 'Logging you in securely...',
                      timer: 1500,
                      showConfirmButton: false
                  }).then(() => {
                      window.location.href = "dashboard.html";
                  });
              } else {
                  window.location.href = "dashboard.html"; 
              }
          } else {
              if(typeof Swal !== 'undefined') Swal.fire({icon: 'error', title: 'Login Failed', text: data.error || "Please try again."});
              else alert(data.error || "Login Failed");
          }
      } catch (err) {
          if(typeof Swal !== 'undefined') Swal.fire({icon: 'error', title: 'Network Error', text: "Make sure the backend server is running."});
          else alert("Network error. Make sure the backend is running.");
          console.error(err);
      }
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
