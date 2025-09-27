// dashboard.js - improved dashboard behavior, translatable popup & modals

// helper translation
function t(key) {
  if (window.currentLang && typeof translations !== "undefined" && translations[window.currentLang]) {
    return translations[window.currentLang][key] || key;
  }
  return key;
}

document.addEventListener("DOMContentLoaded", () => {
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
      if (key === "reportStatus") openStatusModal();
      if (key === "feedback") openFeedbackModal();
      if (key === "savedLocations") openSavedLocationsModal();
      if (key === "logout") window.location.href = "index.html";
      accountDropdown.classList.remove("open");
      if (accountMenu) accountMenu.style.display = "none";
    });
  });

  // Issue form submit
  const issueForm = document.getElementById("issueForm");
  if (issueForm) {
    issueForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showPopup("loading");
      setTimeout(() => {
        showPopup("success");
        setTimeout(() => {
          hidePopup();
          closeForm();
          issueForm.reset();
          updateRandomStats();
        }, 1200);
      }, 900);
    });
  }

  // initialize stats on load
  updateRandomStats();
});

// ====== Randomized Statistics ======
function updateRandomStats() {
  const reported = document.querySelector(".reported");
  const progressing = document.querySelector(".progressing");
  const resolved = document.querySelector(".resolved");
  if (!reported || !progressing || !resolved) return;

  const r1 = Math.floor(Math.random() * 50) + 30;
  const r2 = Math.floor(Math.random() * (100 - r1));
  const r3 = 100 - (r1 + r2);

  reported.style.width = r1 + "%"; reported.textContent = r1 + "%";
  progressing.style.width = r2 + "%"; progressing.textContent = r2 + "%";
  resolved.style.width = r3 + "%"; resolved.textContent = r3 + "%";
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
  createModal("accountModal", "manageAccount", `
    <label>${t("loginName")}</label>
    <input type="text" id="acc_name" placeholder="${t("loginName")}">
    <label>${t("loginMobile")}</label>
    <input type="tel" id="acc_mobile" placeholder="${t("loginMobile")}">
    <label>${t("loginEmail")}</label>
    <input type="email" id="acc_email" placeholder="${t("loginEmail")}">
    <button onclick="saveAccountDetails()">${t("save")}</button>
  `);
}
function saveAccountDetails() {
  const name = document.getElementById("acc_name")?.value || "";
  const mobile = document.getElementById("acc_mobile")?.value || "";
  const email = document.getElementById("acc_email")?.value || "";
  localStorage.setItem("acct_name", name);
  localStorage.setItem("acct_mobile", mobile);
  localStorage.setItem("acct_email", email);
  alert(t("saveChanges"));
  const modal = document.getElementById("accountModal");
  if (modal) modal.style.display = "none";
}

// ====== Report Status ======
function openStatusModal() {
  const reports = [
    { title: "Pothole near MG Road", statusKey: "statusSubmitted", percent: 25, cls: "submitted" },
    { title: "Streetlight not working", statusKey: "statusAction", percent: 75, cls: "action" },
    { title: "Garbage not collected", statusKey: "statusReached", percent: 50, cls: "reached" },
    { title: "Water leakage", statusKey: "statusFixed", percent: 100, cls: "fixed" }
  ];
  let rows = `<table class="status-table"><tr><th>Issue</th><th>Status</th></tr>`;
  reports.forEach(r => {
    rows += `<tr>
      <td>${r.title}</td>
      <td>
        <div class="progress-container">
          <div class="progress-fill ${r.cls}" style="width:${r.percent}%"></div>
        </div>
        <div class="status-label" data-translate="${r.statusKey}">${t(r.statusKey)}</div>
      </td>
    </tr>`;
  });
  rows += `</table>`;
  createModal("statusModal", "reportStatus", rows);
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
    alert(t("submitFeedback"));
    return;
  }
  alert(t("submitFeedback"));
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
