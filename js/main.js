function navigateLink(url) {
  window.open(url);
}

Array.prototype.slice
  .call(document.querySelectorAll(".navbar-burger"), 0)
  .forEach((b) => {
    b.addEventListener("click", () => {
      let target = document.getElementById(b.dataset.target);
      b.classList.toggle("is-active");
      target.classList.toggle("is-active");
    });
  });
