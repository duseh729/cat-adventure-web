const firstH1 = document.querySelector(".first-main-contents h1");
const firstP = document.querySelector(".first-main-contents p");

const secondH1 = document.querySelector(".second-main-contents h1");
const secondP = document.querySelector(".second-main-contents p");

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  if (scrollTop > 500) {
    firstH1.classList.add("hide");
    firstP.classList.add("hide");
  } else {
    firstH1.classList.remove("hide");
    firstP.classList.remove("hide");
  }
  if (scrollTop < 50 || scrollTop > 1100) {
    secondH1.classList.add("hide");
    secondP.classList.add("hide");
  } else {
    secondH1.classList.remove("hide");
    secondP.classList.remove("hide");
  }
});
