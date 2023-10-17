fetch("/board-data", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then(response => response.json())
  .then(data => {
    const boardContainer = document.getElementById("board-container");
    for (i of data) {
      const writeBox = document.createElement("div");
      writeBox.classList.add("board-write-wrapper");

      const writeId = document.createElement("span");
      writeId.innerHTML = i.id;
      writeId.classList.add("board-write", "write-num");
      const writeTitle = document.createElement("span");
      writeTitle.innerHTML = i.title;
      writeTitle.classList.add("board-write", "write-title");
      const writeWriter = document.createElement("span");
      writeWriter.innerHTML = i.userId;
      writeWriter.classList.add("board-write", "write-writer");
      const writeDate = document.createElement("span");
      writeDate.innerHTML = `2023-10-19`;
      writeDate.classList.add("board-write", "write-date");

      writeBox.appendChild(writeId);
      writeBox.appendChild(writeTitle);
      writeBox.appendChild(writeWriter);
      writeBox.appendChild(writeDate);
      boardContainer.appendChild(writeBox);
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
