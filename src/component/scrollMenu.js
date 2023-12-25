/**
 * 페이지 스크롤에 따른 우측 sticky 엘리먼트의 메뉴 애니메이션 스크립트
 */

let currentScrollTop;
const sections = document.querySelectorAll(".section__blog");
const sectionTopOffsets = [];
const sectionBottomOffsets = [];

const updateValues = () => {
  currentScrollTop = getCurrentScrollTop();

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    sectionTopOffsets[index] = rect.top + currentScrollTop;
    sectionBottomOffsets[index] =
      sectionTopOffsets[index] + section.offsetHeight;
  });
};

const getCurrentScrollTop = () => {
  return window.scrollY || (window.scrollY === 0 ? 0 : window.pageYOffset);
};

const isInViewport = (index) => {
  return (
    currentScrollTop >= sectionTopOffsets[index] &&
    sectionBottomOffsets[index] > currentScrollTop
  );
};

const listActive = (index) => {
  const listItems = document.querySelectorAll(".list-item__blog-menu");
  listItems.forEach((item) => item.classList.remove("active"));
  listItems[index].classList.add("active");
};

const addTitleToMenu = () => {
  const contentTitleArray = document.querySelectorAll(".text__dummy-title");
  const menuLink = document.querySelectorAll(".text__navigation-title");

  Array.from(contentTitleArray).forEach((item, index) => {
    const sourceText = item.textContent;
    menuLink[index].textContent = sourceText;
  });
};

const sectionActive = (index) => {
  listActive(index);
  addTitleToMenu();
};

const checkInSection = () => {
  for (let index = 0; index < sections.length; index++) {
    if (isInViewport(index)) {
      sectionActive(index);
      break;
    }
  }
};

const handleScroll = () => {
  currentScrollTop = getCurrentScrollTop();
  checkInSection();
};

const handleResize = () => {
  updateValues();
  checkInSection();
};

const calculateScrollValues = (moveY, scrollSpeed, scrollDirection) => {
  scrollSpeed += 3 * scrollDirection;

  let scrollY;
  if (scrollDirection > 0) {
    scrollY = Math.max(moveY, window.scrollY + scrollSpeed);
  } else {
    scrollY = Math.min(moveY, window.scrollY + scrollSpeed);
  }

  return {scrollSpeed, scrollY};
};

const scrollStep = (moveY, scrollSpeed, scrollDirection, loop) => {
  const {scrollSpeed: newScrollSpeed, scrollY} = calculateScrollValues(
    moveY,
    scrollSpeed,
    scrollDirection,
  );
  window.scrollTo({
    top: scrollY,
    behavior: "smooth",
  });

  if (
    (scrollY >= moveY && scrollDirection > 0) ||
    (scrollY <= moveY && scrollDirection < 0)
  ) {
    clearInterval(loop);
  }

  return newScrollSpeed;
};

const scrollMove = (moveY) => {
  let scrollSpeed = 0;

  const loop = setInterval(() => {
    const scrollDirection = moveY > window.scrollY ? 1 : -1;
    scrollSpeed = scrollStep(moveY, scrollSpeed, scrollDirection, loop);

    if (
      (window.scrollY >= moveY && scrollDirection > 0) ||
      (window.scrollY <= moveY && scrollDirection < 0)
    ) {
      clearInterval(loop);
    }
  }, 10);
};

document.querySelectorAll(".nav_list li a").forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const section = document.querySelector(anchor.hash);
    if (section) {
      const offTop = section.getBoundingClientRect().top + window.scrollY;
      scrollMove(offTop);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  updateValues();
  checkInSection();
});

window.addEventListener("scroll", handleScroll, false);
window.addEventListener("resize", handleResize, false);
