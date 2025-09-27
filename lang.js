// lang.js - Central translation module (EN / HN / MR)
// Exposes setLanguage(lang), loadLanguage(), applyTranslations()

const translations = {
  EN: {
    navFeatures: "Features", navAbout: "About", navContact: "Contact",
    heroTitle: "Empower Your City", heroDesc: "Report civic issues in real-time and track resolutions.", getStarted: "Get Started",
    loginTitle: "Login to Continue", loginName: "Full Name*", loginMobile: "Mobile Number*", loginEmail: "Email (optional)",
    loginOtp: "OTP", loginGetOtp: "Get OTP", loginSubmit: "Submit", loginState: "Select State*", statePlaceholder: "Choose your state",
    stateAP: "Andhra Pradesh", stateAS: "Assam", stateBR: "Bihar", stateDL: "Delhi", stateGJ: "Gujarat", stateHR: "Haryana",
    stateKA: "Karnataka", stateMH: "Maharashtra", statePB: "Punjab", stateRJ: "Rajasthan", stateTN: "Tamil Nadu",
    stateUP: "Uttar Pradesh", stateWB: "West Bengal",

    btnPotholes: "Potholes", btnPotholesDesc: "Report road damages",
    btnGarbage: "Garbage", btnGarbageDesc: "Waste disposal issues",
    btnStreetlights: "Streetlights", btnStreetlightsDesc: "Faulty streetlights",
    btnWater: "Water Leakage", btnWaterDesc: "Pipeline issues",
    btnToilets: "Public Toilets", btnToiletsDesc: "Cleanliness issues",
    btnOther: "Other Complaints", btnOtherDesc: "Any other civic issue",
    btnParks: "Park Maintenance", btnParksDesc: "Broken benches, greenery care",
    btnSeasonal: "Seasonal Issues", btnSeasonalDesc: "Monsoon flooding, heat waves",
    btnTransport: "Public Transport", btnTransportDesc: "Buses, stops & infrastructure",

    statsTitle: "📊 Civic Issue Statistics", reportedIssues: "Reported Issues", inProgress: "In Progress", resolved: "Resolved",

    reportTitle: "Report an Issue", reportIssueTitle: "Issue Title", reportDesc: "Describe the problem...", reportLocation: "Enter location or allow GPS", reportSubmit: "📸 Submit Report",

    loading: "Loading...", submissionSuccess: "Report submitted successfully!", success: "Report submitted successfully!",
    myAccount: "My Account", manageAccount: "Manage My Account", reportStatus: "Report Status", feedback: "My Feedback", submitFeedback: "Submit Feedback",
    savedLocations: "Saved Locations", saveChanges: "Save Changes", save: "Save", logout: "Logout 🚪",

    statusSubmitted: "Submitted", statusReached: "Reached Authorities", statusAction: "Action Started", statusFixed: "Fixed"
  },

  HN: {
    navFeatures: "विशेषताएँ", navAbout: "हमारे बारे में", navContact: "संपर्क करें",
    heroTitle: "अपने शहर को सशक्त बनाएं", heroDesc: "नागरिक समस्याओं की तुरंत रिपोर्ट करें और समाधान ट्रैक करें।", getStarted: "शुरू करें",
    loginTitle: "जारी रखने के लिए लॉगिन करें", loginName: "पूरा नाम*", loginMobile: "मोबाइल नंबर*", loginEmail: "ईमेल (वैकल्पिक)",
    loginOtp: "ओटीपी", loginGetOtp: "ओटीपी प्राप्त करें", loginSubmit: "सबमिट करें", loginState: "राज्य चुनें*", statePlaceholder: "अपना राज्य चुनें",
    stateAP: "आंध्र प्रदेश", stateAS: "असम", stateBR: "बिहार", stateDL: "दिल्ली", stateGJ: "गुजरात", stateHR: "हरियाणा",
    stateKA: "कर्नाटक", stateMH: "महाराष्ट्र", statePB: "पंजाब", stateRJ: "राजस्थान", stateTN: "तमिल नाडु",
    stateUP: "उत्तर प्रदेश", stateWB: "पश्चिम बंगाल",

    btnPotholes: "गड्ढे", btnPotholesDesc: "सड़क क्षति की रिपोर्ट करें",
    btnGarbage: "कचरा", btnGarbageDesc: "कचरा निपटान की समस्याएँ",
    btnStreetlights: "स्ट्रीटलाइट", btnStreetlightsDesc: "खराब स्ट्रीटलाइट्स",
    btnWater: "पानी रिसाव", btnWaterDesc: "पाइपलाइन की समस्याएँ",
    btnToilets: "सार्वजनिक शौचालय", btnToiletsDesc: "सफाई की समस्याएँ",
    btnOther: "अन्य शिकायतें", btnOtherDesc: "कोई अन्य नागरिक समस्या",
    btnParks: "पार्क रखरखाव", btnParksDesc: "टूटी बेंच, हरियाली देखभाल",
    btnSeasonal: "मौसमी समस्याएँ", btnSeasonalDesc: "मानसून बाढ़, हीट वेव्स",
    btnTransport: "सार्वजनिक परिवहन", btnTransportDesc: "बसें, स्टॉप और बुनियादी ढाँचा",

    statsTitle: "📊 नागरिक समस्या सांख्यिकी", reportedIssues: "रिपोर्ट की गई समस्याएँ", inProgress: "प्रगति पर", resolved: "सुलझाई गई",

    reportTitle: "समस्या दर्ज करें", reportIssueTitle: "समस्या का शीर्षक", reportDesc: "समस्या का वर्णन करें...", reportLocation: "स्थान दर्ज करें या जीपीएस चालू करें", reportSubmit: "📸 रिपोर्ट सबमिट करें",

    loading: "लोड हो रहा है...", submissionSuccess: "रिपोर्ट सफलतापूर्वक सबमिट की गई!", success: "रिपोर्ट सफलतापूर्वक सबमिट की गई!",
    myAccount: "मेरा खाता", manageAccount: "मेरा खाता प्रबंधित करें", reportStatus: "रिपोर्ट स्थिति", feedback: "मेरी प्रतिक्रिया", submitFeedback: "फीडबैक सबमिट करें",
    savedLocations: "सहेजे गए स्थान", saveChanges: "परिवर्तन सहेजें", save: "सहेजें", logout: "लॉगआउट 🚪",

    statusSubmitted: "सबमिट किया गया", statusReached: "अधिकारियों तक पहुँचा", statusAction: "कार्रवाई शुरू", statusFixed: "समाधान किया गया"
  },

  MR: {
    navFeatures: "वैशिष्ट्ये", navAbout: "आमच्याबद्दल", navContact: "संपर्क",
    heroTitle: "आपल्या शहराला सक्षम करा", heroDesc: "नागरी समस्या त्वरित नोंदवा आणि निराकरणे ट्रॅक करा.", getStarted: "सुरू करा",
    loginTitle: "सुरू ठेवण्यासाठी लॉगिन करा", loginName: "पूर्ण नाव*", loginMobile: "मोबाईल नंबर*", loginEmail: "ईमेल (ऐच्छिक)",
    loginOtp: "ओटीपी", loginGetOtp: "ओटीपी मिळवा", loginSubmit: "सबमिट करा", loginState: "राज्य निवडा*", statePlaceholder: "आपले राज्य निवडा",
    stateAP: "आंध्र प्रदेश", stateAS: "आसाम", stateBR: "बिहार", stateDL: "दिल्ली", stateGJ: "गुजरात", stateHR: "हरियाणा",
    stateKA: "कर्नाटक", stateMH: "महाराष्ट्र", statePB: "पंजाब", stateRJ: "राजस्थान", stateTN: "तामिळनाडु",
    stateUP: "उत्तर प्रदेश", stateWB: "पश्चिम बंगाल",

    btnPotholes: "खड्डे", btnPotholesDesc: "रस्त्याच्या नुकसानीची नोंद करा",
    btnGarbage: "कचरा", btnGarbageDesc: "कचरा व्यवस्थापन समस्या",
    btnStreetlights: "रस्त्यावरील दिवे", btnStreetlightsDesc: "बिघडलेले दिवे",
    btnWater: "पाण्याची गळती", btnWaterDesc: "पाईपलाइन समस्या",
    btnToilets: "सार्वजनिक शौचालये", btnToiletsDesc: "स्वच्छतेच्या समस्या",
    btnOther: "इतर तक्रारी", btnOtherDesc: "इतर कोणतीही नागरी समस्या",
    btnParks: "उद्यान देखभाल", btnParksDesc: "तुटलेले बेंच, हिरवळ देखभाल",
    btnSeasonal: "हंगामी समस्या", btnSeasonalDesc: "मान्सून पूर, उष्णतेची लाट",
    btnTransport: "सार्वजनिक वाहतूक", btnTransportDesc: "बस, थांबे आणि पायाभूत सुविधा",

    statsTitle: "📊 नागरी समस्या आकडेवारी", reportedIssues: "नोंदवलेल्या समस्या", inProgress: "प्रगतीत", resolved: "निकाली काढले",

    reportTitle: "समस्या नोंदवा", reportIssueTitle: "समस्येचे शीर्षक", reportDesc: "समस्येचे वर्णन करा...", reportLocation: "स्थान प्रविष्ट करा किंवा जीपीएसला परवानगी द्या", reportSubmit: "📸 अहवाल सबमिट करा",

    loading: "लोड होत आहे...", submissionSuccess: "रिपोर्ट यशस्वीपणे सबमिट झाले!", success: "रिपोर्ट यशस्वीपणे सबमिट झाले!",
    myAccount: "माझे खाते", manageAccount: "माझे खाते व्यवस्थापित करा", reportStatus: "रिपोर्ट स्थिती", feedback: "माझा अभिप्राय", submitFeedback: "अभिप्राय सबमिट करा",
    savedLocations: "सहेजेले स्थान", saveChanges: "बदल जतन करा", save: "जतन करा", logout: "लॉगआउट 🚪",

    statusSubmitted: "सबमिट केले", statusReached: "अधिकाऱ्यांकडे पोहोचले", statusAction: "कारवाई सुरू", statusFixed: "सुधारले"
  }
};

// expose current language and helpers
window.currentLang = localStorage.getItem("lang") || "EN";

function loadLanguage() {
  const stored = localStorage.getItem("lang");
  if (stored && translations[stored]) window.currentLang = stored;
  applyTranslations();
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  window.currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
}

// apply translations - updates textContent, innerHTML for elements with data-translate,
// placeholder for inputs and textarea, option text for select options (using data-translate).
function applyTranslations() {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    const txt = translations[window.currentLang] && translations[window.currentLang][key];
    if (!txt) return;

    // Inputs and textareas => placeholder
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      const type = el.getAttribute("type");
      if (type === "button" || type === "submit" || el.tagName === "BUTTON") {
        el.value = txt;
        el.innerText = txt;
      } else {
        el.placeholder = txt;
      }
    } else {
      // use innerHTML when translations include emoji/icons
      el.innerHTML = txt;
    }
  });

  // Translate <option data-translate> contents and disabled placeholders
  document.querySelectorAll("select option[data-translate]").forEach((opt) => {
    const key = opt.getAttribute("data-translate");
    const txt = translations[window.currentLang] && translations[window.currentLang][key];
    if (txt) opt.textContent = txt;
  });

  // translate disabled placeholder options in selects (if any)
  document.querySelectorAll("select option[disabled][data-translate]").forEach(opt => {
    const key = opt.getAttribute("data-translate");
    const txt = translations[window.currentLang] && translations[window.currentLang][key];
    if (txt) opt.textContent = txt;
  });

  // If popup visible, update it
  const popupContent = document.getElementById("popupContent");
  if (popupContent && popupContent.dataset.translateKey) {
    const key = popupContent.dataset.translateKey;
    const txt = translations[window.currentLang] && translations[window.currentLang][key];
    if (txt) popupContent.innerHTML = txt;
  }

  // Also refresh any dynamically created modals (status modal labels)
  document.querySelectorAll(".status-label[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    const txt = translations[window.currentLang] && translations[window.currentLang][key];
    if (txt) el.textContent = txt;
  });

  // Update any language code button text if present
  const langButton = document.getElementById("langDropdown");
  if (langButton) langButton.textContent = window.currentLang;
}

// wire language dropdown items automatically
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang]").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const code = item.getAttribute("data-lang");
      setLanguage(code);
    });
  });

  loadLanguage();
});

// backwards compatibility exports
window.setLanguage = setLanguage;
window.loadLanguage = loadLanguage;
window.applyTranslations = applyTranslations;
