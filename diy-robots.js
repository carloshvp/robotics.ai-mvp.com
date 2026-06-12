const diyRobotCatalog = [
  {
    name: "TurtleBot 4 Lite",
    type: "ROS 2 mobile robot",
    category: "mobile",
    bestUse: "Serious ROS 2 learning",
    source: "https://turtlebot.github.io/turtlebot4-user-manual/",
    price: "€1,699 Lite to €2,739 Pro",
    priceValue: 1699,
    learning: 5,
    learningNote: "ROS 2 standard",
    openness: 5,
    opennessNote: "ROS 2 native",
    hardware: 5,
    hardwareNote: "LiDAR, OAK, Pi",
    setup: 4,
    setupNote: "Integrated platform",
    affordability: 2,
    affordabilityNote: "Above €1,500",
    ai: 5,
    aiNote: "SLAM, navigation, vision",
    pick: "Serious ROS 2 learning",
  },
  {
    name: "LeRobot SO-ARM101",
    type: "Robot arm",
    category: "arm",
    bestUse: "Imitation learning",
    source: "https://huggingface.co/docs/lerobot/so101",
    price: "About €400 kit",
    priceValue: 400,
    learning: 5,
    learningNote: "Robot learning core",
    openness: 5,
    opennessNote: "LeRobot native",
    hardware: 3,
    hardwareNote: "Servo arm",
    setup: 3,
    setupNote: "Assembly calibration",
    affordability: 4,
    affordabilityNote: "Affordable arm",
    ai: 5,
    aiNote: "Imitation learning",
    pick: "Embodied AI manipulation",
  },
  {
    name: "TurtleBot 3 Burger",
    type: "ROS mobile robot",
    category: "mobile",
    bestUse: "Robotics fundamentals",
    source: "https://emanual.robotis.com/docs/en/platform/turtlebot3/overview/",
    price: "About €809",
    priceValue: 809,
    learning: 5,
    learningNote: "ROS fundamentals",
    openness: 5,
    opennessNote: "Open ROS ecosystem",
    hardware: 3,
    hardwareNote: "LiDAR, Pi base",
    setup: 3,
    setupNote: "More setup",
    affordability: 3,
    affordabilityNote: "Mid price",
    ai: 4,
    aiNote: "SLAM, navigation",
    pick: "Serious ROS learning",
  },
  {
    name: "myCobot 280 Pi",
    type: "Desktop robot arm",
    category: "arm",
    bestUse: "Manipulation and control",
    source: "https://www.elephantrobotics.com/en/mycobot-pi/",
    price: "$799",
    priceValue: 799,
    learning: 5,
    learningNote: "6-axis control",
    openness: 4,
    opennessNote: "Python, ROS",
    hardware: 4,
    hardwareNote: "Real 6-DOF arm",
    setup: 4,
    setupNote: "Desktop ready",
    affordability: 3,
    affordabilityNote: "Mid price",
    ai: 5,
    aiNote: "Grasping, vision",
  },
  {
    name: "AgileX LIMO",
    type: "Advanced ROS mobile robot",
    category: "mobile",
    bestUse: "SLAM and navigation",
    source: "https://global.agilex.ai/products/limo-ros2",
    price: "€2,371 to €3,570",
    priceValue: 2371,
    learning: 5,
    learningNote: "Pro mobile robotics",
    openness: 5,
    opennessNote: "ROS 1 and 2",
    hardware: 5,
    hardwareNote: "Multimode chassis",
    setup: 3,
    setupNote: "Advanced setup",
    affordability: 2,
    affordabilityNote: "Expensive",
    ai: 5,
    aiNote: "Autonomy research",
  },
  {
    name: "Yahboom ROSMASTER X3",
    type: "ROS AI car",
    category: "mobile",
    bestUse: "ROS, vision, LiDAR",
    source: "https://category.yahboom.net/products/rosmaster-x3",
    price: "$659 direct, EU higher",
    priceValue: 659,
    learning: 4,
    learningNote: "Rich ROS car",
    openness: 4,
    opennessNote: "ROS, Python",
    hardware: 5,
    hardwareNote: "LiDAR, depth, voice",
    setup: 3,
    setupNote: "Kit complexity",
    affordability: 3,
    affordabilityNote: "Import cost",
    ai: 5,
    aiNote: "Navigation, vision, voice",
  },
  {
    name: "Duckiebot DB21J",
    type: "Autonomous driving robot",
    category: "mobile",
    bestUse: "Autonomy curriculum",
    source: "https://get.duckietown.com/products/duckiebot-db21",
    price: "$429 listed",
    priceValue: 429,
    learning: 4,
    learningNote: "Autonomy curriculum",
    openness: 5,
    opennessNote: "Open education stack",
    hardware: 3,
    hardwareNote: "Jetson, camera, IMU",
    setup: 4,
    setupNote: "Guided course",
    affordability: 4,
    affordabilityNote: "Good value",
    ai: 4,
    aiNote: "Lane behavior learning",
  },
  {
    name: "Hiwonder JetHexa",
    type: "Jetson hexapod",
    category: "legged",
    bestUse: "Legged robotics",
    source: "https://www.hiwonder.com/products/jethexa",
    price: "$709.99",
    priceValue: 709.99,
    learning: 4,
    learningNote: "Legged robotics",
    openness: 4,
    opennessNote: "ROS, Jetson",
    hardware: 5,
    hardwareNote: "Hexapod, LiDAR, depth",
    setup: 3,
    setupNote: "Advanced kit",
    affordability: 3,
    affordabilityNote: "Above $700",
    ai: 5,
    aiNote: "Gait, mapping, vision",
  },
  {
    name: "NVIDIA JetBot",
    type: "Jetson AI car",
    category: "mobile",
    bestUse: "Edge AI robotics",
    source: "https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetbot-ai-robot-kit/",
    price: "About €330 kit",
    priceValue: 330,
    learning: 4,
    learningNote: "Edge AI starter",
    openness: 5,
    opennessNote: "Open source",
    hardware: 3,
    hardwareNote: "Small camera robot",
    setup: 3,
    setupNote: "Build required",
    affordability: 4,
    affordabilityNote: "Cheap AI base",
    ai: 4,
    aiNote: "Vision, avoidance",
  },
  {
    name: "Hiwonder MentorPi M1",
    type: "Raspberry Pi 5 ROS 2 car",
    category: "mobile",
    bestUse: "Modern ROS 2 intro",
    source: "https://www.hiwonder.com/products/mentorpi-m1",
    price: "$299.99 without Pi",
    priceValue: 299.99,
    learning: 4,
    learningNote: "ROS 2 car",
    openness: 4,
    opennessNote: "ROS 2, Python",
    hardware: 4,
    hardwareNote: "LiDAR, depth, Pi 5",
    setup: 4,
    setupNote: "Education kit",
    affordability: 4,
    affordabilityNote: "Fair cost",
    ai: 5,
    aiNote: "SLAM, YOLO, LLM demos",
  },
  {
    name: "Waveshare RoArm M2-S",
    type: "Desktop robot arm",
    category: "arm",
    bestUse: "Low-cost manipulation",
    source: "https://www.waveshare.com/roarm-m2-s.htm",
    price: "About €209",
    priceValue: 209,
    learning: 4,
    learningNote: "Arm basics",
    openness: 5,
    opennessNote: "ROS 2 code",
    hardware: 3,
    hardwareNote: "4-DOF arm",
    setup: 4,
    setupNote: "Guided tutorials",
    affordability: 5,
    affordabilityNote: "Very affordable",
    ai: 4,
    aiNote: "Pick and place",
    pick: "Desktop arm control",
  },
  {
    name: "SunFounder PiCar-X",
    type: "Raspberry Pi AI car",
    category: "mobile",
    bestUse: "First AI robot",
    source: "https://www.sunfounder.com/products/picar-x",
    price: "$89.99 without Pi",
    priceValue: 89.99,
    learning: 4,
    learningNote: "First AI car",
    openness: 4,
    opennessNote: "Pi, Python",
    hardware: 3,
    hardwareNote: "Camera, sensors",
    setup: 5,
    setupNote: "Beginner friendly",
    affordability: 5,
    affordabilityNote: "Very cheap",
    ai: 4,
    aiNote: "Vision, line, obstacle",
    pick: "First robot with useful AI",
  },
  {
    name: "Viam Rover 2",
    type: "Programmable rover",
    category: "mobile",
    bestUse: "Cloud robotics software",
    source: "https://www.viam.com/resources/rover",
    price: "$99 without SBC",
    priceValue: 99,
    learning: 4,
    learningNote: "Software robotics",
    openness: 4,
    opennessNote: "Viam SDK",
    hardware: 3,
    hardwareNote: "Webcam, IMU, motors",
    setup: 5,
    setupNote: "Preassembled base",
    affordability: 5,
    affordabilityNote: "Very cheap base",
    ai: 4,
    aiNote: "Cloud robotics, ML",
  },
  {
    name: "Hiwonder TurboPi",
    type: "Raspberry Pi vision car",
    category: "mobile",
    bestUse: "OpenCV and driving",
    source: "https://www.hiwonder.com/products/turbopi",
    price: "$99.99 without Pi",
    priceValue: 99.99,
    learning: 4,
    learningNote: "Vision car learning",
    openness: 4,
    opennessNote: "Python, OpenCV",
    hardware: 3,
    hardwareNote: "Camera, Mecanum",
    setup: 4,
    setupNote: "Tutorials provided",
    affordability: 5,
    affordabilityNote: "Cheap entry",
    ai: 4,
    aiNote: "Tracking, driving",
  },
  {
    name: "Arduino Alvik",
    type: "Education robot",
    category: "mobile",
    bestUse: "Embedded robotics basics",
    source: "https://store.arduino.cc/products/alvik",
    price: "€159 official",
    priceValue: 159,
    learning: 4,
    learningNote: "Embedded basics",
    openness: 4,
    opennessNote: "Arduino, MicroPython",
    hardware: 3,
    hardwareNote: "Sensors, ESP32",
    setup: 5,
    setupNote: "Easiest serious starter",
    affordability: 5,
    affordabilityNote: "Excellent affordability",
    ai: 3,
    aiNote: "Limited AI depth",
  },
  {
    name: "Petoi Bittle X",
    type: "Small quadruped",
    category: "legged",
    bestUse: "Gait and kinematics",
    source: "https://www.petoi.com/products/petoi-robot-dog-bittle-x-voice-controlled",
    price: "$319",
    priceValue: 319,
    learning: 4,
    learningNote: "Gait basics",
    openness: 4,
    opennessNote: "Python, C++",
    hardware: 3,
    hardwareNote: "Small 9-DOF dog",
    setup: 4,
    setupNote: "Maker friendly",
    affordability: 4,
    affordabilityNote: "Affordable quadruped",
    ai: 3,
    aiNote: "Motion over AI",
    pick: "Legged robotics without huge budget",
  },
  {
    name: "Reachy Mini",
    type: "Desktop social robot",
    category: "social",
    bestUse: "Human-robot interaction",
    source: "https://reachy-mini.org/",
    price: "$299 Lite, $449 full",
    priceValue: 299,
    learning: 4,
    learningNote: "HRI and agents",
    openness: 4,
    opennessNote: "Open-source positioning",
    hardware: 3,
    hardwareNote: "Expressive desktop robot",
    setup: 4,
    setupNote: "Accessible kit",
    affordability: 4,
    affordabilityNote: "Good price",
    ai: 5,
    aiNote: "Conversational AI",
  },
  {
    name: "Makeblock mBot2",
    type: "STEM mobile robot",
    category: "mobile",
    bestUse: "Beginner robotics",
    source: "https://www.makeblock.com/products/buy-mbot2",
    price: "€168 to €200, Rover $260",
    priceValue: 168,
    learning: 3,
    learningNote: "STEM coding",
    openness: 3,
    opennessNote: "Education platform",
    hardware: 3,
    hardwareNote: "Sensors, CyberPi",
    setup: 5,
    setupNote: "Very easy",
    affordability: 5,
    affordabilityNote: "Cheap",
    ai: 3,
    aiNote: "Basic AI concepts",
  },
  {
    name: "Unitree Go2",
    type: "Quadruped robot dog",
    category: "legged",
    bestUse: "Advanced legged robotics",
    source: "https://www.unitree.com/go2",
    price: "$2,800, EU about €2,661",
    priceValue: 2661,
    learning: 5,
    learningNote: "Real quadruped",
    openness: 3,
    opennessNote: "SDK mainly EDU",
    hardware: 5,
    hardwareNote: "Strong quadruped hardware",
    setup: 3,
    setupNote: "Safety heavy",
    affordability: 1,
    affordabilityNote: "Expensive",
    ai: 5,
    aiNote: "Locomotion, embodied AI",
    pick: "Advanced legged robotics",
    pickLabel: "Unitree Go2 EDU · only if budget allows",
  },
  {
    name: "Yahboom DOGZILLA S1",
    type: "Quadruped robot dog",
    category: "legged",
    bestUse: "ROS 2 quadruped kit",
    source: "https://category.yahboom.net/products/dogzilla-s1",
    price: "$660 to $1,010",
    priceValue: 660,
    learning: 3,
    learningNote: "Quadruped demo",
    openness: 3,
    opennessNote: "Docs mixed",
    hardware: 4,
    hardwareNote: "12-DOF, camera",
    setup: 3,
    setupNote: "Tuning needed",
    affordability: 3,
    affordabilityNote: "Mid price",
    ai: 4,
    aiNote: "Vision, gait demos",
  },
];

const diyTable = document.getElementById("diy-table");

if (diyTable) {
  const tbody = diyTable.querySelector("tbody");
  const search = document.getElementById("diy-search");
  const type = document.getElementById("diy-type");
  const pickButtons = Array.from(document.querySelectorAll(".diy-chip"));
  const sortButtons = Array.from(diyTable.querySelectorAll("thead button"));
  const count = document.getElementById("diy-count");
  const pickList = document.getElementById("diy-pick-list");
  let pickFilter = "all";
  let sortKey = "name";
  let sortDirection = 1;

  const scores = [
    ["learning", "Learning"],
    ["openness", "Openness"],
    ["hardware", "Hardware"],
    ["setup", "Setup"],
    ["affordability", "Price fit"],
    ["ai", "AI potential"],
  ];

  const scoreMarkup = (score, note, label) => {
    const filled = "★".repeat(score);
    const empty = "★".repeat(5 - score);
    return `
      <span class="diy-score" role="img" aria-label="${label}: ${score} of 5">
        <strong>${score}</strong>
        <span class="diy-stars">${filled}<i>${empty}</i></span>
      </span>
      <small>${note}</small>
    `;
  };

  const selected = diyRobotCatalog.filter((robot) => robot.pick);
  pickList.innerHTML = selected
    .map(
      (robot) => `
        <a href="${robot.source}" target="_blank" rel="noreferrer">
          <span>${robot.pick}</span>
          <strong>${robot.pickLabel || robot.name}</strong>
        </a>
      `,
    )
    .join("");

  const compareRobots = (left, right) => {
    const a = left[sortKey];
    const b = right[sortKey];
    const result =
      typeof a === "string"
        ? a.localeCompare(b, "en", { sensitivity: "base" })
        : a - b;
    if (result !== 0) return result * sortDirection;
    return left.name.localeCompare(right.name, "en", { sensitivity: "base" });
  };

  const render = () => {
    const term = search.value.trim().toLowerCase();
    const selectedType = type.value;
    const visibleRobots = diyRobotCatalog
      .filter((robot) => {
        const typeMatches =
          selectedType === "all" || robot.category === selectedType;
        const pickMatches = pickFilter === "all" || robot.pick;
        const haystack = [
          robot.name,
          robot.type,
          robot.bestUse,
          robot.price,
          ...scores.flatMap(([key]) => [robot[key], robot[`${key}Note`]]),
          robot.pick || "",
        ]
          .join(" ")
          .toLowerCase();
        return typeMatches && pickMatches && (!term || haystack.includes(term));
      })
      .sort(compareRobots);

    tbody.innerHTML = visibleRobots
      .map(
        (robot) => `
          <tr${robot.pick ? ' class="diy-selected"' : ""}>
            <th scope="row">
              <a class="diy-name" href="${robot.source}" target="_blank" rel="noreferrer">
                ${robot.name}
                <small>Official page ↗</small>
              </a>
              ${robot.pick ? `<span class="diy-pick-tag">${robot.pick}</span>` : ""}
            </th>
            <td>${robot.type}</td>
            <td class="diy-best-use">${robot.bestUse}</td>
            <td class="diy-price">${robot.price}</td>
            ${scores
              .map(([key, label]) =>
                `<td>${scoreMarkup(robot[key], robot[`${key}Note`], label)}</td>`,
              )
              .join("")}
          </tr>
        `,
      )
      .join("");

    count.textContent = `${visibleRobots.length} / ${diyRobotCatalog.length}`;
  };

  search.addEventListener("input", render);
  type.addEventListener("change", render);

  pickButtons.forEach((button) => {
    button.addEventListener("click", () => {
      pickFilter = button.dataset.picks;
      pickButtons.forEach((other) =>
        other.classList.toggle("active", other === button),
      );
      render();
    });
  });

  sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextKey = button.dataset.key;
      const scoreKeys = scores.map(([key]) => key);
      const firstDirection = scoreKeys.includes(nextKey) ? -1 : 1;
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

  const initialSort = diyTable.querySelector('[data-key="name"]');
  initialSort.closest("th").setAttribute("aria-sort", "ascending");
  initialSort.querySelector(".dir").textContent = "▲";
  render();
}
