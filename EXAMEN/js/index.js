const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    scrollTopBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
  };

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});