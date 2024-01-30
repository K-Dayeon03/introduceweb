// 네비게이션 바 토글
const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

// 스크롤 시 텍스트 애니메이션
const contentsText = document.querySelector("h1");

window.addEventListener("scroll", function () {
  let scrollYValue = window.scrollY;
  console.log("scrollY", scrollYValue);

  if (scrollYValue > 300) {
    // 300px를 넘어서 스크롤할 때 사라지는 애니메이션 적용
    contentsText.style.animation = "disappearslide 1s ease-out forwards";
    // 'forwards' 속성은 애니메이션의 최종 상태를 유지합니다.
  } else {
    // 300px 미만으로 스크롤할 때 슬라이드 애니메이션 적용
    contentsText.style.animation = "txtslide 1s ease-out";
  }
});
