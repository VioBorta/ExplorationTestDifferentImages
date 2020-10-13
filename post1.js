const post1 = document.getElementById("post1");
const post1Img = document.getElementById("post1Img");
const loginId = document.getElementById("loginId");
const userID = document.getElementById("userID");
const logout = document.getElementById("logout");

window.addEventListener("load", (e) => {
  var cookie = document.cookie;

  if (cookie) {
    post1Img.style.display = "block";
    avatarID.style.display = "block";
    loginId.style.display = "none";
    userID.style.display = "block";
    loginId.style.opacity = 0;
    logout.style.display = "block";
  } else {
    logout.style.opacity = 0;
    userID.style.opacity = 0;
    post1Img.style.display = "none";
    post1Img.style.opacity = 0;
    avatarID.style.display = "none";
    loginId.style.display = "block";
    userID.style.display = "none";
    logout.style.display = "none";
  }
});

logout.addEventListener("click", (e) => {
  e.preventDefault();
  var cookieJs = document.cookie;
  window.location.reload();
  document.cookie = cookieJs + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
});
