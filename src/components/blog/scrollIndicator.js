/**
 * 페이지 상단, 스크롤에 따른 가로줄 생성 스크립트
 */

const scrollBarElement = document.getElementById("scroll-bar");

const updateScrollBarStyle = (percentage) => {
  scrollBarElement.style.transform = `translateX(-${100 - percentage}%)`;
  scrollBarElement.style.transition = "transform 0.3s ease-out";
};

const updateScrollBar = () => {
  if (!scrollBarElement) return;

  const {scrollTop, scrollHeight, clientHeight} =
    document.documentElement || document.body;

  const contentHeight = scrollHeight - clientHeight;
  const scrollPercentage =
    contentHeight > 0 ? (scrollTop / contentHeight) * 100 : 0;

  updateScrollBarStyle(scrollPercentage);
};

const handleScroll = () => {
  updateScrollBar();
};

const handleResize = () => {
  updateScrollBar();
};

window.addEventListener("scroll", handleScroll);

window.addEventListener("resize", handleResize);
