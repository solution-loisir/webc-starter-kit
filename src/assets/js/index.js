if(document.querySelector('[data-id="top-button"]')) {
  const toTopButton = document.querySelector('[data-id="top-button"]');
  const visibilityThreshold = document.body.scrollHeight * 0.3;
  window.addEventListener("scroll", () => {
    if(document.body.scrollTop > visibilityThreshold || document.documentElement.scrollTop > visibilityThreshold) {
      toTopButton.classList.remove("opacity-decrease");
      toTopButton.classList.add("opacity-increase");
    } else {
      toTopButton.classList.remove("opacity-increase");
      toTopButton.classList.add("opacity-decrease");
    }
  });
}