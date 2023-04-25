if(document.querySelector('[data-id="top-button"]')) {
  const toTopButton = document.querySelector('[data-id="top-button"]');
  const visibilityThreshold = Math.floor(document.body.scrollHeight * 0.3);
  
  window.addEventListener("scroll", () => {
    if(document.body.scrollTop > visibilityThreshold || document.documentElement.scrollTop > visibilityThreshold) {
      toTopButton.classList.remove("opacity-decrease");
      toTopButton.classList.add("opacity-increase");
    } else if(toTopButton.classList.contains("opacity-increase")) {
      toTopButton.classList.remove("opacity-increase");
      toTopButton.classList.add("opacity-decrease");
    }
  });
}