const header = document.querySelector("header");
const aside = document.querySelector("aside");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

const sr = ScrollReveal({
  distance: "40px",
  duration: 2050,
  delay: 200,
  reset: false,
});
sr.reveal(".bottom", { origin: "top" });
sr.reveal(".top", { origin: "top" });
sr.reveal(".left", { origin: "top" });
sr.reveal(".right", { origin: "top" });

const mobileBtn = document.getElementsByClassName("mobileBtn")[0];
const mobile = document.getElementsByClassName("mobile")[0];
mobileBtn.addEventListener("click", () => {
  mobile.classList.toggle("hadir");
});
aside.addEventListener("click", () => {
  aside.classList.toggle("hadir2");
});
