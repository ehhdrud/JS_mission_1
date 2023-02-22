// i 태그를 toggle 변수에 할당
let toggle = document.querySelector("i");
// toggle 변수에 click 이벤트에 대한 이벤트 리스너 등록
toggle.addEventListener("click", function () {
  // nav 태그의 활성화 여부를 classList와 localStorage에 추가,삭제하는 이벤트 핸들러 등록
  document.querySelector("nav").classList.toggle("active");
  if (document.querySelector("nav").classList.contains("active") === true) {
    localStorage.setItem("active", "true");
  } else {
    localStorage.setItem("active", "false");
  }
});

// nav 태그의 활성화 여부를 저장한 localStorage에 따른 상태 정의
// "visibility: hidden"에 대응하기 위한 "visibility: visible" 추가
// ("visibility: hidden": 페이지 로드 시 요소들의 움직임을 없애기 위한 CSS 코드)
if (localStorage.getItem("active") === "true") {
  document.querySelector("nav").classList.add("active");
  document.body.style.visibility = "visible";
} else {
  document.body.style.visibility = "visible";
}

// window 객체에 load 이벤트에 대한 이벤트 리스너 등록
// 페이지 로드를 마치면 "preload" 클래스를 제거
// ("preload": 로드 시 트렌지션 효과가 일어나지 않도록 하기 위한 <body>의 클래스)
// 즉 첫 페이지 로드 이후부터 트렌지션이 적용됨
window.addEventListener("load", function () {
  document.body.classList.remove("preload");
});
