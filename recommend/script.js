const API_BASE = "https://sih-crop-backend.onrender.com";

document.getElementById("recommendForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(e.target).entries());
  formData.acreage = Number(formData.acreage);
  formData.ph = Number(formData.ph);
  formData.rain_next30 = Number(formData.rain_next30);

  try {
    const res = await fetch(`${API_BASE}/recommend`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    renderResults(data);
  } catch (err) {
    alert("Error: " + err);
  }
});

function renderResults(data) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  // Top 3 crops
  data.recommendations.forEach(r => {
    const div = document.createElement("div");
    div.className = "crop-card";
    div.innerHTML = `
      <h3>${r.crop.toUpperCase()}</h3>
      <p><strong>Suitability:</strong> ${r.suitability}</p>
      <p><strong>Yield:</strong> ${r.expected_yield_kg} kg</p>
      <p><strong>Profit:</strong> ₹${r.expected_profit_inr}</p>
      <details><summary>Why?</summary><ul>${r.why.map(w=>`<li>${w}</li>`).join("")}</ul></details>
    `;
    container.appendChild(div);
  });

  // Fertilizer plan for top crop
  const fert = data.fertilizer_plan;
  if (fert && fert.length > 0) {
    let table = `<h3>Fertilizer Plan for ${data.recommendations[0].crop}</h3>
    <table class="fert-table">
      <tr><th>Fertilizer</th><th>Formulation</th><th>Stage</th><th>Dosage/acre</th><th>Method</th><th>Notes</th></tr>`;
    fert.forEach(f => {
      table += `<tr>
        <td>${f.fertilizer}</td>
        <td>${f.formulation}</td>
        <td>${f.stage}</td>
        <td>${f.dosage_per_acre}</td>
        <td>${f.application_method}</td>
        <td>${f.notes}</td>
      </tr>`;
    });
    table += "</table>";
    container.innerHTML += table;
  }
}
