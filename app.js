// i 태그를 toggle 변수에 저장
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
if (localStorage.getItem("active") === "true") {
  document.querySelector("nav").classList.add("active");
  document.body.style.visibility = "visible";
} else {
  document.body.style.visibility = "visible";
}

// window 객체에 load 이벤트에 대한 이벤트 리스너 등록
// 페이지 로딩시에는 active 클래스 존재 여부와 별개로 트렌지션 효과가 일어나지 않도록 구현
window.addEventListener("load", function () {
  document.body.classList.remove("preload");
});
