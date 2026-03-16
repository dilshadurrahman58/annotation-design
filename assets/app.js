// assets/app.js
// Main app logic. Data lives in data/figures.js and data/considerations.js.
// No fetch required, so it works on file:// and GitHub Pages.

window.addEventListener("DOMContentLoaded", () => {
  const empty = document.getElementById("emptyState");
  if (!window.CONSIDERATIONS?.length || !window.FIGURES?.length) {
    empty.hidden = false;
    empty.textContent =
      "Dataset not loaded. Check that data/considerations.js and data/figures.js exist and are reachable.";
  }
});

(() => {
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
  const supplementaryBtn = document.getElementById("supplementaryBtn");
  const IMAGE_FALLBACK = "images/placeholder.svg";
  const PRIMARY_FALLBACK = "image.png";
  const SUPPLEMENTARY_URL =
    "https://osf.io/y5zw3/overview?view_only=91f4d45f6c1440138c4efac2ca011399";

  // helper to split a source string that may contain a bracketed URL
  function parseSource(src) {
    if (!src) return { text: "", url: null };
    // look for something like "Name [http://...]
    const m = src.match(/^(.*)\s*\[([^\]]+)\]\s*$/);
    if (m) {
      return { text: m[1].trim(), url: m[2].trim() };
    }
    return { text: src, url: null };
  }
  // create an SVG element to use as an external-link icon
  // Feather "external-link" — stroke-based for a clean, modern look
  function createExternalIcon() {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.classList.add("external-icon");
    // rounded box with missing top-right corner
    const box = document.createElementNS(svgNS, "path");
    box.setAttribute(
      "d",
      "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    );
    // top-right arrow corner
    const corner = document.createElementNS(svgNS, "polyline");
    corner.setAttribute("points", "15 3 21 3 21 9");
    // diagonal arrow shaft
    const shaft = document.createElementNS(svgNS, "line");
    shaft.setAttribute("x1", "10");
    shaft.setAttribute("y1", "14");
    shaft.setAttribute("x2", "21");
    shaft.setAttribute("y2", "3");
    svg.appendChild(box);
    svg.appendChild(corner);
    svg.appendChild(shaft);
    return svg;
  }
  const considerations = (window.CONSIDERATIONS || []).slice();
  const figures = (window.FIGURES || []).slice();

  // ---------- State ----------
  const state = {
    selectedConsiderations: new Set(),
    lastFocusedEl: null,
    lastFocusedCard: null,
  };

  // ---------- URL state sync ----------
  function parseUrl() {
    const url = new URL(location.href);
    const c = url.searchParams.get("c");

    if (c)
      c.split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .forEach((v) => state.selectedConsiderations.add(v));
  }

  function syncUrl() {
    const url = new URL(location.href);
    url.searchParams.delete("c");

    const c = [...state.selectedConsiderations].join(",");

    if (c) url.searchParams.set("c", c);

    history.replaceState({}, "", url);
  }

  // ---------- Filtering ----------
  function matchesSet(fig, key, selected) {
    const sel = [...selected];
    if (sel.length === 0) return true;
    const vals = new Set(fig[key] || []);
    return sel.some((v) => vals.has(v));
  }

  function applyFilters() {
    return figures.filter((fig) => {
      if (!matchesSet(fig, "considerations", state.selectedConsiderations))
        return false;
      return true;
    });
  }

  // ---------- Tooltip (for consideration definitions) ----------
  let tooltipEl = null;

  function hideTooltip() {
    if (tooltipEl) {
      tooltipEl.remove();
      tooltipEl = null;
    }
  }

  function showTooltip(anchorEl, text) {
    hideTooltip();
    const rect = anchorEl.getBoundingClientRect();
    tooltipEl = document.createElement("div");
    tooltipEl.className = "tooltip";
    // accept HTML string for rich content
    tooltipEl.innerHTML = text;
    document.body.appendChild(tooltipEl);

    const pad = 10;
    const w = tooltipEl.offsetWidth;
    const h = tooltipEl.offsetHeight;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Horizontal: if anchor is in the left third (sidebar region), open to the right;
    // if anchor is in the right third, open to the left; otherwise center below anchor.
    let x;
    if (rect.left < vw * 0.33) {
      // left region → anchor the tooltip's left edge just past the anchor right edge
      x = rect.right + 10;
    } else if (rect.right > vw * 0.67) {
      // right region → anchor tooltip's right edge just before the anchor left edge
      x = rect.left - w - 10;
    } else {
      x = rect.left + rect.width / 2 - w / 2;
    }
    // clamp within viewport
    x = Math.max(pad, Math.min(vw - w - pad, x));

    // Vertical: prefer below anchor, flip above if it would go off-screen
    let y = rect.bottom + 8;
    if (y + h > vh - pad) y = rect.top - h - 8;
    // final clamp to viewport
    y = Math.max(pad, Math.min(vh - h - pad, y));

    tooltipEl.style.left = `${x}px`;
    tooltipEl.style.top = `${y}px`;
  }

  // ---------- Rendering ----------
  function renderCounts(filtered) {
    const statsEl = $("#stats");
    if (statsEl) {
      statsEl.textContent = `${filtered.length} of ${figures.length}`;
    }
  }

  // mapping for display names used only in filter panel
  const considerationDisplayNames = {
    C1: "Audience",
    C2: "Hierarchy",
    C3: "Associate Placement",
    C4: "Associate Style",
    C5: "Cohesion",
    C6: "Amount",
  };

  function renderConsiderationChips() {
    const row = $("#considerationChips");
    row.innerHTML = "";

    for (const c of considerations) {
      const pressed = state.selectedConsiderations.has(c.id);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.setAttribute("aria-pressed", pressed ? "true" : "false");
      btn.dataset.value = c.id;
      // show the code and the custom name, with the code bold
      const labelSpan = document.createElement("span");
      labelSpan.className = "chip__label";
      const codeEl = document.createElement("strong");
      codeEl.textContent = c.id;
      labelSpan.appendChild(codeEl);
      const name = considerationDisplayNames[c.id] || "";
      if (name) {
        labelSpan.appendChild(document.createTextNode(" " + name));
      }
      btn.appendChild(labelSpan);

      const info = document.createElement("span");
      info.className = "chip__info";
      info.setAttribute("role", "button");
      info.tabIndex = 0;
      info.setAttribute("aria-label", `About ${c.id}`);
      info.textContent = "i";

      // build tooltip HTML: image, ID badge + bold short text, then long description
      const tooltipHtmlName = considerationDisplayNames[c.id] || "";
      const shortText = c.short || "";
      let tooltipHtml = "";
      if (c.img) {
        tooltipHtml += `<img class="tooltip__img" src="${c.img}" alt="${tooltipHtmlName || c.id} illustration">`;
      }
      // badge line: colored ID span + bold short text (short already contains the name so no duplication)
      tooltipHtml += `<div class="tooltip__header"><span class="tooltip__id" data-value="${c.id}">${c.id}</span><strong class="tooltip__short">${shortText}</strong></div>`;
      tooltipHtml += `<p class="tooltip__long">${c.long}</p>`;

      // show tooltip on click/hover
      info.addEventListener("mouseenter", () => showTooltip(info, tooltipHtml));
      info.addEventListener("mouseleave", hideTooltip);
      info.addEventListener("focus", () => showTooltip(info, tooltipHtml));
      info.addEventListener("blur", hideTooltip);
      info.addEventListener("click", (e) => {
        e.stopPropagation();
        showTooltip(info, tooltipHtml);
      });
      info.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          showTooltip(info, tooltipHtml);
        }
      });

      btn.appendChild(info);

      btn.addEventListener("click", () => {
        if (state.selectedConsiderations.has(c.id))
          state.selectedConsiderations.delete(c.id);
        else state.selectedConsiderations.add(c.id);
        syncUrl();
        render();
      });

      row.appendChild(btn);
    }
  }

  function miniChip(text, figSpecificWhy) {
    const s = document.createElement("span");
    s.className = "miniChip";
    s.textContent = text;
    s.dataset.value = text; // allow CSS to color-code based on ID
    // show tooltip on hover/focus with the matching consideration description
    s.tabIndex = 0; // make focusable
    function buildMiniChipTooltip(cDef) {
      const name = considerationDisplayNames[cDef.id] || "";
      let html = "";
      if (cDef.img) {
        html += `<img class="tooltip__img" src="${cDef.img}" alt="${name || cDef.id} illustration">`;
      }
      // badge + bold short text — no duplication since short already contains the name
      html += `<div class="tooltip__header"><span class="tooltip__id" data-value="${cDef.id}">${cDef.id}</span><strong class="tooltip__short">${cDef.short || name}</strong></div>`;
      // use figure-specific evidence reason if available, otherwise fall back to general description
      const desc = figSpecificWhy || cDef.long;
      html += `<p class="tooltip__long">${desc}</p>`;
      return html;
    }
    s.addEventListener("mouseenter", () => {
      const cDef = considerations.find((c) => c.id === text);
      if (cDef) showTooltip(s, buildMiniChipTooltip(cDef));
    });
    s.addEventListener("mouseleave", hideTooltip);
    s.addEventListener("focus", () => {
      const cDef = considerations.find((c) => c.id === text);
      if (cDef) {
        const tooltipHtml = buildMiniChipTooltip(cDef);
        showTooltip(s, tooltipHtml);
      }
    });
    s.addEventListener("blur", hideTooltip);
    return s;
  }

  function setFigureImage(imgEl, fig, { lazy = false } = {}) {
    const title = fig?.title || fig?.id || "Figure";
    const candidates = [
      fig?.img,
      fig?.id ? `images/${fig.id}.png` : "",
      fig?.id ? `images/${fig.id}.jpg` : "",
      PRIMARY_FALLBACK,
      IMAGE_FALLBACK,
    ].filter(Boolean);

    imgEl.classList.remove("img--fallback");
    imgEl.decoding = "async";
    if (lazy) imgEl.loading = "lazy";
    let idx = 0;
    const tryNext = () => {
      const src = candidates[idx++];
      if (!src) return;
      imgEl.alt =
        src === IMAGE_FALLBACK ? `${title} (image unavailable)` : title;
      imgEl.src = src;
      if (src === PRIMARY_FALLBACK || src === IMAGE_FALLBACK) {
        imgEl.classList.add("img--fallback");
      }
    };

    imgEl.onerror = () => {
      if (idx >= candidates.length) {
        imgEl.onerror = null;
        return;
      }
      tryNext();
    };
    tryNext();
  }

  const consOrder = ["C1", "C2", "C3", "C4", "C5", "C6"];
  function sortCons(arr) {
    return (arr || []).slice().sort((a, b) => {
      const ia = consOrder.indexOf(a);
      const ib = consOrder.indexOf(b);
      return ia - ib;
    });
  }

  function renderGallery(filtered) {
    const grid = $("#gallery");
    const empty = $("#emptyState");

    grid.innerHTML = "";
    empty.hidden = filtered.length !== 0;

    for (const fig of filtered) {
      // ensure consistent ordering of considerations
      fig.considerations = sortCons(fig.considerations);
      const card = document.createElement("article");
      card.className = "card";

      const img = document.createElement("img");
      img.className = "card__img";
      setFigureImage(img, fig, { lazy: true });
      img.addEventListener("load", () => img.classList.add("img--loaded"), {
        once: true,
      });

      const body = document.createElement("div");
      body.className = "card__body";

      const title = document.createElement("h3");
      title.className = "card__title";
      title.textContent = fig.title;

      const meta = document.createElement("div");
      meta.className = "card__meta";
      // build metadata with clickable source link if available
      const src = parseSource(fig.source);
      if (src.url) {
        const a = document.createElement("a");
        a.href = src.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = src.text;
        a.className = "external";
        a.setAttribute("aria-label", src.text + " (opens in new tab)");
        a.appendChild(createExternalIcon());
        meta.appendChild(a);
      } else {
        meta.appendChild(document.createTextNode(src.text));
      }
      if (fig.year) meta.appendChild(document.createTextNode(" • " + fig.year));
      meta.appendChild(document.createTextNode(" • " + fig.chartType));

      const chips = document.createElement("div");
      chips.className = "card__chips";
      (fig.considerations || []).forEach((c) =>
        chips.appendChild(
          miniChip(c, (fig.perConsiderationWhy || {})[c] || null),
        ),
      );

      const why = document.createElement("p");
      why.className = "card__why";
      why.textContent = fig.whyShort || "";

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "card__btn";
      btn.innerHTML =
        '<span>View evidence</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="13" height="13" aria-hidden="true" class="card__btn-arrow"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

      // make the whole card interactive
      card.tabIndex = 0; // focusable for keyboard users
      card.addEventListener("click", (e) => {
        // ignore clicks on the button itself (it already handles click)
        if (e.target.closest(".card__btn")) return;
        openDrawer(fig, card);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDrawer(fig, card);
        }
      });

      btn.addEventListener("click", () => openDrawer(fig, btn));
      // still support double-click on the card for those who expect it
      card.addEventListener("dblclick", () => openDrawer(fig, btn));

      body.appendChild(title);
      body.appendChild(meta);
      body.appendChild(chips);
      body.appendChild(why);
      body.appendChild(btn);

      card.appendChild(img);
      card.appendChild(body);

      grid.appendChild(card);
    }
  }

  // ---------- Drawer ----------
  const overlay = $("#overlay");
  const drawer = $("#drawer");
  const drawerClose = $("#drawerClose");
  const drawerBody = $(".drawer__body", drawer);
  const chartPopout = document.getElementById("chartPopout");
  const chartPopoutImg = document.getElementById("chartPopoutImg");
  const chartPopoutLabel = document.getElementById("chartPopoutLabel");

  function syncBodyScrollLock() {
    const considerationsEl = document.getElementById("considerationsDrawer");
    const isDrawerOpen = drawer && !drawer.hidden;
    const isConsiderationsOpen = considerationsEl && !considerationsEl.hidden;
    document.body.style.overflow =
      isDrawerOpen || isConsiderationsOpen ? "hidden" : "";
  }

  function setDrawerOpen(open) {
    if (open) {
      overlay.hidden = false;
      drawer.hidden = false;
      overlay.dataset.open = "true";
      drawer.dataset.open = "true";
      drawer.setAttribute("aria-hidden", "false");
    } else {
      overlay.dataset.open = "false";
      drawer.dataset.open = "false";
      drawer.setAttribute("aria-hidden", "true");
      overlay.hidden = true;
      drawer.hidden = true;
    }
    syncBodyScrollLock();
  }

  function openDrawer(fig, focusReturnEl) {
    state.lastFocusedEl = focusReturnEl || document.activeElement;

    // Highlight the clicked card and scroll it into view so it
    // stays visible to the left of the drawer while the user reads the details.
    try {
      const cardEl = focusReturnEl?.closest
        ? focusReturnEl.closest(".card")
        : null;
      if (state.lastFocusedCard) {
        state.lastFocusedCard.classList.remove("card--focused");
      }
      if (cardEl) {
        state.lastFocusedCard = cardEl;
        cardEl.classList.add("card--focused");
        cardEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    } catch (e) {}

    $("#drawerTitle").textContent = fig.title || fig.id || "Figure";
    // build drawer meta line with clickable source
    const metaLine = document.getElementById("drawerMeta");
    metaLine.innerHTML = "";
    const srcInfo = parseSource(fig.source);
    if (srcInfo.url) {
      const a = document.createElement("a");
      a.href = srcInfo.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = srcInfo.text;
      a.className = "external";
      a.setAttribute("aria-label", srcInfo.text + " (opens in new tab)");
      a.appendChild(createExternalIcon());
      metaLine.appendChild(a);
    } else if (srcInfo.text) {
      metaLine.textContent = srcInfo.text;
    }
    if (fig.year)
      metaLine.appendChild(document.createTextNode(" • " + fig.year));
    metaLine.appendChild(document.createTextNode(" • " + fig.chartType));
    if (fig.considerations && fig.considerations.length) {
      const sorted = sortCons(fig.considerations);
      metaLine.appendChild(document.createTextNode(" • " + sorted.join(" · ")));
      fig.considerations = sorted; // keep sorted for subsequent use
    }
    setFigureImage($("#drawerImg"), fig);
    $("#drawerWhy").textContent = fig.whyShort || "";
    if (drawerBody) drawerBody.scrollTop = 0;

    const bullets = $("#drawerBullets");
    bullets.innerHTML = "";
    (fig.evidenceBullets || []).forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      bullets.appendChild(li);
    });

    const perC = $("#drawerPerC");
    perC.innerHTML = "";
    const pc = fig.perConsiderationWhy || {};
    const sortedC = sortCons(fig.considerations);
    sortedC.forEach((cId) => {
      const cDef = considerations.find((x) => x.id === cId);
      const block = document.createElement("div");
      block.className = "perC__item";
      // create id span for coloring, omit the dash
      const shortText = cDef ? cDef.short : "";
      block.innerHTML = `<strong><span class=\"perC__id\" data-value=\"${cId}\">${cId}</span>${shortText ? " " + shortText : ""}</strong><p>${pc[cId] || ""}</p>`;
      perC.appendChild(block);
    });

    const kv = $("#drawerKV");
    kv.innerHTML = "";
    const pairs = [
      ["Source", fig.source],
      ["Year", fig.year ?? ""],
      ["Chart type", fig.chartType],
      ["Annotation types", (fig.annotationTypes || []).join(", ")],
      ["Evidence tags", (fig.evidenceTags || []).join(", ")],
      ["Considerations", (sortCons(fig.considerations) || []).join(", ")],
    ];
    for (const [k, v] of pairs) {
      const a = document.createElement("div");
      a.textContent = k;
      const b = document.createElement("div");
      if (k === "Source" && typeof v === "string") {
        const src = parseSource(v);
        if (src.url) {
          const link = document.createElement("a");
          link.href = src.url;
          link.target = "_blank";
          link.rel = "noopener";
          link.textContent = src.text;
          link.className = "external";
          link.setAttribute("aria-label", src.text + " (opens in new tab)");
          link.appendChild(createExternalIcon());
          b.appendChild(link);
        } else {
          b.textContent = src.text;
        }
      } else {
        b.textContent = String(v ?? "");
      }
      kv.appendChild(a);
      kv.appendChild(b);
    }

    const caveatBox = $("#drawerCaveatBox");
    if (fig.caveat) {
      caveatBox.hidden = false;
      $("#drawerCaveat").textContent = fig.caveat;
    } else {
      caveatBox.hidden = true;
      $("#drawerCaveat").textContent = "";
    }

    // Show chart popout panel to the left of the drawer
    if (chartPopout && chartPopoutImg) {
      setFigureImage(chartPopoutImg, fig);
      if (chartPopoutLabel)
        chartPopoutLabel.textContent = fig.title || fig.id || "";
      chartPopout.hidden = false;
      // Trigger CSS transition on next frame
      requestAnimationFrame(() => {
        chartPopout.setAttribute("data-open", "true");
      });
    }

    setDrawerOpen(true);
    drawerClose.focus();
    trapFocusEnable();
  }

  function closeDrawer() {
    trapFocusDisable();
    setDrawerOpen(false);
    hideTooltip();
    // Hide chart popout
    if (chartPopout) {
      chartPopout.removeAttribute("data-open");
      setTimeout(() => {
        chartPopout.hidden = true;
      }, 340);
    }
    // remove highlight from the previously focused card
    try {
      if (state.lastFocusedCard) {
        state.lastFocusedCard.classList.remove("card--focused");
        state.lastFocusedCard = null;
      }
    } catch (e) {}
    if (
      state.lastFocusedEl &&
      typeof state.lastFocusedEl.focus === "function"
    ) {
      state.lastFocusedEl.focus();
    }
    state.lastFocusedEl = null;
  }

  overlay.addEventListener("click", closeDrawer);
  drawerClose.addEventListener("click", closeDrawer);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideTooltip();
      if (!drawer.hidden) closeDrawer();
    }
  });

  // Focus trap (simple + reliable)
  let trapEnabled = false;
  function getFocusable(container) {
    return $$(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      container,
    ).filter(
      (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"),
    );
  }

  function trapHandler(e) {
    if (!trapEnabled || e.key !== "Tab") return;
    const focusables = getFocusable(drawer);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function trapFocusEnable() {
    trapEnabled = true;
    document.addEventListener("keydown", trapHandler);
  }

  function trapFocusDisable() {
    trapEnabled = false;
    document.removeEventListener("keydown", trapHandler);
  }

  // ---------- Clear / Inputs ----------
  function clearFilters() {
    state.selectedConsiderations.clear();
    syncUrl();
    render();
  }

  // If a static clear button exists (older layouts), attach handler.
  const staticClearBtn = $("#clearBtn");
  if (staticClearBtn) staticClearBtn.addEventListener("click", clearFilters);

  function updateClearButton() {
    if (!staticClearBtn) return;
    const hasActiveFilters = state.selectedConsiderations.size > 0;
    staticClearBtn.textContent = hasActiveFilters
      ? `Clear (${state.selectedConsiderations.size})`
      : "Clear";
    staticClearBtn.hidden = !hasActiveFilters;
    staticClearBtn.disabled = !hasActiveFilters;
  }

  // ---------- Main render ----------
  function render() {
    const filtered = applyFilters();
    renderCounts(filtered);
    renderConsiderationChips();
    renderGallery(filtered);
    updateClearButton();
  }

  // ---------- Boot ----------
  parseUrl();

  // Supplementary button is a plain anchor in the DOM; no JS-enhancement required.

  // close tooltip on scroll/resize to avoid awkward placement
  window.addEventListener("scroll", hideTooltip, { passive: true });
  window.addEventListener("resize", hideTooltip);

  // ---------- Considerations drawer (pop-out) ----------
  const openConsiderationsBtn = document.getElementById("openConsiderations");
  const overlayConsiderations = document.getElementById(
    "overlayConsiderations",
  );
  const considerationsDrawer = document.getElementById("considerationsDrawer");
  const considerationsClose = document.getElementById("considerationsClose");
  const considerationsBody = document.getElementById("considerationsBody");
  const filterLabel = document.getElementById("filterConsiderationsLabel");
  let lastFocusedConsiderationsEl = null;

  function setConsiderationsOpen(open) {
    if (open) {
      lastFocusedConsiderationsEl = document.activeElement;
      overlayConsiderations.hidden = false;
      considerationsDrawer.hidden = false;
      overlayConsiderations.dataset.open = "true";
      considerationsDrawer.dataset.open = "true";
      considerationsDrawer.setAttribute("aria-hidden", "false");
      if (openConsiderationsBtn)
        openConsiderationsBtn.setAttribute("aria-expanded", "true");
      if (filterLabel) filterLabel.setAttribute("aria-expanded", "true");
      if (considerationsClose) considerationsClose.focus();
    } else {
      overlayConsiderations.dataset.open = "false";
      considerationsDrawer.dataset.open = "false";
      considerationsDrawer.setAttribute("aria-hidden", "true");
      overlayConsiderations.hidden = true;
      considerationsDrawer.hidden = true;
      if (openConsiderationsBtn)
        openConsiderationsBtn.setAttribute("aria-expanded", "false");
      if (filterLabel) filterLabel.setAttribute("aria-expanded", "false");
      if (
        lastFocusedConsiderationsEl &&
        typeof lastFocusedConsiderationsEl.focus === "function"
      ) {
        lastFocusedConsiderationsEl.focus();
      }
      lastFocusedConsiderationsEl = null;
    }
    syncBodyScrollLock();
  }

  function renderConsiderationsDrawer() {
    const list = window.CONSIDERATIONS || [];
    considerationsBody.innerHTML = "";
    // mapping from consideration id to representative image filename
    const imageMap = {
      C1: "1-audience.png",
      C2: "2-hierarchy.png",
      C3: "3-associate-placement.png",
      C4: "4-association.png",
      C5: "5-cohesion.png",
      C6: "6-amount.png",
    };

    for (const c of list) {
      const item = document.createElement("div");
      item.className = "consideration__item";

      // header with colored ID, short description, and (optionally) full name
      const header = document.createElement("div");
      header.className = "consideration__header";
      const idSpan = document.createElement("span");
      idSpan.className = "consideration__id";
      idSpan.dataset.value = c.id; // for coloring via CSS
      idSpan.textContent = c.id;
      header.appendChild(idSpan);
      // short text is the headline — no redundant full name after it
      if (c.short) {
        const shortSpan = document.createElement("span");
        shortSpan.className = "consideration__shortName";
        shortSpan.textContent = c.short;
        header.appendChild(shortSpan);
      }

      // illustration (may be hidden if missing)
      const img = document.createElement("img");
      img.className = "consideration__img";
      const name = considerationDisplayNames[c.id] || "";
      img.alt = name ? `${name} illustration` : c.id;
      if (c.img) {
        img.src = c.img;
      } else if (imageMap[c.id]) {
        img.src = `considerations/${imageMap[c.id]}`;
      } else {
        img.hidden = true;
      }

      // long description only (short text is in header now)
      const long = document.createElement("div");
      long.className = "consideration__long";
      long.textContent = c.long || "";

      const texts = document.createElement("div");
      texts.className = "consideration__texts";
      texts.appendChild(long);

      // body: image on the left, text on the right
      const body = document.createElement("div");
      body.className = "consideration__body";
      body.appendChild(img);
      body.appendChild(texts);

      // assemble item: header spans full width, body below
      item.appendChild(header);
      item.appendChild(body);

      considerationsBody.appendChild(item);
    }
  }

  if (openConsiderationsBtn) {
    openConsiderationsBtn.addEventListener("click", () => {
      const willOpen = considerationsDrawer.hidden;
      setConsiderationsOpen(willOpen);
      if (willOpen) renderConsiderationsDrawer();
    });
  }

  // make the filter heading clickable too
  if (filterLabel) {
    const openFn = () => {
      if (openConsiderationsBtn) openConsiderationsBtn.click();
    };
    filterLabel.addEventListener("click", openFn);
    filterLabel.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFn();
      }
    });
  }

  if (overlayConsiderations)
    overlayConsiderations.addEventListener("click", () =>
      setConsiderationsOpen(false),
    );
  if (considerationsClose)
    considerationsClose.addEventListener("click", () =>
      setConsiderationsOpen(false),
    );

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !considerationsDrawer.hidden) {
      setConsiderationsOpen(false);
    }
  });

  render();
})();
