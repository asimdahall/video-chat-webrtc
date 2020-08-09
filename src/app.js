function hasUserMedia() {
  return !!navigator.getUserMedia;
}

(function init() {
  if (hasUserMedia()) {
    let video;
    const capture = document.getElementById("capture");
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    navigator.getUserMedia(
      {
        audio: false,
        video: true,
      },
      (stream) => {
        video = document.querySelector("video");
        video.srcObject = stream;
      },
      (err) => {
        alert("error!", err);
      }
    );

    capture.onclick = function () {
      canvas.width = video.width;
      canvas.height = video.height;
      context.drawImage(video, 0, 0, video.width, video.height);
    };
  }
})();
