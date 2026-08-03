/* Homepage: render publications, filters, theme, subtle scroll reveal. */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("year").textContent = new Date().getFullYear();

  /* Scroll reveal — set up first so renderPubs() can register new items. */
  let revealObserver = null;
  if ("IntersectionObserver" in window && !reduceMotion) {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); } });
    }, { threshold: 0.1 });
  }
  function observeReveals() {
    document.querySelectorAll("[data-reveal]:not(.in)").forEach(function (el) {
      if (revealObserver) revealObserver.observe(el);
      else el.classList.add("in");
    });
  }

  /* ---- Publications ---- */
  const pubList = document.getElementById("pubList");

  function marks(p) {
    let m = "";
    if (p.first) m += '<span class="mark first" title="first / co-first author">★</span> ';
    if (p.corr) m += '<span class="mark corr" title="corresponding author">†</span> ';
    return m;
  }
  function badges(p) {
    if (!p.tags || !p.tags.length) return "";
    return p.tags.map(function (t) {
      const cls = t === "CCF-A" ? "ccfa" : t === "CCF-B" ? "ccfb" : "";
      return '<span class="badge ' + cls + '">' + t + "</span>";
    }).join("");
  }
  function highlightMe(authors) {
    return authors.replace(/(Yi Zhao)(\*|†)?/g, '<span class="me">$1</span>$2');
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
        li.innerHTML =
          '<div class="pub-title">' + marks(p) + p.title + "</div>" +
          '<div class="pub-authors">' + highlightMe(p.authors) + "</div>" +
          '<div class="pub-meta"><span class="venue">' + p.venue + "</span>" + badges(p) + "</div>";
        pubList.appendChild(li);
      });
    observeReveals();
  }

  document.getElementById("filters").addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;
    this.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    renderPubs(btn.dataset.filter);
  });

  /* ---- Theme (light by default; honor saved preference) ---- */
  const themeBtn = document.getElementById("themeBtn");
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.documentElement.classList.add("dark");
  else if (saved === "light") document.documentElement.classList.remove("dark");
  updateThemeLabel();
  themeBtn.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light");
    updateThemeLabel();
  });
  function updateThemeLabel() {
    themeBtn.textContent = document.documentElement.classList.contains("dark") ? "Light" : "Dark";
  }

  renderPubs("all");
  observeReveals();
})();
