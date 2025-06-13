// Theme toggle functionality
function toggleTheme() {
  const body = document.body;
  const toggleButton = document.getElementById("toggleThemeButton");
  const themeLogo = document.getElementById("themeLogo");
  const defaultLogo = document.getElementById("defaultLogo");

  body.classList.toggle("light-theme");
  const isLightTheme = body.classList.contains("light-theme");

  // Save theme preference to localStorage
  localStorage.setItem("theme", isLightTheme ? "light" : "dark");

  // Update button icon
  toggleButton.textContent = isLightTheme ? "☀️" : "🌙";
  toggleButton.setAttribute(
    "aria-label",
    isLightTheme ? "Switch to dark mode" : "Switch to light mode"
  );

  // Toggle logos
  if (isLightTheme) {
    defaultLogo.classList.add("hidden");
    themeLogo.classList.remove("hidden");
  } else {
    themeLogo.classList.add("hidden");
    defaultLogo.classList.remove("hidden");
  }
}

// Check for saved theme preference on load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const body = document.body;
  const toggleButton = document.getElementById("toggleThemeButton");

  if (savedTheme === "light") {
    body.classList.add("light-theme");
    toggleButton.textContent = "☀️";
    document.getElementById("defaultLogo").classList.add("hidden");
    document.getElementById("themeLogo").classList.remove("hidden");
  } else {
    toggleButton.textContent = "🌙";
  }

  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Initialize theme button
  toggleButton.addEventListener("click", toggleTheme);

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: "smooth",
        });

        // Update URL without page jump
        history.pushState(null, null, targetId);
      }
    });
  });
});

// Keyboard accessibility for interactive elements
document.querySelectorAll("button, a[href]").forEach((element) => {
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      element.click();
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

document.querySelectorAll(".section, .card").forEach((section) => {
  observer.observe(section);
});
