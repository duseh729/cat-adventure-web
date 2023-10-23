let query = window.location.search;
let param = new URLSearchParams(query);
let postId = param.get("postId");
console.log(postId);
fetch(`board/${postId}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
