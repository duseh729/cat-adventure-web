const nickname = document.getElementById("nickname");
const login = document.getElementById("login");
const signup = document.getElementById("signup");
const logout = document.getElementById("logout");

const h1 = document.createElement("h1");

const name = window.localStorage.getItem("name");

if (name) {
  login.style.display = "none";
  signup.style.display = "none";
  logout.style.display = "block";

  h1.textContent = `${name}아 반갑다`;
  nickname.appendChild(h1);
} else {
  login.style.display = "inline";
  signup.style.display = "inline";
  logout.style.display = "none";
}

logout.addEventListener("click", () => {
  window.localStorage.removeItem("name");
  window.location.href = "/";
});
