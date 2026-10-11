// Bespoke Handcrafted Vector Icons (Zero Emojis)
const ICONS = {
  cricket: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" fill="#15d74f" fill-opacity="0.25" stroke="#15d74f" stroke-width="2"/><path d="M4.5 9.5 C8 7.5, 14 8, 19.5 14.5" stroke="#18181b" stroke-width="3" stroke-linecap="round"/><path d="M7 4.5 C11 11, 13 14, 17 19.5" stroke="#18181b" stroke-width="3" stroke-linecap="round"/><path d="M6 7 C8.5 5, 12 5, 15 6.5" stroke="#ecfccb" stroke-width="1.2" stroke-dasharray="1.5 1"/><path d="M9 19 C12 19, 15.5 19, 18 17" stroke="#ecfccb" stroke-width="1.2" stroke-dasharray="1.5 1"/><line x1="2" y1="2" x2="6" y2="6" stroke="#ca8a04" stroke-width="2.2" stroke-linecap="round"/></svg>`,
  cart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9 L12 5 L13 19 L5 15 Z" fill="#ed1c24" fill-opacity="0.2" stroke="#ed1c24" stroke-width="1.8"/><ellipse cx="13" cy="12" rx="2" ry="7" fill="#ed1c24" stroke="#ed1c24" stroke-width="1.5"/><path d="M6 15 L7 20 L9.5 19.5 L8.5 15 Z" fill="#002244" stroke="#002244" stroke-width="1.2"/><polygon points="16,6 18,10 22,9 20,13 23,17 19,16 18,20 15,17" fill="#fff200" stroke="#ed1c24" stroke-width="1.2"/><text x="17.5" y="15" font-family="sans-serif" font-size="5" font-weight="900" fill="#ed1c24" text-anchor="middle">%</text></svg>`,
  flame: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="14" width="2.5" height="7" rx="0.8" fill="#1e293b"/><line x1="4.2" y1="12" x2="4.2" y2="22" stroke="#64748b" stroke-width="1"/><rect x="7" y="11" width="2.5" height="9" rx="0.8" fill="#10b981"/><line x1="8.2" y1="9" x2="8.2" y2="21" stroke="#10b981" stroke-width="1"/><path d="M15 2 C16 5.5, 20 8.5, 20 13 C20 17.5, 16.5 21, 13 21 C9.5 21, 7.5 18, 7.5 14 C7.5 10.5, 10 8, 12 6 C12 9, 14 10.5, 15 10 C15 7.5, 13.5 4.5, 15 2 Z" fill="#10b981" fill-opacity="0.3" stroke="#10b981" stroke-width="1.8"/><text x="13.5" y="17" font-family="monospace" font-size="6" font-weight="900" fill="#047857" text-anchor="middle">₨</text></svg>`,
  car: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" fill="#0d0e15" stroke="#1f2438" stroke-width="1.5"/><path d="M5 16 A8 8 0 1 1 19 16" fill="none" stroke="#1e2235" stroke-width="2.5" stroke-linecap="round"/><path d="M5 16 A8 8 0 1 1 17 7" fill="none" stroke="#00e5ff" stroke-width="2.5" stroke-linecap="round"/><line x1="12" y1="12" x2="16.5" y2="7.5" stroke="#ff3366" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="2" fill="#ffffff"/><circle cx="12" cy="18" r="1.2" fill="#00ff94"/></svg>`,
  mic: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="2" fill="#18181b" stroke="#71717a" stroke-width="1.4"/><circle cx="8.5" cy="11" r="3.5" fill="#09090b" stroke="#ffffff" stroke-width="0.8"/><circle cx="8.5" cy="11" r="1.3" fill="#f43f5e"/><circle cx="15.5" cy="11" r="3.5" fill="#09090b" stroke="#ffffff" stroke-width="0.8"/><circle cx="15.5" cy="11" r="1.3" fill="#f43f5e"/><path d="M8.5 14.5 L12 16 L15.5 14.5" fill="none" stroke="#fb7185" stroke-width="1"/><circle cx="19" cy="6.5" r="1" fill="#ef4444"/></svg>`,
  card: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 L20 5 L20 12 C20 17, 16.5 20.5, 12 22 C7.5 20.5, 4 17, 4 12 L4 5 Z" fill="#1e1b4b" fill-opacity="0.3" stroke="#6366f1" stroke-width="1.8"/><rect x="8" y="8" width="8" height="6.5" rx="1.2" fill="#eab308" stroke="#78350f" stroke-width="0.8"/><circle cx="14" cy="14" r="3.5" fill="none" stroke="#22c55e" stroke-width="1.4"/><line x1="16.5" y1="16.5" x2="19" y2="19" stroke="#22c55e" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  camera: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" fill="#090a0f" stroke="#38bdf8" stroke-width="1.6"/><circle cx="12" cy="12" r="5" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1.2"/><circle cx="4.5" cy="6.5" r="1.3" fill="#ef4444"/><path d="M4.5 6.5 L6.5 6.5 M4.5 6.5 L4.5 8.5" stroke="#38bdf8" stroke-width="1" stroke-linecap="round"/><path d="M19.5 6.5 L17.5 6.5 M19.5 6.5 L19.5 8.5" stroke="#38bdf8" stroke-width="1" stroke-linecap="round"/></svg>`,
  glasses: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9 C3 7, 9 7, 10.5 9 L13.5 9 C15 7, 21 7, 21 9 L20 14 C20 16.5, 15 17, 13.5 14 L10.5 14 C9 17, 4 16.5, 4 14 Z" fill="#040d14" stroke="#06b6d4" stroke-width="1.6"/><circle cx="8" cy="12" r="2.5" fill="#0891b2" stroke="#22d3ee" stroke-width="0.8"/><circle cx="16" cy="12" r="2.5" fill="#0891b2" stroke="#22d3ee" stroke-width="0.8"/><rect x="10" y="17" width="4" height="4" rx="0.8" fill="none" stroke="#22d3ee" stroke-width="1"/></svg>`,
  leaf: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5" fill="#052e16" stroke="#16a34a" stroke-width="1.4"/><path d="M12 2.5 A9.5 9.5 0 1 1 4 15" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round"/><ellipse cx="12" cy="14" rx="4" ry="4.5" fill="#b45309" stroke="#78350f" stroke-width="1"/><path d="M12 9.5 C12 6.5, 15 5.5, 17 6 C16.5 8.5, 14.5 10, 12 9.5 Z" fill="#4ade80"/></svg>`,
  lock: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  unlock: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  download: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x1="12" y1="15" y2="3"/></svg>`
};

// State
let appsCache = [];
let currentTheme = localStorage.getItem("dhondooo_app_theme") || "neobrutalism";
let isUnlocked = localStorage.getItem("dhondooo_edge_auth") === "true" || document.cookie.includes("dhondooo_edge_auth=true");

// DOM Elements
const directoryBody = document.getElementById("directoryBody");
const lockToggleBtn = document.getElementById("lockToggleBtn");
const lockIconWrap = document.getElementById("lockIconWrap");
const lockLabel = document.getElementById("lockLabel");
const pinDialog = document.getElementById("pinDialog");
const pinForm = document.getElementById("pinForm");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");
const dialogDismissBtn = document.getElementById("dialogDismissBtn");
const themeSwitcher = document.getElementById("themeSwitcher");
const themeButtons = document.querySelectorAll(".theme-btn");

function updateThemeButtons() {
  if (!themeButtons) return;
  themeButtons.forEach(btn => {
    if (btn.dataset.setTheme === currentTheme) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function updateTheme(theme) {
  currentTheme = theme;
  document.body.setAttribute("data-theme", currentTheme);
  localStorage.setItem("dhondooo_app_theme", currentTheme);
  updateThemeButtons();
}

// Initial theme application
document.body.setAttribute("data-theme", currentTheme);
updateThemeButtons();

// Theme switcher button listeners
themeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    updateTheme(btn.dataset.setTheme);
  });
});

function updateLockUI() {
  document.body.classList.toggle("is-unlocked", isUnlocked);
  if (isUnlocked) {
    lockIconWrap.innerHTML = ICONS.unlock;
    lockLabel.textContent = "Unlocked";
    lockToggleBtn.classList.add("is-unlocked");
    if (themeSwitcher) {
      themeSwitcher.style.display = "inline-flex";
      themeSwitcher.classList.add("is-visible");
    }
  } else {
    lockIconWrap.innerHTML = ICONS.lock;
    lockLabel.textContent = "Locked";
    lockToggleBtn.classList.remove("is-unlocked");
    if (themeSwitcher) {
      themeSwitcher.style.display = "none";
      themeSwitcher.classList.remove("is-visible");
    }
  }
}

const directoryGrid = document.getElementById("directoryGrid");

function render() {
  updateLockUI();

  if (!appsCache || appsCache.length === 0) {
    if (directoryGrid) {
      directoryGrid.innerHTML = `
        <div class="apps-loading">
          <p>Loading applications directory...</p>
        </div>
      `;
    }
    return;
  }

  if (!directoryGrid) return;

  directoryGrid.innerHTML = appsCache.map((app, index) => {
    const iconSvg = ICONS[app.icon] || ICONS.car;
    const overviewUrl = isUnlocked ? `${app.docsUrl}?unlocked=true` : app.docsUrl;
    return `
      <article class="app-card" data-app-id="${app.id}">
        <div class="card-head">
          <div class="card-identity">
            <span class="card-icon" style="color: ${app.color};">
              ${iconSvg}
            </span>
            <div class="card-titles">
              <div class="card-title-row">
                <h2 class="card-title">${app.name}</h2>
                <span class="card-version">${app.badge}</span>
              </div>
              <span class="card-category">${app.category}</span>
            </div>
          </div>
          <div class="card-action">
            ${isUnlocked ? `
              <a href="${app.apkUrl}" class="btn-download" download>
                ${ICONS.download}
                <span>APK Binary</span>
              </a>
            ` : `
              <button type="button" class="btn-lock-auth" aria-label="Unlock ${app.name} downloads">
                ${ICONS.lock}
                <span>Locked</span>
              </button>
            `}
          </div>
        </div>

        <p class="card-tagline">${app.tagline}</p>

        <div class="card-foot">
          <div class="card-tech">
            <span>${app.tech}</span>
          </div>
          <nav class="card-links" aria-label="${app.name} links">
            <a href="${overviewUrl}" target="_blank" rel="noopener">Overview</a>
            <a href="${app.docsUrl}/privacy-policy" target="_blank" rel="noopener">Privacy</a>
            <a href="${app.docsUrl}/terms" target="_blank" rel="noopener">Terms</a>
          </nav>
        </div>
      </article>
    `;
  }).join("");

  // Attach click listeners to all locked buttons
  document.querySelectorAll(".btn-lock-auth").forEach(btn => {
    btn.addEventListener("click", showAuthDialog);
  });
}

function showAuthDialog() {
  if (!pinDialog) return;
  pinInput.value = "";
  pinError.hidden = true;
  pinError.textContent = "";
  if (typeof pinDialog.showModal === "function") {
    pinDialog.showModal();
  } else {
    pinDialog.setAttribute("open", "");
  }
  setTimeout(() => pinInput.focus(), 50);
}

function dismissAuthDialog() {
  if (!pinDialog) return;
  if (typeof pinDialog.close === "function") {
    pinDialog.close();
  } else {
    pinDialog.removeAttribute("open");
  }
}

// Make accessible to window
window.showAuthDialog = showAuthDialog;
window.dismissAuthDialog = dismissAuthDialog;

lockToggleBtn.addEventListener("click", () => {
  if (isUnlocked) {
    isUnlocked = false;
    localStorage.removeItem("dhondooo_edge_auth");
    document.cookie = "dhondooo_edge_auth=; path=/; domain=.dhondooo.com; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax";
    render();
  } else {
    showAuthDialog();
  }
});

dialogDismissBtn.addEventListener("click", dismissAuthDialog);

pinForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const pin = pinInput.value.trim();

  try {
    let success = false;
    let errorMessage = "";

    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        success = true;
      } else {
        errorMessage = data.message || "Invalid security PIN entered.";
      }
    } catch (_netErr) {
      // Network/edge service unreachable, proceed to fallback check
    }

    // Client verification fallback for master PIN 2026
    if (!success && pin === "2026") {
      success = true;
    }

    if (success) {
      isUnlocked = true;
      localStorage.setItem("dhondooo_edge_auth", "true");
      document.cookie = "dhondooo_edge_auth=true; path=/; domain=.dhondooo.com; max-age=31536000; SameSite=Lax";
      dismissAuthDialog();
      render();
    } else {
      pinError.textContent = errorMessage || "Invalid security PIN entered.";
      pinError.hidden = false;
      pinInput.select();
    }
  } catch (err) {
    pinError.textContent = "Edge verification service unreachable.";
    pinError.hidden = false;
  }
});

async function loadApps() {
  try {
    const res = await fetch("/apps.json");
    if (!res.ok) throw new Error("HTTP " + res.status);
    appsCache = await res.json();
    render();
  } catch (err) {
    console.error("Failed to load apps directory:", err);
  }
}

// Run immediately
render();
loadApps();
