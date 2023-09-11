const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

const nickname = document.getElementById("nickname");
const login = document.getElementById("login");
const signup = document.getElementById("signup");
const logout = document.getElementById("logout");

const logoutBtn = document.getElementById("logout");

const h1 = document.createElement("h1");

const name = window.localStorage.getItem("name");

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

//
login.addEventListener("click", e => {
  e.preventDefault();
  signupForm.classList.remove("display-none");
});
signup.addEventListener("click", e => {
  e.preventDefault();
  signupForm.classList.remove("display-none");
});

signupForm.addEventListener("click", e => {
  if (e.target == signupForm) {
    signupForm.classList.add("display-none");
  }
});

// 로그인 인풋값 서버 전송.
loginForm.addEventListener("submit", e => {
  e.preventDefault();

  const userId = loginForm.userId.value;
  const userPw = loginForm.userPw.value;

  if (userId && userPw) {
    // HTML form을 통해 POST 요청을 보냄
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `userId=${userId}&userPw=${userPw}`,
    })
      .then(response => response.json())
      .then(data => {
        window.localStorage.setItem("name", data.userId);
        const name = window.localStorage.getItem("name");
        window.location.href = "/";
      })
      .catch(error => {
        console.error("Error:", error);
      });
  } else {
    alert("아이디와 비밀번호를 입력하세요.");
  }
});
