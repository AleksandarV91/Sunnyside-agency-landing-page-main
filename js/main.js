const btn = document.querySelector(".btn");
const mobileLinks = document.querySelector(".nav-links");

btn.addEventListener("click", function () {
  if (mobileLinks.classList.contains("show-links")) {
    mobileLinks.classList.remove("show-links");
  } else {
    mobileLinks.classList.add("show-links");
  }
});
