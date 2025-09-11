// ------------------------------
// Mock Weather Data (7-day forecast)
// ------------------------------
const weatherData = {
  Ranchi: [
    { day: "Mon", temp: "28°C", rain: "60%", icon: "🌦️" },
    { day: "Tue", temp: "29°C", rain: "20%", icon: "☀️" },
    { day: "Wed", temp: "30°C", rain: "10%", icon: "☀️" },
    { day: "Thu", temp: "27°C", rain: "70%", icon: "🌧️" },
    { day: "Fri", temp: "26°C", rain: "80%", icon: "🌧️" },
    { day: "Sat", temp: "28°C", rain: "50%", icon: "🌦️" },
    { day: "Sun", temp: "29°C", rain: "40%", icon: "🌦️" }
  ],
  Dhanbad: [
    { day: "Mon", temp: "31°C", rain: "30%", icon: "☀️" },
    { day: "Tue", temp: "32°C", rain: "40%", icon: "🌦️" },
    { day: "Wed", temp: "30°C", rain: "50%", icon: "🌦️" },
    { day: "Thu", temp: "29°C", rain: "60%", icon: "🌧️" },
    { day: "Fri", temp: "28°C", rain: "70%", icon: "🌧️" },
    { day: "Sat", temp: "31°C", rain: "20%", icon: "☀️" },
    { day: "Sun", temp: "32°C", rain: "30%", icon: "🌦️" }
  ],
  Hazaribagh: [
    { day: "Mon", temp: "27°C", rain: "55%", icon: "🌦️" },
    { day: "Tue", temp: "28°C", rain: "35%", icon: "🌦️" },
    { day: "Wed", temp: "29°C", rain: "25%", icon: "☀️" },
    { day: "Thu", temp: "27°C", rain: "65%", icon: "🌧️" },
    { day: "Fri", temp: "26°C", rain: "75%", icon: "🌧️" },
    { day: "Sat", temp: "28°C", rain: "45%", icon: "🌦️" },
    { day: "Sun", temp: "29°C", rain: "35%", icon: "🌦️" }
  ],
  Bokaro: [
    { day: "Mon", temp: "30°C", rain: "20%", icon: "☀️" },
    { day: "Tue", temp: "31°C", rain: "30%", icon: "🌦️" },
    { day: "Wed", temp: "30°C", rain: "40%", icon: "🌦️" },
    { day: "Thu", temp: "29°C", rain: "50%", icon: "🌧️" },
    { day: "Fri", temp: "28°C", rain: "60%", icon: "🌧️" },
    { day: "Sat", temp: "30°C", rain: "25%", icon: "☀️" },
    { day: "Sun", temp: "31°C", rain: "35%", icon: "🌦️" }
  ],
  Giridih: [
    { day: "Mon", temp: "29°C", rain: "40%", icon: "🌦️" },
    { day: "Tue", temp: "30°C", rain: "30%", icon: "☀️" },
    { day: "Wed", temp: "31°C", rain: "20%", icon: "☀️" },
    { day: "Thu", temp: "29°C", rain: "55%", icon: "🌧️" },
    { day: "Fri", temp: "28°C", rain: "65%", icon: "🌧️" },
    { day: "Sat", temp: "29°C", rain: "45%", icon: "🌦️" },
    { day: "Sun", temp: "30°C", rain: "35%", icon: "🌦️" }
  ]
};

// ------------------------------
// Mock Market Data (₹ per quintal)
// ------------------------------
const marketData = {
  Ranchi: [
    { crop: "Paddy", price: 1800, trend: "⬆️ Rising" },
    { crop: "Wheat", price: 2200, trend: "➡️ Stable" },
    { crop: "Maize", price: 1600, trend: "⬇️ Falling" },
    { crop: "Mustard", price: 4200, trend: "⬆️ Rising" }
  ],
  Dhanbad: [
    { crop: "Paddy", price: 1750, trend: "➡️ Stable" },
    { crop: "Wheat", price: 2150, trend: "⬆️ Rising" },
    { crop: "Soybean", price: 3600, trend: "⬇️ Falling" },
    { crop: "Groundnut", price: 5000, trend: "⬆️ Rising" }
  ],
  Hazaribagh: [
    { crop: "Maize", price: 1700, trend: "⬆️ Rising" },
    { crop: "Lentil", price: 4500, trend: "➡️ Stable" },
    { crop: "Pigeon Pea", price: 5200, trend: "⬆️ Rising" }
  ],
  Bokaro: [
    { crop: "Wheat", price: 2100, trend: "⬇️ Falling" },
    { crop: "Paddy", price: 1780, trend: "➡️ Stable" },
    { crop: "Sunflower", price: 4200, trend: "⬆️ Rising" }
  ],
  Giridih: [
    { crop: "Mustard", price: 4300, trend: "⬆️ Rising" },
    { crop: "Blackgram", price: 5200, trend: "⬆️ Rising" },
    { crop: "Potato", price: 1500, trend: "➡️ Stable" }
  ]
};

// ------------------------------
// DOM Elements
// ------------------------------
const districtSelect = document.getElementById("district");
const showDashboardBtn = document.getElementById("showDashboard");
const weatherCards = document.getElementById("weatherCards");
const marketTable = document.querySelector("#marketTable tbody");
const weatherSection = document.getElementById("weatherSection");
const marketSection = document.getElementById("marketSection");

// ------------------------------
// Event Listener
// ------------------------------
showDashboardBtn.addEventListener("click", () => {
  const district = districtSelect.value;
  if (!district) {
    alert("Please select a district.");
    return;
  }

  renderWeather(district);
  renderMarket(district);

  // Show sections once data is loaded
  weatherSection.classList.remove("hidden");
  marketSection.classList.remove("hidden");
});

// ------------------------------
// Render Weather
// ------------------------------
function renderWeather(district) {
  weatherCards.innerHTML = "";
  if (weatherData[district]) {
    weatherData[district].forEach(d => {
      const card = document.createElement("div");
      card.className = "weather-card";
      card.innerHTML = `
        <h3>${d.day}</h3>
        <p class="icon">${d.icon}</p>
        <p><strong>Temp:</strong> ${d.temp}</p>
        <p><strong>Rain:</strong> ${d.rain}</p>
      `;
      weatherCards.appendChild(card);
    });
  } else {
    weatherCards.innerHTML = "<p>No forecast available for this district.</p>";
  }
}

// ------------------------------
// Render Market
// ------------------------------
function renderMarket(district) {
  marketTable.innerHTML = "";
  if (marketData[district]) {
    marketData[district].forEach(m => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${m.crop}</td>
        <td>₹${m.price}</td>
        <td>${m.trend}</td>
      `;
      marketTable.appendChild(row);
    });
  } else {
    marketTable.innerHTML = "<tr><td colspan='3'>No market data available.</td></tr>";
  }
}
