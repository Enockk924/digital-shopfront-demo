const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

if (menuButton && navigation) {
  const closeMenu = (returnFocus = false) => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
    if (returnFocus) menuButton.focus();
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu(true);
    }
  });

  document.addEventListener("click", (event) => {
    if (
      menuButton.getAttribute("aria-expanded") === "true" &&
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
