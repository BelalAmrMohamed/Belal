function toggleTheme() {
  const body = document.body;
  const toggleButton = document.getElementById("toggleThemeButton");
  const themeLogo = document.getElementById("themeLogo");
  const defaultLogo = document.getElementById("defaultLogo");

  body.classList.toggle("light-theme");
  toggleButton.textContent = body.classList.contains("light-theme")
    ? "☀️"
    : "🌙";

  if (body.classList.contains("light-theme")) {
    defaultLogo.classList.add("hidden");
    themeLogo.classList.remove("hidden");
  } else {
    themeLogo.classList.add("hidden");
    defaultLogo.classList.remove("hidden");
  }
}

function toggleLinks(id) {
  const allLinks = document.querySelectorAll(".links");
  const currentSection = document.getElementById(id);
  const currentButton = document.querySelector(
    `button[aria-controls="${id}-links"]`
  );

  allLinks.forEach((section) => {
    if (section.id !== id) {
      section.style.display = "none";
      section.previousElementSibling.setAttribute("aria-expanded", "false");
    }
  });

  const isCurrentVisible = currentSection.style.display === "block";
  currentSection.style.display = isCurrentVisible ? "none" : "block";
  currentButton.setAttribute("aria-expanded", (!isCurrentVisible).toString());
}

// Keyboard accessibility for links
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      button.click();
    }
  });
});
