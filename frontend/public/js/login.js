const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", e => {
  e.preventDefault();
  if (loginForm.userId.value && loginForm.userPw.value) {
    loginForm.submit();
  } else {
    alert("아이디랑 비번 입력하셈");
  }
  return;
});
