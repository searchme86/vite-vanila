/**
 * 상품상세 페이지(product.html)에서,
 * 유튜브 영상 실행 스크립트
 */

const loadVideo = () => {
  (() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    tag.onload = setupPlayer;
  })();

  let player = null;

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    const videoStatuses = Object.entries(window.YT.PlayerState);
    console.log(videoStatuses.find((status) => status[1] === event.data)[0]);
  };

  function setupPlayer() {
    window.YT.ready(function () {
      player = new window.YT.Player("player", {
        videoId: "68zq7vpTNTM",
        playerVars: {
          autoplay: false,
          loop: false,
          playlist: "68zq7vpTNTM",
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  loadVideo();
});
