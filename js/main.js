const burger = document.querySelector("[data-burger]");
const nav = document.querySelector("[data-nav]");
const navLinks = nav.querySelectorAll("a");

function closeMenu() {
  burger.classList.remove("burger--active");
  nav.classList.remove("nav--visible");
}

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("nav--visible");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
      closeMenu();
    }
  });
});
