const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

// Toggle menu
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();       // prevent closing immediately
  nav.classList.toggle("show");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (nav.classList.contains("show")) {
    const clickedInsideMenu = nav.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);
    if (!clickedInsideMenu && !clickedHamburger) {
      nav.classList.remove("show");
    }
  }
});



