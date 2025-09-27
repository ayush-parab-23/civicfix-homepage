// lang.js (corrected)
// Keeps translations for EN, HN, MR and exposes loadLanguage(), changeLanguage(), setLanguage()

// Translations object (complete keys used in your HTML + dashboard)
const translations = {
  EN: {
    // Navbar & General
    navFeatures: "Features",
    navAbout: "About",
    navContact: "Contact",
    heroTitle: "Empower Your City",
    heroDesc: "Report civic issues in real-time and track resolutions.",
    getStarted: "Get Started",

    // Login / state
    loginTitle: "Login to Continue",
    loginName: "Full Name*",
    loginMobile: "Mobile Number*",
    loginEmail: "Email (optional)",
    loginOtp: "OTP",
    loginGetOtp: "Get OTP",
    loginSubmit: "Submit",
    loginState: "Select State*",
    statePlaceholder: "Choose your state",

    // Report Form
    reportIssueTitle: "Report an Issue",
    issueTitle: "Issue Title",
    issueDesc: "Describe the problem...",
    issueLocation: "Enter location or allow GPS",
    issueSubmit: "📸 Submit Report",

    // Dashboard Buttons
    btnPotholes: "Potholes",
    btnPotholesDesc: "Report road damages",
    btnGarbage: "Garbage",
    btnGarbageDesc: "Waste disposal issues",
    btnStreetlights: "Streetlights",
    btnStreetlightsDesc: "Faulty streetlights",
    btnWater: "Water Leakage",
    btnWaterDesc: "Pipeline issues",
    btnToilets: "Public Toilets",
    btnToiletsDesc: "Cleanliness issues",
    btnOther: "Other Complaints",
    btnOtherDesc: "Any other civic issue",
    btnPark: "Park Maintenance",
    btnParkDesc: "Broken benches, greenery care",
    btnSeasonal: "Seasonal Issues",
    btnSeasonalDesc: "Monsoon flooding, heat waves",
    btnTransport: "Public Transport",
    btnTransportDesc: "Buses, stops & infrastructure",

    // Statistics
    statsTitle: "📊 Civic Issue Statistics",
    reportedIssues: "Reported Issues",
    inProgress: "In Progress",
    resolved: "Resolved",

    // My Account Section
    manageAccount: "Manage My Account",
    reportStatus: "Report Status",
    feedback: "My Feedback",
    submitFeedback: "Submit Feedback",
    savedLocations: "Saved Locations",
    saveChanges: "Save Changes",
    save: "Save",
    logout: "Logout 🚪",
    status: "Status",

    // Popup
    loading: "⏳ Loading...",
    submissionSuccess: "✅ Report submitted successfully!",

    // Status labels (for the report status log)
    statusSubmitted: "Submitted",
    statusReached: "Reached Authorities",
    statusAction: "Action Started",
    statusFixed: "Fixed",

    // States (accState & login select)
    stateAP: "Andhra Pradesh",
    stateAS: "Assam",
    stateBR: "Bihar",
    stateDL: "Delhi",
    stateGJ: "Gujarat",
    stateHR: "Haryana",
    stateKA: "Karnataka",
    stateMH: "Maharashtra",
    statePB: "Punjab",
    stateRJ: "Rajasthan",
    stateTN: "Tamil Nadu",
    stateUP: "Uttar Pradesh",
    stateWB: "West Bengal"
  },

  HN: {
    navFeatures: "विशेषताएँ",
    navAbout: "हमारे बारे में",
    navContact: "संपर्क करें",
    heroTitle: "अपने शहर को सशक्त बनाएं",
    heroDesc: "नागरिक समस्याएँ तुरंत रिपोर्ट करें और समाधान ट्रैक करें।",
    getStarted: "शुरू करें",

    loginTitle: "जारी रखने के लिए लॉगिन करें",
    loginName: "पूरा नाम*",
    loginMobile: "मोबाइल नंबर*",
    loginEmail: "ईमेल (वैकल्पिक)",
    loginOtp: "ओटीपी",
    loginGetOtp: "ओटीपी प्राप्त करें",
    loginSubmit: "सबमिट",
    loginState: "राज्य चुनें*",
    statePlaceholder: "अपना राज्य चुनें",

    reportIssueTitle: "समस्या रिपोर्ट करें",
    issueTitle: "समस्या का शीर्षक",
    issueDesc: "समस्या का वर्णन करें...",
    issueLocation: "स्थान दर्ज करें या जीपीएस अनुमति दें",
    issueSubmit: "📸 रिपोर्ट सबमिट करें",

    btnPotholes: "गड्ढे",
    btnPotholesDesc: "सड़क क्षति की रिपोर्ट करें",
    btnGarbage: "कचरा",
    btnGarbageDesc: "कचरा निस्तारण की समस्याएँ",
    btnStreetlights: "स्ट्रीटलाइट",
    btnStreetlightsDesc: "खराब स्ट्रीटलाइट",
    btnWater: "पानी रिसाव",
    btnWaterDesc: "पाइपलाइन समस्याएँ",
    btnToilets: "सार्वजनिक शौचालय",
    btnToiletsDesc: "स्वच्छता समस्याएँ",
    btnOther: "अन्य शिकायतें",
    btnOtherDesc: "कोई अन्य नागरिक समस्या",
    btnPark: "पार्क रखरखाव",
    btnParkDesc: "टूटी बेंच, हरियाली देखभाल",
    btnSeasonal: "मौसमी समस्याएँ",
    btnSeasonalDesc: "बरसाती बाढ़, लू की लहरें",
    btnTransport: "सार्वजनिक परिवहन",
    btnTransportDesc: "बसें, स्टॉप और ढांचा",

    statsTitle: "📊 नागरिक समस्या आँकड़े",
    reportedIssues: "रिपोर्ट की गई समस्याएँ",
    inProgress: "प्रगति पर",
    resolved: "सुलझाई गई",

    manageAccount: "मेरा खाता प्रबंधित करें",
    reportStatus: "रिपोर्ट स्थिति",
    feedback: "मेरा फीडबैक",
    submitFeedback: "फीडबैक सबमिट करें",
    savedLocations: "सहेजे गए स्थान",
    saveChanges: "परिवर्तन सहेजें",
    save: "सहेजें",
    logout: "लॉगआउट 🚪",
    status: "स्थिति",

    loading: "⏳ लोड हो रहा है...",
    submissionSuccess: "✅ रिपोर्ट सफलतापूर्वक सबमिट हुई!",

    statusSubmitted: "सबमिट किया गया",
    statusReached: "अधिकारियों तक पहुँचा",
    statusAction: "कार्रवाई शुरू",
    statusFixed: "समाधान किया गया",

    stateAP: "आंध्र प्रदेश",
    stateAS: "असम",
    stateBR: "बिहार",
    stateDL: "दिल्ली",
    stateGJ: "गुजरात",
    stateHR: "हरियाणा",
    stateKA: "कर्नाटक",
    stateMH: "महाराष्ट्र",
    statePB: "पंजाब",
    stateRJ: "राजस्थान",
    stateTN: "तमिलनाडु",
    stateUP: "उत्तर प्रदेश",
    stateWB: "पश्चिम बंगाल"
  },

  MR: {
    navFeatures: "वैशिष्ट्ये",
    navAbout: "आमच्याबद्दल",
    navContact: "संपर्क करा",
    heroTitle: "तुमच्या शहराला सामर्थ्य द्या",
    heroDesc: "नागरी समस्या त्वरित नोंदवा आणि त्यांची प्रगती ट्रॅक करा.",
    getStarted: "सुरू करा",

    loginTitle: "सुरू ठेवण्यासाठी लॉगिन करा",
    loginName: "पूर्ण नाव*",
    loginMobile: "मोबाईल नंबर*",
    loginEmail: "ईमेल (ऐच्छिक)",
    loginOtp: "ओटीपी",
    loginGetOtp: "ओटीपी मिळवा",
    loginSubmit: "सबमिट करा",
    loginState: "राज्य निवडा*",
    statePlaceholder: "आपले राज्य निवडा",

    reportIssueTitle: "समस्या नोंदवा",
    issueTitle: "समस्येचे शीर्षक",
    issueDesc: "समस्येचे वर्णन करा...",
    issueLocation: "स्थान प्रविष्ट करा किंवा जीपीएसला परवानगी द्या",
    issueSubmit: "📸 अहवाल सबमिट करा",

    btnPotholes: "खड्डे",
    btnPotholesDesc: "रस्त्याच्या हानीची नोंद करा",
    btnGarbage: "कचरा",
    btnGarbageDesc: "कचरा व्यवस्थापन समस्या",
    btnStreetlights: "रस्त्यावरील दिवे",
    btnStreetlightsDesc: "बिघडलेले दिवे",
    btnWater: "पाण्याची गळती",
    btnWaterDesc: "पाईपलाइन समस्या",
    btnToilets: "सार्वजनिक शौचालये",
    btnToiletsDesc: "स्वच्छतेच्या समस्या",
    btnOther: "इतर तक्रारी",
    btnOtherDesc: "इतर कोणतीही नागरी समस्या",
    btnPark: "उद्यान देखभाल",
    btnParkDesc: "तुटलेले बेंच, हिरवळ देखभाल",
    btnSeasonal: "हंगामी समस्या",
    btnSeasonalDesc: "मान्सून पूर, उष्णतेच्या लाटा",
    btnTransport: "सार्वजनिक वाहतूक",
    btnTransportDesc: "बस, थांबे आणि पायाभूत सुविधा",

    statsTitle: "📊 नागरी समस्या आकडेवारी",
    reportedIssues: "नोंदवलेल्या समस्या",
    inProgress: "प्रगतीत",
    resolved: "निकाली काढले",

    manageAccount: "माझे खाते व्यवस्थापित करा",
    reportStatus: "रिपोर्ट स्थिती",
    feedback: "माझा अभिप्राय",
    submitFeedback: "अभिप्राय सबमिट करा",
    savedLocations: "जतन केलेली ठिकाणे",
    saveChanges: "बदल जतन करा",
    save: "जतन करा",
    logout: "लॉगआउट 🚪",
    status: "स्थिती",

    loading: "⏳ लोड होत आहे...",
    submissionSuccess: "✅ रिपोर्ट यशस्वीरीत्या सबमिट झाला!",

    statusSubmitted: "सबमिट झाले",
    statusReached: "अधिकाऱ्यांकडे पोहोचले",
    statusAction: "कारवाई सुरू",
    statusFixed: "सुधारले",

    stateAP: "आंध्र प्रदेश",
    stateAS: "आसाम",
    stateBR: "बिहार",
    stateDL: "दिल्ली",
    stateGJ: "गुजरात",
    stateHR: "हरियाणा",
    stateKA: "कर्नाटक",
    stateMH: "महाराष्ट्र",
    statePB: "पंजाब",
    stateRJ: "राजस्थान",
    stateTN: "तामिळनाडू",
    stateUP: "उत्तर प्रदेश",
    stateWB: "पश्चिम बंगाल"
  }
};

// Expose current language (persist)
window.currentLang = localStorage.getItem("lang") || "EN";

// loadLanguage() - called from other scripts (keeps backward compatibility)
function loadLanguage() {
  const stored = localStorage.getItem("lang");
  if (stored && translations[stored]) window.currentLang = stored;
  applyTranslations();
}

// changeLanguage() - backward compat alias
function changeLanguage(lang) {
  setLanguage(lang);
}

// setLanguage(lang) - set and persist then apply
function setLanguage(lang) {
  if (!translations[lang]) return;
  window.currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
}

// applyTranslations - updates textContent/placeholders/values across the page
function applyTranslations() {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    const translation = translations[window.currentLang] && translations[window.currentLang][key];
    if (!translation) return;

    const tag = el.tagName;
    if (tag === "INPUT") {
      // if input is a button/submit - set value, otherwise placeholder
      const t = el.type && el.type.toLowerCase();
      if (t === "button" || t === "submit" || t === "reset" || t === "image") {
        el.value = translation;
      } else {
        el.placeholder = translation;
      }
    } else if (tag === "TEXTAREA") {
      el.placeholder = translation;
    } else {
      // use innerHTML so emoji/icons in translations are preserved
      el.innerHTML = translation;
    }
  });

  // Update 'Choose your state' placeholder option (first disabled option)
  const statePlaceholder = translations[window.currentLang] && translations[window.currentLang].statePlaceholder;
  const stateDisabledOpt = document.querySelector("#state option[disabled], #accState option[disabled]");
  if (stateDisabledOpt && statePlaceholder) {
    stateDisabledOpt.textContent = statePlaceholder;
  }

  // Update individual options that have data-translate (accState & state)
  document.querySelectorAll("#state option[data-translate], #accState option[data-translate]").forEach(option => {
    const key = option.getAttribute("data-translate");
    if (key && translations[window.currentLang] && translations[window.currentLang][key]) {
      option.textContent = translations[window.currentLang][key];
    }
  });

  // Update language button label (if present)
  const langBtn = document.getElementById("langDropdown");
  if (langBtn) langBtn.textContent = window.currentLang;

  // If status modal is open/visible, refresh report status labels (non-intrusive)
  try {
    if (document.getElementById("statusList") && typeof window.loadReportStatus === "function") {
      // don't force open; reload content so labels use new lang
      window.loadReportStatus();
    }
  } catch (err) {
    /* ignore */
  }
}

// Attach click listeners for elements with data-lang (index.html dropdown)
document.addEventListener("DOMContentLoaded", () => {
  // Attach page-level data-lang handlers (so both index and dashboard can use the same)
  document.querySelectorAll("[data-lang]").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const code = item.getAttribute("data-lang");
      changeLanguage(code);
    });
  });

  // finally apply translations once on load
  loadLanguage();
});

// expose functions globally for backward compatibility
window.setLanguage = setLanguage;
window.changeLanguage = changeLanguage;
window.loadLanguage = loadLanguage;
