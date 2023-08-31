const navbar = document.getElementById("navbar");
const fixedHeader = document.getElementById("fixed-header");
const contentsPostion = document.getElementById("contents-position");

const navbarWidth = navbar.clientWidth;

fixedHeader.style.left = `${navbarWidth}px`;

// 헤더 부분에 의한 콘텐츠 영역 지정
contentsPostion.style.paddingLeft = `${navbarWidth}px`;
contentsPostion.style.paddingTop = `${fixedHeader.clientHeight}px`;
