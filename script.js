window.addEventListener("scroll", function () {
  const welcomeText = document.getElementById("welcomeText");
  const reelSection = document.querySelector(".fullscreen-reel-section");
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    welcomeText.style.opacity = 0;
    reelSection.classList.add("visible");
  } else {
    welcomeText.style.opacity = 1;
    reelSection.classList.remove("visible");
  }
});
