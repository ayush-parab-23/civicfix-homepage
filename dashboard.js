// dashboard.js (corrected)
// Uses translations[window.currentLang] (from lang.js)

// ---------------- Account Menu ----------------
function toggleAccountMenu() {
  const menu = document.getElementById("accountMenu");
  if (!menu) return;
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
function openSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = "flex";
  // If opening reportStatus, refresh status table (ensures translations used)
  if (id === "reportStatus" && typeof loadReportStatus === "function") {
    loadReportStatus();
  }
}
function closeSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = "none";
}

// close account menu when clicking outside
document.addEventListener("click", (e) => {
  const menu = document.getElementById("accountMenu");
  const btn = document.querySelector(".account-btn");
  if (!menu || !btn) return;
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.style.display = "none";
  }
});

// ---------------- Report Form & Popup ----------------
function openForm() {
  const f = document.getElementById("reportForm");
  if (!f) return;
  f.style.display = "flex";
}
document.getElementById("closeBtn")?.addEventListener("click", () => {
  const f = document.getElementById("reportForm");
  if (f) f.style.display = "none";
});

document.getElementById("issueForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  // show loading -> then success (both translated)
  showPopup("loading");
  setTimeout(() => {
    showPopup("success");
  }, 1400);
});

function showPopup(type) {
  const popup = document.getElementById("successPopup");
  if (!popup) return;
  const content = document.getElementById("popupContent");
  if (!content) return;
  popup.style.display = "flex";

  const t = translations && translations[window.currentLang] ? translations[window.currentLang] : null;

  if (type === "loading") {
    content.innerHTML = `<p>${t ? t.loading : "Loading..."}</p>`;
  } else {
    content.innerHTML = `<p>${t ? t.submissionSuccess : "Report submitted successfully!"}</p>`;
    setTimeout(() => {
      popup.style.display = "none";
      // hide form and reset it
      const f = document.getElementById("reportForm");
      if (f) f.style.display = "none";
      const formEl = document.getElementById("issueForm");
      if (formEl) formEl.reset();
      // refresh status list if shown
      if (document.getElementById("statusList") && typeof loadReportStatus === "function") {
        loadReportStatus();
      }
    }, 1200);
  }
}

// ---------------- Manage Account ----------------
document.getElementById("accountForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(translations[window.currentLang]?.saveChanges ? "✅ " + translations[window.currentLang].saveChanges : "✅ Saved");
  closeSection("manageAccount");
});

// ---------------- Report Status (progress + translations) ----------------
// Mapping english status string → percent & css-class & translation key
const statusSteps = {
  "Submitted": 25,
  "Reached Authorities": 50,
  "Action Started": 75,
  "Fixed": 100
};
const statusClass = {
  "Submitted": "submitted",
  "Reached Authorities": "reached",
  "Action Started": "action",
  "Fixed": "fixed"
};
const statusKeyMap = {
  "Submitted": "statusSubmitted",
  "Reached Authorities": "statusReached",
  "Action Started": "statusAction",
  "Fixed": "statusFixed"
};

// Dummy reports (server/backend can replace)
const dummyReports = [
  { title: "Pothole near MG Road", status: "Submitted" },
  { title: "Streetlight not working", status: "Reached Authorities" },
  { title: "Garbage issue", status: "Action Started" },
  { title: "Water leakage", status: "Fixed" }
];

function loadReportStatus() {
  const list = document.getElementById("statusList");
  if (!list) return;
  list.innerHTML = "";

  dummyReports.forEach((r) => {
    const percent = statusSteps[r.status] || 0;
    const cls = statusClass[r.status] || "";
    const key = statusKeyMap[r.status] || null;
    const translatedLabel = key && translations[window.currentLang] && translations[window.currentLang][key]
      ? translations[window.currentLang][key]
      : r.status;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="vertical-align: middle;">${r.title}</td>
      <td>
        <div class="progress-container" aria-hidden="true">
          <div class="progress-fill ${cls}" style="width:${percent}%"></div>
        </div>
        <div class="status-label">${translatedLabel}</div>
      </td>
    `;
    list.appendChild(tr);
  });
}

// attach loading call to the account item (works if that element exists)
document.querySelector("[onclick*='reportStatus']")?.addEventListener("click", loadReportStatus);

// ---------------- Feedback ----------------
function submitFeedback() {
  const feedback = document.getElementById("feedbackText")?.value || "";
  if (feedback.trim() === "") {
    alert(translations[window.currentLang]?.submitFeedback ? translations[window.currentLang].submitFeedback : "Please write feedback!");
    return;
  }
  alert("✅ " + (translations[window.currentLang]?.submitFeedback || "Feedback submitted!"));
  document.getElementById("feedbackText").value = "";
  closeSection("feedback");
}

// ---------------- Saved Locations ----------------
function saveLocation() {
  const input = document.getElementById("locationInput");
  const list = document.getElementById("locationList");
  if (!input || !list) return;
  if (input.value.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);
  input.value = "";
}
