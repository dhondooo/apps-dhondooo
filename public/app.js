// Vector SVG Icons Dictionary (Clean, high-precision geometry - zero emojis)
const ICONS = {
  car: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.7 2 11.1 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
  camera: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11"/><rect width="14" height="12" x="2" y="6" rx="2"/></svg>`,
  cricket: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m14 7 3-3 4 4-3 3"/><path d="m14 7-8.5 8.5a2.12 2.12 0 0 0 3 3L17 10"/><circle cx="5" cy="19" r="2"/></svg>`,
  flame: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  cart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
  card: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
  radiation: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/></svg>`,
  leaf: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  mic: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
  lock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  unlock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  arrowUpRight: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`
};

let appsCache = [];
let activeCategory = "all";
let isUnlocked = localStorage.getItem("dhondooo_edge_auth") === "true";

// UI references
const gridElement = document.getElementById("appsGrid");
const lockToggleBtn = document.getElementById("lockToggleBtn");
const lockIconWrap = document.getElementById("lockIconWrap");
const lockLabel = document.getElementById("lockLabel");
const lockStateBadge = document.getElementById("lockStateBadge");
const pinDialog = document.getElementById("pinDialog");
const pinForm = document.getElementById("pinForm");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");
const dialogDismissBtn = document.getElementById("dialogDismissBtn");
const filterPills = document.querySelectorAll(".filter-pills .pill");

async function fetchApps() {
  try {
    const res = await fetch("/apps.json");
    appsCache = await res.json();
    renderGrid();
  } catch (err) {
    console.error("Failed to load apps directory:", err);
  }
}

function updateLockStateUI() {
  if (isUnlocked) {
    lockIconWrap.innerHTML = ICONS.unlock;
    lockLabel.textContent = "Authenticated";
    lockStateBadge.textContent = "Unlocked";
    lockToggleBtn.classList.add("is-unlocked");
    lockToggleBtn.setAttribute("aria-expanded", "true");
  } else {
    lockIconWrap.innerHTML = ICONS.lock;
    lockLabel.textContent = "Restricted Builds";
    lockStateBadge.textContent = "Locked";
    lockToggleBtn.classList.remove("is-unlocked");
    lockToggleBtn.setAttribute("aria-expanded", "false");
  }
}

function renderGrid() {
  updateLockStateUI();

  const filteredApps = appsCache.filter(app => {
    if (activeCategory === "all") return true;
    return app.category === activeCategory;
  });

  gridElement.innerHTML = filteredApps.map(app => {
    const iconSvg = ICONS[app.icon] || ICONS.car;
    return `
      <article class="bento-card ${app.span}" style="--card-accent: ${app.color};">
        <div class="card-inner">
          <div class="card-top">
            <div class="card-glyph">
              ${iconSvg}
            </div>
            <div class="card-badge-row">
              <span class="badge-tag">${app.category}</span>
              <span class="badge-tag badge-version">${app.badge}</span>
            </div>
          </div>

          <h3 class="card-title">${app.name}</h3>
          <p class="card-tagline">${app.tagline}</p>
          <p class="card-copy">${app.desc}</p>
          <div class="card-meta-line">
            <span>Platform: ${app.tech}</span>
          </div>
        </div>

        <div class="card-actions">
          <div class="card-links">
            <a href="${app.docsUrl}" target="_blank" rel="noopener" class="card-link primary-doc">
              <span>Overview &amp; Legal</span>
              ${ICONS.arrowUpRight}
            </a>
            <a href="${app.docsUrl}/privacy-policy" target="_blank" rel="noopener" class="card-link">
              <span>Privacy</span>
              ${ICONS.arrowUpRight}
            </a>
            <a href="${app.docsUrl}/terms" target="_blank" rel="noopener" class="card-link">
              <span>Terms</span>
              ${ICONS.arrowUpRight}
            </a>
          </div>

          ${isUnlocked ? `
            <a href="${app.apkUrl}" class="action-btn btn-unlocked" download>
              ${ICONS.download}
              <span>Download Standalone Release APK</span>
            </a>
          ` : `
            <button type="button" class="action-btn btn-locked" onclick="showAuthDialog()">
              ${ICONS.lock}
              <span>Private APK Binary (Locked)</span>
            </button>
          `}
        </div>
      </article>
    `;
  }).join("");
}

// Category filter interaction
filterPills.forEach(pill => {
  pill.addEventListener("click", () => {
    filterPills.forEach(p => {
      p.classList.remove("active");
      p.setAttribute("aria-selected", "false");
    });
    pill.classList.add("active");
    pill.setAttribute("aria-selected", "true");
    activeCategory = pill.dataset.filter;
    renderGrid();
  });
});

// Dialog Management (Native HTML5 dialog with modal focus trapping)
function showAuthDialog() {
  pinInput.value = "";
  pinError.hidden = true;
  pinError.textContent = "";
  if (typeof pinDialog.showModal === "function") {
    pinDialog.showModal();
  } else {
    pinDialog.setAttribute("open", "");
  }
  pinInput.focus();
}

function dismissAuthDialog() {
  if (typeof pinDialog.close === "function") {
    pinDialog.close();
  } else {
    pinDialog.removeAttribute("open");
  }
}

lockToggleBtn.addEventListener("click", () => {
  if (isUnlocked) {
    // Revoke session
    isUnlocked = false;
    localStorage.removeItem("dhondooo_edge_auth");
    renderGrid();
  } else {
    showAuthDialog();
  }
});

dialogDismissBtn.addEventListener("click", dismissAuthDialog);

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
      localStorage.setItem("dhondooo_edge_auth", "true");
      dismissAuthDialog();
      renderGrid();
    } else {
      pinError.textContent = data.message || "Invalid security PIN entered.";
      pinError.hidden = false;
      pinInput.select();
    }
  } catch (err) {
    pinError.textContent = "Edge verification service unreachable.";
    pinError.hidden = false;
  }
});

// Escape key listener for dialog
pinDialog.addEventListener("cancel", (e) => {
  e.preventDefault();
  dismissAuthDialog();
});

// Initialize
fetchApps();
