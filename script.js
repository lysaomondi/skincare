 document.getElementById("loginBtn").addEventListener("click", function() {
    window.location.href = "login.html";
  });
  document.getElementById("signupBtn").addEventListener("click", function() {
    window.location.href = "sign.html";
  }

 const loginBtn = document.querySelector("button:first-child");
    loginBtn.addEventListener("click", () => {
      console.log("Login clicked");
      alert("Login button clicked!");
    });