/* Render publications; handle filters & theme. */
(function () {
  "use strict";

  const pubList = document.getElementById("pubList");

  document.getElementById("year").textContent = new Date().getFullYear();

  function marks(p) {
    let m = "";
    if (p.first) m += '<span class="mark first" title="first / co-first author">★</span>';
    if (p.corr) m += '<span class="mark corr" title="corresponding author">†</span>';
    return m;
  }

  function renderPubs(filter) {
    pubList.innerHTML = "";
    let lastYear = null;
    PUBLICATIONS
      .filter(function (p) {
        if (filter === "first") return p.first;
        if (filter === "ccfa") return p.ccfa;
        return true;
      })
      .forEach(function (p) {
        if (p.year !== lastYear) {
          const y = document.createElement("li");
          y.className = "year-sep";
          y.textContent = p.year;
          pubList.appendChild(y);
          lastYear = p.year;
        }
        const li = document.createElement("li");
        li.className = "pub";
        li.setAttribute("data-reveal", "");
        li.innerHTML =
          '<div class="pub-title">' + marks(p) + p.title + "</div>" +
          '<div class="pub-authors">' + highlightMe(p.authors) + "</div>" +
          '<div class="pub-meta"><span class="venue">' + p.venue + "</span></div>";
        pubList.appendChild(li);
      });
  }

  function highlightMe(authors) {
    return authors.replace(/(Yi Zhao)(\*|†)?/g, '<strong class="me">$1</strong>$2');
  }

  // Filters
  document.getElementById("filters").addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;
    this.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    renderPubs(btn.dataset.filter);
    observeReveals();
  });

  // Theme (dark by default; honor saved preference)
  const themeBtn = document.getElementById("themeBtn");
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.documentElement.classList.remove("dark");
  else if (saved === "dark") document.documentElement.classList.add("dark");
  updateThemeIcon();
  themeBtn.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light");
    updateThemeIcon();
  });
  function updateThemeIcon() {
    themeBtn.textContent = document.documentElement.classList.contains("dark") ? "☀" : "☾";
  }

  renderPubs("all");

  /* ---- Decode / scramble text effect ---- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#@%&";
  function scramble(el, delay) {
    const target = el.textContent;
    if (reduceMotion) return;
    const chars = target.split("");
    let start = null;
    const dur = 620 + chars.length * 26;
    function tick(ts) {
      if (start === null) start = ts;
      const t = (ts - start) / dur; // 0..1
      let out = "";
      for (let i = 0; i < chars.length; i++) {
        const c = chars[i];
        if (c === " " || c === " ") { out += c; continue; }
        const reveal = i / chars.length;
        if (t >= reveal + 0.25) out += c;
        else if (t >= reveal) out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
        else out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      el.textContent = out;
      if (t < 1.1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    setTimeout(function () { requestAnimationFrame(tick); }, delay || 0);
  }
  document.querySelectorAll(".scramble").forEach(function (el, i) { scramble(el, 120 + i * 260); });

  /* ---- Scroll reveal ---- */
  let revealObserver = null;
  if ("IntersectionObserver" in window && !reduceMotion) {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); } });
    }, { threshold: 0.12 });
  }
  function observeReveals() {
    document.querySelectorAll("[data-reveal]:not(.in)").forEach(function (el) {
      if (revealObserver) revealObserver.observe(el);
      else el.classList.add("in");
    });
  }
  observeReveals();

  /* ---- Section rail active state ---- */
  const railLinks = {};
  document.querySelectorAll(".rail a").forEach(function (a) {
    const id = a.getAttribute("href").slice(1);
    railLinks[id] = a;
  });
  if ("IntersectionObserver" in window) {
    const sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          Object.values(railLinks).forEach(function (a) { a.classList.remove("active"); });
          if (railLinks[e.target.id]) railLinks[e.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    ["top", "publications", "awards"].forEach(function (id) {
      const el = document.getElementById(id);
      if (el) sio.observe(el);
    });
  }
})();
