let toggle = document.querySelector("i");
toggle.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("active");
  if (document.querySelector("nav").classList.contains("active") === true) {
    localStorage.setItem("active", "true");
  } else {
    localStorage.setItem("active", "false");
  }
});

if (localStorage.getItem("active") === "true") {
  document.querySelector("nav").classList.add("active");
  document.body.style.visibility = "visible";
} else {
  document.body.style.visibility = "visible";
}

window.addEventListener("load", function () {
  document.body.classList.remove("preload");
});
