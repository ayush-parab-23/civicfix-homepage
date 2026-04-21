// dashboard.js - professional dashboard behavior, integrated with Flask API
// Includes SweetAlert2 and FormData uploads

// helper translation
function t(key) {
  if (window.currentLang && typeof translations !== "undefined" && translations[window.currentLang]) {
    return translations[window.currentLang][key] || key;
  }
  return key;
}

document.addEventListener("DOMContentLoaded", () => {
  // 🔐 Route Guard: Send user to index if not logged in
  if (!localStorage.getItem("currentUser")) {
      window.location.href = "index.html";
      return;
  }
  if (typeof applyTranslations === "function") applyTranslations();

  // Account menu toggle
  const accountBtn = document.querySelector(".account-btn");
  const accountDropdown = document.querySelector(".account-dropdown");
  const accountMenu = document.querySelector(".account-menu");

  if (accountBtn && accountDropdown) {
    accountBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      accountDropdown.classList.toggle("open");
      accountMenu.style.display = accountDropdown.classList.contains("open") ? "block" : "none";
    });
  }

  // close account menu on outside click
  document.addEventListener("click", (e) => {
    if (accountDropdown && !accountDropdown.contains(e.target)) {
      accountDropdown.classList.remove("open");
      if (accountMenu) accountMenu.style.display = "none";
    }
  });

  // Account menu actions
  document.querySelectorAll(".account-menu a").forEach(a => {
    a.addEventListener("click", (ev) => {
      ev.preventDefault();
      const key = a.getAttribute("data-translate");
      if (key === "manageAccount") openAccountModal();
      if (key === "feedback") openFeedbackModal();
      if (key === "savedLocations") openSavedLocationsModal();
      if (key === "logout") {
          localStorage.removeItem("currentUser");
          window.location.href = "index.html";
      }
      accountDropdown.classList.remove("open");
      if (accountMenu) accountMenu.style.display = "none";
    });
  });

  // Issue form submit
  const issueForm = document.getElementById("issueForm");
  if (issueForm) {
    issueForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      showPopup("loading");
      
      const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
      const title = document.getElementById("issueTitle").value;
      const desc = document.getElementById("issueDesc").value;
      const loc = document.getElementById("issueLocation").value;

      try {
          const formData = new FormData();
          formData.append("mobile", user.mobile);
          formData.append("title", title);
          formData.append("description", desc);
          formData.append("location", loc);
          formData.append("status", "Reported");
          
          const photoInput = document.getElementById("issuePhoto");
          if (photoInput && photoInput.files[0]) {
              formData.append("photo", photoInput.files[0]);
          }

          const res = await fetch('/api/report', {
              method: 'POST',
              body: formData
          });
          
          const data = await res.json();
          if (data.success) {
              hidePopup();
              Swal.fire({
                  icon: 'success',
                  title: 'Issue Reported!',
                  text: 'Thank you for making the city better.',
                  timer: 2000,
                  showConfirmButton: false
              });
              closeForm();
              issueForm.reset();
              if (document.getElementById("photoPreview")) {
                  document.getElementById("photoPreview").style.display = "none";
              }
              updateRandomStats();
          } else {
              hidePopup();
              Swal.fire({icon: 'error', title: 'Upload Failed', text: data.error || "Failed to submit reported issue."});
          }
      } catch (err) {
          hidePopup();
          Swal.fire({icon: 'error', title: 'Network Error', text: 'Could not connect to API.'});
      }
    });
  }

  // Live Photo Preview
  const issuePhoto = document.getElementById("issuePhoto");
  const photoPreview = document.getElementById("photoPreview");
  if (issuePhoto && photoPreview) {
      issuePhoto.addEventListener("change", function () {
          const file = this.files[0];
          if (file) {
              const reader = new FileReader();
              reader.onload = function(e) {
                  photoPreview.src = e.target.result;
                  photoPreview.style.display = "block";
              }
              reader.readAsDataURL(file);
          } else {
              photoPreview.style.display = "none";
              photoPreview.src = "";
          }
      });
  }

  // initialize stats on load
  updateRandomStats();
});

// ====== Randomized Statistics ======
async function updateRandomStats() {
  const reported = document.querySelector(".reported");
  const progressing = document.querySelector(".progressing");
  const resolved = document.querySelector(".resolved");
  if (!reported || !progressing || !resolved) return;

  try {
      const res = await fetch('/api/stats');
      const data = await res.json();
      if (!data.success) return;
      
      const stats = data.data.stats;
      const total = data.data.total || 1;
      
      const r1 = Math.round(((stats["Reported"] || 0) / total) * 100);
      const r2 = Math.round(((stats["In Progress"] || 0) / total) * 100);
      const r3 = Math.round(((stats["Resolved"] || 0) / total) * 100);

      reported.style.width = Math.max(r1, 5) + "%"; reported.textContent = r1 + "%";
      progressing.style.width = Math.max(r2, 5) + "%"; progressing.textContent = r2 + "%";
      resolved.style.width = Math.max(r3, 5) + "%"; resolved.textContent = r3 + "%";
  } catch (err) {
      console.error("Failed to update stats", err);
  }
}

// ====== Report Form ======
function openForm() {
  const f = document.getElementById("reportForm");
  if (!f) return;
  if (typeof applyTranslations === "function") applyTranslations();
  f.style.display = "flex";
  f.setAttribute("aria-hidden", "false");
  const ta = document.getElementById("issueDesc");
  if (ta) ta.value = "";
}
function closeForm() {
  const f = document.getElementById("reportForm");
  if (!f) return;
  f.style.display = "none";
  f.setAttribute("aria-hidden", "true");
}

// ====== Popups ======
function showPopup(type) {
  const popup = document.getElementById("successPopup");
  const content = document.getElementById("popupContent");
  if (!popup || !content) return;

  if (type === "loading") {
    content.innerHTML = `<div>${t("loading")}</div>`;
  } else {
    content.innerHTML = `<div style="font-size:1.15rem;">✅ ${t("submissionSuccess")}</div>`;
  }
  popup.style.display = "flex";
}
function hidePopup() {
  const popup = document.getElementById("successPopup");
  if (!popup) return;
  popup.style.display = "none";
}

// ====== Modal Creator ======
function createModal(id, titleKey, innerHTML) {
  let modal = document.getElementById(id);
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "overlay";
    modal.id = id;
    modal.innerHTML = `
      <div class="form-box large">
        <button class="close" onclick="document.getElementById('${id}').style.display='none'">✖</button>
        <h2 data-translate="${titleKey}"></h2>
        <div class="modal-body">${innerHTML}</div>
      </div>
    `;
    document.body.appendChild(modal);
    if (typeof applyTranslations === "function") applyTranslations();
  }
  modal.style.display = "flex";
}

// ====== Account Features ======
function openAccountModal() {
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  createModal("accountModal", "manageAccount", `
    <label>${t("loginName")}</label>
    <input type="text" id="acc_name" placeholder="${t("loginName")}" value="${user.name || ''}">
    <label>${t("loginMobile")}</label>
    <input type="tel" id="acc_mobile" placeholder="${t("loginMobile")}" value="${user.mobile || ''}">
    <label>${t("loginEmail")}</label>
    <input type="email" id="acc_email" placeholder="${t("loginEmail")}" value="${user.email || ''}">
    <button onclick="saveAccountDetails()">${t("save")}</button>
  `);
}
function saveAccountDetails() {
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  user.name = document.getElementById("acc_name")?.value || "";
  user.mobile = document.getElementById("acc_mobile")?.value || "";
  user.email = document.getElementById("acc_email")?.value || "";
  
  localStorage.setItem("currentUser", JSON.stringify(user));
  Swal.fire({ icon: 'success', title: 'Saved!', timer: 1200, showConfirmButton: false });
  const modal = document.getElementById("accountModal");
  if (modal) modal.style.display = "none";
}

// ====== Report Status ======
async function openStatusModal() {
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  if (!user.mobile) return Swal.fire("Error", "Please log in again.", "error");
  
  try {
      const res = await fetch(`/api/issues?mobile=${user.mobile}`);
      const data = await res.json();
      
      let rows = `<table class="status-table"><tr><th>Issue</th><th>Status</th></tr>`;
      const issues = data.data || [];
      
      if (issues.length === 0) {
          rows += `<tr><td colspan="2" style="text-align:center;">No issues reported yet.</td></tr>`;
      } else {
          issues.forEach(iss => {
            let statusKey = "statusSubmitted", percent = 25, cls = "submitted";
            if (iss.status === "In Progress") { statusKey = "statusAction"; percent = 75; cls = "action"; }
            if (iss.status === "Resolved") { statusKey = "statusFixed"; percent = 100; cls = "fixed"; }
            
            rows += `<tr>
              <td>
                ${iss.image_url ? `<img src="${iss.image_url}" style="width:50px; height:50px; object-fit:cover; border-radius:5px; margin-bottom:5px; vertical-align:middle; margin-right:8px;">` : ''}
                ${iss.title}
              </td>
              <td>
                <div class="progress-container">
                  <div class="progress-fill ${cls}" style="width:${percent}%"></div>
                </div>
                <div class="status-label" data-translate="${statusKey}">${t(statusKey)}</div>
              </td>
            </tr>`;
          });
      }
      rows += `</table>`;
      createModal("statusModal", "reportStatus", rows);
  } catch (err) {
      Swal.fire("Error", "Failed to load issues from the database.", "error");
  }
}

// ====== Feedback ======
function openFeedbackModal() {
  createModal("feedbackModal", "feedback", `
    <textarea id="feedbackText" placeholder="${t("submitFeedback")}"></textarea>
    <button onclick="submitFeedback()">${t("submitFeedback")}</button>
  `);
}
function submitFeedback() {
  const text = document.getElementById("feedbackText")?.value || "";
  if (!text.trim()) {
    Swal.fire("Wait!", "Please write some feedback before submitting.", "warning");
    return;
  }
  Swal.fire("Thank You!", "Feedback received safely.", "success");
  const modal = document.getElementById("feedbackModal");
  if (modal) modal.style.display = "none";
}

// ====== Saved Locations ======
function openSavedLocationsModal() {
  createModal("savedLocationsModal", "savedLocations", `
    <ul id="locationList">
      <li>Home</li>
      <li>Work</li>
      <li>Market</li>
    </ul>
    <input id="locationInput" placeholder="Add a location">
    <button onclick="saveLocation()">${t("save")}</button>
  `);
}
function saveLocation() {
  const input = document.getElementById("locationInput");
  const list = document.getElementById("locationList");
  if (!input || !list) return;
  const v = input.value.trim();
  if (!v) return;
  const li = document.createElement("li");
  li.textContent = v;
  list.appendChild(li);
  input.value = "";
}

// ====== Help & FAQs ======
function openFaqModal() {
  createModal("faqModal", "Help & FAQs", `
    <div style="text-align: left; padding: 10px;">
        <h4 style="color:#0D47A1; margin-bottom:8px;">Emergency Contacts</h4>
        <ul style="list-style:none; padding:0; margin-bottom: 20px;">
            <li><strong>Police:</strong> 100</li>
            <li><strong>Ambulance:</strong> 108</li>
            <li><strong>Fire Department:</strong> 101</li>
            <li><strong>Municipal Helpline:</strong> 155304</li>
        </ul>
        
        <h4 style="color:#0D47A1; margin-bottom:8px;">How to use CivicFix</h4>
        <ol style="padding-left:20px; line-height: 1.6;">
            <li>Click on the specific issue category tile on your dashboard.</li>
            <li>Enter a short title and detailed description of the problem.</li>
            <li>Upload a clear photo to help workers identify the issue (optional but recommended).</li>
            <li>Add the exact location or let GPS do it securely.</li>
            <li>Submit! You can track the progress using the 'My Reports' button above.</li>
        </ol>
    </div>
  `);
}
