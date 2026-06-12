const progressBar = document.querySelector(".progress span");
const revealItems = document.querySelectorAll(".reveal");

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealItems.forEach((item) => revealObserver.observe(item));
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const scrollToTarget = (target) => {
  const top = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "auto" });
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    history.pushState(null, "", link.getAttribute("href"));
    requestAnimationFrame(() => scrollToTarget(target));
  });
});

window.addEventListener("load", () => {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (target) setTimeout(() => scrollToTarget(target), 0);
});

const hwTable = document.getElementById("hw-table");

if (hwTable) {
  const tbody = hwTable.querySelector("tbody");
  const rows = Array.from(tbody.rows);
  const searchInput = document.getElementById("hw-search");
  const chips = Array.from(document.querySelectorAll(".hw-chip"));
  const countLabel = document.getElementById("hw-count");
  const sortButtons = Array.from(hwTable.querySelectorAll("thead button"));
  let activeFamily = "all";
  let sortKey = null;
  let sortDir = 1;

  // Release sorts by the leading year of the visible text, so the
  // column reads monotonically even for multi-year entries.
  rows.forEach((row) => {
    const shown = row.querySelector(".release").textContent.match(/\d{4}/);
    row.dataset.release = shown ? shown[0] : "0";
  });

  const applyFilters = () => {
    const term = searchInput.value.trim().toLowerCase();
    let visible = 0;
    rows.forEach((row) => {
      const familyOk =
        activeFamily === "all" || row.dataset.family === activeFamily;
      const termOk = !term || row.textContent.toLowerCase().includes(term);
      row.hidden = !(familyOk && termOk);
      if (!row.hidden) visible += 1;
    });
    countLabel.textContent = `${visible} / ${rows.length}`;
  };

  searchInput.addEventListener("input", applyFilters);

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activeFamily = chip.dataset.family;
      chips.forEach((other) => other.classList.toggle("active", other === chip));
      applyFilters();
    });
  });

  sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.key;
      // First click ranks best first: A-Z for platform, five stars / newest on top otherwise.
      sortDir = key === sortKey ? -sortDir : key === "platform" ? 1 : -1;
      sortKey = key;
      sortButtons.forEach((other) => {
        other.closest("th").setAttribute("aria-sort", "none");
        other.querySelector(".dir").textContent = "";
      });
      button
        .closest("th")
        .setAttribute("aria-sort", sortDir === 1 ? "ascending" : "descending");
      button.querySelector(".dir").textContent = sortDir === 1 ? "▲" : "▼";
      rows
        .slice()
        .sort((a, b) => {
          const left = a.dataset[key];
          const right = b.dataset[key];
          const compared =
            key === "platform"
              ? left.localeCompare(right)
              : Number(left) - Number(right);
          return compared * sortDir;
        })
        .forEach((row) => tbody.appendChild(row));
    });
  });

  applyFilters();
}
