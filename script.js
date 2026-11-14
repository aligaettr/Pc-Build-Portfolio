const builds = [
  {
    id: "goat",
    index: "01",
    name: "the goat (me)",
    badge: "THE ORIGINAL",
    chips: ["i5-14400F", "RX 9060 XT · 16GB"],
    tagline: "The original build. My daily driver.",
    cover: { src: "assets/goat-desk.jpg", alt: "The daily-driver desk with a ViewSonic monitor, a Honeywell air purifier, a microphone and a compact black PC with blue lighting", w: 1465, h: 1600, pos: "50% 52%" },
    images: [
      { src: "assets/goat-desk.jpg", alt: "The daily-driver desk with a ViewSonic monitor, a Honeywell air purifier, a microphone and a compact black PC with blue lighting", caption: "the desk", w: 1465, h: 1600 }
    ],
    pitch: "This is the one that started it. My own first build: an i5-14400F, an RX 9060 XT Steel Legend with 16GB of VRAM, 16GB of DDR5, and a 1440p ViewSonic. It shares the desk with a Honeywell air purifier and a Zoom mic — and it's still the machine I use every day.",
    note: "The air purifier is part of the setup, not an afterthought.",
    specs: [
      { k: "CPU", g: "i5 14400F", p: "Intel Core i5-14400F" },
      { k: "GPU", g: "RX 9060 XT Steel Legend · 16GB", p: "ASRock Radeon RX 9060 XT Steel Legend · 16GB" },
      { k: "Memory", g: "16GB DDR5 · CL38", p: "16GB DDR5 · CL38" },
      { k: "Display", g: "ViewSonic 185Hz 1440p", p: "ViewSonic 185Hz 1440p" },
      { k: "Extras", g: "Honeywell air purifier · Zoom cardioid mic", p: "Honeywell air purifier · Zoom cardioid microphone" }
    ]
  },
  {
    id: "mr-red-fan",
    index: "02",
    name: "mr. red fan",
    badge: "EARLY BUILD",
    chips: ["R5 5600G", "RTX 5050 · 8GB"],
    tagline: "Red-ring fans, stickers, and an RTX 5050.",
    cover: { src: "assets/sh-case.jpg", alt: "Black glass-panel PC with red ring fans, an MSI GeForce RTX card and several stickers", w: 960, h: 1280, pos: "50% 50%" },
    images: [
      { src: "assets/sh-case.jpg", alt: "Black glass-panel PC with red ring fans, an MSI GeForce RTX card and several stickers", caption: "the build", w: 960, h: 1280 },
      { src: "assets/sh-desk.jpg", alt: "Desk setup with an Acer monitor showing a Sekiro wallpaper, a mechanical keyboard and a red-accent mouse", caption: "the desk", w: 1600, h: 1165 }
    ],
    pitch: "An early build: Ryzen 5 5600G, RTX 5050 with 8GB of VRAM, and 16GB of DDR4. The red-ring fan and the sticker collection do most of the visual work.",
    note: "The red-ring fan is still the best part of the case.",
    specs: [
      { k: "CPU", g: "R5 5600G", p: "AMD Ryzen 5 5600G" },
      { k: "GPU", g: "RTX 5050 · 8GB", p: "NVIDIA GeForce RTX 5050 · 8GB" },
      { k: "Memory", g: "16GB DDR4", p: "16GB DDR4" },
      { k: "Display", g: "Acer 1080p", p: "Acer 1080p monitor" }
    ]
  },
  {
    id: "dumb-monitor",
    index: "03",
    name: "dumb monitor",
    badge: "UPGRADE ERA",
    chips: ["R5 5500", "RTX 4060 Ti · 8GB"],
    tagline: "A step up, with the curved Samsung monitor.",
    cover: { src: "assets/sh1-case.jpg", alt: "Black PC case with a green illuminated fan ring on a desk with a monitor and a soundbar", w: 1200, h: 1600, pos: "62% 48%" },
    images: [
      { src: "assets/sh1-case.jpg", alt: "Black PC case with a green illuminated fan ring on a desk with a monitor and a soundbar", caption: "the build", w: 1200, h: 1600 },
      { src: "assets/sh1-monitor.jpg", alt: "Samsung curved ultrawide monitor displaying a game, with a controller, keyboard, mouse and a yellow duck on the desk", caption: "the curved Samsung", w: 1600, h: 1200 }
    ],
    pitch: "The next step: Ryzen 5 5500, RTX 4060 Ti with 8GB of VRAM, and 16GB of DDR4. The curved Samsung monitor is the centerpiece, and the green fan ring adds some personality.",
    note: "Cable management is still a work in progress.",
    specs: [
      { k: "CPU", g: "R5 5500", p: "AMD Ryzen 5 5500" },
      { k: "GPU", g: "RTX 4060 Ti · 8GB", p: "NVIDIA GeForce RTX 4060 Ti · 8GB" },
      { k: "Memory", g: "16GB DDR4", p: "16GB DDR4" },
      { k: "Display", g: "Samsung curved monitor", p: "Samsung curved monitor" }
    ]
  },
  {
    id: "larp-gamer",
    index: "04",
    name: "larp gamer",
    badge: "BIG UPGRADE",
    chips: ["R7 9800X3D", "RTX 5070 Ti"],
    tagline: "9800X3D, 5070 Ti, and a racing wheel.",
    cover: { src: "assets/sh2-rig.jpg", alt: "White PC build with purple lighting beside a brick wall, with a racing wheel and shifter in front of an LG monitor running Forza", w: 960, h: 1280, pos: "50% 60%" },
    images: [
      { src: "assets/sh2-rig.jpg", alt: "White PC build with purple lighting beside a brick wall, with a racing wheel and shifter in front of an LG monitor running Forza", caption: "the build", w: 960, h: 1280 }
    ],
    pitch: "The high-spec build: Ryzen 7 9800X3D, RTX 5070 Ti, 64GB of DDR5, and two SSDs. White case, purple lighting, and a racing wheel for Forza.",
    note: "The racing wheel takes up more desk space than the PC.",
    specs: [
      { k: "CPU", g: "R7 9800X3D", p: "AMD Ryzen 7 9800X3D" },
      { k: "GPU", g: "RTX 5070 Ti · triple-fan", p: "NVIDIA GeForce RTX 5070 Ti · triple-fan" },
      { k: "Memory", g: "64GB DDR5", p: "64GB DDR5" },
      { k: "Storage", g: "2TB + 1TB SSD", p: "2TB + 1TB SSD" },
      { k: "Display", g: "LG gaming monitor", p: "LG gaming monitor" }
    ]
  },
  {
    id: "sh3",
    index: "05",
    name: "sh3",
    badge: "INTEL BUILD",
    chips: ["Ultra 7 270K Plus", "RTX 5070"],
    tagline: "The Intel build, with pink fans and a 200Hz BenQ.",
    cover: { src: "assets/sh3-case.jpg", alt: "Glass-panel PC with pink and purple RGB fans and a Gigabyte GeForce RTX graphics card", w: 899, h: 1599, pos: "50% 45%" },
    images: [
      { src: "assets/sh3-case.jpg", alt: "Glass-panel PC with pink and purple RGB fans and a Gigabyte GeForce RTX graphics card", caption: "the case", w: 899, h: 1599 },
      { src: "assets/sh3-desk.jpg", alt: "Gaming desk with a white monitor showing Valorant, pink keyboard lighting and a white PC with pink fans", caption: "the desk", w: 1599, h: 899 }
    ],
    pitch: "An Intel build: Core Ultra 7 270K Plus, RTX 5070, 16GB of DDR5, and a 200Hz BenQ monitor. The pink fans were a deliberate choice.",
    note: "The pink lighting is staying.",
    specs: [
      { k: "CPU", g: "Intel Ultra 7 270K Plus", p: "Intel Core Ultra 7 270K Plus" },
      { k: "GPU", g: "RTX 5070", p: "NVIDIA GeForce RTX 5070" },
      { k: "Memory", g: "16GB DDR5", p: "16GB DDR5" },
      { k: "Display", g: "BenQ 200Hz", p: "BenQ 200Hz monitor" }
    ]
  },
  {
    id: "leo",
    index: "06",
    name: "leo",
    badge: "SFF BUILD",
    chips: ["R5 7600X", "RTX 5070 Ti · SFF"],
    tagline: "A small-form-factor 5070 Ti build.",
    cover: { src: "assets/leo-desk.jpg", alt: "Desk with a black PC glowing white, a monitor running Playnite, a tablet dashboard and a mechanical keyboard", w: 1280, h: 960, pos: "50% 50%" },
    images: [
      { src: "assets/leo-desk.jpg", alt: "Desk with a black PC glowing white, a monitor running Playnite, a tablet dashboard and a mechanical keyboard", caption: "the desk", w: 1280, h: 960 }
    ],
    pitch: "A small-form-factor 5070 Ti build with a Ryzen 5 7600X, 32GB of DDR5, a 1TB Gen4 SSD, and a 240Hz ViewSonic. The compact case makes cable management interesting.",
    note: "Small case, full-size GPU. Worth the extra build time.",
    specs: [
      { k: "CPU", g: "R5 7600X", p: "AMD Ryzen 5 7600X" },
      { k: "GPU", g: "RTX 5070 Ti · 16GB · SFF", p: "NVIDIA GeForce RTX 5070 Ti · 16GB · SFF" },
      { k: "Memory", g: "32GB DDR5", p: "32GB DDR5" },
      { k: "Storage", g: "1TB PCIe 4 SSD", p: "1TB PCIe 4.0 SSD" },
      { k: "Display", g: "ViewSonic 240Hz", p: "ViewSonic 240Hz gaming monitor" }
    ]
  },
  {
    id: "bruh",
    index: "07",
    name: "bruh",
    badge: "iGPU BUILD",
    chips: ["R7 7700X", "iGPU"],
    tagline: "The white integrated-graphics build.",
    cover: { src: "assets/bruh-rig.jpg", alt: "White PC with icy blue RGB next to a monitor showing a Hatsune Miku wallpaper", w: 1600, h: 1200, pos: "50% 50%" },
    images: [
      { src: "assets/bruh-rig.jpg", alt: "White PC with icy blue RGB next to a monitor showing a Hatsune Miku wallpaper", caption: "the build", w: 1600, h: 1200 }
    ],
    pitch: "The white build: Ryzen 7 7700X running on integrated graphics, 16GB of DDR5, and a Hatsune Miku wallpaper. It handles everyday work and light gaming.",
    note: "Quiet, low-power, and fine for everyday work.",
    specs: [
      { k: "CPU", g: "R7 7700X", p: "AMD Ryzen 7 7700X" },
      { k: "GPU", g: "Integrated graphics", p: "Integrated graphics" },
      { k: "Memory", g: "16GB (2×8GB) DDR5", p: "16GB (2×8GB) DDR5" },
      { k: "Display", g: "BenQ 200Hz", p: "BenQ 200Hz monitor" }
    ]
  }
];

const state = {
  mode: loadMode(),
  current: 0,
  lastTrigger: null
};

const grid = document.getElementById("buildsGrid");
const dialog = document.getElementById("dossier");
const dossierBody = dialog.querySelector(".dossier-body");
const refs = {
  kicker: document.getElementById("dossierKicker"),
  title: document.getElementById("dossierTitle"),
  badge: document.getElementById("dossierBadge"),
  gallery: document.getElementById("dossierGallery"),
  pitch: document.getElementById("dossierPitch"),
  specs: document.getElementById("dossierSpecs"),
  note: document.getElementById("dossierNote"),
  prev: document.getElementById("dossierPrev"),
  next: document.getElementById("dossierNext")
};

function loadMode() {
  try {
    return localStorage.getItem("spec-mode") === "pro" ? "pro" : "gremlin";
  } catch (error) {
    return "gremlin";
  }
}

function saveMode(mode) {
  try {
    localStorage.setItem("spec-mode", mode);
  } catch (error) {
    /* storage can be unavailable on file:// or in private mode */
  }
}

function renderCards() {
  const cards = builds.map((build) => {
    const acid = build.badge === "THE ORIGINAL" ? " build-badge--acid" : "";
    return `
      <article class="build-card">
        <button class="build-hit" type="button" data-build="${build.id}" aria-haspopup="dialog" aria-label="View build: ${build.name} — ${build.tagline}">
          <div class="build-media">
            <img src="${build.cover.src}" alt="${build.cover.alt}" width="${build.cover.w}" height="${build.cover.h}" loading="lazy" style="object-position:${build.cover.pos}">
            <div class="build-flags">
              <span class="build-index">${build.index}</span>
              <span class="build-badge${acid}">${build.badge}</span>
            </div>
          </div>
          <div class="build-body">
            <div class="build-chips">${build.chips.map((chip) => `<span>${chip}</span>`).join("")}</div>
            <h3>${build.name}</h3>
            <p class="build-tag">${build.tagline}</p>
            <span class="build-link">View build <span aria-hidden="true">→</span></span>
          </div>
        </button>
      </article>`;
  });

  cards.push(`
    <article class="build-card build-card--cta">
      <div class="cta-inner">
        <span class="cta-plus" aria-hidden="true">+</span>
        <div>
          <p class="build-index">Build 08?</p>
          <h3>Have a build in mind?</h3>
          <p>Custom desktops, upgrades, and honest spec sheets.</p>
        </div>
        <a class="btn btn--solid" href="mailto:aryanrajesh2019@gmail.com?subject=PC%20build%20enquiry">Get in touch <span aria-hidden="true">↗</span></a>
      </div>
    </article>`);

  grid.innerHTML = cards.join("");
  grid.classList.add("reveal");

  grid.querySelectorAll("[data-build]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = builds.findIndex((build) => build.id === button.dataset.build);
      state.lastTrigger = button;
      openBuild(index);
    });
  });
}

function renderDossier(index) {
  const build = builds[index];
  state.current = index;

  refs.kicker.textContent = `Build ${build.index} / ${String(builds.length).padStart(2, "0")}`;
  refs.title.textContent = build.name;
  refs.badge.textContent = build.badge;
  refs.badge.hidden = !build.badge;
  refs.pitch.textContent = build.pitch;
  refs.note.textContent = build.note;

  refs.gallery.innerHTML = build.images.map((image, i) => `
    <figure>
      <img src="${image.src}" alt="${image.alt}" width="${image.w}" height="${image.h}" loading="lazy">
      <figcaption>fig. ${String(i + 1).padStart(2, "0")} — ${image.caption}</figcaption>
    </figure>`).join("");
  refs.gallery.classList.toggle("is-single", build.images.length === 1);

  renderSpecs(false);

  const prev = builds[(index - 1 + builds.length) % builds.length];
  const next = builds[(index + 1) % builds.length];
  refs.prev.querySelector(".dossier-nav-label").textContent = `${prev.index} · ${prev.name}`;
  refs.next.querySelector(".dossier-nav-label").textContent = `${next.index} · ${next.name}`;
}

function renderSpecs(animate) {
  const build = builds[state.current];
  refs.specs.innerHTML = build.specs.map((spec) => `
    <div class="spec-row">
      <dt>${spec.k}</dt>
      <dd>${state.mode === "pro" ? spec.p : spec.g}</dd>
    </div>`).join("");

  if (animate) {
    refs.specs.classList.remove("swap");
    void refs.specs.offsetWidth;
    refs.specs.classList.add("swap");
  }
}

function setMode(mode) {
  state.mode = mode;
  saveMode(mode);

  document.querySelectorAll("[data-spec-switch] button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.mode === mode));
  });

  if (dialog.open) {
    renderSpecs(true);
  }
}

function openBuild(index) {
  renderDossier(index);

  if (!dialog.open) {
    dialog.showModal();
    document.documentElement.classList.add("lock");
  }

  dossierBody.scrollTop = 0;
}

function closeDossier() {
  if (dialog.open) {
    dialog.close();
  }
}

function navigate(direction) {
  const nextIndex = (state.current + direction + builds.length) % builds.length;
  renderDossier(nextIndex);
  dossierBody.scrollTop = 0;
}

document.querySelectorAll("[data-spec-switch] button").forEach((button) => {
  button.setAttribute("aria-pressed", String(button.dataset.mode === state.mode));
});

document.addEventListener("click", (event) => {
  const modeButton = event.target.closest("[data-spec-switch] button");
  if (modeButton) {
    setMode(modeButton.dataset.mode);
  }
});

dialog.querySelector("[data-close]").addEventListener("click", closeDossier);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeDossier();
  }
});
dialog.addEventListener("close", () => {
  document.documentElement.classList.remove("lock");
  if (state.lastTrigger) {
    state.lastTrigger.focus();
  }
});
dialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    navigate(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    navigate(1);
  }
});
dialog.querySelectorAll("[data-dir]").forEach((button) => {
  button.addEventListener("click", () => navigate(Number(button.dataset.dir)));
});

renderCards();

document.getElementById("year").textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  elements.forEach((element) => observer.observe(element));
}

function setupNav() {
  const nav = document.getElementById("siteNav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const links = Array.from(document.querySelectorAll(".nav-links a"));
  const sections = ["top", "builds", "work", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      links.forEach((link) => {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });
      const active = links.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
      if (active) {
        active.classList.add("is-active");
        active.setAttribute("aria-current", "location");
      }
    });
  }, { rootMargin: "-42% 0px -52% 0px", threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

function setupHeroGlow() {
  if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) {
    return;
  }

  const hero = document.querySelector(".hero");
  const glow = hero.querySelector(".hero-glow");
  let frame = null;
  let x = 0;
  let y = 0;

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;

    if (frame) {
      return;
    }

    frame = requestAnimationFrame(() => {
      glow.style.setProperty("--mx", `${x}px`);
      glow.style.setProperty("--my", `${y}px`);
      frame = null;
    });
  });
}

setupReveal();
setupNav();
setupHeroGlow();
