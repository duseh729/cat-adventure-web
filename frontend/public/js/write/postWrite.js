const titleInput = document.getElementById("title-input");
const contentsInput = document.getElementById("contents-input");
const writeButton = document.getElementById("write-button");

let titleValue = "";
let contentsValue = "";

const titleInputHandler = e => {
  titleValue = e.target.value;
};

const contentsInputHandler = e => {
  contentsValue = e.target.value;
};

titleInput.addEventListener("change", titleInputHandler);
contentsInput.addEventListener("change", contentsInputHandler);
writeButton.addEventListener("click", e => {
  e.preventDefault();

  fetch("/write", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `titleValue=${titleValue}&contentsValue=${contentsValue}`,
  })
    // .then(response => response.json())
    // .then(data => {})
    .catch(error => {
      console.error("Error:", error);
    });
});
