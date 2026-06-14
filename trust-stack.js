const trustLayersRoot = document.querySelector("#trust-layers");

if (trustLayersRoot) {
  const layers = [
    {
      number: "01",
      name: "Hardware identity",
      detail: "Attested cloud reasoning and signed edge actions.",
    },
    {
      number: "02",
      name: "Outcome evidence",
      detail: "Sensor-witnessed, tamper-evident records.",
    },
    {
      number: "03",
      name: "Fleet containment",
      detail: "Identity, revocation, and bounded failure propagation.",
    },
    {
      number: "04",
      name: "Skill provenance",
      detail: "Signed skills, explicit permissions, and emergency control.",
    },
  ];

  const tiers = [
    {
      name: "Demo",
      description:
        "Capability is visible. Evidence is not yet sufficient for external reliance.",
      access: "Showcase and lab work",
    },
    {
      name: "Traceable",
      description:
        "Actions are signed and attributable to a known robot and software state.",
      access: "Controlled internal pilots",
    },
    {
      name: "Verifiable",
      description:
        "Sensor evidence supports claims about what physically happened.",
      access: "Supervised, insurable work",
    },
    {
      name: "Contained",
      description:
        "Identity and revocation limit how far a compromised robot or skill can spread.",
      access: "Regulated fleets at scale",
    },
    {
      name: "Extensible",
      description:
        "Signed external skills can run under explicit permissions and emergency controls.",
      access: "A governed skill ecosystem",
    },
  ];

  let activeLayers = 0;
  const rows = [];

  const tierName = document.querySelector("#trust-tier");
  const tierDescription = document.querySelector("#trust-description");
  const tierAccess = document.querySelector("#trust-access");
  const tierMeter = document.querySelector("#trust-meter");

  layers
    .slice()
    .reverse()
    .forEach((layer, reverseIndex) => {
      const layerIndex = layers.length - reverseIndex;
      const row = document.createElement("article");
      row.className = "trust-layer";

      const number = document.createElement("span");
      number.className = "trust-layer-number";
      number.textContent = layer.number;

      const copy = document.createElement("div");
      const name = document.createElement("h4");
      name.textContent = layer.name;
      const detail = document.createElement("p");
      detail.textContent = layer.detail;
      copy.append(name, detail);

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.dataset.layer = String(layerIndex);
      toggle.addEventListener("click", () => {
        activeLayers =
          activeLayers >= layerIndex ? layerIndex - 1 : layerIndex;
        renderTrustStack();
      });

      row.append(number, copy, toggle);
      trustLayersRoot.append(row);
      rows[layerIndex - 1] = { row, toggle };
    });

  for (let index = 0; index < layers.length; index += 1) {
    tierMeter.append(document.createElement("span"));
  }

  function renderTrustStack() {
    rows.forEach(({ row, toggle }, index) => {
      const isActive = index < activeLayers;
      const isNext = index === activeLayers;
      row.classList.toggle("active", isActive);
      row.classList.toggle("next", isNext);
      toggle.classList.toggle("active", isActive);
      toggle.setAttribute("aria-pressed", String(isActive));
      toggle.setAttribute(
        "aria-label",
        `${isActive ? "Remove" : "Add"} ${layers[index].name}`,
      );
      toggle.textContent = isActive ? "Added" : "Add";
    });

    const tier = tiers[activeLayers];
    tierName.textContent = tier.name;
    tierDescription.textContent = tier.description;
    tierAccess.textContent = tier.access;

    [...tierMeter.children].forEach((segment, index) => {
      segment.classList.toggle("active", index < activeLayers);
    });
  }

  renderTrustStack();
}
