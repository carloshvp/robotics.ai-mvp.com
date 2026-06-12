const robotCatalog = [
  {
    name: "Optimus Gen 2 / Gen 3",
    company: "Tesla",
    country: "USA",
    status: "announced",
    statusLabel: "Internal factory testing",
    release: 2026,
    releaseLabel: "Gen 2: 2023 · Gen 3 ramp: 2026",
    price: 25000,
    priceLabel: "$20k–$30k target*",
    units: null,
    unitsLabel: "Internal fleet · undisclosed",
    compute: "Tesla custom · details not public",
    image: "./assets/robots/optimus.webp",
    source: "https://www.tesla.com/AI",
  },
  {
    name: "Figure 02 / 03",
    company: "Figure AI",
    country: "USA",
    status: "announced",
    statusLabel: "BMW factory pilots",
    release: 2026,
    releaseLabel: "Figure 02: 2024 · Figure 03: 2026",
    price: 75000,
    priceLabel: "$50k–$100k estimate*",
    units: null,
    unitsLabel: "Pilot count undisclosed",
    compute: "Not publicly specified",
    image: "./assets/robots/figure.webp",
    source: "https://www.figure.ai/",
  },
  {
    name: "Digit",
    company: "Agility Robotics",
    country: "USA",
    status: "available",
    statusLabel: "Paid warehouse deployments",
    release: 2023,
    releaseLabel: "Commercial pilots: 2023",
    price: null,
    priceLabel: "$30/hour RaaS reported",
    units: 88,
    unitsLabel: "75–100 estimated*",
    compute: "Not publicly specified",
    image: "./assets/robots/digit.webp",
    source: "https://www.agilityrobotics.com/robots/digit",
  },
  {
    name: "Apollo",
    company: "Apptronik",
    country: "USA",
    status: "announced",
    statusLabel: "Mercedes and GXO pilots",
    release: 2023,
    releaseLabel: "2023",
    price: 50000,
    priceLabel: "Below $50k target*",
    units: null,
    unitsLabel: "Pilot count undisclosed",
    compute: "NVIDIA Jetson modules reported",
    image: "./assets/robots/apollo.webp",
    source: "https://apptronik.com/apollo",
  },
  {
    name: "Atlas electric",
    company: "Boston Dynamics",
    country: "USA",
    status: "announced",
    statusLabel: "Committed factory fleets",
    release: 2024,
    releaseLabel: "Electric Atlas: 2024",
    price: null,
    priceLabel: "Not public",
    units: null,
    unitsLabel: "Fleet count undisclosed",
    compute: "Custom stack · NVIDIA / DeepMind ecosystem",
    image: "./assets/robots/atlas.webp",
    source: "https://bostondynamics.com/products/atlas/",
  },
  {
    name: "NEO",
    company: "1X",
    country: "Norway",
    status: "available",
    statusLabel: "Consumer preorder",
    release: 2026,
    releaseLabel: "First shipments planned: 2026",
    price: 20000,
    priceLabel: "$20k · or $499/month",
    units: null,
    unitsLabel: "Preorders undisclosed",
    compute: "NVIDIA GPU reported",
    image: "./assets/robots/neo.webp",
    source: "https://www.1x.tech/order",
  },
  {
    name: "Phoenix",
    company: "Sanctuary AI",
    country: "Canada",
    status: "announced",
    statusLabel: "Industrial pilots",
    release: 2024,
    releaseLabel: "Gen 7: 2024",
    price: null,
    priceLabel: "Quote only",
    units: null,
    unitsLabel: "Pilot count undisclosed",
    compute: "Carbon AI · board details not public",
    image: "./assets/robots/phoenix.webp",
    source: "https://www.sanctuary.ai/blog/sanctuary-ai-unveils-phoenix-a-humanoid-general-purpose-robot-designed-for-work",
  },
  {
    name: "G1",
    company: "Unitree",
    country: "China",
    status: "available",
    statusLabel: "Commercial research platform",
    release: 2024,
    releaseLabel: "2024",
    price: 16000,
    priceLabel: "From $16k",
    units: 5500,
    unitsLabel: "5,500 Unitree portfolio*",
    compute: "8-core CPU · optional Jetson Orin",
    image: "./assets/robots/g1.webp",
    source: "https://www.unitree.com/g1",
  },
  {
    name: "H1",
    company: "Unitree",
    country: "China",
    status: "available",
    statusLabel: "Commercial sales channel",
    release: 2023,
    releaseLabel: "August 2023",
    price: 90000,
    priceLabel: "Around $90k",
    units: 5,
    unitsLabel: "5 disclosed in 2023",
    compute: "High-compute variant not specified",
    image: "./assets/robots/h1.webp",
    source: "https://www.unitree.com/h1",
  },
  {
    name: "H2 Plus",
    company: "Unitree",
    country: "China",
    status: "available",
    statusLabel: "Commercially listed",
    release: 2026,
    releaseLabel: "2026",
    price: 100000,
    priceLabel: "$100k listed",
    units: null,
    unitsLabel: "New platform · undisclosed",
    compute: "NVIDIA Jetson Thor",
    image: "./assets/robots/h2.webp",
    source: "https://www.unitree.com/mobile/H2plus",
  },
  {
    name: "R1",
    company: "Unitree",
    country: "China",
    status: "available",
    statusLabel: "Commercially listed",
    release: 2025,
    releaseLabel: "2025",
    price: 5400,
    priceLabel: "$4.9k–$5.9k",
    units: null,
    unitsLabel: "New product · undisclosed",
    compute: "Not publicly specified",
    image: "./assets/robots/r1.webp",
    source: "https://www.unitree.com/mobile/R1",
  },
  {
    name: "A2 / A2-W",
    company: "AgiBot",
    country: "China",
    status: "available",
    statusLabel: "Sales and leasing",
    release: 2024,
    releaseLabel: "2024–2025",
    price: 145000,
    priceLabel: "$100k–$190k estimate*",
    units: 10000,
    unitsLabel: "10,000 AgiBot portfolio*",
    compute: "Proprietary · reported 200 TOPS class",
    image: "./assets/robots/agibot-a2.webp",
    source: "https://www.agibot.com/products/A2_W",
  },
  {
    name: "Walker S1 / S2",
    company: "UBTech",
    country: "China",
    status: "available",
    statusLabel: "Industrial deployments",
    release: 2025,
    releaseLabel: "S1: 2024 · S2: 2025",
    price: 84000,
    priceLabel: "$68k–$100k estimate*",
    units: 150,
    unitsLabel: "100–200 reported*",
    compute: "Not publicly specified",
    image: "./assets/robots/walker.webp",
    source: "https://www.ubtrobot.com/humanoid/products/walker-s2",
  },
  {
    name: "GR-1 / GR-2",
    company: "Fourier Intelligence",
    country: "China",
    status: "available",
    statusLabel: "Research and care platform",
    release: 2024,
    releaseLabel: "GR-1: 2023 · GR-2: 2024",
    price: 125000,
    priceLabel: "$100k–$150k estimate*",
    units: null,
    unitsLabel: "Sales count undisclosed",
    compute: "Not publicly specified",
    image: "./assets/robots/gr1.webp",
    source: "https://www.fftai.com/products-gr1",
  },
  {
    name: "GR-3",
    company: "Fourier Intelligence",
    country: "China",
    status: "available",
    statusLabel: "Presale and developer access",
    release: 2025,
    releaseLabel: "2025",
    price: null,
    priceLabel: "Not public",
    units: null,
    unitsLabel: "Presale · undisclosed",
    compute: "Not publicly specified",
    image: "./assets/robots/gr3.webp",
    source: "https://humanoid.guide/product/fourier-gr-3/",
  },
  {
    name: "IRON",
    company: "XPeng",
    country: "China",
    status: "announced",
    statusLabel: "Retail trials",
    release: 2025,
    releaseLabel: "November 2025",
    price: 150000,
    priceLabel: "Around $150k estimate*",
    units: null,
    unitsLabel: "Trial use planned",
    compute: "3× XPeng Turing · reported 3,000 TOPS",
    image: "./assets/robots/iron.webp",
    source: "https://www.reuters.com/world/china/xpeng-boss-head-robot-unit-with-humanoid-mass-production-imminent-2026-06-10/",
  },
  {
    name: "4NE1 Gen 3.5",
    company: "NEURA Robotics",
    country: "Germany",
    status: "available",
    statusLabel: "Reservations open",
    release: 2026,
    releaseLabel: "Gen 3.5: CES 2026",
    price: 79000,
    priceLabel: "€60k–€98k reported*",
    units: null,
    unitsLabel: "6,000 capacity target*",
    compute: "Neuraverse · NVIDIA Isaac ecosystem",
    image: "./assets/robots/4ne1.webp",
    source: "https://neura-robotics.com/neura-robotics-launches-technological-revolution/",
  },
  {
    name: "4NE1 Mini",
    company: "NEURA Robotics",
    country: "Germany",
    status: "announced",
    statusLabel: "Compact humanoid announced",
    release: 2026,
    releaseLabel: "CES 2026",
    price: 19999,
    priceLabel: "€19,999 reported*",
    units: null,
    unitsLabel: "No public count",
    compute: "Neuraverse · details not public",
    image: "./assets/robots/4ne1-mini.webp",
    source: "https://www.humanoid-robots.io/robot/4ne-1-mini-by-neura-robotics",
  },
  {
    name: "D9",
    company: "Pudu Robotics",
    country: "China",
    status: "available",
    statusLabel: "Presale and inquiries",
    release: 2024,
    releaseLabel: "December 2024",
    price: null,
    priceLabel: "Quote only",
    units: null,
    unitsLabel: "No public count",
    compute: "Not publicly specified",
    image: "./assets/robots/d9.webp",
    source: "https://www.prnewswire.com/news-releases/pudu-robotics-unveils-pudu-d9-a-full-sized-humanoid-robot-driving-commercially-viable-embodied-intelligence-302336109.html",
  },
  {
    name: "PM01",
    company: "EngineAI",
    country: "China",
    status: "available",
    statusLabel: "Commercial and education sales",
    release: 2024,
    releaseLabel: "December 2024",
    price: 13700,
    priceLabel: "$13.7k launch offer",
    units: null,
    unitsLabel: "Sales count undisclosed",
    compute: "ROS / Isaac / MuJoCo / ONNX workflows",
    image: "./assets/robots/pm01.webp",
    source: "https://www.therobotreport.com/engineai-releases-pm01-humanoid-robot-for-commercial-educational-use/",
  },
  {
    name: "SE01",
    company: "EngineAI",
    country: "China",
    status: "announced",
    statusLabel: "Public demonstrations",
    release: 2025,
    releaseLabel: "2025",
    price: null,
    priceLabel: "Not disclosed",
    units: null,
    unitsLabel: "No public count",
    compute: "Not publicly specified",
    image: "./assets/robots/se01.webp",
    source: "https://en.engineai.com.cn/",
  },
  {
    name: "S1",
    company: "Astribot",
    country: "China",
    status: "available",
    statusLabel: "Preorder",
    release: 2024,
    releaseLabel: "2024",
    price: 123000,
    priceLabel: "$96k–$150k estimate*",
    units: null,
    unitsLabel: "Preorders undisclosed",
    compute: "Not publicly specified",
    image: "./assets/robots/astribot-s1.webp",
    source: "https://www.astribot.com/",
  },
  {
    name: "T1",
    company: "Astribot",
    country: "China",
    status: "available",
    statusLabel: "Orders open",
    release: 2026,
    releaseLabel: "May 2026",
    price: 13500,
    priceLabel: "$13k–$14k reported",
    units: null,
    unitsLabel: "New product · undisclosed",
    compute: "Customizable AI compute",
    image: "./assets/robots/astribot-t1.webp",
    source: "https://humanoid.guide/product/astribot-t1/",
  },
  {
    name: "Galbot G1",
    company: "Galbot",
    country: "China",
    status: "available",
    statusLabel: "Commercial positioning",
    release: 2025,
    releaseLabel: "2025–2026",
    price: 92000,
    priceLabel: "$87k–$97k reported*",
    units: null,
    unitsLabel: "No public count",
    compute: "Jetson Thor reported for premium tier",
    image: "./assets/robots/galbot.webp",
    source: "https://galbot.com/",
  },
  {
    name: "MagicBot",
    company: "MagicLab",
    country: "China",
    status: "announced",
    statusLabel: "Industrial pilots",
    release: 2024,
    releaseLabel: "2024–2026",
    price: 75000,
    priceLabel: "$50k–$100k estimate*",
    units: null,
    unitsLabel: "No verified count",
    compute: "Not publicly specified",
    image: "./assets/robots/magicbot.webp",
    source: "https://www.magiclab.top/",
  },
  {
    name: "Luna / Oli",
    company: "LimX Dynamics",
    country: "China",
    status: "available",
    statusLabel: "Commercial and research launch",
    release: 2026,
    releaseLabel: "Oli: 2025 · Luna: May 2026",
    price: 21800,
    priceLabel: "$21.8k–$41k reported",
    units: null,
    unitsLabel: "No public count",
    compute: "Not publicly specified",
    image: "./assets/robots/limx.webp",
    source: "https://www.limxdynamics.com/en",
  },
  {
    name: "T1",
    company: "Booster Robotics",
    country: "China",
    status: "available",
    statusLabel: "Developer and RoboCup sales",
    release: 2025,
    releaseLabel: "2025",
    price: 75000,
    priceLabel: "$75k class*",
    units: null,
    unitsLabel: "Developer sales undisclosed",
    compute: "Not publicly specified",
    image: "./assets/robots/booster.webp",
    source: "https://www.booster.tech/booster-t1/",
  },
  {
    name: "Bumi",
    company: "Noetix Robotics",
    country: "China",
    status: "available",
    statusLabel: "Consumer and education sales",
    release: 2025,
    releaseLabel: "October 2025",
    price: 1380,
    priceLabel: "¥9,998 · about $1,380",
    units: null,
    unitsLabel: "Early demand · no robust count",
    compute: "Not publicly specified",
    image: "./assets/robots/bumi.webp",
    source: "https://technode.com/2025/10/27/after-new-funding-noetix-robotics-explains-how-it-built-a-humanoid-robot-cheaper-than-an-iphone/",
  },
  {
    name: "Forerunner K2",
    company: "Kepler Robotics",
    country: "China",
    status: "announced",
    statusLabel: "Pilot programs",
    release: 2024,
    releaseLabel: "October 2024",
    price: 25000,
    priceLabel: "$20k–$30k target*",
    units: null,
    unitsLabel: "No public count",
    compute: "Not publicly specified",
    image: "./assets/robots/kepler.webp",
    source: "https://humanoid.guide/product/kepler-k2/",
  },
  {
    name: "Kuavo",
    company: "Leju Robotics",
    country: "China",
    status: "available",
    statusLabel: "Factory deployments",
    release: 2024,
    releaseLabel: "2024–2025",
    price: null,
    priceLabel: "Not public",
    units: null,
    unitsLabel: "Deployment count undisclosed",
    compute: "Not publicly specified",
    image: "./assets/robots/kuavo.webp",
    source: "https://www.lejurobot.com/en",
  },
];

const robotTable = document.getElementById("robot-table");

if (robotTable) {
  const tbody = robotTable.querySelector("tbody");
  const search = document.getElementById("robot-search");
  const country = document.getElementById("robot-country");
  const statusButtons = Array.from(document.querySelectorAll(".robot-chip"));
  const sortButtons = Array.from(robotTable.querySelectorAll("thead button"));
  const count = document.getElementById("robot-count");
  const preview = document.createElement("div");
  const previewImage = document.createElement("img");
  const previewName = document.createElement("span");
  let activeStatus = "all";
  let sortKey = "company";
  let sortDirection = 1;

  preview.className = "robot-preview";
  preview.setAttribute("aria-hidden", "true");
  preview.append(previewImage, previewName);
  document.body.appendChild(preview);

  const valueMissing = (value) =>
    value === null || value === undefined || value === "";

  const compareRobots = (left, right) => {
    const a = left[sortKey];
    const b = right[sortKey];
    const aMissing = valueMissing(a);
    const bMissing = valueMissing(b);

    if (aMissing && bMissing) return 0;
    if (aMissing) return 1;
    if (bMissing) return -1;

    const result =
      typeof a === "string"
        ? a.localeCompare(b, "en", { sensitivity: "base" })
        : a - b;
    return result * sortDirection;
  };

  const showPreview = (image, name, x, y) => {
    previewImage.src = image;
    previewImage.alt = "";
    previewName.textContent = name;
    preview.classList.add("visible");
    movePreview(x, y);
  };

  const movePreview = (x, y) => {
    const width = 280;
    const height = 350;
    const left = Math.min(x + 24, window.innerWidth - width - 14);
    const top = Math.min(Math.max(y - 80, 14), window.innerHeight - height - 14);
    preview.style.left = `${Math.max(left, 14)}px`;
    preview.style.top = `${top}px`;
  };

  const hidePreview = () => preview.classList.remove("visible");

  const render = () => {
    const term = search.value.trim().toLowerCase();
    const selectedCountry = country.value;
    const visibleRobots = robotCatalog
      .filter((robot) => {
        const countryMatches =
          selectedCountry === "all" || robot.country === selectedCountry;
        const statusMatches =
          activeStatus === "all" || robot.status === activeStatus;
        const haystack = [
          robot.name,
          robot.company,
          robot.country,
          robot.statusLabel,
          robot.compute,
        ]
          .join(" ")
          .toLowerCase();
        return countryMatches && statusMatches && (!term || haystack.includes(term));
      })
      .sort(compareRobots);

    tbody.innerHTML = visibleRobots
      .map(
        (robot) => `
          <tr>
            <th scope="row">
              <a class="robot-identity" href="${robot.source}" target="_blank" rel="noreferrer">
                <img
                  class="robot-thumb"
                  src="${robot.image}"
                  alt="${robot.name} humanoid robot"
                  width="72"
                  height="82"
                  loading="lazy"
                  data-preview="${robot.image}"
                  data-name="${robot.name}"
                />
                <span>${robot.name}<small>View source ↗</small></span>
              </a>
            </th>
            <td class="robot-company">${robot.company}</td>
            <td>${robot.country}</td>
            <td>
              <span class="robot-status ${robot.status}">
                <i></i>${robot.status === "available" ? "Available" : "Announced"}
              </span>
              <small>${robot.statusLabel}</small>
            </td>
            <td>${robot.releaseLabel}</td>
            <td class="robot-price">${robot.priceLabel}</td>
            <td>${robot.unitsLabel}</td>
            <td class="robot-compute">${robot.compute}</td>
          </tr>
        `,
      )
      .join("");

    count.textContent = `${visibleRobots.length} / ${robotCatalog.length}`;

    tbody.querySelectorAll(".robot-thumb").forEach((image) => {
      const link = image.closest(".robot-identity");
      image.addEventListener("mouseenter", (event) => {
        showPreview(
          image.dataset.preview,
          image.dataset.name,
          event.clientX,
          event.clientY,
        );
      });
      image.addEventListener("mousemove", (event) =>
        movePreview(event.clientX, event.clientY),
      );
      image.addEventListener("mouseleave", hidePreview);
      link.addEventListener("focus", () => {
        const bounds = image.getBoundingClientRect();
        showPreview(
          image.dataset.preview,
          image.dataset.name,
          bounds.right,
          bounds.top,
        );
      });
      link.addEventListener("blur", hidePreview);
    });
  };

  search.addEventListener("input", render);
  country.addEventListener("change", render);

  statusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeStatus = button.dataset.status;
      statusButtons.forEach((other) =>
        other.classList.toggle("active", other === button),
      );
      render();
    });
  });

  sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextKey = button.dataset.key;
      const firstDirection =
        nextKey === "units" || nextKey === "release" ? -1 : 1;
      sortDirection =
        nextKey === sortKey ? sortDirection * -1 : firstDirection;
      sortKey = nextKey;

      sortButtons.forEach((other) => {
        other.closest("th").setAttribute("aria-sort", "none");
        other.querySelector(".dir").textContent = "";
      });
      button
        .closest("th")
        .setAttribute(
          "aria-sort",
          sortDirection === 1 ? "ascending" : "descending",
        );
      button.querySelector(".dir").textContent =
        sortDirection === 1 ? "▲" : "▼";
      render();
    });
  });

  const initialSort = robotTable.querySelector('[data-key="company"]');
  initialSort.closest("th").setAttribute("aria-sort", "ascending");
  initialSort.querySelector(".dir").textContent = "▲";
  render();
}
