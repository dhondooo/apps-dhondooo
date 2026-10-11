// Vector Icons (Zero Emojis)
const ICONS = {
  car: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.7 2 11.1 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
  camera: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11"/><rect width="14" height="12" x="2" y="6" rx="2"/></svg>`,
  cricket: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m14 7 3-3 4 4-3 3"/><path d="m14 7-8.5 8.5a2.12 2.12 0 0 0 3 3L17 10"/><circle cx="5" cy="19" r="2"/></svg>`,
  flame: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  cart: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
  card: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
  radiation: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/></svg>`,
  leaf: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  mic: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x1="12" y1="19" y2="22"/></svg>`,
  lock: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  unlock: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  download: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`
};

// State
let appsCache = [];
let currentTheme = localStorage.getItem("dhondooo_app_theme") || "minimal-list";
let isUnlocked = localStorage.getItem("dhondooo_edge_auth") === "true";

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
    const itemNum = String(index + 1).padStart(2, "0");
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
        <p class="card-desc">${app.desc}</p>

        <div class="card-foot">
          <div class="card-tech">
            <span>${app.tech}</span>
          </div>
          <nav class="card-links" aria-label="${app.name} links">
            <a href="${app.docsUrl}" target="_blank" rel="noopener">Overview</a>
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
