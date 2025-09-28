// ------------------------------
// Expanded Mock Knowledge Base (15 crops + general queries)
// ------------------------------
const mockData = [
  {
    keywords: ["paddy", "rice"],
    answer: "🌾 Paddy Guide:\n- Best in Ranchi during monsoon.\n- Urea: 40kg/acre in 2 splits (20 & 40 DAS).\n- Needs standing water, irrigate regularly.\n- MOP: 15kg/acre at tillering stage."
  },
  {
    keywords: ["wheat"],
    answer: "🌾 Wheat Guide:\n- Suitable for winter (Rabi season).\n- Urea: 30kg/acre at first irrigation.\n- DAP: 50kg/acre basal dose at sowing.\n- Requires 3–4 irrigations."
  },
  {
    keywords: ["maize", "corn"],
    answer: "🌽 Maize Guide:\n- Grows well in loamy soil with good rainfall.\n- Urea: 30kg/acre at 20 DAS.\n- DAP: 50kg/acre basal dose.\n- Irrigate during tasseling stage."
  },
  {
    keywords: ["gram", "chickpea"],
    answer: "🌱 Gram Guide:\n- Ideal for dry areas.\n- Urea: 20kg/acre at sowing.\n- SSP: 40kg/acre basal dose.\n- Gypsum 100kg/acre before flowering."
  },
  {
    keywords: ["lentil"],
    answer: "🌱 Lentil Guide:\n- Requires cool climate.\n- Urea: 15–20kg/acre basal.\n- SSP: 40kg/acre at sowing.\n- Avoid excess irrigation."
  },
  {
    keywords: ["pigeon pea", "arhar", "toor"],
    answer: "🌱 Pigeon Pea Guide:\n- Good for kharif season.\n- Urea: 20kg/acre at sowing.\n- SSP: 60kg/acre basal.\n- Needs irrigation at flowering."
  },
  {
    keywords: ["mustard"],
    answer: "🌼 Mustard Guide:\n- Best for Rabi season.\n- Urea: 20kg/acre before first irrigation.\n- DAP: 40kg/acre basal.\n- Needs irrigation at flowering stage."
  },
  {
    keywords: ["soybean"],
    answer: "🌱 Soybean Guide:\n- Ideal for June–July sowing.\n- Urea: 15kg/acre basal dose.\n- SSP: 60kg/acre at sowing.\n- Gypsum: 100kg/acre at flowering."
  },
  {
    keywords: ["groundnut", "peanut"],
    answer: "🥜 Groundnut Guide:\n- Needs sandy loam soil.\n- Gypsum: 200kg/acre at pegging.\n- SSP: 50kg/acre basal.\n- Avoid waterlogging."
  },
  {
    keywords: ["sorghum", "jowar"],
    answer: "🌱 Sorghum Guide:\n- Drought-tolerant crop.\n- Urea: 20–25kg/acre at 20 DAS.\n- DAP: 40kg/acre basal.\n- Rainfed crop, needs minimal irrigation."
  },
  {
    keywords: ["pearl millet", "bajra"],
    answer: "🌱 Pearl Millet Guide:\n- Grows in sandy soil.\n- Urea: 15–20kg/acre basal.\n- DAP: 35kg/acre at sowing.\n- Irrigate once at flowering."
  },
  {
    keywords: ["potato"],
    answer: "🥔 Potato Guide:\n- Best in alluvial soil.\n- Urea: 40kg/acre split at 20 & 40 DAS.\n- DAP: 50kg/acre basal.\n- Needs irrigation every 10–12 days."
  },
  {
    keywords: ["sugarcane"],
    answer: "🌱 Sugarcane Guide:\n- Long-duration crop (10–12 months).\n- Urea: 80kg/acre in 3 splits.\n- SSP: 100kg/acre basal.\n- MOP: 40kg/acre at grand growth stage."
  },
  {
    keywords: ["sunflower"],
    answer: "🌻 Sunflower Guide:\n- Short-duration crop (~100 days).\n- Urea: 25kg/acre at 20 DAS.\n- SSP: 40kg/acre basal.\n- MOP: 20kg/acre at flowering."
  },
  {
    keywords: ["blackgram", "urad"],
    answer: "🌱 Blackgram Guide:\n- Best in kharif season.\n- Urea: 10–15kg/acre at sowing.\n- SSP: 30–40kg/acre basal.\n- Requires moist soil but avoid waterlogging."
  },
  {
    keywords: ["weather", "rain", "forecast"],
    answer: "🌦️ Weather Update: This week shows moderate rainfall with temperatures between 26–32°C. Good conditions for sowing kharif crops."
  },
  {
    keywords: ["market", "price", "mandi"],
    answer: "💰 Market Update: Paddy ₹1800/quintal (Rising), Wheat ₹2200/quintal (Stable), Mustard ₹4200/quintal (Rising)."
  },
  {
    keywords: ["hello", "hi", "namaste"],
    answer: "👋 Namaste! I am your Krishi Saathi. Ask me about crops, fertilizers, weather, or market prices."
  },
  {
    keywords: ["thank you", "thanks", "dhanyavaad"],
    answer: "🙏 Always happy to help! Wish you a great harvest 🌱."
  }
];
// ------------------------------
// विस्तृत हिंदी Mock Knowledge Base
// ------------------------------
const hindiMockData = [
  // 🌾 फसल मार्गदर्शिका
  {
    keywords: ["धान", "चावल"],
    answer: "🌾 धान मार्गदर्शिका:\n- मानसून में सबसे अच्छा।\n- यूरिया: 40kg/एकड़ (20 और 40 DAS पर)।\n- खेत में हमेशा पानी बनाए रखें।"
  },
  {
    keywords: ["गेहूं"],
    answer: "🌾 गेहूं मार्गदर्शिका:\n- रबी सीजन में बोया जाता है।\n- यूरिया: पहली सिंचाई पर 30kg/एकड़।\n- डीएपी: 50kg/एकड़ बुआई के समय।"
  },
  {
    keywords: ["मक्का", "भुट्टा"],
    answer: "🌽 मक्का मार्गदर्शिका:\n- बलुई दोमट मिट्टी में अच्छा होता है।\n- यूरिया: 20 DAS पर 30kg/एकड़।\n- फूल आने के समय सिंचाई करें।"
  },
  {
    keywords: ["चना"],
    answer: "🌱 चना मार्गदर्शिका:\n- शुष्क क्षेत्रों के लिए उपयुक्त।\n- यूरिया: बुआई के समय 20kg/एकड़।\n- एसएसपी: 40kg/एकड़।"
  },
  {
    keywords: ["मसूर"],
    answer: "🌱 मसूर मार्गदर्शिका:\n- ठंडा मौसम चाहिए।\n- यूरिया: 15–20kg/एकड़।\n- पानी ज्यादा न दें।"
  },
  {
    keywords: ["सरसों"],
    answer: "🌼 सरसों मार्गदर्शिका:\n- रबी फसल।\n- यूरिया: 20kg/एकड़ पहली सिंचाई से पहले।\n- डीएपी: 40kg/एकड़।"
  },
  {
    keywords: ["सोयाबीन"],
    answer: "🌱 सोयाबीन मार्गदर्शिका:\n- जून–जुलाई में बुआई।\n- यूरिया: 15kg/एकड़।\n- एसएसपी: 60kg/एकड़।"
  },
  {
    keywords: ["मूंगफली"],
    answer: "🥜 मूंगफली मार्गदर्शिका:\n- रेतीली दोमट मिट्टी में अच्छी।\n- जिप्सम: 200kg/एकड़।\n- एसएसपी: 50kg/एकड़।"
  },
  {
    keywords: ["ज्वार"],
    answer: "🌱 ज्वार मार्गदर्शिका:\n- सूखा सहनशील फसल।\n- यूरिया: 20–25kg/एकड़।\n- डीएपी: 40kg/एकड़।"
  },
  {
    keywords: ["बाजरा"],
    answer: "🌱 बाजरा मार्गदर्शिका:\n- रेतीली मिट्टी में अच्छा।\n- यूरिया: 15–20kg/एकड़।\n- डीएपी: 35kg/एकड़।"
  },
  {
    keywords: ["आलू"],
    answer: "🥔 आलू मार्गदर्शिका:\n- दोमट मिट्टी में उपयुक्त।\n- यूरिया: 40kg/एकड़ (दो बार)।\n- हर 10–12 दिन में सिंचाई।"
  },
  {
    keywords: ["गन्ना"],
    answer: "🌱 गन्ना मार्गदर्शिका:\n- लंबी अवधि की फसल (10–12 महीने)।\n- यूरिया: 80kg/एकड़ (3 बार में)।\n- एसएसपी: 100kg/एकड़।"
  },
  {
    keywords: ["सूरजमुखी"],
    answer: "🌻 सूरजमुखी मार्गदर्शिका:\n- 100 दिन में तैयार।\n- यूरिया: 25kg/एकड़।\n- फूल आने पर सिंचाई करें।"
  },
  {
    keywords: ["उड़द", "काला चना"],
    answer: "🌱 उड़द मार्गदर्शिका:\n- खरीफ सीजन में अच्छी।\n- यूरिया: 10–15kg/एकड़।\n- एसएसपी: 30–40kg/एकड़।"
  },

  // 🌦️ मौसम
  {
    keywords: ["मौसम", "बारिश", "तापमान", "पूर्वानुमान"],
    answer: "🌦️ मौसम अपडेट:\n- इस हफ्ते हल्की बारिश।\n- तापमान 26–32°C।\n- खरीफ फसल बोने का सही समय।"
  },
  {
    keywords: ["आज का मौसम"],
    answer: "🌤️ आज का मौसम: धूप के साथ बादल, हल्की बूंदाबांदी की संभावना।"
  },

  // 💰 मंडी भाव
  {
    keywords: ["बाजार", "भाव", "मंडी"],
    answer: "💰 मंडी भाव:\n- धान ₹1800/क्विंटल (बढ़त)\n- गेहूं ₹2200/क्विंटल (स्थिर)\n- सरसों ₹4200/क्विंटल (बढ़त)"
  },
  {
    keywords: ["आज का भाव", "मंडी अपडेट"],
    answer: "📊 मंडी अपडेट:\n- मक्का ₹1700/क्विंटल\n- चना ₹4600/क्विंटल\n- मूंगफली ₹5200/क्विंटल"
  },

  // 🙋 सामान्य प्रश्न
  {
    keywords: ["नमस्ते", "हैलो", "सुप्रभात", "राम राम"],
    answer: "👋 नमस्ते! मैं आपका कृषि सहायक हूँ। फसल, खाद, मौसम और मंडी भाव के बारे में पूछें।"
  },
  {
    keywords: ["धन्यवाद", "शुक्रिया"],
    answer: "🙏 आपकी मदद करके खुशी हुई। अच्छी फसल हो 🌱।"
  },
  {
    keywords: ["खाद", "उर्वरक"],
    answer: "🧪 खाद मार्गदर्शिका:\n- नाइट्रोजन वृद्धि के लिए।\n- फॉस्फोरस जड़ के लिए।\n- पोटाश फूल और फल के लिए।"
  },
  {
    keywords: ["सिंचाई"],
    answer: "💧 सिंचाई सुझाव:\n- सुबह या शाम को करें।\n- बाढ़ जैसी स्थिति न बनाएं।\n- ड्रिप सिस्टम सबसे अच्छा।"
  },
  {
    keywords: ["कीट", "रोग"],
    answer: "🐛 कीट नियंत्रण:\n- नीम का घोल छिड़कें।\n- संतुलित उर्वरक उपयोग करें।\n- रोगी पौधों को अलग करें।"
  }
];


// ------------------------------
// DOM Elements
// ------------------------------
const chatWindow = document.getElementById("chatWindow");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const voiceBtn = document.getElementById("voiceBtn");

let availableVoices = [];

function loadVoices() {
  availableVoices = speechSynthesis.getVoices();

  // Example: log them in console so you see names
  console.log("Available voices:");
  availableVoices.forEach((v, i) => console.log(i, v.name, v.lang));
}

// Voices load async
speechSynthesis.onvoiceschanged = loadVoices;


// ------------------------------
// Utility: Add Message
// ------------------------------
function addMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${sender}`;
  msgDiv.innerHTML = `<div class="bubble">${text.replace(/\n/g, "<br>")}</div>`;
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// ------------------------------
// Bot Reply (Flexible Matching)
// ------------------------------
function getBotResponse(input) {
  const query = input.toLowerCase();

  // 🔹 Search in English mock data
  for (let item of mockData) {
    for (let kw of item.keywords) {
      if (query.includes(kw)) {
        return item.answer;
      }
    }
  }

  // 🔹 Search in Hindi mock data
  for (let item of hindiMockData) {
    for (let kw of item.keywords) {
      if (query.includes(kw)) {
        return item.answer;
      }
    }
  }

  // 🔹 Default fallback (bilingual)
  return "🤔 अभी मेरे पास इसकी जानकारी नहीं है। कृपया फसल, खाद, मौसम या मंडी भाव पूछें।\nOr, you can ask me about crops, fertilizers, weather, or market prices.";
}


// ------------------------------
// Handle User Input
// ------------------------------
function handleUserInput() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage("user", text);
  userInput.value = "";

  setTimeout(() => {
    const response = getBotResponse(text);
    addMessage("bot", response);
    speakText(response);
  }, 600);
}

sendBtn.addEventListener("click", handleUserInput);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleUserInput();
});

// ------------------------------
// Voice Input (Speech-to-Text)
// ------------------------------
// ------------------------------
// Voice Input (Speech-to-Text) with Language Selector
// ------------------------------
const langSelect = document.getElementById("langSelect");

voiceBtn.addEventListener("click", () => {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Your browser does not support speech recognition.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = langSelect.value;  // 🔹 user-selected language
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    addMessage("user", transcript);

    setTimeout(() => {
      const response = getBotResponse(transcript);
      addMessage("bot", response);
      speakText(response);
    }, 600);
  };

  recognition.onerror = () => {
    alert("Speech recognition error. Please try again.");
  };



  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    addMessage("user", transcript);

    setTimeout(() => {
      const response = getBotResponse(transcript);
      addMessage("bot", response);
      speakText(response);
    }, 600);
  };

  recognition.onerror = () => {
    alert("Speech recognition error. Please try again.");
  };
});

// ------------------------------
// Bot Voice Output (Text-to-Speech)
// ------------------------------
function speakText(text) {
  if (!window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);

  // Detect Hindi vs English
  if (/[ऀ-ॿ]/.test(text)) {
    utterance.lang = "hi-IN";
  } else {
    utterance.lang = "en-IN";
  }

  // Try to pick a better English voice
  if (utterance.lang === "en-IN") {
    const preferred = availableVoices.find(v =>
      v.name.includes("Google UK English Female") ||
      v.name.includes("Google US English") ||
      v.name.includes("Microsoft") // fallback
    );
    if (preferred) utterance.voice = preferred;
  }

  // Try to pick a better Hindi voice
  if (utterance.lang === "hi-IN") {
    const preferredHindi = availableVoices.find(v =>
      v.lang === "hi-IN"
    );
    if (preferredHindi) utterance.voice = preferredHindi;
  }

  // Adjust speaking style
  utterance.rate = 0.95;   // slower, more natural
  utterance.pitch = 1.0;   // normal pitch
  utterance.volume = 1;    // full volume

  speechSynthesis.speak(utterance);
}


document.getElementById("menuToggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

