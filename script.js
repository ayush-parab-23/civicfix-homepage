// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("getOtpBtn").addEventListener("click", function () {
      const mobile = document.getElementById("mobile").value;
      if (mobile.length === 10) {
        alert("OTP sent to " + mobile);
      } else {
        alert("Please enter a valid 10-digit mobile number.");
      }
    });
  
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Form submitted!");
      const modal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
      modal.hide();
    });
  });
// Language translations
const translations = {
  EN: {
    navFeatures: "Features",
    navAbout: "About",
    navContact: "Contact",
    heroTitle: "Empower Your City",
    heroDesc: "Report civic issues in real-time and track resolutions.",
    getStarted: "Get Started",
    features: "Key Features",
    feature1Title: "Photo Reports",
    feature1Desc: "Capture and send photos of issues instantly from your phone.",
    feature2Title: "Auto Location Tagging",
    feature2Desc: "Automatically tag your current location for accurate reporting.",
    feature3Title: "Fast Routing",
    feature3Desc: "System routes issues to the right department instantly.",
    aboutTitle: "About Our Mission",
    aboutDesc: "CivicFix connects citizens to municipal services with transparency, speed, and trust."
  },
  HN: {
    navFeatures: "विशेषताएं",
    navAbout: "हमारे बारे में",
    navContact: "संपर्क करें",
    heroTitle: "अपने शहर को सशक्त बनाएं",
    heroDesc: "नागरिक समस्याओं की रिपोर्ट रीयल-टाइम में करें और समाधान को ट्रैक करें।",
    getStarted: "शुरू करें",
    features: "मुख्य विशेषताएं",
    feature1Title: "फोटो रिपोर्ट",
    feature1Desc: "अपने फ़ोन से तुरंत समस्याओं की तस्वीरें भेजें।",
    feature2Title: "ऑटो लोकेशन टैगिंग",
    feature2Desc: "सटीक रिपोर्टिंग के लिए अपनी वर्तमान लोकेशन टैग करें।",
    feature3Title: "तेज़ रूटिंग",
    feature3Desc: "प्रणाली तुरंत सही विभाग को समस्या भेजती है।",
    aboutTitle: "हमारा मिशन",
    aboutDesc: "CivicFix नागरिकों को पारदर्शिता, गति और विश्वास के साथ नगरपालिका सेवाओं से जोड़ता है।"
  },
  MR: {
    navFeatures: "वैशिष्ट्ये",
    navAbout: "आमच्याबद्दल",
    navContact: "संपर्क",
    heroTitle: "आपले शहर सक्षम करा",
    heroDesc: "नागरिकांच्या समस्या रिअल-टाइममध्ये नोंदवा आणि उपाय तपासा.",
    getStarted: "सुरु करा",
    features: "मुख्य वैशिष्ट्ये",
    feature1Title: "फोटो अहवाल",
    feature1Desc: "तुमच्या फोनवरून त्वरित समस्या फोटोंसह पाठवा.",
    feature2Title: "ऑटो लोकेशन टॅगिंग",
    feature2Desc: "अचूक अहवालासाठी आपले स्थान आपोआप टॅग करा.",
    feature3Title: "फास्ट रूटिंग",
    feature3Desc: "प्रणाली लगेच योग्य विभागाकडे समस्या पाठवते.",
    aboutTitle: "आमचे ध्येय",
    aboutDesc: "CivicFix नागरिकांना पारदर्शकता, वेग आणि विश्वासाने नगरपालिकेच्या सेवांशी जोडते."
  }
};

// Change language function
function changeLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.getElementById("langDropdown").textContent = lang;
}

// Event listeners
document.querySelectorAll(".dropdown-item[data-lang]").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const langCode = e.target.getAttribute("data-lang");
    changeLanguage(langCode);
  });
});
