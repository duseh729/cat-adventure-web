const postTitle = document.getElementById("post-title");
const postUserId = document.getElementById("post-user-id");
const postDate = document.getElementById("post-date");

const postContents = document.getElementById("post-contents");

let query = window.location.search;
let param = new URLSearchParams(query);
let postId = param.get("postId");

fetch(`board/${postId}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    postTitle.innerHTML = data.title;
    if (data.userId !== "null") {
      postUserId.innerHTML = data.userId;
    } else {
      postUserId.innerHTML = "익명";
    }
    postDate.innerHTML = data.date;
    postContents.innerHTML = data.contents;
  });
