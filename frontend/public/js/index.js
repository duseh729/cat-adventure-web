const nickname = document.getElementById("nickname");

const h1 = document.createElement("h1");

const name = window.localStorage.getItem("name");
if (name) {
  h1.textContent = `${name}아 반갑다`;
  nickname.appendChild(h1);
}
