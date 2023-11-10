const userId = window.localStorage.getItem("nickname");

fetch("/achievements-data", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `userId=${userId}`,
}).then(result => {
  console.log(result);
});
