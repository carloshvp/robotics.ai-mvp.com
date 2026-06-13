const vlaCatalog = [
  {
    name: "RT-2",
    developer: "Google DeepMind",
    year: 2023,
    params: 55000,
    paramsLabel: "up to 55B",
    weights: "closed",
    weightsLabel: "Closed",
    method: "tokens",
    methodLabel: "Autoregressive tokens",
    embodiment: "Single arm",
    idea: "The original: robot actions cast as another language.",
    source: "https://robotics-transformer2.github.io/",
  },
  {
    name: "Octo",
    developer: "UC Berkeley (RAIL)",
    year: 2024,
    params: 93,
    paramsLabel: "27M / 93M",
    weights: "open",
    weightsLabel: "Open",
    method: "diffusion",
    methodLabel: "Diffusion head",
    embodiment: "Cross-embodiment",
    idea: "Small open generalist; language or goal-image conditioned.",
    source: "https://octo-models.github.io/",
  },
  {
    name: "OpenVLA",
    developer: "Stanford et al.",
    year: 2024,
    params: 7000,
    paramsLabel: "7B",
    weights: "open",
    weightsLabel: "Open",
    method: "tokens",
    methodLabel: "Autoregressive tokens",
    embodiment: "Single-arm manipulation",
    idea: "The open 7B reference VLA, built on Llama-2 + SigLIP/DINOv2.",
    source: "https://openvla.github.io/",
  },
  {
    name: "RDT-1B",
    developer: "Tsinghua (THU-ML)",
    year: 2024,
    params: 1200,
    paramsLabel: "1.2B",
    weights: "open",
    weightsLabel: "Open",
    method: "diffusion",
    methodLabel: "Diffusion",
    embodiment: "Bimanual (ALOHA)",
    idea: "Largest open diffusion model for two-arm manipulation.",
    source: "https://rdt-robotics.github.io/rdt-robotics/",
  },
  {
    name: "π0",
    developer: "Physical Intelligence",
    year: 2024,
    params: 3300,
    paramsLabel: "3.3B",
    weights: "open",
    weightsLabel: "Open",
    method: "flow",
    methodLabel: "Flow matching",
    embodiment: "Cross-embodiment, dexterous",
    idea: "Flow-matching action expert on PaliGemma, up to 50 Hz control.",
    source: "https://www.physicalintelligence.company/blog/pi0",
  },
  {
    name: "π0.5",
    developer: "Physical Intelligence",
    year: 2025,
    params: 3300,
    paramsLabel: "~3.3B class",
    weights: "open",
    weightsLabel: "Open",
    method: "flow",
    methodLabel: "Flow matching",
    embodiment: "Open-world homes",
    idea: "Generalizes to homes never seen during training.",
    source: "https://www.physicalintelligence.company/blog/pi05",
  },
  {
    name: "GR00T N1.5",
    developer: "NVIDIA",
    year: 2025,
    params: 3000,
    paramsLabel: "3B",
    weights: "open",
    weightsLabel: "Open",
    method: "diffusion",
    methodLabel: "Diffusion transformer",
    embodiment: "Humanoid / cross-embodiment",
    idea: "Dual-system: an Eagle VLM plans, a DiT acts. Note 002, shipped.",
    source: "https://research.nvidia.com/labs/gear/gr00t-n1_5/",
  },
  {
    name: "Helix",
    developer: "Figure",
    year: 2025,
    params: 7080,
    paramsLabel: "7B + 80M",
    weights: "closed",
    weightsLabel: "Closed",
    method: "other",
    methodLabel: "Latent → fast decoder",
    embodiment: "Humanoid upper body",
    idea: "Explicit System 2 at 7–9 Hz driving System 1 at 200 Hz.",
    source: "https://www.figure.ai/news/helix",
  },
  {
    name: "Gemini Robotics",
    developer: "Google DeepMind",
    year: 2025,
    params: null,
    paramsLabel: "Undisclosed",
    weights: "closed",
    weightsLabel: "Closed",
    method: "other",
    methodLabel: "VLA on Gemini 2.0",
    embodiment: "Cross-embodiment",
    idea: "Frontier multimodal brain plus embodied reasoning; on-device variant.",
    source: "https://deepmind.google/models/gemini-robotics/",
  },
  {
    name: "SmolVLA",
    developer: "Hugging Face",
    year: 2025,
    params: 450,
    paramsLabel: "450M",
    weights: "open",
    weightsLabel: "Open",
    method: "flow",
    methodLabel: "Flow matching",
    embodiment: "Low-cost arms (SO-10x)",
    idea: "Runs on consumer hardware; trained on community LeRobot data.",
    source: "https://huggingface.co/blog/smolvla",
  },
];

const vlaTable = document.getElementById("vla-table");

if (vlaTable) {
  const tbody = vlaTable.querySelector("tbody");
  const search = document.getElementById("vla-search");
  const weights = document.getElementById("vla-weights");
  const methodButtons = Array.from(document.querySelectorAll(".vla-chip"));
  const sortButtons = Array.from(vlaTable.querySelectorAll("thead button"));
  const count = document.getElementById("vla-count");
  let activeMethod = "all";
  let sortKey = "year";
  let sortDirection = -1;

  const valueMissing = (value) =>
    value === null || value === undefined || value === "";

  const compareModels = (left, right) => {
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

  // Build each row with DOM methods (no innerHTML) so model data is always
  // inserted as text, never parsed as markup.
  const buildRow = (model) => {
    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.scope = "row";
    const link = document.createElement("a");
    link.className = "vla-identity";
    link.href = model.source;
    link.target = "_blank";
    link.rel = "noreferrer";
    const nameWrap = document.createElement("span");
    nameWrap.append(document.createTextNode(model.name));
    const idea = document.createElement("small");
    idea.textContent = model.idea;
    nameWrap.append(idea);
    link.append(nameWrap);
    th.append(link);
    tr.append(th);

    const developer = document.createElement("td");
    developer.className = "vla-developer";
    developer.textContent = model.developer;
    tr.append(developer);

    const year = document.createElement("td");
    year.textContent = String(model.year);
    tr.append(year);

    const params = document.createElement("td");
    params.className = "vla-params";
    params.textContent = model.paramsLabel;
    tr.append(params);

    const weightsCell = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = `vla-weight ${model.weights}`;
    badge.append(document.createElement("i"));
    badge.append(document.createTextNode(model.weightsLabel));
    weightsCell.append(badge);
    tr.append(weightsCell);

    const method = document.createElement("td");
    method.className = "vla-method";
    method.textContent = model.methodLabel;
    tr.append(method);

    const embodiment = document.createElement("td");
    embodiment.textContent = model.embodiment;
    tr.append(embodiment);

    return tr;
  };

  const render = () => {
    const term = search.value.trim().toLowerCase();
    const selectedWeights = weights.value;
    const visibleModels = vlaCatalog
      .filter((model) => {
        const weightsMatches =
          selectedWeights === "all" || model.weights === selectedWeights;
        const methodMatches =
          activeMethod === "all" || model.method === activeMethod;
        const haystack = [
          model.name,
          model.developer,
          model.methodLabel,
          model.embodiment,
          model.idea,
        ]
          .join(" ")
          .toLowerCase();
        return (
          weightsMatches && methodMatches && (!term || haystack.includes(term))
        );
      })
      .sort(compareModels);

    tbody.replaceChildren(...visibleModels.map(buildRow));
    count.textContent = `${visibleModels.length} / ${vlaCatalog.length}`;
  };

  search.addEventListener("input", render);
  weights.addEventListener("change", render);

  methodButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeMethod = button.dataset.method;
      methodButtons.forEach((other) =>
        other.classList.toggle("active", other === button),
      );
      render();
    });
  });

  sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextKey = button.dataset.key;
      // Year and params rank biggest/newest first; names rank A–Z.
      const firstDirection =
        nextKey === "year" || nextKey === "params" ? -1 : 1;
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

  const initialSort = vlaTable.querySelector('[data-key="year"]');
  initialSort.closest("th").setAttribute("aria-sort", "descending");
  initialSort.querySelector(".dir").textContent = "▼";
  render();
}
