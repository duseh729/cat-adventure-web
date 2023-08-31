const firstH1 = document.querySelector(".first-main-contents h1");
const firstP = document.querySelector(".first-main-contents p");

window.addEventListener("scroll", () => {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 500) {
    firstH1.classList.add("hide");
    firstP.classList.add("hide");
  } else {
    firstH1.classList.remove("hide");
    firstP.classList.remove("hide");
  }
});
