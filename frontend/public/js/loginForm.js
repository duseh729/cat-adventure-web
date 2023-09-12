const signupForm = document.getElementById("signup-form");

const login = document.getElementById("login");
const signup = document.getElementById("signup");
const logout = document.getElementById("logout");

const name = window.localStorage.getItem("name");

const h1 = document.createElement("h1");

// 로그인 클릭 처리
login.addEventListener("click", e => {
  e.preventDefault();
  signupForm.classList.remove("display-none");
});

// 회원가입 클릭 처리
signup.addEventListener("click", e => {
  e.preventDefault();
  signupForm.classList.remove("display-none");
});

// 로그인, 회원가입 폼 클릭 처리
signupForm.addEventListener("click", e => {
  if (e.target == signupForm) {
    signupForm.classList.add("display-none");
  }
});

// 유저 정보 있을 시 처리
if (name) {
  login.style.display = "none";
  signup.style.display = "none";
  logout.style.display = "block";

  h1.textContent = `${name}아 반갑다`;
  nickname.appendChild(h1);
  // 없을 시 처리
} else {
  login.style.display = "inline";
  signup.style.display = "inline";
  logout.style.display = "none";
}

// 로그아웃 처리
logout.addEventListener("click", () => {
  window.localStorage.removeItem("name");
  window.location.href = "/";
});
