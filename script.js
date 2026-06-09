const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const topBtn = document.getElementById("topBtn");
const revealElements = document.querySelectorAll(".reveal");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

  revealElements.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
});

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.dispatchEvent(new Event("scroll"));
const themeBtn = document.getElementById("themeBtn");

const themes = ["default", "pacific-theme", "avatar-theme", "steel-theme"];
let currentTheme = 0;

themeBtn.addEventListener("click", function () {
  document.body.classList.remove("pacific-theme", "avatar-theme", "steel-theme");

  currentTheme++;

  if (currentTheme >= themes.length) {
    currentTheme = 0;
  }

  if (themes[currentTheme] !== "default") {
    document.body.classList.add(themes[currentTheme]);
  }

  if (themes[currentTheme] === "default") {
    themeBtn.textContent = "🎨";
  } else if (themes[currentTheme] === "pacific-theme") {
    themeBtn.textContent = "🤖";
  } else if (themes[currentTheme] === "avatar-theme") {
    themeBtn.textContent = "🌿";
  } else if (themes[currentTheme] === "steel-theme") {
    themeBtn.textContent = "⚙️";
  }
});