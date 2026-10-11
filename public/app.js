// Icon map using unicode/emoji or clean svg
const iconMap = {
  car: "🚗",
  camera: "📹",
  activity: "🏏",
  flame: "🔥",
  "shopping-bag": "🛍️",
  "credit-card": "💳",
  sun: "☀️",
  compass: "🌿",
  mic: "🎙️"
};

let appsData = [];
let isUnlocked = localStorage.getItem("dhondooo_apps_unlocked") === "true";

async function loadApps() {
  try {
    const res = await fetch("/apps.json");
    appsData = await res.json();
    render();
  } catch (err) {
    console.error("Failed to load apps:", err);
  }
}

function render() {
  const grid = document.getElementById("appsGrid");
  const lockIcon = document.getElementById("lockIcon");
  const lockText = document.getElementById("lockText");
  const lockBtn = document.getElementById("lockToggleBtn");

  if (isUnlocked) {
    lockIcon.textContent = "🔓";
    lockText.textContent = "Unlocked";
    lockBtn.classList.add("unlocked");
  } else {
    lockIcon.textContent = "🔒";
    lockText.textContent = "Locked";
    lockBtn.classList.remove("unlocked");
  }

  grid.innerHTML = appsData.map(app => `
    <article class="app-card">
      <div>
        <div class="app-header">
          <div class="app-icon" style="background: ${app.color}20; border: 1px solid ${app.color}40;">
            ${iconMap[app.icon] || "📱"}
          </div>
          <div class="app-meta">
            <div class="app-title-row">
              <h3 class="app-title">${app.name}</h3>
              <span class="app-badge">${app.badge}</span>
            </div>
            <p class="app-tagline">${app.tagline}</p>
          </div>
        </div>
        <p class="app-desc">${app.desc}</p>
      </div>

      <div class="app-actions">
        <div class="app-links">
          <a href="${app.docsUrl}" target="_blank" rel="noopener">Docs & Overview &rarr;</a>
          <a href="${app.docsUrl}/privacy-policy" target="_blank" rel="noopener">Privacy</a>
          <a href="${app.docsUrl}/terms" target="_blank" rel="noopener">Terms</a>
        </div>

        ${isUnlocked ? `
          <a href="${app.apkUrl}" class="apk-btn unlocked" download>
            <span>⬇️</span> Download Standalone APK
          </a>
        ` : `
          <button class="apk-btn public-locked" onclick="openPinModal()">
            <span>🔒</span> APK Download (Locked)
          </button>
        `}
      </div>
    </article>
  `).join("");
}

// Modal handling
const modal = document.getElementById("pinModal");
const lockToggleBtn = document.getElementById("lockToggleBtn");
const modalCancelBtn = document.getElementById("modalCancelBtn");
const pinForm = document.getElementById("pinForm");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");

function openPinModal() {
  modal.classList.remove("hidden");
  pinInput.value = "";
  pinError.classList.add("hidden");
  pinInput.focus();
}

function closePinModal() {
  modal.classList.add("hidden");
}

lockToggleBtn.addEventListener("click", () => {
  if (isUnlocked) {
    // Lock again
    isUnlocked = false;
    localStorage.removeItem("dhondooo_apps_unlocked");
    render();
  } else {
    openPinModal();
  }
});

modalCancelBtn.addEventListener("click", closePinModal);

pinForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const pin = pinInput.value.trim();

  try {
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin })
    });

    const data = await res.json();
    if (res.ok && data.success) {
      isUnlocked = true;
      localStorage.setItem("dhondooo_apps_unlocked", "true");
      closePinModal();
      render();
    } else {
      pinError.textContent = data.message || "Invalid PIN entered.";
      pinError.classList.remove("hidden");
    }
  } catch (err) {
    pinError.textContent = "Error verifying PIN with edge function.";
    pinError.classList.remove("hidden");
  }
});

// Initialize
loadApps();
