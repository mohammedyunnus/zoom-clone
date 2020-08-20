const myVideo = document.createElement("video");
console.log(myVideo);
myVideo.muted = true;
const videoGrid = document.getElementById("videoGrid");
let myVideoStream;

navigator.mediaDevices
  .getUserMedia({
    Video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
  });

const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
};
